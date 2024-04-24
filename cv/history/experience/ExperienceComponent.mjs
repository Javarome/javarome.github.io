import {SkillSetComponent} from "../../skill/SkillSetComponent.mjs"
import style from "./ExperienceComponent.css?raw";
import html from "./ExperienceComponent.html?raw";

const template = document.createElement("template")
template.innerHTML = `<style>${style}</style>${html}`

export class ExperienceComponent extends HTMLElement {
  /**
   * @readonly
   * @type {string}
   */
  static NAME = "cv-history-item"

  /**
   * @member {Experience}
   */
  experience

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: "closed"})
    this.shadow.appendChild(template.content.cloneNode(true))
  }

  static attr = {
    skillsImplied: "skills-implied"
  }

  static get observedAttributes() {
    return Object.values(ExperienceComponent.attr)
  }

  attributeChangedCallback(_name, _oldValue, _newValue) {
    this.render()
  }

  /**
   * @param {Experience} experience
   */
  setExperience(experience) {
    this.experience = experience
    this.render()
  }

  /**
   * @param {Skill} skill
   * @return {Skill[]}
   */
  getSkillsWithImplied(skill) {
    return [skill].concat(skill.implied.flatMap(skill => this.getSkillsWithImplied(skill)))
  }

  /**
   * @param {Skill[]} skills
   * @param {boolean} renderImplied
   * @return {Skill[]}
   */
  getSkills(skills, renderImplied) {
    return renderImplied ? skills.flatMap(skill => this.getSkillsWithImplied(skill)) : skills
  }

  render() {
    const experience = this.experience
    const skillsRoot = this.shadow.querySelector(".skills")
    skillsRoot.innerHTML = ""
    if (experience) {
      this.shadow.querySelector(".description").innerHTML = experience.description
      const withImplied = this.getAttribute(ExperienceComponent.attr.skillsImplied) === true
      const skillSet = SkillSetComponent.fromSkills(this.getSkills(experience.skills, withImplied))
      skillsRoot.append(skillSet)
    }
  }
}

const name = ExperienceComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, ExperienceComponent)
}
