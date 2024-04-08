const style = `
:host {
  display: inline-block;
  margin: 0.1em 0.1em;
  --web-color: rgba(0,255,0,0.1);
  --java-color: rgba(255,0,0,0.1);
  --tool-color: rgba(255,0,255,0.1);
  --dbms-color: color-mix(in srgb,var(--tool-color),#000 5%);
  --js-color: lightblue;
  --ts-color: color-mix(in srgb,var(--js-color),#000 5%);
  --ts-product-color: color-mix(in srgb,var(--ts-color),#000 5%);
}
a {
  display: inline;
  font-size: 0.8em;
  padding: 0.15em 0.35em;
  border-radius: 0.3em;
  text-decoration: none;
}
.html { background-color: var(--web-color) }
.javascript { background-color: var(--js-color) }
.typescript { background-color: var(--ts-color) }
.angular { background-color: var(--ts-product-color) }
.java { background-color: var(--java-color) }
.tool { background-color: var(--tool-color) }
.dbms { background-color: var(--dbms-color) }
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
