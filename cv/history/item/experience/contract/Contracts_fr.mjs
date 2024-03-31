import {ContractMessages, ContractsMessages} from "./ContractsMessages.mjs"

const arianee_fr = new class extends ContractMessages {
  name = "Arianee"
  title = "Responsable de l'équipe outils Web3"
  url = new URL("https://arianee.com")
  description = `Arianee fournit des services Web3 à des sociétés commerciales`
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

class ContractsMessages_fr extends ContractsMessages {
  arianee = arianee_fr
  beam = beam_fr
  zelros = zelros_fr
  famicity = famicity_fr
}
export const contracts_fr = new ContractsMessages_fr()
