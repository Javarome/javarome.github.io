import {LINKS, TXT} from "./data.js"
import {renderAll, totalDuration} from "./render.js"
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
document.getElementById("total-dur").textContent = totalDuration(lang)

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

// --- dynamic content + skill filter ----------------------------------------
renderAll(lang, txt, "")

const search = document.getElementById("search")
search.addEventListener("input", () => renderAll(lang, txt, search.value))

// Clear-filter link (delegated: the note is rebuilt on each render).
document.getElementById("filter-note").addEventListener("click", e => {
  if (e.target.classList.contains("clear-filter")) {
    search.value = ""
    renderAll(lang, txt, "")
  }
})

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
