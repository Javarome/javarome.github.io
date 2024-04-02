import {HistoryComponent} from "./history/HistoryComponent.mjs"
import {SkillComponent} from "./skill/SkillComponent.mjs"
import {Skill} from "./skill/Skill.mjs"
import {ResumeMessages} from "./ResumeMessages.mjs"
import {ContractType} from "./history/experience/contract/Contract.mjs"

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
      if (this.root instanceof Document) {
        this.root.head.append(`<meta name="description" content="${title}">`)
      }
    }
    const statement = resume.statement
    if (statement) {
      root.querySelector(".statement").textContent = statement
    }
    const allSkills = resume.experiences.flatMap(exp => exp.skills)
    this.renderSkills(root.querySelector("#skills"), allSkills, search)
    /**
     * @type {ExperienceSectionOptions}
     */
    const experienceOptions = options.experience
    const experienceSection = this.renderExperiences("experience", resume.experiences.filter(exp => exp.contract.type !== ContractType.Training), search, experienceOptions)
    experienceSection.setAttribute("group", Boolean(experienceOptions.group).toString())
    const trainingSection = this.renderExperiences("training", resume.experiences.filter(exp => exp.contract.type === ContractType.Training), search, options.training)
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
      doc.head.append(`<meta name="description" content="${people.title}">`)
    }
    const address = this.root.querySelector("address")
    address.addEventListener("click", () => {
      window.open(`https://www.google.com/maps/embed/v1/place?q=${address.textContent}&key=AIzaSyDqiEN85qBXI9QJFlJM5E0LMOcllLvuR4I`)
    })
    this.root.querySelector("h1").textContent = name
    const addrItems = people.home.name.split(", ")
    address.innerHTML = `
<span class="street">${addrItems[0]}<br></span>${addrItems[1]}<br><span class="country">${addrItems[2]}</span>`
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
    const searchTerms = search.split(/[ ,]/).map(s => s.toLowerCase())
    const skills = searchTerms[0] === "" ? allSkills : allSkills.filter(skill =>
      searchTerms.filter(searchTerm => skill.description.toLowerCase().indexOf(searchTerm) >= 0
        ? searchTerm : undefined).length > 0 ? skill : undefined)
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
