# DBD Perk Roulette

A randomizer for Dead by Daylight loadouts. It runs as a static page: open `index.html` in a browser, no build step or server needed.

- **Survivor:** rolls 4 perks.
- **Killer:** rolls 4 perks, a killer and 2 of that killer's add-ons. Killer and add-on rolls can each be turned off. With killer rolling off, you pick your killer yourself.
- Perks you don't own can be excluded per role (saved in your browser).
- Descriptions show tier III values.

## Updating after a game patch

```
python update.py
```

The script fetches perk, killer and add-on data from [dbd.tricky.lol](https://dbd.tricky.lol), regenerates `data.js`, and downloads only the icons missing from `icons/` from the [Dead by Daylight Wiki](https://deadbydaylight.wiki.gg). It needs Python 3 only, no packages. The patch version shown on the page comes from the same data.

## Legal

Dead by Daylight, its icons, artwork, character portraits and game text are trademarks and property of **Behaviour Interactive Inc.** This is an unofficial, non-commercial fan project. It is not affiliated with, endorsed by or sponsored by Behaviour Interactive. All game assets in `icons/` and game text in `data.js` belong to their respective owners and are used for fan purposes only. If you are a rights holder and want something removed, open an issue.

Game data via [dbd.tricky.lol](https://dbd.tricky.lol); icons via the [Dead by Daylight Wiki](https://deadbydaylight.wiki.gg).
