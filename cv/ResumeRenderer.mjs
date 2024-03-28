import {HistoryComponent} from "./history/HistoryComponent.mjs"
import {Training} from "./history/item/experience/Training.mjs"
import {ProfessionalExperience} from "./history/item/experience/ProfessionalExperience.mjs"

export class ResumeRenderMode {
  /**
   * @member {boolean | undefined}
   */
  chronological

  /**
   * @member {boolean | undefined}
   */
  functional
}

export class ResumeRenderOptions {
  /**
   * @member {ResumeRenderMode}
   */
  mode
}

export class ResumeRenderer {
  /**
   * @member {HTMLElement}
   */
  root

  /**
   * @param {Node} root
   */
  constructor(root) {
    this.root = root
  }

  /**
   *
   * @param {Resume} resume
   * @param {ResumeRenderOptions} options
   */
  render(resume, options) {
    this.renderName(resume.name)
    this.renderExperiences("#experience", resume.experiences, (exp) => exp instanceof ProfessionalExperience)
    this.renderExperiences("#training", resume.experiences, (exp) => exp instanceof Training)
  }

  /**
   *
   * @param {string} name
   */
  renderName(name) {
    if (this.root instanceof Document) {
      /** @type {Document} */
      const doc = this.root
      doc.head.title = name
    }
    const title = this.root.querySelector("h1")
    title.textContent = name
  }

  /**
   *
   * @param {string} selector
   * @param {Experience[]} experiences
   * @param {Function} filter
   */
  renderExperiences(selector, experiences, filter) {
    const section = this.root.querySelector(selector)
    /**
     * @type {HistoryComponent}
     */
    const historyEl = document.createElement("cv-history")
    historyEl.setExperiences(experiences.filter(filter))
    section.append(historyEl)
  }
}
