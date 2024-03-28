import {Experience} from "./Experience.mjs"

export class ProfessionalExperience extends Experience {
  /**
   * @param {Company} company
   * @param {Date} startDate
   * @param {Date} endDate
   */
  constructor(company, startDate, endDate) {
    super(company, startDate, endDate)
  }
}
