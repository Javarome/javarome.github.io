export class Resume {
  /**
   *
   * @param {People} people
   * @param {Experience[]} experiences
   * @param {string} title
   * @param {string} statement
   */
  constructor(people, experiences, title, statement) {
    this.people = people
    this.title = title
    this.statement = statement
    this.experiences = experiences
  }
}
