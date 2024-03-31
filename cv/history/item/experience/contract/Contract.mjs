export class ContractType {
  /**
   * @param {string} key
   */
  constructor(key) {
    this.key = key
  }
  toString() {
    return this.key
  }
  static FullTimePermanent = new ContractType("FullTimePermanent")
  static FullTimeFixed = new ContractType("FullTimeFixed")
  static Training = new ContractType("Training")
  static Internship = new ContractType("Internship")
}

export class Contract {
  /**
   * @param {Organization} org
   * @param {ContractType} type
   * @param {string} title
   * @param {Date} startDate
   * @param {Date} [endDate]
   */
  constructor(org, type, title, startDate, endDate) {
    this.org = org
    this.type = type
    this.title = title
    this.startDate = startDate
    this.endDate = endDate
  }
}
