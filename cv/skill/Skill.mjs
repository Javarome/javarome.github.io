import {Link} from "../Link.mjs"

export class Skill extends Link {
  /**
   * @member {Skill[]}
   */
  implied

  /**
   * @member {string[]}
   */
  tags

  /**
   * @param {string} name
   * @param {URL} url
   * @param {string} description
   * @param {Skill[]} implied
   * @param {string[]} tags
   */
  constructor(name, url, description, implied, ...tags) {
    super(name, url, description)
    this.implied = implied || []
    this.tags = tags || []
  }
}
