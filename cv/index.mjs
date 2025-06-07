import {ResumeRenderer} from "./ResumeRenderer.mjs"
import {ResumeBuilder} from "./ResumeBuilder.mjs"
import {Organization} from "./org/Organization.mjs"
import {People} from "./people/People.mjs"
import {Address} from "./place/Address.mjs"
import {Country} from "./place/Country.mjs"
import {Experience} from "./history/experience/Experience.mjs"
import {Contract, ContractType} from "./history/experience/contract/Contract.mjs"
import {ResumeMessages} from "./ResumeMessages.mjs"

const lang = navigator.language.startsWith("fr") ? "fr" : "en"
document.documentElement.lang = lang
let langPromise
if (lang === "fr") {
  langPromise = import("./ResumeMessages_fr.mjs")
} else {
  langPromise = import("./ResumeMessages_en.mjs")
}
langPromise.then(imported => {
  /**
   * @type {ResumeMessages}
   */
  const messages = imported[lang]
  const france = new Country("France")

  const homeClamart1 = new Address("25 rue des Pommiers", "92140", "Clamart", france)
  const homeClamart2 = new Address("11 rue des Champs Faucillons", "92140", "Clamart", france)
  const homeClamart3 = new Address("11 rue Albert Neveu", "92140", "Clamart", france)
  const homeAntony = new Address("9 rue Pierre Vermeir", "92160", "Antony", france)
  const homeGambetta = new Address("28 rue Sorbier", "75020", "Paris", france)
  const homeJavel = new Address("100 rue de Javel", "75015", "Paris", france)
  const homeCadix = new Address("9 rue de Cadix", "75015", "Paris", france)
  const homeMauriceThorez = new Address("28 rue Maurice Thorez", "92000", "Nanterre", france)
  const homeBezons = new Address("39 bis rue de Bezons", "92000", "Nanterre", france)

  const jerome = new People("Beau", "Jérôme", homeBezons,
    [
      {name: "linkedin", url: new URL("https://www.linkedin.com/in/javarome")},
      {name: "stackoverflow", url: new URL("https://stackoverflow.com/users/650104")},
      {name: "✍ blog", url: new URL("https://medium.com/@javarome")},
      {name: "codepen", url: new URL("https://codepen.io/Javarome")},
//      {name: "github", url: new URL("https://github.com/javarome")},
      {name: "x", url: new URL("https://x.com/javarome")},
    //  {name: "📞 tel", url: new URL("tel:+33679796518")},
      {name: "✉ mail", url: new URL("mailto:javarome@gmail.com")},
      {name: "🌐 website", url: new URL("https://javarome.com")}
    ]
  )

  const skills = messages.skills.list
  const experienceMessages = messages.experience
  const contractsMessages = experienceMessages.contracts
  const projectsMessages = experienceMessages.projects
  const personalMessages = messages.personal
  const personalProjectsMessages = personalMessages.projects

  const githubAccount = new Organization(Organization.linkFromMessages(contractsMessages.githubAccount), homeBezons, new URL("https://github.com/Javarome"))

  const iutAddress = new Address("10-12 Av. de l'Europe", "78140", "Vélizy-Villacoublay", france)
  const iut = new Organization(Organization.linkFromMessages(contractsMessages.iut), iutAddress)
  const iutExp = new Contract(iut, ContractType.Training, contractsMessages.iut.title, new Date(1992, 9 - 1, 1), new Date(1994, 8 - 1, 1))
  const iutCCourse = new Experience(iutExp, iutExp.startDate, iutExp.endDate, "C course", homeGambetta, [skills.c])

  const istyAddress = new Address("10-12 Av. de l'Europe", "78140", "Vélizy-Villacoublay", france)
  const isty = new Organization(Organization.linkFromMessages(contractsMessages.isty), istyAddress)
  const istyExp = new Contract(isty, ContractType.Training, contractsMessages.isty.title, new Date(1994, 9 - 1, 1), new Date(1997, 8 - 1, 1))
  const unixCourse = new Experience(istyExp, istyExp.startDate, istyExp.endDate, "Unix course", homeGambetta, [skills.unix])
  const cCourse = new Experience(istyExp, istyExp.startDate, istyExp.endDate, "C course", homeGambetta, [skills.c])
  const cppCourse = new Experience(istyExp, istyExp.startDate, istyExp.endDate, "C++ course", homeGambetta, [skills.cpp])
  const istyProject = new Experience(istyExp, istyExp.startDate, istyExp.endDate, "Project", homeGambetta, [skills.delphi])

  const ibmAddr = new Address("2 Av. Gambetta", "92400", "Courbevoie", france)
  const ibm = new Organization(Organization.linkFromMessages(contractsMessages.ibm), ibmAddr)
  const ibmInternship = new Contract(ibm, ContractType.FullTimePermanent, contractsMessages.ibm.title, new Date(1997, 1 - 1, 1), new Date(1997, 8 - 1, 1))
  const billetel = new Experience(ibmInternship, ibmInternship.startDate, ibmInternship.endDate, projectsMessages.billetel, ibmAddr, [skills.jbuilder, skills.livewire])

  const sqlTechAddr1 = new Address("10 Rue des Acacias", "92130", "Issy-les-Moulineaux", france)
  const sqlTechAddr2 = new Address("94bis avenue de Suffren", "75015", "Paris", france)
  const sqlTech = new Organization(Organization.linkFromMessages(contractsMessages.sqlTech), sqlTechAddr2)
  const sqlTechExp = new Contract(sqlTech, ContractType.FullTimePermanent, contractsMessages.sqlTech.title, new Date(1997, 8 - 1, 1), new Date(1998, 11 - 1, 1))
  const chronopostPacketTracking = new Experience(sqlTechExp, sqlTechExp.startDate, sqlTechExp.endDate, projectsMessages.chronopostPacketTracking, sqlTechAddr2, [skills.jbuilder])

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
  const hotelMobile = new Experience(traveldooExp, traveldooExp.startDate, new Date(2013, 12 - 1, 1), projectsMessages.itineraryApp, homeMauriceThorez, [skills.js, skills.angularJS, skills.rome2rio, skills.gwt])
  const itineraryApp = new Experience(traveldooExp, new Date(2013, 12 - 1, 2), traveldooExp.endDate, projectsMessages.hotelBookingApp, homeMauriceThorez, [skills.js, skills.angularJS, skills.phonegap])

  const famicityOffices = new Address("6 rue de l'Abbé Hazard", "92000", "Nanterre", france)
  const famicity = new Organization(Organization.linkFromMessages(contractsMessages.famicity), famicityOffices, new URL("https://www.facebook.com/photo/?fbid=610228903950119&set=a.610228870616789"))
  const famicityExp = new Contract(famicity, ContractType.FullTimePermanent, contractsMessages.famicity.title, new Date(2015, 1 - 1, 1), new Date(2018, 11 - 1, 1))
  const famicityApp = new Experience(famicityExp, famicityExp.startDate, famicityExp.endDate, projectsMessages.famicityApp, homeMauriceThorez, [skills.ts, skills.angular, skills.angularJS, skills.sass, skills.github])

  const stationF = new Address("5 Parv. Alan Turing", "75013", "Paris", france)
  const weWorkParis12 = new Address("198 Avenue de France", "75013", "Paris", france)
  const zelros = new Organization(Organization.linkFromMessages(contractsMessages.zelros), weWorkParis12)
  const natixis = new Organization(Organization.linkFromMessages(contractsMessages.zelros), weWorkParis12)
  const zelrosExp = new Contract(zelros, ContractType.FullTimePermanent, contractsMessages.zelros.title, new Date(2019, 1 - 1, 1), new Date(2021, 2 - 1, 1))
  const aico = new Experience(zelrosExp, zelrosExp.startDate, new Date(2020, 9 - 1, 1), projectsMessages.aico, homeBezons, [skills.ts, skills.express])
  const cs = new Experience(zelrosExp, zelrosExp.startDate, new Date(2020, 9 - 1, 1), projectsMessages.cs, homeBezons, [skills.ts, skills.nlp, skills.postgresql, skills.keycloak, skills.mongoose])
  const sdm = new Experience(zelrosExp, cs.startDate, zelrosExp.endDate, projectsMessages.sdm, homeBezons, [skills.ts, skills.fastify, skills.nodejs, skills.python, skills.redis, skills.azure, skills.docker, skills.sass, skills.protoBuffers])
  const ms = new Experience(zelrosExp, cs.startDate, zelrosExp.endDate, projectsMessages.ms, homeBezons, [skills.python, skills.docker, skills.airflow, skills.jenkins])

  const beamOffices = new Address("74 avenue Kleber", "75016", "Paris", france)
  const beam = new Organization(Organization.linkFromMessages(contractsMessages.beam), beamOffices, new URL("https://www.beamapp.co/assets/common/beam-icon.png"))
  const beamExp = new Contract(beam, ContractType.FullTimePermanent, contractsMessages.beam.title, new Date(2021, 3 - 1, 1), new Date(2022, 9 - 1, 1))
  const beamWebApp = new Experience(beamExp, beamExp.startDate, beamExp.endDate, projectsMessages.beamWebApp, homeBezons, [skills.vanillaTS, skills.webComponents, skills.graphql, skills.rest, skills.webCrypto, skills.jest, skills.netlify, skills.sass])
  const beamWebServer = new Experience(beamExp, beamExp.startDate, beamExp.endDate, projectsMessages.beamWebServer, homeBezons, [skills.vanillaTS, skills.webComponents, skills.fastify, skills.rest, skills.gcp, skills.gitlab, skills.docker, skills.gitlab])

  const laCaserne = new Address("12 rue Philippe de Girard", "75010", "Paris", france)
  const arianee = new Organization(Organization.linkFromMessages(contractsMessages.arianee), laCaserne, new URL("https://assets-global.website-files.com/63d2463b430d2159464c7403/63ed17fd8944e2d5b7fee10c_Webclip%20Arianee.com.png"))
  const arianeeContract = new Contract(arianee, ContractType.FullTimePermanent, contractsMessages.arianee.title, new Date(2022, 11 - 1, 14), new Date(2023, 11 - 1, 16))
  const kelpie = new Experience(arianeeContract, arianeeContract.startDate, new Date(2022, 12 - 1, 31), projectsMessages.kelpie, homeBezons, [skills.angular, skills.mongodb, skills.sass, skills.circleci])
  const arn = new Experience(arianeeContract, new Date(2023, 1 - 1, 1), new Date(2023, 4 - 1, 1), projectsMessages.arn, homeBezons, [skills.webComponents, skills.angular, skills.nx, skills.fastify, skills.ethers, skills.npm, skills.walletConnect, skills.mongodb, skills.netlify, skills.sass, skills.circleci])
  const dapp = new Experience(arianeeContract, new Date(2023, 4 - 1, 1), arianeeContract.endDate, projectsMessages.dapp, homeBezons, [skills.angular, skills.nx, skills.nodejs, skills.gcp, skills.ethers, skills.walletConnect, skills.netlify, skills.pwa, skills.sass, skills.circleci])

  const ringover = new Organization(Organization.linkFromMessages(contractsMessages.ringover), laCaserne, new URL("https://images.prismic.io/greenly/6aed9bda-2d63-498c-9526-8293707dbda1_logo-ringover.svg.png"))
  const ringoverContract = new Contract(ringover, ContractType.FullTimePermanent, contractsMessages.ringover.title, new Date(2024, 11 - 1, 4), new Date(2025, 1 - 1, 31))

  const theSteps = new Organization(Organization.linkFromMessages(contractsMessages.thesteps), homeBezons, new URL("https://thesteps.to/assets/maskable_icon_x512-Bt8hPOml.png"))
  const theStepsContract = new Contract(theSteps, ContractType.Personal, contractsMessages.thesteps.title, arianeeContract.endDate, ringoverContract.startDate)
  const thestepsApp = new Experience(theStepsContract, theStepsContract.startDate, null, personalProjectsMessages.thesteps, homeBezons, [skills.vanillaJS, skills.go, skills.css, skills.html, skills.gcp, skills.netlify ])

  const ringoverAddress = new Address("50 bis Rue Maurice Arnoux", "92120", "Montrouge", france)
  const empower = new Experience(ringoverContract, ringoverContract.startDate, ringoverContract.endDate, projectsMessages.empower, ringoverAddress, [skills.vanillaJS, skills.webComponents, skills.go, skills.css, skills.html, skills.jira, skills.vite])
  const ringobook = new Experience(ringoverContract, ringoverContract.startDate, ringoverContract.endDate, projectsMessages.ringobook, ringoverAddress, [skills.vanillaJS, skills.webComponents, skills.go, skills.css, skills.html, skills.jira, skills.vite, skills.npm])

  const mobkoiAddress = new Address("5 Rue d'Athènes", "75009", "Paris", france)
  const mobkoi = new Organization(Organization.linkFromMessages(contractsMessages.mobkoi), laCaserne, new URL("https://www.mobkoi.com"))
  const mobkoiContract = new Contract(mobkoi, ContractType.FullTimePermanent, contractsMessages.mobkoi.title, new Date(2025, 3 - 1, 3))
  const renderLib = new Experience(mobkoiContract, mobkoiContract.startDate, null, projectsMessages.renderLib, mobkoiAddress, [skills.webComponents, skills.vanillaJS, skills.gcp, skills.css, skills.html, skills.jira, skills.vite])
  const adComposer = new Experience(mobkoiContract, mobkoiContract.startDate, null, projectsMessages.adComposer, mobkoiAddress, [skills.webComponents, skills.vanillaJS, skills.gcp, skills.css, skills.html, skills.jira, skills.vite])

  const personalContract = new Contract(githubAccount, ContractType.Personal, contractsMessages.githubAccount.title, new Date(2022, 11 - 1, 14), new Date(2023, 11 - 1, 16))
  const testscript = new Experience(personalContract, new Date(2023, 10 - 1, 21), new Date(2024, 9 - 1, 10), personalProjectsMessages.testscript, homeBezons, [skills.ts, skills.nodejs])
  const rr0 = new Experience(personalContract, new Date(1998, 7 - 1, 1), null, personalProjectsMessages.rr0, homeGambetta, [skills.html, skills.css, skills.vanillaJS, skills.webComponents, skills.nodejs])
  const ssgApi = new Experience(personalContract, new Date(2022, 11 - 1, 8), null, personalProjectsMessages.ssgApi, homeBezons, [skills.html, skills.vanillaTS, skills.nodejs, skills.npm])
  const time = new Experience(personalContract, new Date(2024, 9 - 1, 10), null, personalProjectsMessages.time, homeBezons, [skills.vanillaJS, skills.nodejs, skills.npm])
  const udb = new Experience(personalContract, new Date(2017, 3 - 1, 15), new Date(2025, 4 - 1, 13), personalProjectsMessages.udb, homeBezons, [skills.vanillaTS, skills.nodejs, skills.npm])

  const myResume = new ResumeBuilder()
    .of(jerome)
    .withTitle(messages.people.title)
    .withStatement(messages.people.statement)
    // IUT
    .withExperience(iutCCourse)
    // ISTY
    .withExperience(unixCourse)
    .withExperience(cCourse)
    .withExperience(cppCourse)
    .withExperience(istyProject)
    // RR0
    .withExperience(rr0)
    // SQL Tech
    .withExperience(billetel)
    .withExperience(chronopostPacketTracking)
    // Valtech
    .withExperience(ejbCourse)
    .withExperience(j2eeCourse)
    // Libelis/Xcalia/Datadirect
    .withExperience(lido)
    .withExperience(xic)
    // Traveldoo
    .withExperience(itineraryApp)
    .withExperience(hotelMobile)
    // Xooloo
    .withExperience(xoolooConsole)
    .withExperience(xoolooApp)
    .withExperience(famicityApp)
    .withExperience(kelpie)
    // Zelros
    .withExperience(aico)
    .withExperience(cs)
    .withExperience(ms)
    .withExperience(sdm)
    // uDb
    .withExperience(udb)
    // Beam
    .withExperience(beamWebApp)
    .withExperience(beamWebServer)
    // SSG API
    .withExperience(ssgApi)
    // Arianee
    .withExperience(arn)
    .withExperience(dapp)
    .withExperience(testscript)
    // thesteps.to
    .withExperience(thestepsApp)
    // Ringover
    .withExperience(empower)
    .withExperience(ringobook)
    // Time
    .withExperience(time)
    // Mobkoi
    .withExperience(renderLib)
    .withExperience(adComposer)
    .build()
  const renderer = new ResumeRenderer(document.documentElement, messages)
  const renderOptions = {
    skills: {
      open: true,
      implied: true
    },
    experience: {
      open: true,
      group: true,
      duration: true,
      skills: {
        implied: false
      }
    },
    personal: {
      open: true,
      group: false,
      duration: false,
      skills: {
        implied: false
      }
    },
    training: {
      open: true,
      group: true
    }
  }
  renderer.render(myResume, "", renderOptions)
  window.search = (event) => {
    renderer.renderSearch(myResume, event.target.value, renderOptions)
  }
})
