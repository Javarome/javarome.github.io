import {SkillComponent} from "../../skill/SkillComponent.mjs"

const style = `
:host {
  display: flex;
  flex-direction: row;
  padding: 0.2em 0;
}
.org {
  padding: 0 0.5em;
}
.end::before {
  content: "-";
}

.name {
  &::after {
    content: " : ";
  }

  order: 1;
}

.start {
  order: 2;
}

.end {
  order: 3;
}

&.time-first {
  .start {
    order: 1;
  }

  .end {
    order: 2;
  }

  .name {
    &::before {
      content: " : ";
    }

    &::after {
      content: "";
    }

    order: 3;
  }
}
.skills {
  margin-left: 0.35em;
}
`
const template = document.createElement("template")
template.innerHTML = `<style>${style}</style>
<!--
<time class="start"></time>
<time class="end"></time>
<a href="" class="org"><span class="org-name"></span></a>
-->
<div class="description"></div>
<div class="skills"></div>
`

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

  /**
   * @param {Experience} experience
   */
  setExperience(experience) {
    this.experience = experience
    this.render()
  }

  render() {
    const experience = this.experience
    this.shadow.querySelector(".description").textContent = experience.description
    const skillsRoot = this.shadow.querySelector(".skills")
    const skillEls = SkillComponent.fromSkills(experience.skills)
    for (let i = 0; i < skillEls.length; i++) {
      const skillEl = skillEls[i]
      skillsRoot.append(skillEl)
    }
  }
}

const name = ExperienceComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, ExperienceComponent)
}
