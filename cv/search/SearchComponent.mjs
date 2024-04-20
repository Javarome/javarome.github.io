import style from "./SearchComponent.css?raw"

const template = document.createElement("template")
template.innerHTML = `
<style>${style}</style>
<span class="search"><input type="search" oninput="search(event)" placeholder="Recherche 🔎"></span>
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
    this.shadow.querySelector("input").addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 13: // Space?
          const e = {...event, ...{target: {value: event.target.value + " "}}}
          window.search(e)
          break
        case 32: // Space?
          event.preventDefault()      // Prevent closing the <summary>
          break
      }
    })
  }
}

const name = SearchComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, SearchComponent)
}
