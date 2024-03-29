const style = `
:host {
  display: inline;
  font-size: 0.8em;
  padding: 0.25em 0.5em;
  background-color: aliceblue;
  border-radius: 0.5em;
}
`
const template = document.createElement("template")
template.innerHTML = `
<style>${style}</style>
`

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
    this.shadow.appendChild(template.content.cloneNode(true))
    const skill = this.skill
    const skillLink = document.createElement("a")
    skillLink.href = skill.url.href
    skillLink.textContent = skill.name
    skillLink.title = skill.description
    this.shadow.append(skillLink)
  }

  /**
   *
   * @param {Skill} skill
   * @return {SkillComponent}
   */
  static fromSkill(skill) {
    const skillEl = document.createElement("cv-skill")
    skillEl.setSkill(skill)
    return skillEl
  }

  /**
   * @param {Skill[]} skills
   * @return {Element[]}
   */
  static fromSkills(skills) {
    const skillEls = []
    for (const skill of skills) {
      skillEls.push(SkillComponent.fromSkill(skill))
    }
    return skillEls
  }
}

const name = SkillComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, SkillComponent)
}
