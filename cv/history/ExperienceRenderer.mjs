import {HistoryComponent} from "./HistoryComponent.mjs"
import {ResumeSectionOptions} from "../ResumeRenderOptions.mjs"

export class ExperienceSectionOptions extends ResumeSectionOptions {
  /**
   * @member {boolean}
   */
  group
}

export class ExperienceRenderer {
  /**
   * @member {HTMLElement}
   */
  root

  /**
   * @member {ExperienceMessages | TrainingMessages}
   */
  messages

  /**
   * @param {Element} root
   * @param {ExperienceMessages | TrainingMessages} messages
   */
  constructor(root, messages) {
    this.root = root
    this.messages = messages
  }

  /**
   *
   * @param {string} title
   * @param {Experience[]} exps
   * @param {string} search
   * @param {ResumeRenderOptions} options
   * @return {HistoryComponent | undefined}
   */
  render(title, exps, search, options) {
    const experiences = exps.filter(exp => exp.skills.find(skill => skill.description.toLowerCase().indexOf(search) >= 0) ? exp : undefined)
    const sortedExps = experiences.sort((a, b) => a.startDate.getTime() < b.startDate.getTime() ? 1 : a.startDate.getTime() > b.startDate.getTime() ? -1 : 0)
    this.root.innerHTML = ""
    if (sortedExps.length > 0) {
      /**
       * @type {HistoryComponent}
       */
      const historyEl = document.createElement("cv-history")
      historyEl.setAttribute("open", Boolean(options.open).toString())
      historyEl.heading = this.messages.title
      historyEl.setExperiences(sortedExps)
      this.root.append(historyEl)
      return historyEl
    }
  }
}
