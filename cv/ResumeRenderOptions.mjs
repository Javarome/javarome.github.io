export class ResumeSectionOptions {
  /**
   * @member {boolean}
   */
  open

  /**
   * @member {SkillsRenderOptions | undefined}
   */
  skills
}

export class ResumeRenderOptions {
  /**
   * @type {ResumeSectionOptions}
   */
  skills

  /**
   * @type {ResumeSectionOptions}
   */
  experience

  /**
   * @type {ResumeSectionOptions}
   */
  training
}
