import {Experience} from "./Experience.mjs"

export class Training extends Experience {
  /**
   * @param {Organization} org
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {string} description
   * @param {string} degree
   * @param {string} domain
   * @param {string} results
   * @param {string} activityAndAssociations
   */
  constructor(org, startDate, endDate, description, degree, domain, results, activityAndAssociations) {
    super(org, startDate, endDate, description)
    this.degree = degree
    this.domain = domain
    this.results = results
    this.activityAndAssociations = activityAndAssociations
  }
}
