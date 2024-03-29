import "./item/HistoryItemComponent.mjs"
import "../search/SearchComponent.mjs"

const template = document.createElement("template")
template.innerHTML = `<style>
:host {
  position: relative;
}
.history {
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
  background-color: rgba(255,255,255,0.95);
  top: 0;
  position: sticky;
}
h2 {
  margin-top: 1em;
  display: inline;
  user-select: none;
}
details {
  & cv-search, & h2 button {
    display: none;  
  }
}
details[open] {
  & cv-search, & h2 button {
    display: inline;
  }
}
time {
  font-size: 0.9em;
  color: gray;
}
</style>
<details open>
  <summary>
    <h2>
      <span class="title"></span>
      <button class="sort up">▲</button>
      <button class="sort down">▼</button>
      <cv-search></cv-search>
    </h2>
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
    const groups = this.history.reduce((groups, exp) => {
      const contract = exp.contract
      let projects = groups.get(contract)
      if (!projects) {
        projects = []
        groups.set(contract, projects)
      }
      projects.push(exp)
      return groups
    }, new Map())
    for (const groupEntry of groups.entries()) {
      const contract = groupEntry[0]
      const groupItem = document.createElement("li")
      const websiteLink = document.createElement("a")
      const org = contract.org
      websiteLink.href = org.link.url
      const orgEl = document.createElement("span")
      orgEl.className = ".org-name"
      orgEl.innerHTML = `<b>${org.link.name}</b>`
      websiteLink.append(orgEl)
      groupItem.append(websiteLink)

      groupItem.append(" - ")
      groupItem.append(this.setDate(contract.startDate, "start"))
      groupItem.append("-")
      groupItem.append(this.setDate(contract.endDate, "end"))

      const projectsList = document.createElement("ol")
      projectsList.className = "projects"
      const projects = groupEntry[1]
      for (const project of projects) {
        /**
         * @type {HistoryItemComponent}
         */
        const itemExp = document.createElement("li")
        const exp = document.createElement("cv-history-item")
        exp.setExperience(project)
        itemExp.append(exp)
        projectsList.append(itemExp)
      }
      groupItem.append(projectsList)
      newHistory.append(groupItem)
    }
    historyEl.replaceWith(newHistory)
  }
}

const name = HistoryComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, HistoryComponent)
}
