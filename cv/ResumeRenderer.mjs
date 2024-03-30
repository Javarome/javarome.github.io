import {HistoryComponent} from "./history/HistoryComponent.mjs"
import {ContractType} from "./history/item/experience/Contract.mjs"
import {SkillComponent} from "./skill/SkillComponent.mjs"
import {Skill} from "./skill/Skill.mjs"

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
   * @member {ResumeMessages}
   */
  messages

  /**
   * @param {Node} root
   * @param {ResumeMessages} messages
   */
  constructor(root, messages) {
    this.root = root
    this.messages = messages
    window.cvRenderer = this
  }

  /**
   *
   * @param {Resume} resume
   * @param {string} searchStr
   * @param {ResumeRenderOptions} options
   */
  render(resume, searchStr, options) {
    const search = searchStr.trim().toLowerCase()
    this.renderPeople(resume.people)
    const title = resume.title
    const root = this.root
    if (title) {
      root.querySelector(".title").textContent = title
    }
    const statement = resume.statement
    if (statement) {
      root.querySelector(".statement").textContent = statement
    }
    const allSkills = resume.experiences.flatMap(exp => exp.skills)
    this.renderSkills(root.querySelector("#skills"), allSkills, search)
    this.renderExperiences(this.messages.experience.title, root.querySelector("#experience"),
      resume.experiences.filter(exp => exp.contract.type !== ContractType.Training), search)
    this.renderExperiences(this.messages.training.title, root.querySelector("#training"),
      resume.experiences.filter(exp => exp.contract.type === ContractType.Training), search)
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
    linksRoot.innerHTML = ""
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
   * @param {Skill[]} allSkills
   * @param {string} search
   */
  renderSkills(skillsRoot, allSkills, search) {
    const skills = allSkills.filter((skill) => skill.name.toLowerCase().indexOf(search) >= 0)
    const title = skillsRoot.querySelector("h2")
    title.textContent = this.messages.skills.title
    const skillsLevel = new Map()
    for (const skill of skills) {
      const currentLevel = skillsLevel.get(skill) || 0
      skillsLevel.set(skill, currentLevel + 1)
    }
    const list = skillsRoot.querySelector("ul")
    if (skillsLevel.size > 0) {
      list.innerHTML = ""
      for (const skillsEntry of skillsLevel.entries()) {
        const skill = skillsEntry[0]
        const level = skillsEntry[1]
        const skillEl = SkillComponent.fromSkill(skill)
        skillEl.style = "font-size: " + (10 + level * 2) + "px"
        list.append(skillEl)
      }
    } else {
      list.innerHTML = this.messages.skills.none(search)
    }
  }

  /**
   *
   * @param {string} title
   * @param {Element} section
   * @param {Experience[]} exps
   * @param search
   */
  renderExperiences(title, section, exps, search) {
    const experiences = exps.filter(exp => exp.skills.find(skill => skill.name.toLowerCase().indexOf(search) >= 0) ? exp : undefined)
    section.innerHTML = ""
    const sortedExps = experiences.sort((a, b) => a.startDate.getTime() < b.startDate.getTime() ? 1 : a.startDate.getTime() > b.startDate.getTime() ? -1 : 0)
    /**
     * @type {HistoryComponent}
     */
    const historyEl = document.createElement("cv-history")
    historyEl.heading = title
    historyEl.setExperiences(sortedExps)
    section.append(historyEl)
  }
}
