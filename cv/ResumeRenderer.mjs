import {ResumeMessages} from "./ResumeMessages.mjs"
import {ContractType} from "./history/experience/contract/Contract.mjs"
import {PeopleRenderer} from "./people/PeopleRenderer.mjs"
import {SkillsRenderer} from "./skill/SkillsRenderer.mjs"
import {ExperienceRenderer} from "./history/ExperienceRenderer.mjs"

export class ResumeRenderer {
  /**
   * @member {HTMLElement}
   */
  root

  /**
   * @param {Element} root
   * @param {ResumeMessages} messages
   */
  constructor(root, messages) {
    this.root = root
    this.peopleRenderer = new PeopleRenderer(root)
    this.skillsRenderer = new SkillsRenderer(root.querySelector("#skills"), messages.skills)
    this.experienceRenderer = new ExperienceRenderer(root.querySelector("#experience"), messages.experience)
    this.trainingRenderer = new ExperienceRenderer(root.querySelector("#training"), messages.training)
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
    const experienceSection = this.experienceRenderer.render("experience", resume.experiences.filter(exp => exp.contract.type !== ContractType.Training), search, experienceOptions)
    if (experienceSection) {
      experienceSection.setAttribute("group", Boolean(experienceOptions.group).toString())
    }
    const trainingOptions = options.training
    const trainingSection = this.trainingRenderer.render("training", resume.experiences.filter(exp => exp.contract.type === ContractType.Training), search, trainingOptions)
    if (trainingSection) {
      trainingSection.setAttribute("group", Boolean(trainingOptions.group).toString())
    }
  }
}
