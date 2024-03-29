import {ResumeRenderer} from "./ResumeRenderer.mjs"
import {ResumeBuilder} from "./ResumeBuilder.mjs"
import {Organization} from "./org/Organization.mjs"
import {Contract, ContractType} from "./history/item/experience/Contract.mjs"
import {People} from "./people/People.mjs"
import {Address} from "./place/Address.mjs"
import {Country} from "./place/Country.mjs"
import {Experience} from "./history/item/experience/Experience.mjs"
import {Skill} from "./history/item/experience/skill/Skill.mjs"
import {Link} from "./Link.mjs"

const france = new Country("France")

const rueMauriceThorez = new Address("28 rue Maurice Thorez", "92000", "Nanterre", france)
const rueDeBezons = new Address("39 bis rue de Bezons", "92000", "Nanterre", france)
const jerome = new People("Beau", "Jérôme", rueDeBezons,
  [
    {name: "tel", url: new URL("tel:+33679796518")},
    {name: "mail", url: new URL("mailto:javarome@gmail.com")},
    {name: "website", url: new URL("https://javarome.com")},
    {name: "blog", url: new URL("https://medium.com/@javarome")}
  ]
)

const angularJS = new Skill("AngularJS", new URL("https://angularjs.org"), `Legacy Google web framework. Old version of Angular.`, "web-framework", "angular", "javascript", "typescript")
const angular = new Skill("Angular", new URL("https://angular.io"), "Google web framework. Modern version of AngularJS.", "javascript", "typescript")
const js = new Skill("JavaScript", new URL("https://ecma-international.org/publications-and-standards/standards/ecma-262/"), "Programming language for browsers and NodeJS", "javascript")
const ts = new Skill("TypeScript", new URL("https://www.typescriptlang.org"), "Microsoft's superset of JavaScript to add typing and OOP", "javascript", "typescript")
const nx = new Skill("Nx", new URL("https://nx.dev"), "Monorepo tooling", "javascript", "typescript")
const c = new Skill("C", new URL("https://www.open-std.org/jtc1/sc22/wg14/"), "C programming language")
const cpp = new Skill("C++", new URL("https://www.open-std.org/jtc1/sc22/wg21/"), "C programming language")
const postgresql = new Skill("PostgreSQL", new URL("https://www.postgresql.org"), "Postgres Relational database")
const nlp = new Skill("NLP", new URL("https://en.wikipedia.org/wiki/Natural_language_processing"), "Natural Language Processing")
const phonegap = new Skill("Phonegap", new URL("https://fr.wikipedia.org/wiki/Adobe_PhoneGap"), "(or Apache Cordova) allows encapsulating a web app into a native mobile (iOS, Android) app")
const xcode = new Skill("XCode", new URL("https://developer.apple.com/xcode"), `Allows to build MacOS native apps`)
const java = new Skill("Java", new URL("https://www.java.com"), `Java is a programming language and a platform to write apps once and run them everywhere`, "java")
const swing = new Skill("Swing", new URL("https://docs.oracle.com/javase/tutorial/uiswing/index.html"), `Swing is a Java API to build UI on desktop`, "java", "ui")
const perforce = new Skill("Perforce", new URL("https://www.perforce.com/products/helix-core"), `Perforce is a VCS`, "tool")
const junit = new Skill("JUnit", new URL("https://junit.org/"), `JUnit is a Java testing framework`, "java", "test")
const jdo = new Skill("JDO", new URL("https://www.oracle.com/java/technologies/java-data-objects.html"), `Java Data Objects is a Java persistence standard`, "java")
const jdbc = new Skill("JDBC", new URL("https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/"), `Java Database Connectivity is the Java API to access RDBMS`, "java")
const oracle = new Skill("Oracle", new URL("https://www.oracle.com/database/"), `Oracle is a RDBMS`, "dbms")
const mysql = new Skill("MySQL", new URL("https://www.mysql.com"), `MySQL is a RDBMS`, "dbms")
const beyondCompare = new Skill("Beyond Compare", new URL("https://www.scootersoftware.com/"), `Beyond Compare is a file comparison tool. It was one of the tools used before the advent of VCS.`, "tool")
const versant = new Skill("Versant", new URL("https://esd.actian.com/platform/docs/Docs/Versant_Products/Versant_Object_Database_10"), `Versant was an ODBMS`, "dbms")
const idea = new Skill("IntelliJ IDEA", new URL("https://www.jetbrains.com/idea"), `IntelliJ IDEA is a Java IDE`, "tool", "ide")
const eclipse = new Skill("Eclipse", new URL("https://eclipseide.org/"), `Eclipse is an OSS Java IDE`, "tool", "ide")
const j2ee = new Skill("J2EE", new URL("https://www.oracle.com/java/technologies/appmodel.html"), `Java 2 Entreprise Edition is a suite of APIs to build entreprise-grade apps`, "java")
const fastify = new Skill("Fastify", new URL("https://fastify.dev/"), `Fastify is a TypeScript web server framework`, "typescript", "javascript")

const istyAddress = new Address("10-12 Av. de l'Europe", "78140", "Vélizy-Villacoublay", france)
const isty = new Organization(new Link("ISTY", new URL("https://www.isty.uvsq.fr"), "L'Institut des Sciences et Techniques des Yvelines est une école d'ingénieurs en informatique publique de l'Université de Versailles/Saint-Quentin en Yvelines (UVSQ)"), istyAddress)
const istyExp = new Contract(isty, ContractType.Training, "Software engineer", new Date(1994, 9 - 1, 1), new Date(1997, 6 - 1, 1))
const cCourse = new Experience(istyExp, istyExp.startDate, istyExp.endDate, "C course", rueDeBezons, [c])
const cppCourse = new Experience(istyExp, istyExp.startDate, istyExp.endDate, "C++ course", rueDeBezons, [cpp])

const valtechAddr = new Address("6 place de la Pyramide", "92908", "Paris-La Défense", france)
const valtech = new Organization(new Link("Valtech", new URL("https://valtech.com"), "Valtech provides consulting and training services on cutting-edge software technologies"), valtechAddr)
const valtechExp = new Contract(valtech, ContractType.FullTimePermanent, "Software Architect", new Date(1998, 12 - 1, 1), new Date(2002, 2 - 1, 1))
const j2eeCourse = new Experience(valtechExp, new Date(2000, 12 - 1, 1), new Date(2001, 9 - 1, 1),
  `J2EE trainng course`, valtechAddr, [java, j2ee, jdbc])

const xcaliaAddr1 = new Address("26 rue de Chambéry", "75015", "Paris", france)
const xcaliaAddr2 = new Address("71 rue Desnouettes", "75015", "Paris", france)
const xcaliaAddr3 = new Address("21 rue des Trois Fontanots", "92000", "Nanterre", france)
const xcalia = new Organization(new Link("Xcalia", new URL("https://fr.wikipedia.org/wiki/Xcalia_Intermediation_Core"), "Xcalia sells a JDO implementation"), xcaliaAddr3)
const xcaliaExp = new Contract(xcalia, ContractType.FullTimePermanent, "Senior developer & quality manager", new Date(2003, 1 - 1, 1), new Date(2010, 5 - 1, 1))
const lido = new Experience(xcaliaExp, xcaliaExp.startDate, new Date(2005, 9 - 1, 1), "LiDO", xcaliaAddr1, [java, oracle, jdo, beyondCompare, versant, idea, eclipse, postgresql, mysql])
const xic = new Experience(xcaliaExp, new Date(2005, 9 - 1, 1), xcaliaExp.endDate,
  "Xcalia Intermediation Core", xcaliaAddr2, [java, jdbc, perforce, junit, oracle, mysql, postgresql, jdo, versant, idea])

const xoolooAddr = new Address("20 Rue Danielle Casanova", "75002", "Paris", france)
const xooloo = new Organization(new Link("Xooloo", new URL("https://xooloo.com"), "Xooloo sells parental control software to ISP"), xoolooAddr)
const xoolooExp = new Contract(xooloo, ContractType.FullTimePermanent, "Senior developer & quality manager", new Date(2010, 9 - 1, 1), new Date(2012, 11 - 1, 1))
const xoolooApp = new Experience(xoolooExp, xoolooExp.startDate, new Date(2011, 9 - 1, 1), "Parental control app", xoolooAddr, [xcode, java])
const xoolooConsole = new Experience(xoolooExp, new Date(2011, 9 - 1, 1), xoolooExp.endDate, "Parental control console", xoolooAddr, [java, swing])

const traveldooAddr = new Address("130 Rue Victor Hugo", "92300", "Levallois-Perret", france)
const traveldoo = new Organization(new Link("Traveldoo", new URL("https://traveldoo.com"), "Traveldoo aims to offer booking services to companies"), traveldooAddr)
const traveldooExp = new Contract(traveldoo, ContractType.FullTimePermanent, "Senior Web Developer", new Date(2013, 1 - 1, 1), new Date(2014, 12 - 1, 1))
const hotelApp = new Experience(traveldooExp, traveldooExp.startDate, new Date(2013, 12 - 1, 1), "Itinerary app", rueMauriceThorez, [js, angularJS])
const itineraryApp = new Experience(traveldooExp, new Date(2013, 12 - 1, 2), traveldooExp.endDate, "Hotel booking app", rueMauriceThorez, [js, angularJS, phonegap])

const famicityOffices = new Address("6 rue de l'Abbé Hazard", "92000", "Nanterre", france)
const famicity = new Organization(new Link("Famicity", new URL("https://famicity.com"), "Famicity built a social network app for families and genealogists"), famicityOffices)
const famicityExp = new Contract(famicity, ContractType.FullTimePermanent, "Senior Web Developer", new Date(2015, 1 - 1, 1), new Date(2018, 11 - 1, 1))
const famicityApp = new Experience(famicityExp, famicityExp.startDate, famicityExp.endDate, "Social network app for families and genealogists", rueMauriceThorez, [ts, angular, angularJS])

const stationF = new Address("5 Parv. Alan Turing", "75013", "Paris", france)
const weWorkParis12 = new Address("198 Avenue de France", "75013", "Paris", france)
const zelros = new Organization(new Link("Zelros", new URL("https://zelros.com"), "Zelros provides AI-augmented services"), weWorkParis12)
const zelrosExp = new Contract(zelros, ContractType.FullTimePermanent, "Lead Software Developer", new Date(2019, 1 - 1, 1), new Date(2021, 2 - 1, 1))
const kmApp = new Experience(zelrosExp, zelrosExp.startDate, new Date(2020, 9 - 1, 1),
  "Knowledge management app", rueDeBezons, [ts, nlp, postgresql])
const mlPipeline = new Experience(zelrosExp, kmApp.startDate, zelrosExp.endDate,
  "ML pipeline", rueDeBezons, [ts, fastify])

const beamOffices = new Address("74 avenue Kleber", "75016", "Paris", france)
const beam = new Organization(new Link("Beam", new URL("https://beamapp.co"), "Beam aimed to build a new kind of browser which allowed to take notes"), beamOffices)
const beamExp = new Contract(beam, ContractType.FullTimePermanent, "Web lead dev", new Date(2021, 3 - 1, 1), new Date(2022, 9 - 1, 1))
const beamWebApp = new Experience(beamExp, beamExp.startDate, beamExp.endDate, 
  "Responsive web app fetching both GraphQL and REST APIs + encrypting/decrypting payloads", rueDeBezons, [js, ts])
const beamWebServer = new Experience(beamExp, beamExp.startDate, beamExp.endDate, 
  `Web server to publish notes with SSR`, rueDeBezons, [js, ts, fastify])

const laCaserne = new Address("12 rue Philippe de Girard", "75010", "Paris", france)
const arianee = new Organization(new Link("Arianee", new URL("https://arianee.com"), "Arianee aims to provide Web3 services to retail companies"), laCaserne)
const arianeeExp = new Contract(arianee, ContractType.FullTimePermanent, "Web3 tooling tech lead", new Date(2022, 11 - 1, 14), new Date(2023, 11 - 1, 16))
const kelpieProject = new Experience(arianeeExp, new Date(2022, 11 - 1, 14), new Date(2024, 12 - 1, 16), "Web3 CMS maintenance & EOL", rueDeBezons, [angular])
const arnProject = new Experience(arianeeExp, new Date(2022, 12 - 1, 14), new Date(2024, 3 - 1, 16), "Web3-website tooling library", rueDeBezons, [angular, nx])

const myResume = new ResumeBuilder()
  .of(jerome)
  .withTitle("Senior developer & team leader")
  .withStatement("+25 ans d'expérience du développement front et back, l'encadrement et la motivation d'équipes de développeurs. Je conçois mes projets pour rester maintenables et accueillir le changement rapidement. Spécialisé dans le web vanilla & standard. Je peux prendre un projet en charge depuis l'expression des besoins jusqu'à la mise en production.")
  .withExperience(cCourse)
  .withExperience(cppCourse)
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
  .withExperience(arnProject)
  .build()
const renderer = new ResumeRenderer(document)
renderer.render(myResume, "", {mode: {functional: true}})
window.search = (event) => {
  renderer.render(myResume, event.target.value, {mode: {functional: true}})
}
