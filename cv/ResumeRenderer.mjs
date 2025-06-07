import {ResumeMessages} from "./ResumeMessages.mjs"
import {ContractType} from "./history/experience/contract/Contract.mjs"
import {PeopleRenderer} from "./people/PeopleRenderer.mjs"
import {SkillsRenderer} from "./skill/SkillsRenderer.mjs"
import {ExperienceRenderer} from "./history/ExperienceRenderer.mjs"
import {HistoryComponent} from "./history/HistoryComponent.mjs"

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
    this.personalRenderer = new ExperienceRenderer(root.querySelector("#personal"), messages.personal)
    this.trainingRenderer = new ExperienceRenderer(root.querySelector("#training"), messages.training)
  }

  /**
   *
   * @param {Resume} resume
   * @param {string} searchStr
   * @param {ResumeRenderOptions} options
   */
  render(resume, searchStr, options) {
    const people = resume.people
    this.peopleRenderer.render(people)
    const title = resume.title
    const root = this.root
    if (title) {
      root.querySelector(".title").textContent = title
      const head = this.root.querySelector("head")
      if (head) {
        head.innerHTML += `<title>${people.firstName} ${people.lastName}</title><meta name="description" content="${title}">`
      }
    }
    const statement = resume.statement
    if (statement) {
      root.querySelector(".statement").textContent = statement
    }
    this.renderSearch(resume, searchStr, options)
  }

  renderSearch(resume, search, options) {
    const allSkills = resume.experiences.flatMap(exp => exp.skills).flatMap(skill => skill.withImplied(skill))
    this.skillsRenderer.render(resume, allSkills, search)
    /**
     * @type {ExperienceSectionOptions}
     */
    const experienceOptions = options.experience
    const professionalExperience = resume.experiences.filter(exp => ![ContractType.Training, ContractType.Personal].includes(exp.contract.type))
    const experienceSection = this.experienceRenderer.render("experience", professionalExperience, search, experienceOptions)
    if (experienceSection) {
      experienceSection.setAttribute(HistoryComponent.attr.group, Boolean(experienceOptions.group).toString())
      experienceSection.setAttribute(HistoryComponent.attr.skillsImplied, Boolean(experienceOptions.skills?.implied).toString())
    }
    const personalExperience = resume.experiences.filter(exp => [ContractType.Personal].includes(exp.contract.type))
    const personalSection = this.personalRenderer.render("personal", personalExperience, search, experienceOptions)
    if (personalSection) {
      personalSection.setAttribute(HistoryComponent.attr.group, Boolean(experienceOptions.group).toString())
      personalSection.setAttribute(HistoryComponent.attr.skillsImplied, Boolean(experienceOptions.skills?.implied).toString())
    }
    const trainingOptions = options.training
    const trainingExperience = resume.experiences.filter(exp => exp.contract.type === ContractType.Training)
    const trainingSection = this.trainingRenderer.render("training", trainingExperience, search, trainingOptions)
    if (trainingSection) {
      trainingSection.setAttribute(HistoryComponent.attr.group, Boolean(trainingOptions.group).toString())
      trainingSection.setAttribute(HistoryComponent.attr.skillsImplied, Boolean(trainingOptions.skills?.implied).toString())
    }
  }
}
