import {SkillComponent} from "./SkillComponent.mjs"

class SkillsRenderOptions {
  /**
   * @member {boolean}
   */
  implied
}

export class SkillsRenderer {
  /**
   * Size (in px) of the fine grid cell used to pack the skill tags as a masonry.
   * @readonly
   * @type {number}
   */
  static GRID_UNIT = 8

  /**
   * Minimum gutter (in px) reserved around each tag when computing its grid span, so tags never touch nor overlap.
   * @readonly
   * @type {number}
   */
  static GRID_GAP = 5

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
    let openBeforePrint
    window.matchMedia("print").addEventListener("change", evt => {
      const details = root
      if (details) {
        if (evt.matches) {
          openBeforePrint = details.hasAttribute("open")
          this.open(true)
        } else {
          this.open(openBeforePrint)
        }
      }
    })
  }

  /**
   *
   * @param {Resume} resume
   * @param {Skill[]} allSkills
   * @param {string} search
   * @param {SkillsRenderOptions} search
   */
  render(resume, allSkills, search) {
    const skills = this.searchSkills(search, allSkills)
    const title = this.root.querySelector("h2")
    title.textContent = this.messages.title
    /** @type {Map<Skill,number>} */
    const skillsLevel = new Map()
    for (const skill of skills) {
      const currentLevel = skillsLevel.get(skill) || 0
      skillsLevel.set(skill, currentLevel + 1)
    }
    const list = this.root.querySelector("ul")
    // Remove masonry grid before (re)building so items are measured at their natural size in normal flow.
    list.classList.remove("masonry")
    if (skillsLevel.size > 0) {
      list.innerHTML = ""
      const entries = Array.from(skillsLevel.entries()).sort((a, b) => a[0].name.localeCompare(b[0].name))
      const skillEls = []
      for (const skillsEntry of entries) {
        const skill = skillsEntry[0]
        const level = skillsEntry[1]
        const skillEl = SkillComponent.fromSkill(skill)
        skillEl.style.fontSize = `${10 + level}px`
        list.append(skillEl)
        skillEls.push(skillEl)
      }
      this.packMasonry(list, skillEls)
    } else {
      list.innerHTML = this.messages.none(search)
    }
  }

  /**
   * Packs the skill tags as a CSS-grid masonry: each tag spans as many fine grid cells (of {@link SkillsRenderer.GRID_UNIT}px)
   * as its natural size requires, and `grid-auto-flow: dense` fills the gaps. This lets small tags keep their small height
   * instead of inheriting the height of the largest tag on their row.
   *
   * @param {HTMLElement} list
   * @param {HTMLElement[]} skillEls
   */
  packMasonry(list, skillEls) {
    const unit = SkillsRenderer.GRID_UNIT
    const gap = SkillsRenderer.GRID_GAP
    // Measure all natural sizes first (reads), then assign spans (writes) to avoid layout thrashing.
    // The gutter is baked into the reserved span so tags keep a constant gap and never overlap their neighbour.
    const sizes = skillEls.map(el => [el.offsetWidth, el.offsetHeight])
    skillEls.forEach((el, i) => {
      el.style.gridColumnEnd = `span ${Math.max(1, Math.ceil((sizes[i][0] + gap) / unit))}`
      el.style.gridRowEnd = `span ${Math.max(1, Math.ceil((sizes[i][1] + gap) / unit))}`
    })
    list.classList.add("masonry")
  }

  /**
   * @param {boolean} opened
   */
  open(opened) {
    const details = this.root
    if (opened) {
      details.setAttribute("open", null)
    } else {
      details.removeAttribute("open")
    }
  }

  /**
   * @param {string} search
   * @param {Skill[]} allSkills
   * @return {Skill[]}
   */
  searchSkills(search, allSkills) {
    const searchTerms = search.split(/[ ,]/).map(s => s.toLowerCase())
    if (searchTerms[0] === "") {
      return allSkills
    } else {
      if (searchTerms[searchTerms.length - 1].length === 0) {
        searchTerms.splice(searchTerms.length - 1, 1)
        searchTerms[searchTerms.length - 1] += " "
      }
      return allSkills.filter(skill =>
        searchTerms.filter(searchTerm => {
          if (searchTerm.endsWith(" ") && skill.name.toLowerCase() === searchTerm.toLowerCase()) {
            return searchTerm
          } else if (skill.description.toLowerCase().indexOf(searchTerm) >= 0) {
            return searchTerm
          } else {
            return undefined
          }
        }).length > 0 ? skill : undefined)
    }
  }
}
