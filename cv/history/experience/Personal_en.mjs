import {personalProjects_en} from "./PersonalProjects_en.mjs"
import {ExperienceMessages} from "./ExperienceMessages.mjs"
import {history_en} from "../HistoryMessages_en.mjs"

class PersonalMessages_en extends ExperienceMessages {
  title = "Side projects"
  projects = personalProjects_en
  history = history_en
}
export const personal_en = new PersonalMessages_en()
