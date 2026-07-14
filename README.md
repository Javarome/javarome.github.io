# javarome.github.io

Personal page & résumé of Jérôme Beau — vanilla JS/CSS, built with Vite.

## Develop & build

```bash
npm install
npm run dev      # local dev server
npm run build    # outputs static site to dist/
npm run preview  # serve the production build
```

Deploy the contents of `dist/` (GitHub Pages, Netlify, …). The `CNAME`
from the previous setup can be kept at the repo root as before.

## Structure

```
index.html          Page shell (header, sections, "early" overlay), static i18n hooks
public/avatar.png   Avatar (served at site root as /avatar.png)
src/
  main.js           Entry: language detection, i18n, wiring, filter, overlay
  data.js           Résumé content (person, links, work, side projects, education, translations)
  skills.js         Skill catalogue (name, URL, category, description) + implied-skill graph
  render.js         DOM rendering of every section + skill cloud + by-skill filter
  background.js     Animated WebGL gradient background
  styles.css        All styles (incl. CSS-only scrollspy via scroll-driven animations)
```

## Notes

- **Language** is auto-detected from the browser (`navigator.language`); `?lang=fr`
  or `?lang=en` forces one.
- **Skill filter**: the search box in the header filters skills, experiences,
  side projects and education by skill name (implied skills included).
- **Skill cloud**: in the Skills section, tag size reflects how many projects a
  skill was practised on (hover for the exact count).
- **Scrollspy**: the active section is highlighted in the header purely in CSS
  (`view-timeline` + `animation-timeline`); unsupported browsers simply show no
  highlight.
- **"I started earlier"** opens a retro CRT terminal overlay (the old
  `early.html`), closed by clicking anywhere or pressing Esc.

## Editing content

All résumé data lives in `src/data.js` (and skill definitions in `src/skills.js`).
Add or edit an experience/project there; the page re-renders automatically.
