import {ContractMessages, ContractsMessages} from "./ContractsMessages.mjs"

const ringover_fr = new class extends ContractMessages {
  name = "Ringover"
  title = "Responsable technique de projets"
  url = new URL("https://ringover.fr")
  description = `Ringover fournit des services de téléphonie numérique`
}()

const mobkoi_fr = new class extends ContractMessages {
  name = "Mobkoi"
  title = "Responsable des développements web"
  url = new URL("https://mobkoi.com")
  description = `Mobkoi fournit des services de rendu et placement de publicités`
}()

const thesteps_fr = new class extends ContractMessages {
  name = "thesteps.to"
  title = "Projet personnel"
  url = new URL("https://thesteps.to")
  description = `Aide à la réalisation de projets personnels`
}()

const arianee_fr = new class extends ContractMessages {
  name = "Arianee"
  title = "Responsable de l'équipe outils Web3"
  url = "https://arianee.com"
  description = `Arianee fournit des services Web3 à des sociétés commerciales`
}()

const githubAccount_fr = new class extends ContractMessages {
  name = "GitHub"
  url = "https://github.com/Javarome"
  description = `GitHub`
  title = `Projet personnel GitHub`
}()

const beam_fr = new class extends ContractMessages {
  name = "Beam"
  title = "Responsable des développements web"
  url = new URL("https://beamapp.co")
  description = `Beam fournit un nouveau type de navigateur capable de prendre des notes`
}()

const zelros_fr = new class extends ContractMessages {
  name = "Zelros"
  url = "https://zelros.com"
  description = `Zelros fournit des services aux assurances augmentés par l'IA`
  title = "Responsable technique de projets"
}()

const famicity_fr = new class extends ContractMessages {
  name = "Famicity"
  url = "https://famicity.com"
  description = `Famicity fournit un réseau social pour la famille et les généalogistes`
  title = "Développeur web sénior"
}()

const traveldoo_fr = new class extends ContractMessages {
  name = "Traveldoo"
  url = "https://web.archive.org/web/20120520003824/http://www.traveldoo.com/fr/home.html"
  description = `Traveldoo fournit aux entreprises des services de réservation (hotels, voyages) en ligne`
  title = "Développeur web sénior"
}()

const xooloo_fr = new class extends ContractMessages {
  name = "Xooloo"
  url = "https://xooloo.fr"
  description = `Xooloo édite un logiciel de contrôle parental pour les <abbr title="Internet Service Provider">ISP</abbr>`
  title = "Développeur sénior et responsable qualité"
}()

const xcalia_fr = new class extends ContractMessages {
  name = "Xcalia"
  url = "https://xcalia.com"
  description = `Xcalia édite une implémentation <abbr title="Java Data Objects">JDO</abbr>`
  title = "Responsable du pôle kernel et persistance relationnelle"
}()

const valtech_fr = new class extends ContractMessages {
  name = "Valtech"
  url = "https://valtech.com"
  description = `Valtech fournit des services de conseil et formation sur les technologies logicielles de pointe`
  title = "Architecte logiciel"
}()

const sqlTech_fr = new class extends ContractMessages {
  name = "SQL Tech"
  url = "https://sqltech.com"
  description = `SQL Tech fournit des services de conseil et réalisation de projets IT`
  title = "Responsable du centre de compétences Java"
}()

const ibm_fr = new class extends ContractMessages {
  name = "IBM"
  url = "https://ibm.com"
  description = `Le IBM EMEA Software Group fournit des solutions logicielles à des sociétés`
  title = "Développeur (stagiaire)"
}()

const isty_fr = new class extends ContractMessages {
  name = "ISTY"
  url = "https://www.isty.uvsq.fr"
  description = `L'Institut des Sciences et Techniques des Yvelines est une école d'ingénieurs en informatique publique de l'Université de Versailles`
  title = "Ingénieur en informatique"
}()

const iut_fr = new class extends ContractMessages {
  name = "IUT de Vélizy"
  url = "https://www.iut-velizy-rambouillet.uvsq.fr/"
  description = `L'IUT de Vélizy est un Institut Universitaire de Technologie public permettant l'obtentention d'un DUT informatique`
  title = "DUT Informatique"
}()

class ContractsMessages_fr extends ContractsMessages {
  ringover = ringover_fr
  mobkoi = mobkoi_fr
  thesteps = thesteps_fr
  arianee = arianee_fr
  githubAccount = githubAccount_fr
  beam = beam_fr
  zelros = zelros_fr
  famicity = famicity_fr
  traveldoo = traveldoo_fr
  xooloo = xooloo_fr
  xcalia = xcalia_fr
  valtech = valtech_fr
  sqlTech = sqlTech_fr
  ibm = ibm_fr
  isty = isty_fr
  iut = iut_fr
}
export const contracts_fr = new ContractsMessages_fr()
