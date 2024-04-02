import {Link} from "../Link.mjs"

export class Organization {
  /**
   * @member {Link} link
   * @member {Place} place
   * @member {URL} [icon]
   */
  constructor(link, place, icon) {
    this.link = link
    this.place = place
    this.icon = icon
  }

  /**
   *
   * @param {OrganizationMessages} messages
   * @return {Link}
   */
  static linkFromMessages(messages) {
    return new Link(messages.name, new URL(messages.url), messages.description)
  }
}
