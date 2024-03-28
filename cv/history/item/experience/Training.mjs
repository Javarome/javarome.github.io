import {Experience} from "./Experience.mjs"

export class Training extends Experience {
  /**
   * @param {Organization} org
   * @param {Date} startDate
   * @param {Date} endDate
   */
  constructor(org, startDate, endDate) {
    super(org, startDate, endDate)
  }
}
