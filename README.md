# DBD Perk Roulette

**▶ [mareklackowski.github.io/dbd_randomizer](https://mareklackowski.github.io/dbd_randomizer/)**

A Dead by Daylight loadout randomizer.

- **Survivor:** rolls 4 perks.
- **Killer:** rolls 4 perks, a killer and 2 of that killer's add-ons. Killer and add-on rolls can each be turned off. With killer rolling off, you pick the killer yourself.
- **Perk Pool:** exclude perks you don't own, separately for each role. Your choice is saved in the browser.
- Reroll any single slot. Descriptions show tier III values from the current patch.

## Running locally

It's a static page with no build step. Clone the repo and open `index.html` in a browser.

## Updating after a game patch

```
python update.py
```

Needs Python 3 and no extra packages. The script fetches perk, killer and add-on data from [dbd.tricky.lol](https://dbd.tricky.lol), regenerates `data.js`, and downloads any icons missing from `icons/` from the [Dead by Daylight Wiki](https://deadbydaylight.wiki.gg). The patch number on the page updates with the data.

Pull requests are welcome.

## License

The source code (`index.html`, `update.py`) is [MIT](LICENSE).

Dead by Daylight, its icons, artwork, character portraits and game text are trademarks and property of **Behaviour Interactive Inc.** They are not covered by the MIT license. This is an unofficial, non-commercial fan project. It is not affiliated with, endorsed by or sponsored by Behaviour Interactive. If you are a rights holder and want something removed, please open an issue.
