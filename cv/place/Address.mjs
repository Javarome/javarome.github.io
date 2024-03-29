import {Place} from "./Place.mjs"
import {Localization} from "./Localization.mjs"

export class Address extends Place {
  /**
   * @param {string} street
   * @param {string} zipCode
   * @param {string} city
   * @param {Country} country
   */
  constructor(street, zipCode, city, country) {
    super(`${street}, ${zipCode} ${city}, ${country}`, Localization.from(`${street}, ${zipCode} ${city}, ${country}`))
    this.street = street
    this.zipCode = zipCode
    this.city = city
    this.country = country
  }
}
