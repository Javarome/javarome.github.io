import {projects_en} from "./Projects_en.mjs"
import {contracts_en} from "./contract/Contracts_en.mjs"
import {ExperienceMessages} from "./ExperienceMessages.mjs"
import {history_en} from "../HistoryMessages_en.mjs"

class ExperienceMessages_en extends ExperienceMessages {
  title = "Work Experience"
  contracts = contracts_en
  projects = projects_en
  history = history_en
}
export const experience_en = new ExperienceMessages_en()
