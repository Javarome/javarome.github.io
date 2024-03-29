export class UsedSkill {
  /**
   * @param {Skill} skill
   * @param {number} level
   */
  constructor(skill, level = 1) {
    this.skill = skill
    this.level = level
  }
}
