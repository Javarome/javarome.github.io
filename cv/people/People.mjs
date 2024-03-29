export class People {
  /**
   *
   * @param {string} lastName
   * @param {string} firstName
   * @param {Place} home
   * @param {Link[]} links
   */
  constructor(lastName, firstName, home, links) {
    this.lastName = lastName
    this.firstName = firstName
    this.home = home
    this.links = links
  }
}
