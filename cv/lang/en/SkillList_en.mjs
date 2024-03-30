import {Skill} from "../../skill/Skill.mjs"
import {SkillList} from "../SkillList.mjs"

/**
 * @type {SkillList}
 */
class SkillList_en extends SkillList {
  angularJS = new Skill("AngularJS", new URL("https://angularjs.org"), `Legacy Google web framework. Old version of Angular.`, "javascript", "typescript")
  angular = new Skill("Angular", new URL("https://angular.io"), "Google web framework. Modern version of AngularJS.", "javascript", "typescript")
  js = new Skill("JavaScript", new URL("https://ecma-international.org/publications-and-standards/standards/ecma-262/"), "Programming language for browsers and NodeJS", "javascript")
  vanilla = new Skill("Vanilla", new URL("http://vanilla-js.com"), `JavaScript or TypeScript used without any other fancy frameworks`)
  ts = new Skill("TypeScript", new URL("https://www.typescriptlang.org"), "Microsoft's superset of JavaScript to add typing and OOP", "javascript", "typescript")
  nx = new Skill("Nx", new URL("https://nx.dev"), "Monorepo tooling", "javascript", "typescript")
  c = new Skill("C", new URL("https://www.open-std.org/jtc1/sc22/wg14/"), "C programming language")
  sql = new Skill("SQL", new URL("https://en.wikipedia.org/wiki/SQL"), `RDBMS query language`)
  cpp = new Skill("C++", new URL("https://www.open-std.org/jtc1/sc22/wg21/"), "C programming language")
  postgresql = new Skill("PostgreSQL", new URL("https://www.postgresql.org"), "Postgres Relational database", this.sql)
  nlp = new Skill("NLP", new URL("https://en.wikipedia.org/wiki/Natural_language_processing"), "Natural Language Processing")
  phonegap = new Skill("Phonegap", new URL("https://fr.wikipedia.org/wiki/Adobe_PhoneGap"), "(or Apache Cordova) allows encapsulating a web app into a native mobile (iOS, Android) app")
  xcode = new Skill("XCode", new URL("https://developer.apple.com/xcode"), `Allows to build MacOS native apps`)
  java = new Skill("Java", new URL("https://www.java.com"), `Java is a programming language and a platform to write apps once and run them everywhere`, "java")
  swing = new Skill("Swing", new URL("https://docs.oracle.com/javase/tutorial/uiswing/index.html"), `Swing is a Java API to build UI on desktop`, "java", "ui")
  perforce = new Skill("Perforce", new URL("https://www.perforce.com/products/helix-core"), `Perforce is a VCS`, "tool")
  junit = new Skill("JUnit", new URL("https://junit.org/"), `JUnit is a Java testing framework`, "java", "test")
  jdo = new Skill("JDO", new URL("https://www.oracle.com/java/technologies/java-data-objects.html"), `Java Data Objects is a Java persistence standard`, "java")
  jdbc = new Skill("JDBC", new URL("https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/"), `Java Database Connectivity is the Java API to access RDBMS`, "java")
  oracle = new Skill("Oracle", new URL("https://www.oracle.com/database/"), `Oracle is a RDBMS`, this.sql)
  mysql = new Skill("MySQL", new URL("https://www.mysql.com"), `MySQL is a RDBMS`, this.sql)
  beyondCompare = new Skill("Beyond Compare", new URL("https://www.scootersoftware.com/"), `Beyond Compare is a file comparison tool. It was one of the tools used before the advent of VCS.`, "tool")
  versant = new Skill("Versant", new URL("https://esd.actian.com/platform/docs/Docs/Versant_Products/Versant_Object_Database_10"), `Versant was an ODBMS`, this.sql)
  idea = new Skill("IntelliJ IDEA", new URL("https://www.jetbrains.com/idea"), `IntelliJ IDEA is a Java IDE`, "tool", "ide")
  eclipse = new Skill("Eclipse", new URL("https://eclipseide.org/"), `Eclipse is an OSS Java IDE`, "tool", "ide")
  ejb = new Skill("EJB", new URL("https://www.oracle.com/java/technologies/appmodel.html"), `Java 2 Entreprise Edition is a suite of APIs to build entreprise-grade apps`, "java")
  j2ee = new Skill("J2EE", new URL("https://www.oracle.com/java/technologies/appmodel.html"), `Java 2 Entreprise Edition is a suite of APIs to build entreprise-grade apps`, "java")
  fastify = new Skill("Fastify", new URL("https://fastify.dev"), `Fastify is a TypeScript web server framework`, "typescript", "javascript")
  nodejs = new Skill("NodeJS", new URL("https://nodejs.org"), `NodeJS allows to buid JavaScript apps outside of a browser`, "javascript")
  python = new Skill("Python", new URL("https://www.python.org"), `Python is a programming language used by most ML libraries`, "javascript")
  graphql = new Skill("GraphQL", new URL("https://graphql.org/"), `GraphQL is a standard to query server APIs in a tailored fashion`, "javascript")
  http = new Skill("HTTP", new URL("https://en.wikipedia.org/wiki/HTTP"), `HTTP is the standard protocol for serving web pages`)
  rest = new Skill("REST", new URL("https://fr.wikipedia.org/wiki/Representational_state_transfer"), `REST is a standard for HTTP APIs`, this.http)
  webCrypto = new Skill("Web Crypto", new URL("https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"), `Web Crypto allows cryptographic primitives from browser apps`)
}
export const skillList_en = new SkillList_en()
