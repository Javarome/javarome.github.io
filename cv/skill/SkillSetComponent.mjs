import {SkillComponent} from "./SkillComponent.mjs"
import style from "./SkillSetComponent.css?raw"
import html from "./SkillSetComponent.html?raw"

const template = document.createElement("template")
template.innerHTML = `<style>${style}</style>${html}`

export class SkillSetComponent extends HTMLElement {
  /**
   * @readonly
   * @type {string}
   */
  static NAME = "cv-skill-set"

  /**
   * @member {Skill[]}
   */
  skills

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: "closed"})
    this.shadow.appendChild(template.content.cloneNode(true))
  }

  static attr = {
    skillsImplied: "skills-implied"
  }

  static get observedAttributes() {
    return Object.values(SkillSetComponent.attr)
  }

  attributeChangedCallback(_name, _oldValue, _newValue) {
    this.render()
  }

  /**
   * @param {Skill[]} skills
   */
  setSkills(skills) {
    this.skills = skills
    this.render()
  }

  /**
   * @param {Skill[]} skills
   * @param {boolean} renderImplied
   * @return {Skill[]}
   */
  getSkills(skills, renderImplied) {
    return renderImplied ? skills.flatMap(skill => skill.withImplied()) : skills
  }

  render() {
    const ul = this.shadow.querySelector("ul")
    ul.innerHTML = ""
    const skills = this.skills
    if (skills) {
      const allSkills = this.getSkills(skills, this.getAttribute(SkillSetComponent.attr.skillsImplied) === "true")
      const skillsWithImplied = /** @type {Skill[]} */ new Set(allSkills)
      const skillEls = Array.from(skillsWithImplied).map(SkillComponent.fromSkill)
      for (let i = 0; i < skillEls.length; i++) {
        ul.append(skillEls[i])
      }
    }
  }

  /**
   * @param {Skill[]} skills
   * @return {SkillSetComponent}
   */
  static fromSkills(skills) {
    const skillEl = document.createElement(SkillSetComponent.NAME)
    skillEl.setSkills(skills)
    return skillEl
  }
}

const name = SkillSetComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, SkillSetComponent)
}
