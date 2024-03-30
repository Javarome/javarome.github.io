import {Link} from "../Link.mjs"

export class Skill extends Link {
  /**
   * @param {string} name
   * @param {URL} url
   * @param {string} description
   * @param {Skill[]} implied
   */
  constructor(name, url, description, ...implied) {
    super(name, url, description)
    this.implied = implied || []
  }
}
