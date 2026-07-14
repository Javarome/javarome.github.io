// DOM rendering for the résumé sections + the skill cloud and the by-skill
// filter. Rebuilt on language load and on every filter change.

import {CAREER_START, CATLBL, EDU, SIDE, WORK} from "./data.js"
import {CAT_ORDER, expand, SKILLS, tag} from "./skills.js"

// --- tiny DOM helper -------------------------------------------------------
function el(t, attrs = {}, ...kids) {
  const n = document.createElement(t)
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null) continue
    if (k === "class") n.className = v
    else if (k === "html") n.innerHTML = v
    else if (k === "style" && typeof v === "object") Object.assign(n.style, v)
    else n.setAttribute(k, v)
  }
  for (const kid of kids.flat()) {
    if (kid == null || kid === false) continue
    n.append(kid.nodeType ? kid : document.createTextNode(kid))
  }
  return n
}

const clear = node => {
  while (node.firstChild) node.removeChild(node.firstChild)
}

// --- date & duration formatting -------------------------------------------
function fmt([y, m], lang) {
  return new Date(y, m - 1, 1).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {year: "numeric", month: "short"})
}

function range(item, lang, present) {
  return fmt(item.s, lang) + " – " + (item.e ? fmt(item.e, lang) : present)
}

function durStr(s, e, lang) {
  const end = e || [new Date().getFullYear(), new Date().getMonth() + 1]
  let months = (end[0] - s[0]) * 12 + (end[1] - s[1])
  if (months < 1) months = 1
  const y = Math.floor(months / 12), mo = months % 12
  if (lang === "fr") return [y ? y + " an" + (y > 1 ? "s" : "") : "", mo ? mo + " mois" : ""].filter(Boolean).join(" ")
  return [y ? y + " yr" + (y > 1 ? "s" : "") : "", mo ? mo + " mo" : ""].filter(Boolean).join(" ")
}

// --- skill filtering -------------------------------------------------------
function matches(key, q) {
  const s = SKILLS[key]
  return s && s[0].toLowerCase().includes(q)
}

// The skill whose display name equals the query exactly (case-insensitive), if any.
// Such a query (typed or set by clicking a tag) switches the Skills section to focus mode.
function exactKey(q) {
  return q ? Object.keys(SKILLS).find(k => SKILLS[k][0].toLowerCase() === q) || null : null
}

// Keep an item when either an exact skill is selected (clicked tag, implied skills included)
// or a free-text query matches one of its skills.
function keep(sk, q, key) {
  if (key) return expand(sk).includes(key)
  return !q || expand(sk).some(k => matches(k, q))
}

// --- practice counts (implied skills included) -----------------------------
// Computed once; drives the font-size "cloud".
const COUNT = {}
const groupedKeys = {}
{
  const seen = new Set()
  const bump = k => {
    COUNT[k] = (COUNT[k] || 0) + 1
  }
  const push = k => {
    if (SKILLS[k] && !seen.has(k)) {
      seen.add(k)
      const c = SKILLS[k][2];
      (groupedKeys[c] = groupedKeys[c] || []).push(k)
    }
  }
  const feed = arr => arr.forEach(k => {
    bump(k)
    push(k)
  })
  WORK.forEach(g => g.projects.forEach(p => feed(expand(p.sk))))
  SIDE.forEach(s => feed(expand(s.sk)))
  EDU.forEach(e => feed(expand(e.sk)))
}
const MAX_COUNT = Math.max(1, ...Object.values(COUNT))

// --- tag element -----------------------------------------------------------
function tagEl(key, {cloud = false, lang = "en"} = {}) {
  const t = tag(key)
  // href is kept so Ctrl/Cmd/middle-click still opens the documentation; a plain click filters instead (see main.js).
  const a = el("a", {
    href: t.url,
    target: "_blank",
    rel: "noopener",
    "data-skill": key,
    class: cloud ? "tag tag-cloud" : "tag"
  }, t.name)
  a.style.background = t.bg
  if (cloud) {
    const c = COUNT[key] || 1
    a.style.fontSize = (0.78 + (c / MAX_COUNT) * 0.85).toFixed(2) + "rem"
    const label = lang === "fr" ? (c > 1 ? c + " projets" : "1 projet") : (c > 1 ? c + " projects" : "1 project")
    a.title = t.title + " · " + label
  } else {
    a.title = t.title
  }
  return a
}

function tagRow(keys, opts) {
  return el("div", {class: "tags"}, keys.map(k => tagEl(k, opts)))
}

// --- section renderers -----------------------------------------------------
function renderSkills(lang, q, key) {
  const root = document.getElementById("skill-rows")
  clear(root)
  // Focus mode: a skill was clicked — show only it, with its detailed description as the external doc link.
  if (key && SKILLS[key]) {
    const t = tag(key)
    const cat = SKILLS[key][2]
    const desc = SKILLS[key][3] || t.name
    root.append(el("div", {class: "skill-row skill-focus"},
      el("div", {class: "skill-cat"}, CATLBL[cat] ? CATLBL[cat][lang] : ""),
      el("div", {class: "skill-focus-body"},
        tagEl(key, {cloud: true, lang}),
        el("span", {class: "skill-sep"}, ":"),
        el("a", {href: t.url, target: "_blank", rel: "noopener", class: "skill-doc"}, desc)
      )
    ))
    return
  }
  CAT_ORDER.filter(c => groupedKeys[c]).forEach(c => {
    const keys = groupedKeys[c]
      .filter(k => !q || matches(k, q))
      .sort((a, b) => (COUNT[b] || 0) - (COUNT[a] || 0))
    if (!keys.length) return
    root.append(el("div", {class: "skill-row"},
      el("div", {class: "skill-cat"}, CATLBL[c][lang]),
      el("div", {class: "tags cloud"}, keys.map(k => tagEl(k, {cloud: true, lang})))
    ))
  })
}

function renderWork(lang, txt, q, key) {
  const root = document.getElementById("exp-list")
  clear(root)
  WORK
    .map(g => ({g, projects: g.projects.filter(p => keep(p.sk, q, key))}))
    .filter(x => x.projects.length)
    .forEach(({g, projects}) => {
      const head = el("div", {class: "card-head"},
        el("div", {},
          el("a", {href: g.url, target: "_blank", rel: "noopener", class: "org"}, g.org),
          el("span", {class: "role"}, lang === "fr" ? g.tFr : g.tEn)
        ),
        el("div", {class: "dates-wrap"},
          el("span", {class: "dates"}, range(g, lang, txt.present)),
          el("span", {class: "dur"}, durStr(g.s, g.e, lang))
        )
      )
      const list = el("ul", {class: "proj-list"}, projects.map(p =>
        el("li", {class: "proj"},
          el("div", {class: "proj-desc", html: lang === "fr" ? p.fr : p.en}),
          tagRow(p.sk, {lang})
        )
      ))
      root.append(el("article", {class: "card exp-card"}, head, list))
    })
}

function renderSide(lang, txt, q, key) {
  const root = document.getElementById("side-grid")
  clear(root)
  SIDE.filter(s => keep(s.sk, q, key)).forEach(s => {
    root.append(el("article", {class: "card side-card"},
      el("div", {class: "side-desc", html: lang === "fr" ? s.fr : s.en}),
      el("span", {class: "side-dates"}, range(s, lang, txt.present)),
      tagRow(s.sk, {lang})
    ))
  })
}

function renderEdu(lang, txt, q, key) {
  const root = document.getElementById("edu-list")
  clear(root)
  EDU.filter(e => keep(e.sk, q, key)).forEach(e => {
    root.append(el("article", {class: "card edu-card"},
      el("div", {class: "card-head"},
        el("div", {},
          el("a", {href: e.url, target: "_blank", rel: "noopener", class: "org"}, e.org),
          el("span", {class: "role"}, lang === "fr" ? e.tFr : e.tEn)
        ),
        el("span", {class: "dates"}, range(e, lang, txt.present))
      ),
      tagRow(e.sk, {lang})
    ))
  })
}

function renderFilterNote(txt, q, key) {
  const note = document.getElementById("filter-note")
  clear(note)
  const label = key && SKILLS[key] ? SKILLS[key][0] : q
  if (!label) {
    note.hidden = true
    return
  }
  note.hidden = false
  note.append(
    document.createTextNode(txt.filteredBy + " "),
    el("b", {}, label),
    document.createTextNode(" · "),
    el("span", {class: "clear-filter", role: "button", tabindex: "0"}, txt.clear)
  )
}

// --- public API ------------------------------------------------------------
export function totalDuration(lang) {
  return durStr(CAREER_START, null, lang)
}

// Re-render every dynamic area for the given language and query.
export function renderAll(lang, txt, query) {
  const q = (query || "").trim().toLowerCase()
  const key = exactKey(q)
  renderSkills(lang, q, key)
  renderWork(lang, txt, q, key)
  renderSide(lang, txt, q, key)
  renderEdu(lang, txt, q, key)
  renderFilterNote(txt, q, key)
}
