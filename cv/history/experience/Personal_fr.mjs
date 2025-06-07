import {ExperienceMessages} from "./ExperienceMessages.mjs"
import {personalProjects_fr} from "./PersonalProjects_fr.mjs"
import {history_fr} from "../HistoryMessages_fr.mjs"

class PersonalMessages_fr extends ExperienceMessages {
  title = "Projets personnels"
  projects = personalProjects_fr
  history = history_fr
}
export const personal_fr = new PersonalMessages_fr()
