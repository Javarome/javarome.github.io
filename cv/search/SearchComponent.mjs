const style = `
input {
  border: none
  padding: 0.5em;
}
button {
  border: none;
  background: none;
}
input {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: width 0.3s ease-out;
  border: none;
  border-bottom: 1px solid gray;
  padding: 0.4em 0;
  margin-left: 0.5em;
  vertical-align: middle;
  border-radius: 0.25em;
  padding: 0.4em 0.5em;
}
@media print {
  input, button {
    display: none !important;
  }
}
`
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
