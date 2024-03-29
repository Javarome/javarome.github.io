import {HistoryComponent} from "./history/HistoryComponent.mjs"
import {ContractType} from "./history/item/experience/Contract.mjs"
import {SkillComponent} from "./history/item/experience/skill/SkillComponent.mjs"
import {Skill} from "./history/item/experience/skill/Skill.mjs"

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
    this.renderPeople(resume.people)
    const title = resume.title
    const root = this.root
    if (title) {
      root.querySelector(".title").append(title)
    }
    const statement = resume.statement
    if (statement) {
      root.querySelector(".statement").append(statement)
    }
    const allSkills = resume.experiences.flatMap(exp => exp.skills)
    this.renderSkills(root.querySelector("#skills"), allSkills, (skill) => true)
    this.renderExperiences(root.querySelector("#experience"), resume.experiences.filter(exp => exp.contract.type !== ContractType.Training))
    this.renderExperiences(root.querySelector("#training"), resume.experiences.filter(exp => exp.contract.type === ContractType.Training))
  }

  /**
   *
   * @param {People} people
   */
  renderPeople(people) {
    const name = `${people.firstName} ${people.lastName}`
    if (this.root instanceof Document) {
      /** @type {Document} */
      const doc = this.root
      doc.head.title = name
    }
    this.root.querySelector("h1").textContent = name
    this.root.querySelector("address").innerHTML = people.home.name.replaceAll(", ", "<br>")
    const linksRoot = this.root.querySelector(".links")
    for (const link of people.links) {
      const linkItem = document.createElement("li")
      const linkEl = document.createElement("a")
      linkEl.textContent = link.name
      linkEl.href = link.url.href
      linkItem.append(linkEl)
      linksRoot.append(linkItem)
    }
  }

  /**
   *
   * @param {Element} skillsRoot
   * @param {Skill[]} skills
   * @param {Function} filter
   */
  renderSkills(skillsRoot, skills, filter) {
    const allSkills = skills.filter(filter)
    const skillsLevel = new Map()
    for (const skill of allSkills) {
      const currentLevel = skillsLevel.get(skill) || 0
      skillsLevel.set(skill, currentLevel + 1)
    }
    for (const skillsEntry of skillsLevel.entries()) {
      const skill = skillsEntry[0]
      const level = skillsEntry[1]
      const skillEl = SkillComponent.fromSkill(skill)
      skillEl.style = "font-size: " + (10 + level * 2) + "px"
      skillsRoot.append(skillEl)
    }
  }

  /**
   *
   * @param {Element} section
   * @param {Experience[]} experiences
   */
  renderExperiences(section, experiences) {
    const sortedExps = experiences.sort((a,b) => a.startDate.getTime() < b.startDate.getTime() ? 1 : a.startDate.getTime() > b.startDate.getTime() ? -1 : 0)
    /**
     * @type {HistoryComponent}
     */
    const historyEl = document.createElement("cv-history")
    historyEl.setExperiences(sortedExps)
    section.append(historyEl)
  }
}
