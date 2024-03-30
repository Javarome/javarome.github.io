import {Skill} from "../skill/Skill.mjs"

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
   * @type {Skill}
   */
  angularJS

  /**
   * @type {Skill}
   */
  angular
  /**
   * @type {Skill}
   */
  js
  /**
   * @type {Skill}
   */
  ts
  /**
   * @type {Skill}
   */
  nx
  /**
   * @type {Skill}
   */
  c
  /**
   * @type {Skill}
   */
  cpp
  /**
   * @type {Skill}
   */
  postgresql
  /**
   * @type {Skill}
   */
  nlp
  /**
   * @type {Skill}
   */
  phonegap
  /**
   * @type {Skill}
   */
  xcode
  /**
   * @type {Skill}
   */
  java
  /**
   * @type {Skill}
   */
  swing
  /**
   * @type {Skill}
   */
  perforce
  /**
   * @type {Skill}
   */
  junit
  /**
   * @type {Skill}
   */
  jdo
  /**
   * @type {Skill}
   */
  jdbc
  /**
   * @type {Skill}
   */
  oracle
  /**
   * @type {Skill}
   */
  mysql
  /**
   * @type {Skill}
   */
  beyondCompare
  /**
   * @type {Skill}
   */
  versant
  /**
   * @type {Skill}
   */
  idea
  /**
   * @type {Skill}
   */
  eclipse
  /**
   * @type {Skill}
   */
  ejb
  /**
   * @type {Skill}
   */
  j2ee
  /**
   * @type {Skill}
   */
  fastify
  /**
   * @type {Skill}
   */
  nodejs
  /**
   * @type {Skill}
   */
  python
}

export class ExperienceMessages {
  /**
   * @type {string}
   */
  title
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
