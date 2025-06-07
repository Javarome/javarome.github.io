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
          monthsStr += years ? "+" : "1 mois"
          break
        case 3:
          monthsStr += years ? " ¼" : "3 mois"
          break
        case 5:
          monthsStr += years ? "~½" : "5 mois"
          break
        case 6:
          monthsStr += years ? " ½" : "6 mois"
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
