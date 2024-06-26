import style from "./SearchComponent.css?raw"
import html from "./SearchComponent.html?raw"

const template = document.createElement("template")
template.innerHTML = `<style>${style}</style>${html}`

export class SearchComponent extends HTMLElement {
  static formAssociated = true;

  /**
   * @readonly
   * @type {string}
   */
  static NAME = "cv-search"

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: "closed"})
    this.internals = this.attachInternals()
    this.shadow.appendChild(template.content.cloneNode(true))
    const input = this.shadow.querySelector("input")
    input.addEventListener('change', () => {
      if (input.value.trim() === "") {
        this.internals.states.add("empty")
      } else {
        this.internals.states.delete("empty")
      }
      this.internals.setFormValue(input.value);
    })
    input.addEventListener('keyup', (event) => {
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
