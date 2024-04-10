export class Experience {
  /**
   *
   * @param {Contract} contract
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {string} description
   * @param {Place} place
   * @param {Skill[]} skills
   * @param {Organization} client Which organization benefited from the project.
   */
  constructor(contract, startDate, endDate, description, place, skills, client) {
    this.contract = contract
    this.startDate = startDate
    this.endDate = endDate
    this.description = description
    this.place = place
    this.skills = skills
    this.client = client
  }
}
