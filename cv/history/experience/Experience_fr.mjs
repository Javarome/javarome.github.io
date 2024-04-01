import {projects_fr} from "./Projects_fr.mjs"
import {ExperienceMessages} from "./ExperienceMessages.mjs"
import {contracts_fr} from "./contract/Contracts_fr.mjs"

class ExperienceMessages_fr extends ExperienceMessages {
  title = "Expérience"
  contracts = contracts_fr
  projects = projects_fr
}

export const experience_fr = new ExperienceMessages_fr()
