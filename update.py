"""Refreshes data.js and icons/ from dbd.tricky.lol (game data) and deadbydaylight.wiki.gg (icons).

Run after a game patch:  python update.py
Only icons that are not in icons/ yet get downloaded.
"""
import json, re, os, time, difflib, unicodedata, urllib.error, urllib.request, urllib.parse
from concurrent.futures import ThreadPoolExecutor

out = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36"}
INPUT = {"ActivatableButton1": "Active Ability 1 button", "ActivatableButton2": "Active Ability 2 button", "UseItem": "Use Item button"}
TRICKY = "https://dbd.tricky.lol/api/"
API = "https://deadbydaylight.wiki.gg/api.php?format=json&action=query&"
ICONS = os.path.join(out, "icons")
norm = lambda s: re.sub(r"[^a-z0-9]", "", s.lower().replace("&", "and"))

def get(url):
    for wait in (5, 15, 30, 60, 0):
        try:
            return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=300).read()
        except (urllib.error.URLError, TimeoutError) as e:
            if getattr(e, "code", 429) != 429 or not wait: raise
            time.sleep(wait)  # wiki rate limit / slow tricky.lol

def tricky(path):
    for _ in range(5):  # tricky.lol sometimes cuts big responses short
        try:
            return json.loads(get(TRICKY + path))
        except json.JSONDecodeError:
            time.sleep(5)
    raise SystemExit("tricky.lol keeps returning broken JSON for " + path)

def fmt(v):
    return str(int(v)) if float(v).is_integer() else str(v)

def render(p):
    tun = {k.lower(): v for k, v in p["tunables"].items()}
    def sub(m):
        kind, _, key = m.group(1).partition(".")
        if kind == "Tunable":
            vals = tun.get(key.split(".", 1)[1].lower())
            if not vals:
                print("MISSING TUNABLE", p["name"], key); return "?"
            return "<span class=t>" + fmt(vals[-1]) + "</span>"  # tier III
        if kind == "Keyword":
            return "<span class=k>" + re.sub(r"(?<=[a-z])(?=[A-Z])", " ", key) + "</span>"
        return "the <b>" + INPUT.get(key, key) + "</b>"
    return re.sub(r"\{(\w+\.[^}]+)\}", sub, p["description"])

def wiki_files(prefix):
    files, cont = {}, ""
    while True:
        r = json.loads(get(API + "list=allimages&ailimit=500&aiprefix=" + prefix + cont))
        for im in r["query"]["allimages"]:
            files[im["name"]] = im["url"]
        if "continue" not in r: return files
        cont = "&aicontinue=" + urllib.parse.quote(r["continue"]["aicontinue"])

def page_images(titles):
    """{requested title: (final title, [file titles on that page])}, following redirects (wiki uses British spelling)."""
    res = {}
    for t0 in titles:
        cont, t, files = "", t0, []
        while True:
            r = json.loads(get(API + "prop=images&imlimit=max&redirects=1&titles=" + urllib.parse.quote(t0) + cont))
            for pg in r["query"]["pages"].values():
                t = pg["title"]
                files += [im["title"] for im in pg.get("images", [])]
            if "continue" not in r: break
            cont = "&imcontinue=" + urllib.parse.quote(r["continue"]["imcontinue"])
        res[t0] = (t, files)
    return res

def file_urls(titles):
    urls, titles = {}, list(set(titles))
    for i in range(0, len(titles), 50):
        r = json.loads(get(API + "prop=imageinfo&iiprop=url&titles=" + urllib.parse.quote("|".join(titles[i:i + 50]))))["query"]
        norm_t = {x["to"]: x["from"] for x in r.get("normalized", [])}
        for pg in r["pages"].values():
            if "imageinfo" in pg:
                urls[norm_t.get(pg["title"], pg["title"])] = pg["imageinfo"][0]["url"]
    return urls

def match(items, files, strip):
    # match by display name first, not asset name: game asset names drift (two Teamwork icons are swapped in the dump)
    idx = {norm(re.sub(strip, "", k[:-4], flags=re.I)): u for k, u in files.items()}
    for x in items:
        keys = [norm(x["n"]), norm(x["n"].split(":")[-1]), norm(re.sub(strip, "", x["asset"], flags=re.I))]
        x["url"] = next((idx[k] for k in keys if k in idx), x.get("url"))
    return [x for x in items if not x["url"]]

def patch_tunables(perks, key, **values):
    # ponytail: hand-filled values the API dump is missing; only applied while they are still missing
    if key in perks:
        tun = perks[key]["tunables"]
        for k, v in values.items():
            if k.lower() not in {t.lower() for t in tun}: tun[k] = v

# --- perks
def perks(d):
    return sorted(({"n": p["name"], "d": render(p), "asset": p["image"].rsplit("/", 1)[1]} for p in d.values()),
                  key=lambda p: p["n"].lower())

patch = tricky("versions")["perks"]["version"]
surv_raw, kill_raw = tricky("perks?role=survivor"), tricky("perks?role=killer")
patch_tunables(surv_raw, "BoilOver", RequiredFallHeight=[1.25])  # in-game text
patch_tunables(surv_raw, "WindowsOfOpportunity", VaultSpeed=[10])  # 10.2.0 patch notes
patch_tunables(kill_raw, "Sloppy_Butcher", Duration=[90], **{"HemmorhageBoost%": [25]})  # wiki
surv, kill = perks(surv_raw), perks(kill_raw)
todo = match(surv + kill, wiki_files("IconPerks"), r"^.*?icons?Perks_")
# newer perks use other file prefixes: take the icon from the perk's own page
pages = page_images([p["n"] for p in todo])
for p in todo:
    title, files = pages[p["n"]]
    p["file"] = next((f for f in files if "perks" in f.lower() and norm(title.split(":")[-1]) in norm(f)), None)
urls = file_urls([p["file"] for p in todo if p["file"]])
for p in todo:
    p["url"] = urls.get(p["file"])

# --- killers + add-ons
addons_raw = tricky("addons?role=killer")
killers = []
for c in tricky("characters?role=killer").values():
    adds = [{"n": a["name"].strip(), "r": a["rarity"], "asset": a["image"].rsplit("/", 1)[1],
             # game text is "flavour<br><br>effect": keep the effect only; game also joins sentences without a space
             "d": re.sub(r"\.(?=<b>|[A-Z])", ". ", a["description"].split("<br><br>", 1)[-1])}
            for a in addons_raw.values() if a["bloodweb"] and c["item"] in (a["parents"] or [])]
    killers.append({"n": c["name"], "asset": c["image"].rsplit("/", 1)[1], "a": adds})
# portraits: wiki numbering differs from the game's (K05 vs K06), so key on the name part only
strip_port = lambda f: norm(re.sub(r"^(T_UI_)?K\d+_|_Portrait(\.png)?$", "", f))
ports = {strip_port(k): u for pre in ("K", "T_UI_K") for k, u in wiki_files(pre).items() if k.endswith("_Portrait.png")}
for k in killers:
    k["url"] = ports.get(norm(k["n"])) or ports.get(strip_port(k["asset"]))
# add-ons: match within the killer's own wiki page (names repeat across killers, e.g. Jump Rope), fuzzy for British spelling
pages = page_images([k["n"] for k in killers])
want = []
for k in killers:
    files = {norm(re.sub(r"^File:.*?addons?[ _]", "", f, flags=re.I)[:-4]): f for f in pages[k["n"]][1]
             if re.match(r"File:.*?iconAddon", f, re.I)}
    for a in k["a"]:
        key = difflib.get_close_matches(norm(a["n"]), list(files), 1, 0.75) or difflib.get_close_matches(norm(re.sub(r"^.*?addons?_", "", a["asset"], flags=re.I)), list(files), 1, 0.75)
        key = key or [f for f in files if f.startswith(norm(a["n"]))]  # wiki suffixes duplicates with the power name
        a["file"] = files[key[0]] if key else None
        want.append(a["file"])
urls = file_urls([f for f in want if f])
all_adds = [a for k in killers for a in k["a"]]
for a in all_adds:
    a["url"] = urls.get(a["file"])

# --- download
os.makedirs(ICONS, exist_ok=True)
everything = surv + kill + killers + all_adds
missing = [x["n"] for x in everything if not x["url"]]
def dl(x):
    # wiki file names are unique per icon (game asset names are not: two different jumpRope add-ons)
    name = urllib.parse.unquote(x["url"].split("?")[0].rsplit("/", 1)[1]) if x["url"] else ""
    # ASCII-only file names (coupDeGrâce): safe for git and static hosts
    x["i"] = "icons/" + unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode() if name else ""
    path = os.path.join(out, x["i"])
    if x["url"] and not os.path.exists(path):
        open(path, "wb").write(get(x["url"]))
with ThreadPoolExecutor(8) as ex:
    list(ex.map(dl, everything))

pick = lambda x, *k: {key: x[key] for key in k}
data = {
    "PATCH": patch,
    "SURV": [pick(p, "n", "d", "i") for p in surv],
    "KILL": [pick(p, "n", "d", "i") for p in kill],
    "KILLERS": [{"n": k["n"], "i": k["i"], "a": [pick(a, "n", "d", "r", "i") for a in k["a"]]} for k in killers],
}
js = "".join(f"const {k} = {json.dumps(v, ensure_ascii=False, indent=0)};\n" for k, v in data.items())
open(os.path.join(out, "data.js"), "w", encoding="utf8").write(js)
print("patch", patch, "|", len(surv), "surv perks,", len(kill), "killer perks,", len(killers), "killers,", len(all_adds), "add-ons; missing icons:", missing)
