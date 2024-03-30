import {ExperienceMessages} from "../ResumeMessages.mjs"

class ExperienceMessages_en extends ExperienceMessages {
  title = "Experience"
  contracts = {
    arianee: {title: "Web3 tooling tech lead"},
    beam: {title: "Web lead dev"}
  }
  projects = {
    dapp: `Wallet <abbr title="Decentralized App">dApp</abbr>`,
    arn: "Web3-website tooling library & SaaS",
    kelpie: `Web3 CMS maintenance & <abbr title="End of Life">EOL</abbr>`,
    beamWebApp: "Responsive web app to browse/find/edit notes"
  }
}
export const experience_en = new ExperienceMessages_en()
