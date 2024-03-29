import {ResumeRenderer} from "./ResumeRenderer.mjs"
import {ResumeBuilder} from "./ResumeBuilder.mjs"
import {Organization} from "./org/Organization.mjs"
import {Contract, ContractType} from "./history/item/experience/Contract.mjs"
import {People} from "./people/People.mjs"
import {Address} from "./place/Address.mjs"
import {Country} from "./place/Country.mjs"
import {Experience} from "./history/item/experience/Experience.mjs"
import {Skill} from "./history/item/experience/skill/Skill.mjs"

const france = new Country("France")
const rueMauriceThorez = new Address("28 rue Maurice Thorez", "92000", "Nanterre", france)
const rueDeBezons = new Address("39 bis rue de Bezons", "92000", "Nanterre", france)
const avDeLEurope = new Address("10-12 Av. de l'Europe", "78140", "Vélizy-Villacoublay", france)
const rueDeLAbbeHazard = new Address("6 rue de l'Abbé Hazard", "92000", "Nanterre", france)
const weWorkParis12 = new Address("198 Avenue de France", "75013", "Paris", france)
const beamAddr = new Address("74 avenue Kleber", "75016", "Paris", france)
const laCaserne = new Address("12 rue Philippe de Girard", "75010", "Paris", france)

const jerome = new People("Beau", "Jérôme", rueDeBezons, 
  [
    {name: "mail", url: new URL("mailto:javarome@gmail.com")},
    {name: "website", url: new URL("https://javarome.com")},
    {name: "blog", url: new URL("https://medium.com/@javarome")}
  ]
)

const angularJS = new Skill("AngularJS", "Legacy Google web framework. Old version of Angular.", new URL("https://angularjs.org"))
const angular = new Skill("Angular", "Google web framework. Modern version of AngularJS.", new URL("https://angular.io"))
const js = new Skill("JavaScript", "Programming language for browsers and NodeJS", new URL("https://ecma-international.org/publications-and-standards/standards/ecma-262/"))
const ts = new Skill("TypeScript", "Microsoft's superset of JavaScript to add typing and OOP", new URL("https://www.typescriptlang.org"))
const nx = new Skill("Nx", "Monorepo tooling", new URL("https://nx.dev"))
const c = new Skill("C", "C programming language", new URL("https://www.open-std.org/jtc1/sc22/wg14/"))
const postgresql = new Skill("PostgreSQL", "Postgres Relational database", new URL("https://www.postgresql.org"))
const nlp = new Skill("NLP", "Natural Language Processing", new URL("https://en.wikipedia.org/wiki/Natural_language_processing"))

const isty = new Organization("ISTY", new URL("https://www.isty.uvsq.fr"), avDeLEurope)
const istyExp = new Contract(isty, ContractType.Training, "Software engineer", new Date(1994, 9 - 1, 1), new Date(1997, 6 - 1, 1))
const cCourse = new Experience(istyExp, istyExp.startDate, istyExp.startDate, "C course", rueDeBezons, [c])

const famicity = new Organization("Famicity", new URL("https://famicity.com"), rueDeLAbbeHazard)
const famicityExp = new Contract(famicity, ContractType.FullTimePermanent, "Senior Web Developer", new Date(2015, 1 - 1, 1), new Date(2018, 11 - 1, 1))
const famicityApp = new Experience(famicityExp, famicityExp.startDate, famicityExp.endDate, "Social network app for families and genealogists", rueMauriceThorez, [ts, angular, angularJS])

const zelros = new Organization("Zelros", new URL("https://zelros.com"), weWorkParis12)
const zelrosExp = new Contract(zelros, ContractType.FullTimePermanent, "Lead Software Developer", new Date(2019, 1 - 1, 1), new Date(2021, 2 - 1, 1))
const kmApp = new Experience(zelrosExp, zelrosExp.startDate, new Date(2020, 9 - 1, 1), "Knowledge management app", rueDeBezons, [ts, nlp, postgresql])

const beam = new Organization("Beam", new URL("https://beamapp.co"), beamAddr)
const beamExp = new Contract(beam, ContractType.FullTimePermanent, "Web lead dev", new Date(2021, 3 - 1, 1), new Date(2022, 9 - 1, 1))
const beamWebApp = new Experience(beamExp, beamExp.startDate, beamExp.endDate, "Responsive web app fetching both GraphQL and REST APIs + encrypting/decrypting payloads", rueDeBezons, [js, ts])

const arianee = new Organization("Arianee", new URL("https://arianee.com"), laCaserne)
const arianeeExp = new Contract(arianee, ContractType.FullTimePermanent, "Web3 tooling tech lead", new Date(2022, 11 - 1, 14), new Date(2023, 11 - 1, 16))
const kelpieProject = new Experience(arianeeExp, new Date(2022, 11 - 1, 14), new Date(2024, 12 - 1, 16), "Web3 CMS maintenance & EOL", rueDeBezons, [angular])
const arnProject = new Experience(arianeeExp, new Date(2022, 12 - 1, 14), new Date(2024, 3 - 1, 16), "Web3-website tooling library", rueDeBezons, [angular, nx])

const myResume = new ResumeBuilder()
  .of(jerome)
  .withTitle("Senior developer & team leader")
  .withStatement("I do stuff")
  .withExperience(famicityApp)
  .withExperience(kelpieProject)
  .withExperience(arnProject)
  .withExperience(beamWebApp)
  .withExperience(kmApp)
  .withExperience(cCourse)
  .build()
new ResumeRenderer(document).render(myResume, {mode: {functional: true}})
