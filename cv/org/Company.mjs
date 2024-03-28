import {Organization} from "./Organization.mjs"

export class Company extends Organization {
  /**
   * @member {string} name
   * @member {URL} website
   */
  constructor(name, website) {
    super(name, website)
  }
}
