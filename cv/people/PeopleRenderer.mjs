import {ResumeMessages} from "../ResumeMessages.mjs"

export class PeopleRenderer {
  /**
   * @member {HTMLElement}
   */
  root

  /**
   * @member {ResumeMessages}
   */
  messages

  /**
   * @param {Node} root
   * @param {ResumeMessages} messages
   */
  constructor(root, messages) {
    this.root = root
    this.messages = messages
  }

  /**
   * @param {People} people
   */
  render(people) {
    const name = `${people.firstName} ${people.lastName}`
    if (this.root instanceof Document) {
      /** @type {Document} */
      const doc = this.root
      doc.head.title = name
      doc.head.append(`<meta name="description" content="${people.title}">`)
    }
    const address = this.root.querySelector("address")
    address.addEventListener("click", () => {
      window.open(`https://www.google.com/maps/embed/v1/place?q=${address.textContent}&key=AIzaSyDqiEN85qBXI9QJFlJM5E0LMOcllLvuR4I`)
    })
    this.root.querySelector("h1").textContent = name
    const addrItems = people.home.name.split(", ")
    address.innerHTML = `
<span class="street">${addrItems[0]}<br></span>${addrItems[1]}<br><span class="country">${addrItems[2]}</span>`
    const linksRoot = this.root.querySelector(".links")
    linksRoot.innerHTML = ""
    for (const link of people.links) {
      const linkItem = document.createElement("li")
      const linkEl = document.createElement("a")
      linkEl.textContent = link.name
      linkEl.href = link.url.href
      linkItem.append(linkEl)
      linksRoot.append(linkItem)
    }
  }
}
