import {HistoryMessages} from "./HistoryMessages.mjs"

export class HistoryMessages_fr extends HistoryMessages {
  /**
   * @type {(number, number) => string}
   */
  duration = (years, months) => {
    let yearsStr = ""
    let monthsStr = ""
    if (months) {
      switch (months) {
        case 1:
          monthsStr += "+"
          break
        case 3:
          monthsStr += " ¼"
          break
        case 5:
          monthsStr += "~½"
          break
        case 6:
          monthsStr += " ½"
          break
        case 9:
          monthsStr += " ¾"
          break
        case 11:
          years += 1
          yearsStr = "~"
          break
        default:
          monthsStr += (years ? " et " : "") + months + " mois"
      }
    }
    if (years) {
      yearsStr += years + " an" + (years > 1 ? "s" : "")
    }
    return yearsStr + monthsStr
  }
}

export const history_fr = new HistoryMessages_fr()
