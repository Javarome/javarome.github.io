import {SkillList} from "./SkillList.mjs"
import {Skill} from "./Skill.mjs"

class SkillList_fr extends SkillList {
  js = new Skill("JavaScript", new URL("https://ecma-international.org/publications-and-standards/standards/ecma-262/"), "JavaScript est le langage de programmation pour les navigateurs et NodeJS", [], ["language"])
  ts = new Skill("TypeScript", new URL("https://www.typescriptlang.org/fr/"), `TypeScript est un surensemble de JavaScript pour ajouter du typage et des fonctionnalités orientées objet`, [this.js], ["language"])
  vanilla = new Skill("Vanilla", new URL("http://vanilla-js.com"), `JavaScript ou TypeScript used without any other fancy frameworks`, [], [])
  angularJS = new Skill("AngularJS", new URL("https://angularjs.org"), `La première version du framework web de Google. Ancienne version de Angular.`, [this.ts], ["web", "framework"])
  angular = new Skill("Angular", new URL("https://angular.io"), "Le framework web de Google. Version moderne de AngularJS.", [this.ts], ["web", "framework"])
  nx = new Skill("Nx", new URL("https://nx.dev"), "Monorepo tooling", [this.ts], ["tool", "monorepo"])
  unix = new Skill("Unix", new URL("https://fr.wikipedia.org/wiki/Unix"), `Unix est un système d'exploitation`, [this.ts], ["os"])
  windows = new Skill("Windows", new URL("https://www.microsoft.com/fr-fr/windows"), `Windows est un système d'exploitation pour PC`, [], ["os"])
  c = new Skill("C", new URL("https://www.open-std.org/jtc1/sc22/wg14/"), "C programming language", [], ["language"])
  sql = new Skill("SQL", new URL("https://fr.wikipedia.org/wiki/Structured_Query_Language"), `Langage d'interrogation de SGBDR`, [], ["database"])
  cpp = new Skill("C++", new URL("https://www.open-std.org/jtc1/sc22/wg21/"), "C programming language", [this.c], ["language"])
  postgresql = new Skill("PostgreSQL", new URL("https://www.postgresql.org"), `Base de données relationnelle de Postgres`, [this.sql], ["database"])
  mongodb = new Skill("MongoDB", new URL("https://www.mongodb.com/fr-fr"), "MongoDB est une base de données JSON", [this.js], ["database", "nosql"])
  ml = new Skill("ML", new URL("https://fr.wikipedia.org/wiki/Apprentissage_automatique"), `ML (Machine Learning) est le domaine de l'apprentissage automatique qui peut déboucher sur de l'IA`, [], [])
  nlp = new Skill("NLP", new URL("https://fr.wikipedia.org/wiki/Traitement_automatique_des_langues"), `NLP (Natural Language Processing) est une technique de ML pour les requêtes textuelles`, [this.ml], [])
  phonegap = new Skill("Phonegap", new URL("https://fr.wikipedia.org/wiki/Adobe_PhoneGap"), `(or Apache Cordova) allows encapsulating a web app into a native mobile (iOS, Android) app`, [this.js], ["web"])
  macos = new Skill("MacOS", new URL("https://fr.wikipedia.org/wiki/MacOS"), `MacOS est le système d'exploitation des ordinateurs Apple Mac`, [], ["os"])
  xcode = new Skill("XCode", new URL("https://developer.apple.com/xcode"), `Allows to build MacOS native apps`, [this.macos], ["ide"])
  oop = new Skill("COO", new URL("https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_objet"), `La Programmation Orientée Objet (OOP) est une approche du développement`, [], [])
  java = new Skill("Java", new URL("https://www.java.com"), `Java is a programming language and a platform to write apps once and run them everywhere`, [this.oop], ["language"])
  swing = new Skill("Swing", new URL("https://docs.oracle.com/javase/tutorial/uiswing/index.html"), `Swing is a Java API to build UI on desktop`, [this.java, this.oop], ["ui", "components"])
  perforce = new Skill("Perforce", new URL("https://www.perforce.com/products/helix-core"), `Perforce is a VCS`, [], ["tool"])
  junit = new Skill("JUnit", new URL("https://junit.org/"), `JUnit est un framework de tests unitaires Java`, [this.java], ["test"])
  jdo = new Skill("JDO", new URL("https://www.oracle.com/java/technologies/java-data-objects.html"), `Java Data Objects is a Java persistence standard`, [this.java], [])
  jdbc = new Skill("JDBC", new URL("https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/"), `Java Database Connectivity is the Java API to access RDBMS`, [this.java], [])
  oracle = new Skill("Oracle", new URL("https://www.oracle.com/database/"), `Oracle is a RDBMS`, [this.java], [])
  mysql = new Skill("MySQL", new URL("https://www.mysql.com"), `MySQL est un <abbr title="Système de Gestion de Base de données">SGBDR</abbr>`, [], ["database"])
  beyondCompare = new Skill("Beyond Compare", new URL("https://www.scootersoftware.com/"), `Beyond Compare is a file comparison tool. It was one of the tools used before the advent of VCS.`, [], "tool")
  versant = new Skill("Versant", new URL("https://esd.actian.com/platform/docs/Docs/Versant_Products/Versant_Object_Database_10"), `Versant était un SGBDO`, [])
  idea = new Skill("IntelliJ IDEA", new URL("https://www.jetbrains.com/idea"), `IntelliJ IDEA est un <abbr title="Environnement de Développement Intégré">EDI</abbr> Java`, [this.java], ["tool", "ide"])
  eclipse = new Skill("Eclipse", new URL("https://eclipseide.org/"), `Eclipse is an OSS Java IDE`, [this.java], ["tool", "ide"])
  ejb = new Skill("EJB", new URL("https://www.oracle.com/java/technologies/appmodel.html"), `Java 2 Entreprise Edition is a suite of APIs to build entreprise-grade apps`, [this.java])
  j2ee = new Skill("J2EE", new URL("https://www.oracle.com/java/technologies/appmodel.html"), `Java 2 Entreprise Edition is a suite of APIs to build entreprise-grade apps`, [this.java])
  nodejs = new Skill("NodeJS", new URL("https://nodejs.org"), `NodeJS allows to buid JavaScript apps outside of a browser`, [this.js])
  fastify = new Skill("Fastify", new URL("https://fastify.dev"), `Fastify est un framework TypeScript de serveur web`, [this.ts, this.nodejs])
  express = new Skill("Express", new URL("https://expressjs.com/fr/"), `Express est un framework JavaScript de serveur web`, [this.js, this.nodejs])
  python = new Skill("Python", new URL("https://www.python.org"), `Python is a programming language used by most ML libraries`, [], ["language"])
  graphql = new Skill("GraphQL", new URL("https://graphql.org/"), `GraphQL est un standard pour interroger des APIs serveur de 'manière personnalisée`, [])
  http = new Skill("HTTP", new URL("https://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol"), `HTTP est le protocole standard pour servir des pages web`, [])
  rest = new Skill("REST", new URL("https://fr.wikipedia.org/wiki/Representational_state_transfer"), `REST is a standard pour interroger des APIs HTTP`, [this.http])
  webCrypto = new Skill("Web Crypto", new URL("https://developer.mozilla.org/fr/docs/Web/API/Web_Crypto_API"), `Web Crypto offre des primitives cryptographiques pour les applications web`, [this.js])
  jest = new Skill("Jest", new URL("https://jestjs.io/fr/"), `Jest est un framework de tests unitaires pour JavaScript/TypeScript`, [this.js])
  redis = new Skill("Redis", new URL("https://redis.io"), `Redis fournit un serveur de stockage clé/valeur`, [])
  azure = new Skill("Azure", new URL("https://azure.microsoft.com/fr-fr/"), `Microsoft Azure fournit des services de cloud computing`, [])
  gcp = new Skill("GCP", new URL("https://cloud.google.com/?hl=fr"), `Google Cloud Services fournit des services de cloud computing`, [])
  git = new Skill("Git", new URL("https://git-scm.com/"), `Git est un VCS décentralisé`, [])
  gitlab = new Skill("GitLab", new URL("https://gitlab.com"), `GitLab est un <abbr title="Software as a Service">SaaS</abbr> d'hébergement de projets`, [this.git])
  github = new Skill("Github", new URL("https://github.com"), `Microsoft Github est un <abbr title="Software as a Service">SaaS</abbr> d'hébergement de projets`, [this.git])
  html = new Skill("HTML", new URL("https://developer.mozilla.org/fr/docs/Web/HTML"), `Hyper-Text Markup Language est le langage de rédaction des pages Web`, [])
  css = new Skill("CSS", new URL("https://github.com"), `Cascading Style Sheets est le langage de rédaction des styles de pages Web`, [this.html])
  sass = new Skill("Sass", new URL("https://github.com"), `Sass est un outil étendant les capacités CSS`, [this.css])
  docker = new Skill("Docker", new URL("https://www.docker.com"), `Docker est un outil pour exécuter des applications dans des conteneurs`, [])
  ethers = new Skill("Ethers", new URL("https://ethers.org/"), `Ethers est une bibliothèque JavaScript pour accéder à la blockchain Ethereum`, [this.js], ["blockchain"])
  rome2rio = new Skill("Rome2Rio", new URL("https://www.rome2rio.com"), `Rome2Rio provides an itinerary computation API`, [], [])
  gwt = new Skill("GWT", new URL("https://www.gwtproject.org"), `GWT est un outil compilant du Java en Javascript`, [this.java], [])
  walletConnect = new Skill("WalletConnect", new URL("https://walletconnect.com/"), `WalletConnect is an API for connecting blockchain wallets on the web`, [this.ethers], [])
  jbuilder = new Skill("JBuilder", new URL("https://en.wikipedia.org/wiki/JBuilder"), `JBuilder fut l'IDE Java de Borland`, [this.java], [])
  pascal = new Skill("Pascal", new URL("https://en.wikipedia.org/wiki/Pascal_(programming_language)"), `Pascal est un langage de programmation procédural`, [], ["language"])
  delphi = new Skill("Delphi", new URL("https://en.wikipedia.org/wiki/Delphi_(software)"), `Delphi est un IDE de Borland pour construire des applications Windows`, [this.pascal], [])
  netlify = new Skill("Netlify", new URL("https://netlify.com"), `Netlify est un service d'hébergement web`, [], ["saas"])
  pwa = new Skill("PWA", new URL("https://fr.wikipedia.org/wiki/Progressive_web_app"), "PWA are Progressive Web applications that can behave like OS apps", [this.js], ["saas"])
  oauth = new Skill("OAuth", new URL("https://oauth.net"), "OAuth est un protocl d'authentification et autorisation", [this.http], ["security"])
  keycloak = new Skill("Keycloak", new URL("https://www.keycloak.org"), `Keycloak est une solution d'<abbr title="Identity and Access Management">IAM</abbr>`, [this.oauth], ["security"])
  airflow = new Skill("Airflow", new URL("https://airflow.apache.org"), `Airflow est un serveur de workflow`, [this.python], ["workflow"])
  jenkins = new Skill("Jenkins", new URL("https://www.jenkins.io"), `Jenkins est un serveur d'automatisation pour la CI`, [], ["ci"])
}
export const skillList_fr = new SkillList_fr()
