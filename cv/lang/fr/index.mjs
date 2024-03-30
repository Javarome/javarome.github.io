import {skillList_fr} from "./SkillList_fr.mjs"

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
    ...skillList_fr
  },
  experience: {
    title: "Expérience",
    none: (search) => `⚠️ Pas d'expérience avec la compétence "${search}"`,
    projects: {
      dapp: "dApp de Wallet",
      arn: "Bibliothèque d'outils pour créer des sites Web3"
    }
  },
  training: {
    title: "Formation",
    none: (search) => `⚠️ Pas de formation avec la compétence "${search}"`
  }
}
