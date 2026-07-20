// DOM rendering for the résumé sections + the skill cloud and the by-skill
// filter. Rebuilt on language load and on every filter change.

import {CAREER_START, CATLBL, EDU, MODELBL, SIDE, WORK} from "./data.js"
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

// Inclusive month count: both the start and end months are counted (Nov 2024 – Jan 2025 = 3 months).
function monthsBetween(s, e) {
  const end = e || [new Date().getFullYear(), new Date().getMonth() + 1]
  const months = (end[0] - s[0]) * 12 + (end[1] - s[1]) + 1
  return months < 1 ? 1 : months
}

function fmtDur(months, lang) {
  const y = Math.floor(months / 12), mo = months % 12
  const fr = lang === "fr"
  const yr = y ? `${y}${fr ? " an" + (y > 1 ? "s" : "") : " yr" + (y > 1 ? "s" : "")}` : ""
  // With whole years, ~6/~9 months are shown as ½/¾ of a year; otherwise (no years, or 3 months) months are kept.
  const frac = y ? {6: "½", 9: "¾"}[mo] : undefined
  if (frac) return `${yr} ${frac}`
  const moStr = mo ? (fr ? `${mo} mois` : `${mo} mo`) : ""
  return [yr, moStr].filter(Boolean).join(" ")
}

function durStr(s, e, lang) {
  return fmtDur(monthsBetween(s, e), lang)
}

// Calendar coverage (in months) of a set of entries: overlapping periods are counted once
// by merging their [start, end] month intervals, so concurrent roles/projects don't double-count.
function coveredMonths(items) {
  const now = [new Date().getFullYear(), new Date().getMonth() + 1]
  const idx = ([y, m]) => y * 12 + (m - 1)
  const ranges = items
    .map(it => [idx(it.s), idx(it.e || now)])
    .sort((a, b) => a[0] - b[0])
  let total = 0, start = null, end = null
  for (const [s, e] of ranges) {
    if (end === null) {
      start = s
      end = e
    } else if (s <= end + 1) {
      end = Math.max(end, e)
    } else {
      total += end - start + 1
      start = s
      end = e
    }
  }
  if (end !== null) total += end - start + 1
  return total
}

// Totals used as the denominator when filtering (professional experience, and side projects).
const TOTAL_MONTHS = coveredMonths(WORK)
const TOTAL_SIDE_MONTHS = coveredMonths(SIDE)
const TOTAL_EDU_MONTHS = coveredMonths(EDU)

// Fill a section's duration badge: "filtered / total", or just one value when they are equal (or nothing when empty).
function durBadge(id, items, totalMonths, lang) {
  const el = document.getElementById(id)
  if (!el) return
  if (!items.length) {
    el.textContent = ""
    return
  }
  const m = coveredMonths(items)
  el.textContent = m === totalMonths ? fmtDur(totalMonths, lang) : `${fmtDur(m, lang)} / ${fmtDur(totalMonths, lang)}`
}

// --- skill filtering -------------------------------------------------------
// Free text matches a skill by its name, or by its category label (so typing
// e.g. "devops" or "physique" filters a whole family of skills).
function matches(key, q, lang) {
  const s = SKILLS[key]
  if (!s) return false
  if (s[0].toLowerCase().includes(q)) return true
  const c = CATLBL[s[2]]
  return !!c && c[lang].toLowerCase().includes(q)
}

// The skill whose display name equals the query exactly (case-insensitive), if any.
// Such a query (typed or set by clicking a tag) switches the Skills section to focus mode.
function exactKey(q) {
  return q ? Object.keys(SKILLS).find(k => SKILLS[k][0].toLowerCase() === q) || null : null
}

// The category whose label (in either language) equals the query exactly, if any.
// Categories act as implicit "more general" skills: selecting one keeps every
// item practising any skill of that category. An exact skill match wins over it.
function exactCat(q) {
  return q ? Object.keys(CATLBL).find(c =>
    CATLBL[c].en.toLowerCase() === q || CATLBL[c].fr.toLowerCase() === q) || null : null
}

// Keep an item when an exact skill is selected (clicked tag, implied skills included),
// or an exact category is selected (any of its skills), or a free-text query matches.
function keep(sk, q, key, cat, lang) {
  if (key) return expand(sk).includes(key)
  if (cat) return expand(sk).some(k => SKILLS[k] && SKILLS[k][2] === cat)
  return !q || expand(sk).some(k => matches(k, q, lang))
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
  const t = tag(key, lang)
  // href is kept so Ctrl/Cmd/middle-click still opens the documentation; a plain click filters instead (see main.js).
  // Category drives the background via a CSS class (so it can be themed for dark mode), not an inline colour.
  const a = el("a", {
    href: t.url,
    target: "_blank",
    rel: "noopener",
    "data-skill": key,
    class: (cloud ? "tag tag-cloud" : "tag") + " cat-" + t.cat
  }, t.name)
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

// Small remote / hybrid / on-site indicator shown in an experience header.
function modeBadge(mode, lang) {
  const m = mode && MODELBL[mode]
  if (!m) return null
  return el("span", {class: "mode mode-" + mode, title: m[lang]}, m.icon + " " + m[lang])
}

// --- section renderers -----------------------------------------------------
// Category label, rendered as a button so a click filters by that category (see main.js).
function catEl(c, lang) {
  return el("button", {
    class: "skill-cat", type: "button", "data-cat": c,
    title: lang === "fr" ? "Filtrer par cette catégorie" : "Filter by this category"
  }, CATLBL[c][lang])
}

function renderSkills(lang, q, key, cat) {
  const root = document.getElementById("skill-rows")
  clear(root)
  // Focus mode: a skill was clicked — show only it, with its detailed description as the external doc link.
  if (key && SKILLS[key]) {
    const t = tag(key, lang)
    const c = SKILLS[key][2]
    const desc = t.desc || t.name
    root.append(el("div", {class: "skill-row skill-focus"},
      CATLBL[c] ? catEl(c, lang) : el("div", {class: "skill-cat"}, ""),
      el("div", {class: "skill-focus-body"},
        tagEl(key, {cloud: true, lang}),
        el("span", {class: "skill-sep"}, ":"),
        el("a", {href: t.url, target: "_blank", rel: "noopener", class: "skill-doc"}, desc)
      )
    ))
    return
  }
  // Category focus: only that category's row, with all of its skills.
  const cats = cat ? [cat] : CAT_ORDER
  cats.filter(c => groupedKeys[c]).forEach(c => {
    const keys = groupedKeys[c]
      .filter(k => cat || !q || matches(k, q, lang))
      .sort((a, b) => (COUNT[b] || 0) - (COUNT[a] || 0))
    if (!keys.length) return
    root.append(el("div", {class: "skill-row"},
      catEl(c, lang),
      el("div", {class: "tags cloud"}, keys.map(k => tagEl(k, {cloud: true, lang})))
    ))
  })
}

function renderWork(lang, txt, q, key, cat) {
  const root = document.getElementById("exp-list")
  clear(root)
  const groups = WORK
    .map(g => ({g, projects: g.projects.filter(p => keep(p.sk, q, key, cat, lang))}))
    .filter(x => x.projects.length)
  // Duration badge: "filtered / total", collapsing to a single value when they are equal.
  durBadge("total-dur", groups.map(x => x.g), TOTAL_MONTHS, lang)
  groups
    .forEach(({g, projects}) => {
      const head = el("div", {class: "card-head"},
        el("div", {},
          el("a", {href: g.url, target: "_blank", rel: "noopener", class: "org"}, g.org),
          el("span", {class: "role"}, lang === "fr" ? g.tFr : g.tEn)
        ),
        el("div", {class: "dates-wrap"},
          el("span", {class: "dates"}, range(g, lang, txt.present)),
          el("span", {class: "dur"}, durStr(g.s, g.e, lang)),
          modeBadge(g.mode, lang)
        )
      )
      const list = el("ul", {class: "proj-list"}, projects.map(p =>
        el("li", {class: "proj"},
          el("div", {class: "proj-title", html: lang === "fr" ? p.fr : p.en}),
          (lang === "fr" ? p.dFr : p.dEn) && el("p", {class: "proj-detail"}, lang === "fr" ? p.dFr : p.dEn),
          tagRow(p.sk, {lang})
        )
      ))
      const orgDesc = lang === "fr" ? g.descFr : g.descEn
      root.append(el("article", {class: "card exp-card"},
        head,
        orgDesc && el("p", {class: "org-desc"}, orgDesc),
        list
      ))
    })
}

function renderSide(lang, txt, q, key, cat) {
  const root = document.getElementById("side-grid")
  clear(root)
  const items = SIDE.filter(s => keep(s.sk, q, key, cat, lang))
  durBadge("side-dur", items, TOTAL_SIDE_MONTHS, lang)
  items.forEach(s => {
    root.append(el("article", {class: "card side-card"},
      el("div", {class: "side-desc", html: lang === "fr" ? s.fr : s.en}),
      el("span", {class: "side-dates"}, range(s, lang, txt.present)),
      tagRow(s.sk, {lang})
    ))
  })
}

function renderEdu(lang, txt, q, key, cat) {
  const root = document.getElementById("edu-list")
  clear(root)
  const items = EDU.filter(e => keep(e.sk, q, key, cat, lang))
  durBadge("edu-dur", items, TOTAL_EDU_MONTHS, lang)
  items.forEach(e => {
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

// --- public API ------------------------------------------------------------
export function totalDuration(lang) {
  return durStr(CAREER_START, null, lang)
}

// Re-render every dynamic area for the given language and query.
// Any filter qualifies the Experience title ("Experience in <term>"): the recognised skill name when the
// filter matches one exactly, otherwise the raw query. The Skills title only turns singular on an exact match.
function renderTitles(lang, txt, key, cat, rawQuery) {
  const skillsH2 = document.querySelector("#skills h2")
  const workH2 = document.querySelector("#experience h2")
  if (skillsH2) skillsH2.textContent = key ? txt.skill : txt.skills
  if (workH2) {
    const term = key ? tag(key, lang).name : cat ? CATLBL[cat][lang] : rawQuery
    workH2.textContent = term ? `${txt.workIn} ${term}` : txt.work
  }
}

export function renderAll(lang, txt, query) {
  const raw = (query || "").trim()
  const q = raw.toLowerCase()
  const key = exactKey(q)
  const cat = key ? null : exactCat(q)
  renderTitles(lang, txt, key, cat, raw)
  renderSkills(lang, q, key, cat)
  renderWork(lang, txt, q, key, cat)
  renderSide(lang, txt, q, key, cat)
  renderEdu(lang, txt, q, key, cat)
}
