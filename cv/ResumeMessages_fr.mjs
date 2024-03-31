import {ResumeMessages} from "./ResumeMessages.mjs"
import {skillList_fr} from "./skill/SkillList_fr.mjs"
import {experience_fr} from "./history/item/experience/Experience_fr.mjs"

class ResumeMessages_fr extends ResumeMessages {
  people = {
    title: "Développeur sénior et responsable d'équipe",
    statement: "+25 ans d'expérience du développement front et back, l'encadrement et la motivation d'équipes de développeurs. Je conçois mes projets pour rester maintenables et accueillir le changement rapidement. Spécialisé dans le web vanilla & standard. Je peux prendre un projet en charge depuis l'expression des besoins jusqu'à la mise en production."
  }
  skills = {
    title: "Compétences",
    none: (search) => `⚠️ Pas de compétence "${search}"`,
    list: skillList_fr
  }
  experience = experience_fr
  training = {
    title: "Formation"
  }
}
export const fr = new ResumeMessages_fr()
