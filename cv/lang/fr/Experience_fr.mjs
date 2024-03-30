import {ExperienceMessages} from "../ResumeMessages.mjs"

class ExperienceMessages_fr extends ExperienceMessages {
  title = "Expérience"
  contracts = {
    arianee: {title: "Responsable de l'équipe outils Web3"},
    beam: {title: "Responsable des développements web"}
  }
  projects = {
    dapp: `<abbr title="Decentralized App">dApp</abbr> de Wallet`,
    arn: "Bibliothèque d'outils + SaaS pour créer des sites Web3",
    kelpie: "Maintenance et fin de vie d'un CMS Web3",
    beamWebApp: "Application web réactive de consultation/recherche/édition de notes"
  }
}
export const experience_fr = new ExperienceMessages_fr()
