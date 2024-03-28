import {ResumeRenderer} from "./ResumeRenderer.mjs"
import {ResumeBuilder} from "./ResumeBuilder.mjs"
import {Organization} from "./org/Organization.mjs"
import {ProfessionalExperience} from "./history/item/experience/ProfessionalExperience.mjs"
import {Training} from "./history/item/experience/Training.mjs"
import {Company} from "./org/Company.mjs"

const arianee = new Company("Arianee", new URL("https://arianee.com"))
const beam = new Company("Beam", new URL("https://beamapp.co"))
const zelros = new Company("Zelros", new URL("https://zelros.com"))
const isty = new Organization("ISTY", new URL("https://www.isty.uvsq.fr"))
const myResume = new ResumeBuilder()
  .withName("Jérôme Beau")
  .withExperience(new ProfessionalExperience(arianee, new Date(2022, 11 - 1, 14), new Date(2023, 11 - 1, 16)))
  .withExperience(new ProfessionalExperience(beam, new Date(2021, 3 - 1, 1), new Date(2022, 9 - 1, 1)))
  .withExperience(new ProfessionalExperience(zelros, new Date(2019, 1 - 1, 1), new Date(2021, 2 - 1, 1)))
  .withExperience(new Training(isty, new Date(1994, 9 - 1, 1), new Date(1997, 6 - 1, 1)))
  .build()
new ResumeRenderer(document).render(myResume, {mode: {functional: true}})
