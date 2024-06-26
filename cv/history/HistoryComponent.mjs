import "./experience/ExperienceComponent.mjs"
import "../search/SearchComponent.mjs"
import {ExperienceComponent} from "./experience/ExperienceComponent.mjs"
import style from "./HistoryComponent.css?raw"
import html from "./HistoryComponent.html?raw"

const template = document.createElement("template")
template.innerHTML = `<style>${style}</style>${html}`

export class HistoryComponent extends HTMLElement {
  /**
   * @readonly
   * @type {string}
   */
  static NAME = "cv-history"

  static attr = {
    skillsImplied: "skills-implied",
    group: "group",
    open: "open"
  }

  /**
   * @type {HistoryMessages}
   */
  messages

  /**
   * @member {Experience[]}
   */
  history = []

  /**
   * @member {string}
   */
  heading

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: "closed"})
    this.shadow.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const details = this.shadow.querySelector("details")
    if (this.getAttribute("open") === "true") {
      details.setAttribute("open", null)
    } else {
      details.removeAttribute("open")
    }
  }

  static get observedAttributes() {
    return Object.values(HistoryComponent.attr)
  }

  attributeChangedCallback(_name, _oldValue, _newValue) {
    this.render()
  }

  /**
   *
   * @param {Experience[]} experiences
   */
  setExperiences(experiences) {
    this.history = experiences
    this.render()
  }

  render() {
    const titleEl = this.shadow.querySelector(".title")
    titleEl.textContent = this.heading
    this.renderHistory()
    const minDate = Math.min(...this.history.map(exp => exp.contract.startDate.getTime()))
    const maxDate = Math.max(...this.history.map(exp => exp.contract.endDate.getTime()))
    titleEl.append(this.renderDuration(new Date(minDate), new Date(maxDate), "total"))
  }

  renderDateStr(clazz, dateTime, text, extraClazz = undefined) {
    const dateEl = document.createElement("time")
    dateEl.className = clazz
    dateEl.part.add("date", clazz)
    if (extraClazz) {
      dateEl.part.add(extraClazz)
    }
    dateEl.dateTime = dateTime
    dateEl.textContent = text
    return dateEl
  }

  renderDate(date, clazz) {
    return this.renderDateStr(clazz, date.toISOString(), this.date(date))
  }

  date(date) {
    const options = {
      year: "numeric",
      month: "short",
      day: undefined
    }
    return date.toLocaleDateString(navigator.language, options)
  }

  renderHistory() {
    const historyEl = this.shadow.querySelector(".history")
    const newHistoryEl = document.createElement("ol")
    newHistoryEl.className = "history"
    if (this.getAttribute(HistoryComponent.attr.group) === "true") {
      this.renderGroups(newHistoryEl)
    } else {
      const projectsItems = this.renderProjects(this.history)
      newHistoryEl.append(...projectsItems)
    }
    historyEl.replaceWith(newHistoryEl)
  }

  renderGroups(newHistoryEl) {
    const orgGroups = this.history.reduce((groups, exp) => {
      const contract = exp.contract
      let projects = groups.get(contract)
      if (!projects) {
        projects = []
        groups.set(contract, projects)
      }
      projects.push(exp)
      return groups
    }, new Map())
    for (const orgData of orgGroups.entries()) {
      const groupItem = this.renderGroup(orgData[0], orgData[1])
      newHistoryEl.append(groupItem)
    }
  }

  /**
   *
   * @param {Contract} contract
   * @param {Experience[]} projects
   * @return {HTMLLIElement}
   */
  renderGroup(contract, projects) {
    const groupItem = document.createElement("li")
    const details = document.createElement("details")
    const summary = document.createElement("summary")
    details.append(summary)

    const heading = document.createElement("h3")
    const groupHead = document.createElement("div")
    groupHead.part.add("group")
    heading.append(groupHead)
    {
      groupHead.append(this.renderOrgLink(contract))
      groupHead.append(this.renderTitle(contract))
      groupHead.append(this.renderDate(contract.startDate, "start"))
      groupHead.append(this.renderDate(contract.endDate, "end"))
      groupHead.append(this.renderDuration(contract.startDate, contract.endDate))
    }
    summary.append(heading)

    const projectsList = document.createElement("ol")
    projectsList.className = "projects"
    const projectItems = this.renderProjects(projects)
    for (const projectItem of projectItems) {
      projectsList.append(projectItem)
    }
    details.append(projectsList)

    groupItem.append(details)

    return groupItem
  }

  /**
   *
   * @param {Date} startDate
   * @param {Date} endDate
   * @param clazz
   * @return {HTMLTimeElement}
   */
  renderDuration(startDate, endDate, clazz = "") {
    const timeDelta = endDate.getTime() - startDate.getTime()
    let years
    let months = timeDelta / 1000 / 3600 / 24 / 30
    let datetime = ""
    if (months >= 12) {
      years = Math.floor(months / 12)
      months = months % 12
    }
    if (years) {
      datetime = years + "Y"
    }
    const rMonths = Math.round(months)
    if (rMonths) {
      datetime += months + "M"
    }
    const duration = this.messages.duration(years, rMonths)
    return this.renderDateStr("duration", datetime, duration, clazz)
  }

  renderTitle(contract) {
    const titleEl = document.createElement("span")
    titleEl.className = "title"
    titleEl.part.add(titleEl.className)
    titleEl.textContent = contract.title
    return titleEl
  }

  renderOrgLink(contract) {
    const websiteLink = document.createElement("a")
    websiteLink.className = "org"
    websiteLink.part.add(websiteLink.className)
    const orgEl = this.renderOrg(contract)
    const org = contract.org
    websiteLink.href = org.link.url
    websiteLink.append(orgEl)
    websiteLink.append(this.renderLogo(org))
    return websiteLink
  }

  renderLogo(org) {
    const logo = document.createElement("img")
    logo.className = "org-logo"
    logo.part.add(logo.className)
    logo.src = org.icon || new URL("favicon.ico", org.link.url)
    logo.onerror = () => logo.remove()
    return logo
  }

  renderOrg(contract) {
    const org = contract.org
    const orgEl = document.createElement("span")
    orgEl.className = "org-name"
    orgEl.part.add(orgEl.className)
    orgEl.textContent = org.link.name
    orgEl.title = org.link.description
    return orgEl
  }

  /**
   *
   * @param {Experience[]} projects
   * @return {HTMLLIElement[]}
   */
  renderProjects(projects) {
    const projectsList = []
    for (const project of projects) {
      const itemExp = document.createElement("li")
      const exp = document.createElement("cv-history-item")
      exp.setAttribute(ExperienceComponent.attr.skillsImplied, this.getAttribute(HistoryComponent.attr.skillsImplied))
      exp.setExperience(project)
      itemExp.append(exp)
      projectsList.push(itemExp)
    }
    return projectsList
  }
}

const name = HistoryComponent.NAME
if (!customElements.get(name)) {
  customElements.define(name, HistoryComponent)
}
