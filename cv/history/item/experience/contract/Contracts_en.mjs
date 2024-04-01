import {ContractMessages, ContractsMessages} from "./ContractsMessages.mjs"
import {Link} from "../../../../Link.mjs"

const arianee_en = new class extends ContractMessages {
  name = "Arianee"
  url = "https://arianee.com"
  description = `Arianee aims to provide Web3 services to retail companies`
  title = "Web3 tooling tech lead"
}()

const beam_en = new class extends ContractMessages {
  name = "Beam"
  url = "https://beamapp.co"
  description = `Beam aimed to build a new kind of browser which allowed to take notes`
  title = "Web3 tooling tech lead"
}()

const zelros_en = new class extends ContractMessages {
  name = "Zelros"
  url = "https://zelros.com"
  description = `Zelros provides AI-augmented insurance services`
  title = "Lead software developer"
}()

const famicity_en = new class extends ContractMessages {
  name = "Famicity"
  url = "https://famicity.com"
  description = `Famicity built a social network app for families and genealogists`
  title = "Senior Web Developer"
}()

const traveldoo_en = new class extends ContractMessages {
  name = "Traveldoo"
  url = "https://traveldoo.com"
  description = `Traveldoo aims to offer hotel & travel booking services to companies`
  title = "Senior Web Developer"
}()

class ContractsMessages_en extends ContractsMessages {
  arianee = arianee_en
  beam = beam_en
  zelros = zelros_en
  famicity = famicity_en
  traveldoo = traveldoo_en
}

export const contracts_en = new ContractsMessages_en()
