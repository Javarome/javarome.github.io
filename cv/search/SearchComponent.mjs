const style = `
input {
  border: none
}
button {
  border: none
}
`
const template = document.createElement("template")
template.innerHTML = `
<style>${style}</style>
<span class="search"><input type="search"><button>🔎</button></span>
`

export class SearchComponent extends HTMLElement {
  /**
   * @readonly
   * @type {string}
   */
  static NAME = "cv-search"

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: "closed"})
    this.shadow.appendChild(template.content.cloneNode(true))
  }
}

const name = SearchComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, SearchComponent)
}
