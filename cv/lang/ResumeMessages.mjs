export class PeopleMessages {
  /**
   * @type {string}
   */
  title

  /**
   * @type {string}
   */
  statement

  /**
   * @type {string}
   */
  address
}

export class SkillInfoMessage {
  /**
   *
   */
  link
}

export class SkillsMessages {
  /**
   * @type {string}
   */
  title

  /**
   * @type {(search) => string}
   */
  none

  /**
   * @type {SkillList}
   */
  list
}

export class ProjectsMessages {
  /**
   * @type {string}
   */
  dapp
}

export class ExperienceMessages {
  /**
   * @type {string}
   */
  title

  /**
   * @type {ProjectsMessages}
   */
  projects
}

export class TrainingMessages {
  /**
   * @type {string}
   */
  title
}

export class ResumeMessages {
  /**
   * @type {PeopleMessages}
   */
  people

  /**
   * @type {SkillsMessages}
   */
  skills

  /**
   * @type {ExperienceMessages}
   */
  experience

  /**
   * @type {TrainingMessages}
   */
  training
}
