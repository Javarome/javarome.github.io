import "./item/ExperienceComponent.mjs"
import "../search/SearchComponent.mjs"

const template = document.createElement("template")
template.innerHTML = `<style>
:host {
  position: relative;
}
.history {
  margin: 0 1em;
  list-style: disc;
  padding-left: 1em;
}
.projects {
  list-style: circle;
  padding-left: 1em;
}
.sort {
  appearance: none;
  border: none
}
summary {
  background: linear-gradient(to bottom, black, rgba(0,0,0,0));
  top: 0;
  position: sticky;
  list-style: none;
  &::after {
    content: "";
    display: block;
    height: 1em;
  }
}
h2 {
  margin-top: 1em;
  display: inline;
  user-select: none;
  text-shadow: -2px -2px 0 var(--background-color), 0 -2px 0 var(--background-color), 2px -2px 0 var(--background-color), 2px 0 0 var(--background-color), 2px 2px 0 var(--background-color), 0 2px 0 var(--background-color), -2px 2px 0 var(--background-color), -2px 0 0 var(--background-color);
}
details h2::after {
  color: darkgrey;
  content: " (...)";
  cursor: pointer;
}
details[open] h2::after {
  content: "";
}
time {
  font-size: 0.9em;
  color: gray;
}
a {
  text-decoration: none;
}
@media print {
  button {
    display: none !important;
  }
}
.org {
  font-weight: bold;
  margin: 0 0.25em
}
.title {
  font-weight: bold;
  margin: 0 0.5em 0 0.25em;
}
.start::after {
  content: " → "
}
</style>
<details>
  <summary>
    <h2 class="title"></h2>
  </summary>
  <ol class="history"></ol>
</details>
`

export class HistoryComponent extends HTMLElement {
  /**
   * @readonly
   * @type {string}
   */
  static NAME = "cv-history"

  /**
   * @member {Experience[]}
   */
  history

  /**
   * @member {string}
   */
  heading

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: "closed"})
    this.shadow.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const details = this.shadow.querySelector("details")
    if (this.getAttribute("open") === "true") {
      details.setAttribute("open", null)
    } else {
      details.removeAttribute("open")
    }
  }

  /**
   *
   * @param {Experience[]} experiences
   */
  setExperiences(experiences) {
    this.history = experiences
    this.render()
  }

  render() {
    const titleEl = this.shadow.querySelector(".title")
    titleEl.textContent = this.heading
    this.renderHistory()
  }

  setDate(date, clazz) {
    const dateEl = document.createElement("time")
    dateEl.className = clazz
    dateEl.dateTime = date.toISOString()
    dateEl.textContent = this.date(date)
    return dateEl
  }

  date(date) {
    const options = {
      year: "numeric",
      month: "short",
      day: undefined
    }
    return date.toLocaleDateString(navigator.language, options)
  }

  renderHistory() {
    const historyEl = this.shadow.querySelector(".history")
    const newHistory = document.createElement("ol")
    newHistory.className = "history"
    const orgGroups = this.history.reduce((groups, exp) => {
      const contract = exp.contract
      let projects = groups.get(contract)
      if (!projects) {
        projects = []
        groups.set(contract, projects)
      }
      projects.push(exp)
      return groups
    }, new Map())
    for (const orgData of orgGroups.entries()) {
      const contract = orgData[0]
      const groupItem = document.createElement("li")
      const websiteLink = document.createElement("a")
      const org = contract.org
      websiteLink.href = org.link.url
      const orgEl = document.createElement("span")
      orgEl.className = "org"
      orgEl.textContent = org.link.name
      orgEl.title = org.link.description
      websiteLink.append(orgEl)
      const logo = document.createElement("img")
      logo.src = new URL("favicon.ico", org.link.url)
      logo.onerror = () => logo.remove()
      logo.width = logo.height = "16"
      websiteLink.append(logo)
      groupItem.append(websiteLink)

      const titleEl = document.createElement("span")
      titleEl.className = "title"
      titleEl.textContent = contract.title
      groupItem.append(titleEl)

      groupItem.append(this.setDate(contract.startDate, "start"))
      groupItem.append(this.setDate(contract.endDate, "end"))

      const projects = orgData[1]
      const projectsList = this.renderProjects(projects)
      groupItem.append(projectsList)
      newHistory.append(groupItem)
    }
    historyEl.replaceWith(newHistory)
  }

  renderProjects(projects) {
    const projectsList = document.createElement("ol")
    projectsList.className = "projects"
    for (const project of projects) {
      /**
       * @type {ExperienceComponent}
       */
      const itemExp = document.createElement("li")
      const exp = document.createElement("cv-history-item")
      exp.setExperience(project)
      itemExp.append(exp)
      projectsList.append(itemExp)
    }
    return projectsList
  }
}

const name = HistoryComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, HistoryComponent)
}
