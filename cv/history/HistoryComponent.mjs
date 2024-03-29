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
display: inline-block;
}
</style>
<details open>
<summary>
<h2>
<span class="title"></span>
<button class="sort up">^</button>
<button class="sort down"><</button>
<cv-search>
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
      const projects = groupEntry[1]
      const groupItem = document.createElement("li")
      {
        const websiteLink = document.createElement("a")
        const org = contract.org
        websiteLink.href = org.link.url
        const orgEl = document.createElement("span")
        orgEl.className = ".org-name"
        orgEl.textContent = org.link.name
        websiteLink.append(orgEl)
        groupItem.append(websiteLink)
        const projectsList = document.createElement("ol")
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
      }
      newHistory.append(groupItem)
    }
    historyEl.replaceWith(newHistory)
  }
}

const name = HistoryComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, HistoryComponent)
}
