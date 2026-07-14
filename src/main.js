import {LINKS, TXT} from "./data.js"
import {renderAll} from "./render.js"
import {initBackground} from "./background.js"

// --- language --------------------------------------------------------------
// Auto-detect from the browser, like the original site. ?lang=fr|en overrides.
function detectLang() {
  const forced = new URLSearchParams(location.search).get("lang")
  if (forced === "fr" || forced === "en") return forced
  const l = (navigator.language || "en").toLowerCase()
  return l.startsWith("fr") ? "fr" : "en"
}

const lang = detectLang()
const txt = TXT[lang]
document.documentElement.lang = lang

// --- static i18n -----------------------------------------------------------
for (const node of document.querySelectorAll("[data-i18n]")) {
  const v = txt[node.dataset.i18n]
  if (v != null) node.textContent = v
}
for (const node of document.querySelectorAll("[data-i18n-ph]")) {
  const v = txt[node.dataset.i18nPh]
  if (v != null) node.setAttribute("placeholder", v)
}
// #total-dur is filled by renderAll (renderWork), so it always reflects the displayed experiences.

// --- external links --------------------------------------------------------
const linksRoot = document.getElementById("links")
for (const l of LINKS) {
  const a = document.createElement("a")
  a.className = "link-pill"
  a.href = l.url
  a.target = "_blank"
  a.rel = "noopener"
  a.textContent = l.name
  linksRoot.append(a)
}

// --- URL state -------------------------------------------------------------
// The page state is reflected in the URL so reloads restore it: the active filter as ?skill=…,
// and the section scrolled into view as #section-id. Uses replaceState so it doesn't spam history.
function updateUrl({skill, section} = {}) {
  const params = new URLSearchParams(location.search)
  if (skill !== undefined) {
    if (skill) params.set("skill", skill)
    else params.delete("skill")
  }
  const qs = params.toString()
  const hash = section !== undefined ? (section ? "#" + section : "") : location.hash
  history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "") + hash)
}

// --- dynamic content + skill filter ----------------------------------------
// The filter field is the single source of truth: an exact skill name (typed, or filled by
// clicking a tag) shows that skill's detail; any other text does a free-text search.
const search = document.getElementById("search")

function applyFilter(value) {
  search.value = value
  updateUrl({skill: value})
  renderAll(lang, txt, value)
}

// Restore the filter from ?skill= on load.
applyFilter(new URLSearchParams(location.search).get("skill") || "")

search.addEventListener("input", () => applyFilter(search.value))

// Clicking a skill tag fills the filter with that skill instead of opening its documentation.
// Clicking the already-selected skill again clears the filter.
// Ctrl/Cmd/Shift-click (or middle-click) still opens the external doc link.
document.addEventListener("click", e => {
  if (e.metaKey || e.ctrlKey || e.shiftKey) return
  const a = e.target.closest(".tag")
  if (!a || !a.dataset.skill) return
  e.preventDefault()
  const name = a.textContent
  applyFilter(search.value.trim().toLowerCase() === name.toLowerCase() ? "" : name)
})

// --- scrollspy: reflect the section in view in the URL hash ----------------
const spySections = ["about", "skills", "experience", "projects", "education"]
  .map(id => document.getElementById(id))
  .filter(Boolean)
let currentSection = location.hash.slice(1) || null
const spy = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (e.isIntersecting && e.target.id !== currentSection) {
      currentSection = e.target.id
      updateUrl({section: currentSection})
    }
  }
}, {rootMargin: "-45% 0px -50% 0px", threshold: 0})
spySections.forEach(s => spy.observe(s))

// --- "early computer history" overlay --------------------------------------
const overlay = document.getElementById("early")
const openEarly = () => {
  overlay.hidden = false
}
const closeEarly = () => {
  overlay.hidden = true
}

document.getElementById("early-link").addEventListener("click", openEarly)
overlay.addEventListener("click", closeEarly)
// Clicks inside the panel shouldn't close it (except the exit prompt).
overlay.querySelector(".early-inner").addEventListener("click", e => {
  if (!e.target.closest(".early-exit")) e.stopPropagation()
})
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !overlay.hidden) closeEarly()
})

// --- animated background ---------------------------------------------------
initBackground(document.getElementById("bg-shader"))
