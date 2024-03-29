import {Link} from "../../../../Link.mjs"

export class Skill extends Link {
  /**
   * @param {string} name
   * @param {URL} url
   * @param {string} description
   */
  constructor(name, url, description) {
   super(name, url, description)
  }
}
