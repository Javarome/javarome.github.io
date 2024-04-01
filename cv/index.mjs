import {ResumeRenderer} from "./ResumeRenderer.mjs"
import {ResumeBuilder} from "./ResumeBuilder.mjs"
import {Organization} from "./org/Organization.mjs"
import {People} from "./people/People.mjs"
import {Address} from "./place/Address.mjs"
import {Country} from "./place/Country.mjs"
import {Experience} from "./history/item/experience/Experience.mjs"
import {Link} from "./Link.mjs"
import {Contract, ContractType} from "./history/item/experience/contract/Contract.mjs"
import {ResumeMessages} from "./ResumeMessages.mjs"

const lang = navigator.language.startsWith("fr") ? "fr" : "en"
document.documentElement.lang = lang
import((`./ResumeMessages_${lang}.mjs`)).then(imported => {
  /**
   * @type {ResumeMessages}
   */
  const messages = imported[lang]
  const france = new Country("France")

  const rueMauriceThorez = new Address("28 rue Maurice Thorez", "92000", "Nanterre", france)
  const rueDeBezons = new Address("39 bis rue de Bezons", "92000", "Nanterre", france)

  const jerome = new People("Beau", "Jérôme", rueDeBezons,
    [
      {name: "📞 tel", url: new URL("tel:+33679796518")},
      {name: "✉ mail", url: new URL("mailto:javarome@gmail.com")},
      {name: "🌐 website", url: new URL("https://javarome.com")},
      {name: "✍ blog", url: new URL("https://medium.com/@javarome")}
    ]
  )

  const skills = messages.skills.list
  const experienceMessages = messages.experience
  const contractsMessages = experienceMessages.contracts
  const projectsMessages = experienceMessages.projects

  const istyAddress = new Address("10-12 Av. de l'Europe", "78140", "Vélizy-Villacoublay", france)
  const isty = new Organization(Organization.linkFromMessages(contractsMessages.isty), istyAddress)
  const istyExp = new Contract(isty, ContractType.Training, contractsMessages.isty.title, new Date(1994, 9 - 1, 1), new Date(1997, 6 - 1, 1))
  const cCourse = new Experience(istyExp, istyExp.startDate, istyExp.endDate, "C course", rueDeBezons, [skills.c])
  const cppCourse = new Experience(istyExp, istyExp.startDate, istyExp.endDate, "C++ course", rueDeBezons, [skills.cpp])

  const valtechAddr = new Address("6 place de la Pyramide", "92908", "Paris-La Défense", france)
  const valtech = new Organization(Organization.linkFromMessages(contractsMessages.valtech), valtechAddr)
  const valtechExp = new Contract(valtech, ContractType.FullTimePermanent, contractsMessages.valtech.title, new Date(1998, 12 - 1, 1), new Date(2002, 2 - 1, 1))
  const ejbCourse = new Experience(valtechExp, new Date(1999, 12 - 1, 1), new Date(2000, 9 - 1, 1), projectsMessages.ejbCourse, valtechAddr, [skills.java, skills.jdbc, skills.ejb])
  const j2eeCourse = new Experience(valtechExp, new Date(2000, 12 - 1, 1), new Date(2001, 9 - 1, 1), projectsMessages.j2eeCourse, valtechAddr, [skills.java, skills.j2ee, skills.jdbc, skills.ejb])

  const xcaliaAddr1 = new Address("26 rue de Chambéry", "75015", "Paris", france)
  const xcaliaAddr2 = new Address("71 rue Desnouettes", "75015", "Paris", france)
  const xcaliaAddr3 = new Address("21 rue des Trois Fontanots", "92000", "Nanterre", france)
  const xcalia = new Organization(Organization.linkFromMessages(contractsMessages.xcalia), xcaliaAddr3)
  const xcaliaExp = new Contract(xcalia, ContractType.FullTimePermanent, contractsMessages.xcalia.title, new Date(2003, 1 - 1, 1), new Date(2010, 5 - 1, 1))
  const lido = new Experience(xcaliaExp, xcaliaExp.startDate, new Date(2005, 9 - 1, 1), projectsMessages.lido, xcaliaAddr1, [skills.java, skills.oracle, skills.jdo, skills.beyondCompare, skills.versant, skills.idea, skills.eclipse, skills.postgresql, skills.mysql])
  const xic = new Experience(xcaliaExp, new Date(2005, 9 - 1, 1), xcaliaExp.endDate, projectsMessages.xic, xcaliaAddr2, [skills.java, skills.jdbc, skills.perforce, skills.junit, skills.oracle, skills.mysql, skills.postgresql, skills.jdo, skills.versant, skills.idea])

  const xoolooAddr = new Address("20 Rue Danielle Casanova", "75002", "Paris", france)
  const xooloo = new Organization(Organization.linkFromMessages(contractsMessages.xooloo), xoolooAddr)
  const xoolooExp = new Contract(xooloo, ContractType.FullTimePermanent, contractsMessages.xooloo.title, new Date(2010, 9 - 1, 1), new Date(2012, 11 - 1, 1))
  const xoolooApp = new Experience(xoolooExp, xoolooExp.startDate, new Date(2011, 9 - 1, 1), projectsMessages.parentalControlApp, xoolooAddr, [skills.xcode, skills.java])
  const xoolooConsole = new Experience(xoolooExp, new Date(2011, 9 - 1, 1), xoolooExp.endDate, projectsMessages.parentalControlConsole, xoolooAddr, [skills.java, skills.swing])

  const traveldooAddr = new Address("130 Rue Victor Hugo", "92300", "Levallois-Perret", france)
  const traveldoo = new Organization(Organization.linkFromMessages(contractsMessages.traveldoo), traveldooAddr)
  const traveldooExp = new Contract(traveldoo, ContractType.FullTimePermanent, contractsMessages.traveldoo.title, new Date(2013, 1 - 1, 1), new Date(2014, 12 - 1, 1))
  const hotelApp = new Experience(traveldooExp, traveldooExp.startDate, new Date(2013, 12 - 1, 1), projectsMessages.itineraryApp, rueMauriceThorez, [skills.js, skills.angularJS, skills.rome2rio, skills.gwt])
  const itineraryApp = new Experience(traveldooExp, new Date(2013, 12 - 1, 2), traveldooExp.endDate, projectsMessages.hotelBookingApp, rueMauriceThorez, [skills.js, skills.angularJS, skills.phonegap])

  const famicityOffices = new Address("6 rue de l'Abbé Hazard", "92000", "Nanterre", france)
  const famicity = new Organization(Organization.linkFromMessages(contractsMessages.famicity), famicityOffices)
  const famicityExp = new Contract(famicity, ContractType.FullTimePermanent, contractsMessages.famicity.title, new Date(2015, 1 - 1, 1), new Date(2018, 11 - 1, 1))
  const famicityApp = new Experience(famicityExp, famicityExp.startDate, famicityExp.endDate, projectsMessages.famicityApp, rueMauriceThorez, [skills.ts, skills.angular, skills.angularJS, skills.sass, skills.github])

  const stationF = new Address("5 Parv. Alan Turing", "75013", "Paris", france)
  const weWorkParis12 = new Address("198 Avenue de France", "75013", "Paris", france)
  const zelros = new Organization(Organization.linkFromMessages(contractsMessages.zelros), weWorkParis12)
  const zelrosExp = new Contract(zelros, ContractType.FullTimePermanent, contractsMessages.zelros.title, new Date(2019, 1 - 1, 1), new Date(2021, 2 - 1, 1))
  const kmApp = new Experience(zelrosExp, zelrosExp.startDate, new Date(2020, 9 - 1, 1), projectsMessages.zelrosKmApp, rueDeBezons, [skills.ts, skills.nlp, skills.postgresql])
  const mlPipeline = new Experience(zelrosExp, kmApp.startDate, zelrosExp.endDate, projectsMessages.mlPipeline, rueDeBezons, [skills.ts, skills.fastify, skills.nodejs, skills.python, skills.redis, skills.azure, skills.docker])

  const beamOffices = new Address("74 avenue Kleber", "75016", "Paris", france)
  const beam = new Organization(Organization.linkFromMessages(contractsMessages.beam), beamOffices)
  const beamExp = new Contract(beam, ContractType.FullTimePermanent, contractsMessages.beam.title, new Date(2021, 3 - 1, 1), new Date(2022, 9 - 1, 1))
  const beamWebApp = new Experience(beamExp, beamExp.startDate, beamExp.endDate, projectsMessages.beamWebApp, rueDeBezons, [skills.ts, skills.graphql, skills.rest, skills.webCrypto, skills.jest])
  const beamWebServer = new Experience(beamExp, beamExp.startDate, beamExp.endDate, projectsMessages.beamWebServer, rueDeBezons, [skills.ts, skills.fastify, skills.nodejs, skills.rest, skills.gcp, skills.gitlab, skills.docker, skills.gitlab])

  const laCaserne = new Address("12 rue Philippe de Girard", "75010", "Paris", france)
  const arianee = new Organization(Organization.linkFromMessages(contractsMessages.arianee), laCaserne)
  const arianeeExp = new Contract(arianee, ContractType.FullTimePermanent, contractsMessages.arianee.title, new Date(2022, 11 - 1, 14), new Date(2023, 11 - 1, 16))
  const kelpieProject = new Experience(arianeeExp, new Date(2022, 11 - 1, 14), new Date(2022, 12 - 1, 31), projectsMessages.kelpie, rueDeBezons, [skills.angular])
  const arn = new Experience(arianeeExp, new Date(2023, 1 - 1, 1), new Date(2023, 4 - 1, 1), projectsMessages.arn, rueDeBezons, [skills.angular, skills.nx, skills.nodejs, skills.ethers])
  const dapp = new Experience(arianeeExp, new Date(2023, 4 - 1, 1), arianeeExp.endDate, projectsMessages.dapp, rueDeBezons, [skills.angular, skills.nx, skills.nodejs, skills.gcp, skills.ethers])

  const myResume = new ResumeBuilder()
    .of(jerome)
    .withTitle(messages.people.title)
    .withStatement(messages.people.statement)
    .withExperience(cCourse)
    .withExperience(cppCourse)
    .withExperience(ejbCourse)
    .withExperience(j2eeCourse)
    .withExperience(lido)
    .withExperience(xic)
    .withExperience(itineraryApp)
    .withExperience(hotelApp)
    .withExperience(xoolooConsole)
    .withExperience(xoolooApp)
    .withExperience(famicityApp)
    .withExperience(kelpieProject)
    .withExperience(kmApp)
    .withExperience(mlPipeline)
    .withExperience(beamWebApp)
    .withExperience(beamWebServer)
    .withExperience(arn)
    .withExperience(dapp)
    .build()
  const renderer = new ResumeRenderer(document, messages)
  renderer.render(myResume, "")
  window.search = (event) => {
    renderer.render(myResume, event.target.value)
  }
})
