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
    const allSkills = resume.experiences.flatMap(exp => exp.skills)
    this.renderSkills(this.root.querySelector("#skills"), allSkills, (skill) => true)
    this.renderExperiences("#experience", resume.experiences, (exp) => exp.contract.type !== ContractType.Training)
    this.renderExperiences("#training", resume.experiences, (exp) => exp.contract.type === ContractType.Training)
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
    this.root.querySelector("address").textContent = people.home.name
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
