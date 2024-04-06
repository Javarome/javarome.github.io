import {SkillList} from "./SkillList.mjs"
import {Skill} from "./Skill.mjs"

class SkillList_en extends SkillList {
  js = new Skill("JavaScript", new URL("https://ecma-international.org/publications-and-standards/standards/ecma-262/"), "Programming language for browsers and NodeJS", [], ["language"])
  ts = new Skill("TypeScript", new URL("https://www.typescriptlang.org"), `Microsoft's superset of JavaScript to add typing and OOP`, [this.js], ["language"])
  vanilla = new Skill("Vanilla", new URL("http://vanilla-js.com"), `JavaScript or TypeScript used without any other fancy frameworks`, [], [])
  angularJS = new Skill("AngularJS", new URL("https://angularjs.org"), `AngularJS is the legacy Google web framework. Old version of Angular.`, [this.ts], ["web", "framework"])
  angular = new Skill("Angular", new URL("https://angular.io"), "Google web framework. Modern version of AngularJS.", [this.ts], ["web", "framework"])
  nx = new Skill("Nx", new URL("https://nx.dev"), "Monorepo tooling", [this.ts], ["tool", "monorepo"])
  unix = new Skill("Unix", new URL("https://fr.wikipedia.org/wiki/Unix"), `Unix is an <abbr title="Operating System">OS</abbr>`, [], ["os"])
  windows = new Skill("Windows", new URL("https://www.microsoft.com/en-us/windows"), `Windows is an <abbr title="Operating System">OS</abbr> for PC`, [], ["os"])
  c = new Skill("C", new URL("https://www.open-std.org/jtc1/sc22/wg14/"), "C programming language", [], ["language"])
  sql = new Skill("SQL", new URL("https://en.wikipedia.org/wiki/SQL"), `SQL is the standard query language for RDBMS`, [], ["database"])
  cpp = new Skill("C++", new URL("https://www.open-std.org/jtc1/sc22/wg21/"), "C programming language", [this.c], ["language"])
  postgresql = new Skill("PostgreSQL", new URL("https://www.postgresql.org"), "Postgres Relational database", [this.sql], ["database"])
  mongodb = new Skill("MongoDB", new URL("https://www.mongodb.com"), "MongoDB is a nosql JSON database", [this.js], ["database", "nosql"])
  ml = new Skill("ML", new URL("https://en.wikipedia.org/wiki/Machine_learning"), `ML is Machine Learning`, [], [])
  nlp = new Skill("NLP", new URL("https://en.wikipedia.org/wiki/Natural_language_processing"), `NLP (Natural Language Processing) is a ML technique applied to text queries`, [this.ml], [])
  phonegap = new Skill("Phonegap", new URL("https://fr.wikipedia.org/wiki/Adobe_PhoneGap"), "(or Apache Cordova) allows encapsulating a web app into a native mobile (iOS, Android) app", [], ["web"])
  macos = new Skill("XCode", new URL("https://en.wikipedia.org/wiki/MacOS"), `MacOS is the <abbr title="Operating System">OS</abbr> for Apple Mac computers`, [], ["os"])
  xcode = new Skill("XCode", new URL("https://developer.apple.com/xcode"), `Allows to build MacOS native apps`, [this.macos], ["ide"])
  oop = new Skill("OOP", new URL("https://developer.apple.com/xcode"), `OOP (Object-Oriented Programming) is a software development approach`, [], [])
  java = new Skill("Java", new URL("https://www.java.com"), `Java is a programming language and a platform to write apps once and run them everywhere`, [this.oop], ["language"])
  swing = new Skill("Swing", new URL("https://docs.oracle.com/javase/tutorial/uiswing/index.html"), `Swing is a Java API to build UI on desktop`, [this.java, this.oop], ["ui", "components"])
  perforce = new Skill("Perforce", new URL("https://www.perforce.com/products/helix-core"), `Perforce is a VCS`, [], ["tool"])
  junit = new Skill("JUnit", new URL("https://junit.org/"), `JUnit is a Java unit testing framework`, [this.java], ["test"])
  jdo = new Skill("JDO", new URL("https://www.oracle.com/java/technologies/java-data-objects.html"), `Java Data Objects is a Java persistence standard`, [this.java], [])
  jdbc = new Skill("JDBC", new URL("https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/"), `Java Database Connectivity is the Java API to access RDBMS`, [this.java], [])
  oracle = new Skill("Oracle", new URL("https://www.oracle.com/database/"), `Oracle is a RDBMS`, [this.java], [])
  mysql = new Skill("MySQL", new URL("https://www.mysql.com"), `MySQL is a <abbr title="Relational Data Base Management System">RDBMS</abbr>`, [this.java], ["database"])
  beyondCompare = new Skill("Beyond Compare", new URL("https://www.scootersoftware.com/"), `Beyond Compare is a file comparison tool. It was one of the tools used before the advent of VCS.`, [], "tool")
  versant = new Skill("Versant", new URL("https://esd.actian.com/platform/docs/Docs/Versant_Products/Versant_Object_Database_10"), `Versant was an ODBMS`, [this.sql])
  idea = new Skill("IntelliJ IDEA", new URL("https://www.jetbrains.com/idea"), `IntelliJ IDEA is a Java <abbr title="Integrated Development Environment">IDE</abbr>`, [this.java], ["tool", "ide"])
  eclipse = new Skill("Eclipse", new URL("https://eclipseide.org/"), `Eclipse is an OSS Java IDE`, [this.java], ["tool", "ide"])
  ejb = new Skill("EJB", new URL("https://www.oracle.com/java/technologies/appmodel.html"), `Java 2 Entreprise Edition is a suite of APIs to build entreprise-grade apps`, [this.java])
  j2ee = new Skill("J2EE", new URL("https://www.oracle.com/java/technologies/appmodel.html"), `Java 2 Entreprise Edition is a suite of APIs to build entreprise-grade apps`, [this.java])
  nodejs = new Skill("NodeJS", new URL("https://nodejs.org"), `NodeJS allows to buid JavaScript apps outside of a browser`, [this.js])
  fastify = new Skill("Fastify", new URL("https://fastify.dev"), `Fastify is a TypeScript web server framework`, [this.ts, this.nodejs])
  python = new Skill("Python", new URL("https://www.python.org"), `Python is a programming language used by most ML libraries`, [], ["language"])
  graphql = new Skill("GraphQL", new URL("https://graphql.org/"), `GraphQL is a standard to query server APIs in a tailored fashion`, [])
  http = new Skill("HTTP", new URL("https://en.wikipedia.org/wiki/HTTP"), `HTTP is the standard protocol for serving web pages`, [])
  rest = new Skill("REST", new URL("https://fr.wikipedia.org/wiki/Representational_state_transfer"), `REST is a standard for HTTP APIs`, [this.http])
  webCrypto = new Skill("Web Crypto", new URL("https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"), `Web Crypto allows cryptographic primitives from browser apps`, [])
  jest = new Skill("Jest", new URL("https://jestjs.io"), `Jest is a unit tests framework for JavaScript/TypeScript`, [])
  redis = new Skill("Redis", new URL("https://redis.io"), `Redis provides a key/value storage`, [])
  azure = new Skill("Azure", new URL("https://azure.microsoft.com"), `Microsoft Azure provides cloud computing services`, [])
  gcp = new Skill("GCP", new URL("https://cloud.google.com"), `Google Cloud Services provides cloud computing services`, [])
  git = new Skill("Git", new URL("https://git-scm.com/"), `Git is a decentralized VCS`, [])
  gitlab = new Skill("GitLab", new URL("https://gitlab.com"), `GitLab is a project hosting <abbr title="Software as a Service">SaaS</abbr>`, [this.git])
  github = new Skill("Github", new URL("https://github.com"), `Microsoft Github is a project hosting <abbr title="Software as a Service">SaaS</abbr>`, [this.git])
  html = new Skill("HTML", new URL("https://github.com"), `Hyper-Text Markup Language is the language to edit web pages`, [])
  css = new Skill("CSS", new URL("https://github.com"), `Cascading Style Sheets is the language to edit web pages styles`, [this.html])
  sass = new Skill("Sass", new URL("https://github.com"), `Sass is a tool to extend CSS capabilities`, [this.css])
  docker = new Skill("Docker", new URL("https://www.docker.com"), `Docker is a tool to run apps in containers`, [])
  ethers = new Skill("Ethers", new URL("https://ethers.org/"), `Ethers is a JavaScript library to access Ethereum blockchain`, [], ["blockchain"])
  rome2rio = new Skill("Rome2Rio", new URL("https://www.rome2rio.com/fr"), `Rome2Rio fournit une API de calcul d'itinéraire`, [], [])
  gwt = new Skill("GWT", new URL("https://www.gwtproject.org"), `GWT is a tool to compile Java into Javascript`, [this.java], [])
  walletConnect = new Skill("WalletConnect", new URL("https://walletconnect.com/"), `WalletConnect est une API de connexion de wallets blockchain sur le web`, [this.ethers], [])
  jbuilder = new Skill("JBuilder", new URL("https://en.wikipedia.org/wiki/JBuilder"), `JBuilder was the Java IDE by Borland`, [this.java], [])
  pascal = new Skill("Pascal", new URL("https://en.wikipedia.org/wiki/Pascal_(programming_language)"), `Pascal is a procedural programming language`, [], ["language"])
  delphi = new Skill("Delphi", new URL("https://en.wikipedia.org/wiki/Delphi_(software)"), `Delphi is a Borland IDE to build Windows apps`, [this.pascal], [])
  netlify = new Skill("Netlify", new URL("https://netlify.com"), `Netlify is a web hosting service`, [], ["saas"])
}
export const skillList_en = new SkillList_en()
