import {HistoryComponent} from "./history/HistoryComponent.mjs"
import {ResumeMessages} from "./ResumeMessages.mjs"
import {ContractType} from "./history/experience/contract/Contract.mjs"
import {PeopleRenderer} from "./people/PeopleRenderer.mjs"
import {SkillsRenderer} from "./skill/SkillsRenderer.mjs"

export class ResumeSectionOptions {
  /**
   * @member {boolean}
   */
  open
}

export class ExperienceSectionOptions extends ResumeSectionOptions {
  /**
   * @member {boolean}
   */
  group
}

export class ResumeRenderOptions {
  /**
   * @type {ResumeSectionOptions}
   */
  skills

  /**
   * @type {ResumeSectionOptions}
   */
  experience

  /**
   * @type {ResumeSectionOptions}
   */
  training
}

export class ResumeRenderer {
  /**
   * @member {HTMLElement}
   */
  root

  /**
   * @member {ResumeMessages}
   */
  messages

  /**
   * @param {Element} root
   * @param {ResumeMessages} messages
   */
  constructor(root, messages) {
    this.root = root
    this.messages = messages
    this.peopleRenderer = new PeopleRenderer(root, messages)
    this.skillsRenderer = new SkillsRenderer(root.querySelector("#skills"), messages.skills)
  }

  /**
   *
   * @param {Resume} resume
   * @param {string} searchStr
   * @param {ResumeRenderOptions} options
   */
  render(resume, searchStr, options) {
    const search = searchStr.trim().toLowerCase()
    this.peopleRenderer.render(resume.people)
    const title = resume.title
    const root = this.root
    if (title) {
      root.querySelector(".title").textContent = title
      if (this.root instanceof Document) {
        this.root.head.append(`<meta name="description" content="${title}">`)
      }
    }
    const statement = resume.statement
    if (statement) {
      root.querySelector(".statement").textContent = statement
    }
    const allSkills = resume.experiences.flatMap(exp => exp.skills)
    this.skillsRenderer.render(resume, allSkills, search)
    /**
     * @type {ExperienceSectionOptions}
     */
    const experienceOptions = options.experience
    const experienceSection = this.renderExperiences("experience", resume.experiences.filter(exp => exp.contract.type !== ContractType.Training), search, experienceOptions)
    if (experienceSection) {
      experienceSection.setAttribute("group", Boolean(experienceOptions.group).toString())
    }
    const trainingOptions = options.training
    const trainingSection = this.renderExperiences("training", resume.experiences.filter(exp => exp.contract.type === ContractType.Training), search, trainingOptions)
    if (trainingSection) {
      trainingSection.setAttribute("group", Boolean(trainingOptions.group).toString())
    }
  }

  /**
   *
   * @param {string} title
   * @param {Experience[]} exps
   * @param search
   * @param {ResumeSectionOptions} options
   * @return {HistoryComponent | undefined}
   */
  renderExperiences(title, exps, search, options) {
    const section = this.root.querySelector("#" + title)
    const experiences = exps.filter(exp => exp.skills.find(skill => skill.name.toLowerCase().indexOf(search) >= 0) ? exp : undefined)
    const sortedExps = experiences.sort((a, b) => a.startDate.getTime() < b.startDate.getTime() ? 1 : a.startDate.getTime() > b.startDate.getTime() ? -1 : 0)
    section.innerHTML = ""
    if (sortedExps.length > 0) {
      /**
       * @type {HistoryComponent}
       */
      const historyEl = document.createElement("cv-history")
      historyEl.setAttribute("open", Boolean(options.open).toString())
      historyEl.heading = this.messages[title].title
      historyEl.setExperiences(sortedExps)
      section.append(historyEl)
      return historyEl
    }
  }
}
