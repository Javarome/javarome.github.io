import {Link} from "../Link.mjs"

export class Organization {
  /**
   * @member {Link} link
   * @member {Place} place
   */
  constructor(link, place) {
    this.link = link
    this.place = place
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
