/**
 * @abstract
 * @template P
 */
export class ExperienceMessages {
  /**
   * @abstract
   * @type {string}
   */
  title

  /**
   * @abstract
   * @type {P}
   */
  projects

  /**
   * @abstract
   * @type {ContractsMessages}
   */
  contracts

  /**
   * @abstract
   * @type {HistoryMessages}
   */
  history
}
