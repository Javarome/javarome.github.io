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

  /**
   * @type {string}
   */
  arn

  /**
   * @type {string}
   */
  kelpie

  /**
   * @type {string}
   */
  beamWebApp
}

export class OrganizationMessages {
  /**
   * @type {string}
   */
  title
}

export class ContractsMessages {
  /**
   * @type {OrganizationMessages}
   */
  arianee

  /**
   * @type {OrganizationMessages}
   */
  beam
}

/**
 * @abstract
 */
export class ExperienceMessages {
  /**
   * @abstract
   * @type {string}
   */
  title

  /**
   * @abstract
   * @type {ProjectsMessages}
   */
  projects

  /**
   * @abstract
   * @type {ContractsMessages}
   */
  contracts
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
