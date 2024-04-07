import {SkillComponent} from "./SkillComponent.mjs"

export class SkillsRenderer {
  /**
   * @member {HTMLElement}
   */
  root

  /**
   * @member {SkillsMessages}
   */
  messages

  /**
   * @param {Element} root
   * @param {SkillsMessages} messages
   */
  constructor(root, messages) {
    this.root = root
    this.messages = messages
  }

  /**
   *
   * @param {Resume} resume
   * @param {Skill[]} allSkills
   * @param {string} search
   */
  render(resume, allSkills, search) {
    const searchTerms = search.split(/[ ,]/).map(s => s.toLowerCase())
    const skills = searchTerms[0] === "" ? allSkills : allSkills.filter(skill =>
      searchTerms.filter(searchTerm => {
        if (skill.description.toLowerCase().indexOf(searchTerm) >= 0) {
          return searchTerm
        } else {
          return undefined
        }
      }).length > 0 ? skill : undefined)
    const title = this.root.querySelector("h2")
    title.textContent = this.messages.title
    const skillsLevel = new Map()
    for (const skill of skills) {
      const currentLevel = skillsLevel.get(skill) || 0
      skillsLevel.set(skill, currentLevel + 1)
    }
    const list = this.root.querySelector("ul")
    if (skillsLevel.size > 0) {
      list.innerHTML = ""
      for (const skillsEntry of skillsLevel.entries()) {
        const skill = skillsEntry[0]
        const level = skillsEntry[1]
        const skillEl = SkillComponent.fromSkill(skill)
        skillEl.style = `font-size: ${10 + level * 2}px`
        list.append(skillEl)
      }
    } else {
      list.innerHTML = this.messages.none(search)
    }
  }
}
