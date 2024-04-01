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
  url = "https://web.archive.org/web/20120520003824/http://www.traveldoo.com/fr/home.html"
  description = `Traveldoo aims to offer hotel & travel booking services to companies`
  title = "Senior Web Developer"
}()

const xooloo_en = new class extends ContractMessages {
  name = "Xooloo"
  url = "https://xooloo.com"
  description = `Xooloo sells parental control software to <abbr title="Internet Service Provider">ISP</abbr>`
  title = "Senior developer & quality manager"
}()

const xcalia_en = new class extends ContractMessages {
  name = "Xcalia"
  url = "https://xcalia.com"
  description = `Xcalia provides a <abbr title="Java Data Objects">JDO</abbr> implementation`
  title = "Manages the kernel + relational persistence team"
}()

const valtech_en = new class extends ContractMessages {
  name = "Valtech"
  url = "https://valtech.com"
  description = `Valtech provides consulting and training services on cutting-edge software technologies`
  title = "Software Architect"
}()

const isty_en = new class extends ContractMessages {
  name = "ISTY"
  url = "https://www.isty.uvsq.fr"
  description = `L'Institut des Sciences et Techniques des Yvelines est une école d'ingénieurs en informatique publique de l'Université de Versailles`
  title = "Software engineer"
}()

class ContractsMessages_en extends ContractsMessages {
  arianee = arianee_en
  beam = beam_en
  zelros = zelros_en
  famicity = famicity_en
  traveldoo = traveldoo_en
  xooloo = xooloo_en
  xcalia = xcalia_en
  valtech = valtech_en
  isty = isty_en
}

export const contracts_en = new ContractsMessages_en()
