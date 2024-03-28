
export class Experience {
  /**
   * @member {Organization}
   */
  org


  /**
   * @member {Date}
   */
  startDate

 /**
   * @member {Date}
   */
  endDate
  /**
   *
   * @param {Organization} org
   * @param {Date} startDate
   * @param {Date} endDate
   */
  constructor(org, startDate, endDate) {
    this.org = org
    this.startDate = startDate
    this.endDate = endDate
  }
}
