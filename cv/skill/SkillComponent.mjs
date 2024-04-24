import style from "./SkillComponent.css?raw"

const template = document.createElement("template")
template.innerHTML = `<style>${style}</style>`

export class SkillComponent extends HTMLElement {
  /**
   * @readonly
   * @type {string}
   */
  static NAME = "cv-skill"

  /**
   * @member {Skill}
   */
  skill

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: "closed"})
  }

  /**
   * @param {Skill} skill
   */
  setSkill(skill) {
    this.skill = skill
    this.render()
  }

  render() {
    this.shadow.innerHTML = ""
    let temp = template.content.cloneNode(true)
    this.shadow.appendChild(temp)
    const skill = this.skill
    const skillLink = document.createElement("a")
    skillLink.href = skill.url.href
    skillLink.className = skill.withImplied().map(skill => skill.name.toLowerCase().replaceAll(" ", "-")).join(" ")
    skillLink.textContent = skill.name
    skillLink.title = skill.description
    this.shadow.append(skillLink)
  }

  /**
   * @param {Skill} skill
   * @return {SkillComponent}
   */
  static fromSkill(skill) {
    const skillEl = document.createElement(SkillComponent.NAME)
    skillEl.setSkill(skill)
    return skillEl
  }
}

const name = SkillComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, SkillComponent)
}
