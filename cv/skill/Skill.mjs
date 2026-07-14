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

  /**
   * @param {Skill} skill
   * @param {Skill[]} ancestors the skills already visited on the current branch, to guard against undefined entries and
   * cyclic `implied` graphs (which could otherwise cause infinite recursion).
   * @return {Skill[]}
   */
  withImplied(skill = this, ancestors = []) {
    if (!skill || ancestors.includes(skill)) {
      return []
    }
    return [skill].concat(skill.implied.flatMap(implied => this.withImplied(implied, [...ancestors, skill])))
  }
}
