import "./item/HistoryItemComponent.mjs"
const template = document.createElement("template")
template.innerHTML = `<style></style>
<section>
<!--h2>
<span class="search"><input type="search"><button>🔎</button></span>
</h2-->
<ol class="history"></ol>
</section>`

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

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "closed" })
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
    const historyEl = this.shadow.querySelector(".history")
    const newHistory = document.createElement("ul")
    newHistory.className="history"
    for (const experience of this.history) {
      const item = document.createElement("li")
      /**
       * @type {HistoryItemComponent}
       */
      const itemExp = document.createElement("cv-history-item")
      itemExp.setExperience(experience)
      item.append(itemExp)
      newHistory.append(item)
    }
    historyEl.replaceWith(newHistory)
  }
}

const name = HistoryComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, HistoryComponent)
}
