import {Link} from "../../../../Link.mjs"

export class Skill extends Link {
  /**
   * @param {string} name
   * @param {URL} url
   * @param {string} description
   * @param {string[]} tags
   */
  constructor(name, url, description, ...tags) {
    super(name, url, description)
    this.tags = tags || []
  }
}
