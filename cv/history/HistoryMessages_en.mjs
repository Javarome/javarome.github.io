import {HistoryMessages} from "./HistoryMessages.mjs"

export class HistoryMessages_en extends HistoryMessages {
  /**
   * @type {(number, number) => string}
   */
  duration = (years, months) => {
    let str = ""
    if (years) {
      str = years + " year" + (years > 1 ? "s": "")
    }
    if (months) {
      if (years) {
        str += ", "
      }
      str += months + " month" + (months > 1 ? "s": "")
    }
    return str
  }
}

export const history_en = new HistoryMessages_en()
