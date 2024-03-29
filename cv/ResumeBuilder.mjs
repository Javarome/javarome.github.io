import {Resume} from "./Resume.mjs"

export class ResumeBuilder {
  /**
   * @member {Experience[]}
   */
  experiences = []

  /**
   * @param {People} people
   * @return this
   */
  of(people) {
    this.people = people
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
    return new Resume(this.people, this.experiences)
  }
}
