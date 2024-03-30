import {skillList_fr} from "./SkillList_fr.mjs"
import {experience_fr} from "./Experience_fr.mjs"

/**
 * @type {ResumeMessages}
 */
export const fr = {
  people: {
    title: "Développeur sénior et responsable d'équipe",
    statement: "+25 ans d'expérience du développement front et back, l'encadrement et la motivation d'équipes de développeurs. Je conçois mes projets pour rester maintenables et accueillir le changement rapidement. Spécialisé dans le web vanilla & standard. Je peux prendre un projet en charge depuis l'expression des besoins jusqu'à la mise en production."
  },
  skills: {
    title: "Compétences",
    none: (search) => `⚠️ Pas de compétence "${search}"`,
    list: skillList_fr
  },
  experience: experience_fr,
  training: {
    title: "Formation"
  }
}
