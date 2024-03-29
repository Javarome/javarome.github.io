
export class Experience {
  /**
   *
   * @param {Contract} contract
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {string} description
   * @param {Place} place
   * @param {Skill[]} skills
   */
  constructor(contract, startDate, endDate, description, place, skills) {
    this.contract = contract
    this.startDate = startDate
    this.endDate = endDate
    this.description = description
    this.place = place
    this.skills = skills
  }
}
