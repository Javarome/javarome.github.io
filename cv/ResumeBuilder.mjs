import {Resume} from "./Resume.mjs"

export class ResumeBuilder {
  /**
   * @member {string}
   */
  name

  /**
   * @member {Experience[]}
   */
  experiences = []

  constructor() {
  }

  /**
   * @param {string} name
   * @return this
   */
  withName(name) {
    this.name = name
    return this
  }

  /**
   *
   * @param {Experience} experience
   * @return {ResumeBuilder}
   */
  withExperience(experience) {
    this.experiences.push(experience)
    return this
  }

/**
   *
   * @param {Experience} training
   * @return {ResumeBuilder}
   */
  withTraining(training) {
    return this.withExperience(training)
  }

  /**
   *
   * @return {Resume}
   */
  build() {
    return new Resume(this.name, this.experiences)
  }
}
