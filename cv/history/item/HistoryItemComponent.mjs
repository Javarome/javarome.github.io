import "./experience/skill/SkillComponent.mjs"
import {SkillComponent} from "./experience/skill/SkillComponent.mjs"

const style = `:host {
  display: flex;
  flex-direction: row;
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
`
const template = document.createElement("template")
template.innerHTML = `<style>${style}</style>
<time class="start"></time>
<time class="end"></time>
<a href="" class="org"><span class="org-name"></span></a>
<span class="description"></span>
<span class="skills"></span>
`

export class HistoryItemComponent extends HTMLElement {
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

  setDate(date, clazz) {
    const dateEl = this.shadow.querySelector("time." + clazz)
    dateEl.dateTime = date.toISOString()
    dateEl.textContent = this.date(date)
  }

  date(date) {
    const options = {
      year: "numeric",
      month: "long",
      day: undefined
    }
    return date.toLocaleDateString(navigator.language, options)
  }

  render() {
    const experience = this.experience
    this.setDate(experience.startDate, "start")
    this.setDate(experience.endDate, "end")
    const websiteLink = this.shadow.querySelector("a")
    const contract = experience.contract
    const org = contract.org
    websiteLink.href = org.website
    this.shadow.querySelector(".org-name").textContent = org.name
    this.shadow.querySelector(".description").textContent = experience.description
    const skillsRoot = this.shadow.querySelector(".skills")
    const skillEls = SkillComponent.fromSkills(experience.skills)
    for (let i = 0; i < skillEls.length; i++) {
      const skillEl = skillEls[i]
      skillsRoot.append(skillEl)
      if (i < skillEls.length - 1) {
        skillsRoot.append(", ")
      }
    }
  }
}

const name = HistoryItemComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, HistoryItemComponent)
}
