// Résumé content & translations. Language-independent data (dates, skill keys,
// URLs) lives here; per-language strings are provided as {en, fr} pairs.

export const PERSON = {
  first: "Jérôme",
  last: "Beau",
  aka: "Javarome",
  location: "Nanterre, France",
  website: "https://javarome.com"
}

export const LINKS = [
  {name: "LinkedIn", url: "https://www.linkedin.com/in/javarome"},
  {name: "GitHub", url: "https://github.com/javarome"},
  {name: "Stack Overflow", url: "https://stackoverflow.com/users/650104"},
  {name: "Codepen", url: "https://codepen.io/Javarome"},
  {name: "Blog", url: "https://medium.com/@javarome"},
  {name: "X", url: "https://x.com/javarome"},
  {name: "Email", url: "mailto:javarome@gmail.com"},
  {name: "Website", url: "https://javarome.com"}
]

// UI strings + hero copy per language.
export const TXT = {
  en: {
    title: "Senior developer & team leader",
    statement: "30+ years of front and back development, leading and motivating developer teams. I design my projects to stay maintainable and to welcome change quickly. Specialised in standard, vanilla web. I can take a project from requirements to production.",
    skills: "Skills",
    skill: "Skill",
    work: "Work Experience",
    workIn: "Experience in",
    projects: "Side Projects",
    education: "Education",
    postBac: "(post-secondary)",
    present: "Present", searchPlaceholder: "Filter by skill 🔎", filteredBy: "Filtered by",
    clear: "clear", earlyLink: "I started earlier", earlyTitle: "'s early computer history",
    earlyExit: "click anywhere or press [ESC] to exit_"
  },
  fr: {
    title: "Développeur sénior & responsable d'équipe",
    statement: "Plus de 30 ans de développement front et back, à encadrer et motiver des équipes de développeurs. Je conçois mes projets pour rester maintenables et accueillir le changement rapidement. Spécialisé dans le web standard & vanilla. Je peux prendre un projet en charge de l'expression des besoins jusqu'à la mise en production.",
    skills: "Compétences",
    skill: "Compétence",
    work: "Expérience",
    workIn: "Expérience en",
    projects: "Projets personnels",
    education: "Formation",
    postBac: "(post Bac)",
    present: "Aujourd'hui", searchPlaceholder: "Filtrer par compétence 🔎", filteredBy: "Filtré par",
    clear: "effacer", earlyLink: "j'ai commencé plus tôt", earlyTitle: " — mes débuts en informatique",
    earlyExit: "cliquez n'importe où ou [Échap] pour quitter_"
  }
}

export const CATLBL = {
  lang: {en: "Languages", fr: "Langages"},
  frontend: {en: "Frontend & Web", fr: "Frontend & Web"},
  backend: {en: "Backend & Server", fr: "Backend & Serveur"},
  data: {en: "Databases", fr: "Bases de données"},
  java: {en: "Java ecosystem", fr: "Écosystème Java"},
  devops: {en: "Tools & DevOps", fr: "Outils & DevOps"},
  ai: {en: "AI / ML", fr: "IA / ML"},
  blockchain: {en: "Blockchain", fr: "Blockchain"},
  physics: {en: "Physics", fr: "Physique"},
  security: {en: "Security", fr: "Sécurité"},
  management: {en: "Management", fr: "Management"},
  other: {en: "Other", fr: "Autres"}
}

// Work-mode indicator per experience (derived from the location recorded in the old resume data:
// a home address meant remote, a company office address meant on-site).
export const MODELBL = {
  remote: {en: "Remote", fr: "Télétravail", icon: "🏡"},
  hybrid: {en: "Hybrid", fr: "Hybride", icon: "🔀"},
  onsite: {en: "On-site", fr: "Sur site", icon: "🏢"}
}

// Professional experience, most recent first. Dates are [year, month].
// e = null means "still ongoing". sk = skill keys (see skills.js).
export const WORK = [
  {
    org: "Mobkoi",
    url: "https://mobkoi.com",
    descEn: "Premium mobile-advertising company (part of The Brandtech Group) delivering full-screen, app-like ad experiences for luxury brands through direct deals with premium publishers.",
    descFr: "Société de publicité mobile premium (groupe The Brandtech) proposant des formats publicitaires plein écran, façon application, pour les marques de luxe via des accords directs avec des éditeurs premium.",
    mode: "remote",
    s: [2025, 3],
    e: null,
    tEn: "Tech Lead → Engineering Manager",
    tFr: "Responsable technique → Responsable d'ingénierie",
    projects: [
      {
        en: "Library to render ads using different original formats",
        fr: "Bibliothèque permettant le rendu des publicités dans différents formats originaux",
        dEn: "Built and led a TypeScript / Web Components library rendering bespoke ad formats across publishers, with a framework-agnostic runtime bundled with Vite and deployed on GCP.",
        dFr: "Conception et pilotage d'une bibliothèque TypeScript / Web Components rendant des formats publicitaires sur mesure chez différents éditeurs, avec un runtime agnostique aux frameworks, packagé avec Vite et déployé sur GCP.",
        sk: ["peopleManagement", "techLeading", "webComponents", "vanillaJS", "vanillaTS", "oop", "oauth", "github", "gcp", "css", "html", "jira", "vite", "claude", "codex"]
      },
      {
        en: "Graphical tool to create and manage ads",
        fr: "Outil graphique de création et gestion de publicités",
        dEn: "Led development of a browser-based visual editor letting teams compose and manage ad creatives, built on the rendering library with OAuth-secured access.",
        dFr: "Pilotage d'un éditeur visuel dans le navigateur permettant aux équipes de composer et gérer les créations publicitaires, adossé à la bibliothèque de rendu et sécurisé par OAuth.",
        sk: ["peopleManagement", "techLeading", "webComponents", "vanillaJS", "vanillaTS", "oop", "oauth", "github", "gcp", "css", "html", "jira", "vite", "claude", "codex"]
      }
    ]
  },
  {
    org: "Ringover",
    url: "https://ringover.com",
    descEn: "Cloud business-telephony (VoIP) SaaS: call management, IVR, analytics, AI call summaries and CRM integrations.",
    descFr: "SaaS de téléphonie d'entreprise dans le cloud (VoIP) : gestion d'appels, SVI, analytics, résumés d'appels par IA et intégrations CRM.",
    mode: "hybrid",
    s: [2024, 11],
    e: [2025, 1],
    tEn: "Tech Lead",
    tFr: "Responsable technique de projets",
    projects: [
      {
        en: `<a href="https://www.ringover.com/sales-enablement">Empower</a> uses AI to provide insights on telephony assets`,
        fr: `<a href="https://www.ringover.fr/sales-enablement">Empower</a> fournit des services d'IA au-dessus de la téléphonie numérique`,
        dEn: "Technical lead on Empower, a web app layering AI-driven insights (transcripts, summaries) on top of call data, with a Web Components frontend and Go services.",
        dFr: "Responsable technique d'Empower, application web ajoutant des analyses par IA (transcriptions, résumés) au-dessus des données d'appels, avec un frontend Web Components et des services Go.",
        sk: ["techLeading", "vanillaJS", "webComponents", "oop", "go", "css", "html", "jira", "vite"]
      },
      {
        en: "Design system with fine-grained imports of styles and web components",
        fr: "Système de composants UI avec import fin de styles et de composants web",
        dEn: "Built a UI component library with tree-shakeable, fine-grained imports of styles and Web Components, published on npm and shared across Ringover apps.",
        dFr: "Réalisation d'une bibliothèque de composants UI à imports fins et tree-shakables (styles et Web Components), publiée sur npm et partagée entre les applications Ringover.",
        sk: ["techLeading", "vanillaJS", "webComponents", "oop", "go", "css", "html", "jira", "vite", "npm"]
      }
    ]
  },
  {
    org: "Arianee",
    url: "https://arianee.com",
    descEn: "Web3 platform issuing blockchain-based digital product passports that let brands (notably luxury) authenticate products and engage owners after purchase.",
    descFr: "Plateforme Web3 émettant des passeports produits numériques sur blockchain, permettant aux marques (notamment du luxe) d'authentifier leurs produits et d'engager leurs clients après l'achat.",
    mode: "remote",
    s: [2022, 11],
    e: [2023, 11],
    tEn: "Web3 tooling tech lead",
    tFr: "Responsable de l'équipe outils Web3",
    projects: [
      {
        en: `Maintenance and end-of-life of a Web3 <abbr title="Content Management System">CMS</abbr>`,
        fr: `Maintenance et fin de vie d'un <abbr title="Content Management System">CMS</abbr> Web3`,
        dEn: "Led maintenance and controlled end-of-life of a Web3 CMS (Angular / MongoDB), keeping it stable for existing brands while migrating them to newer tooling.",
        dFr: "Pilotage de la maintenance et de la fin de vie maîtrisée d'un CMS Web3 (Angular / MongoDB), en le gardant stable pour les marques existantes tout en les migrant vers les nouveaux outils.",
        sk: ["peopleManagement", "techLeading", "angular", "oop", "mongodb", "sass", "circleci"]
      },
      {
        en: `<a href="https://arianee.notion.site/ARN-User-Guide-c2aeabd71df94190aa1b7988bbdfb4c1">Tools box + SaaS</a> to create Web3 websites`,
        fr: `<a href="https://arianee.notion.site/ARN-User-Guide-c2aeabd71df94190aa1b7988bbdfb4c1">Bibliothèque d'outils + SaaS</a> pour créer des sites Web3`,
        dEn: "Led ARN, a toolbox + SaaS to build Web3 websites: reusable Web Components, an Nx monorepo, Fastify APIs and wallet connection via ethers / WalletConnect.",
        dFr: "Pilotage d'ARN, boîte à outils + SaaS pour créer des sites Web3 : Web Components réutilisables, monorepo Nx, API Fastify et connexion de portefeuilles via ethers / WalletConnect.",
        sk: ["peopleManagement", "techLeading", "webComponents", "angular", "oop", "nx", "fastify", "ethers", "npm", "walletConnect", "mongodb", "netlify", "sass", "circleci"]
      },
      {
        en: `<a href="https://app.arianee.com"><abbr title="Decentralized App">dApp</abbr> Wallet</a>`,
        fr: `<a href="https://app.arianee.com"><abbr title="Decentralized App">dApp</abbr> de Wallet</a>`,
        dEn: "Led the Arianee wallet dApp (Angular PWA) letting users hold and manage their digital product passports, connecting to the blockchain through ethers / WalletConnect.",
        dFr: "Pilotage de la dApp de wallet Arianee (PWA Angular) permettant aux utilisateurs de détenir et gérer leurs passeports produits, connectée à la blockchain via ethers / WalletConnect.",
        sk: ["peopleManagement", "techLeading", "angular", "oop", "nx", "nodejs", "gcp", "ethers", "walletConnect", "netlify", "pwa", "sass", "circleci"]
      }
    ]
  },
  {
    org: "Beam",
    url: "https://www.beamapp.co",
    descEn: "Startup building a privacy-first web browser and note-taking app that captures and connects knowledge from your browsing, with end-to-end encryption.",
    descFr: "Startup développant un navigateur web et une application de prise de notes chiffrés de bout en bout, qui capture et relie les connaissances issues de votre navigation.",
    mode: "remote",
    s: [2021, 3],
    e: [2022, 9],
    tEn: "Lead Web Developer",
    tFr: "Responsable des développements web",
    projects: [
      {
        en: "Responsive web app to browse / search / edit notes",
        fr: "Application web réactive de consultation / recherche / édition de notes",
        dEn: "Led a responsive TypeScript / Web Components app to browse, search and edit notes, over a GraphQL / REST data layer with client-side end-to-end encryption (Web Crypto).",
        dFr: "Pilotage d'une application web responsive (TypeScript / Web Components) pour consulter, rechercher et éditer des notes, sur une couche de données GraphQL / REST avec chiffrement de bout en bout côté client (Web Crypto).",
        sk: ["peopleManagement", "techLeading", "vanillaTS", "webComponents", "oop", "graphql", "rest", "webCrypto", "jest", "netlify", "sass"]
      },
      {
        en: `Web server to publish notes with <abbr title="Server-Side Rendering">SSR</abbr>`,
        fr: `Serveur web pour publier des notes servies en <abbr title="Server-Side Rendering">SSR</abbr>`,
        dEn: "Built the web server that publishes notes with server-side rendering, using Fastify and shared Web Components, containerised with Docker and deployed on GCP.",
        dFr: "Réalisation du serveur web publiant les notes en rendu côté serveur (SSR), avec Fastify et des Web Components partagés, conteneurisé avec Docker et déployé sur GCP.",
        sk: ["peopleManagement", "techLeading", "vanillaTS", "webComponents", "oop", "fastify", "rest", "gcp", "gitlab", "docker"]
      }
    ]
  },
  {
    org: "Zelros",
    url: "https://zelros.com",
    descEn: "AI SaaS for insurance distribution: a recommendation engine helping advisors suggest the right coverage, with IDD-compliant traceability (acquired by Earnix in 2025).",
    descFr: "SaaS d'IA pour la distribution d'assurance : moteur de recommandation aidant les conseillers à proposer la bonne couverture, avec une traçabilité conforme à la DDA (racheté par Earnix en 2025).",
    mode: "hybrid",
    s: [2019, 1],
    e: [2021, 2],
    tEn: "Lead software developer",
    tFr: "Responsable technique de projets",
    projects: [
      {
        en: `"AiCO", an intelligent, multilingual virtual assistant for insurance phone counsellors`,
        fr: `« AiCO », un assistant virtuel intelligent et multilingue pour les téléopérateurs d'assurance`,
        dEn: "Led AiCO, a multilingual virtual assistant helping insurance phone advisors, built as a TypeScript / Express service.",
        dFr: "Pilotage d'AiCO, assistant virtuel multilingue aidant les téléconseillers en assurance, développé comme service TypeScript / Express.",
        sk: ["techLeading", "ts", "oop", "express"]
      },
      {
        en: `"Anna" knowledge management web app`,
        fr: `Application web de gestion des connaissances « Anna »`,
        dEn: "Led 'Anna', a knowledge-management web app applying NLP to insurance content, with PostgreSQL / MongoDB storage and Keycloak authentication.",
        dFr: "Pilotage d'« Anna », application web de gestion des connaissances appliquant du NLP à des contenus d'assurance, avec stockage PostgreSQL / MongoDB et authentification Keycloak.",
        sk: ["techLeading", "ts", "oop", "nlp", "postgresql", "keycloak", "mongoose"]
      },
      {
        en: `Machine Learning pipeline`,
        fr: `Pipeline de <abbr title="Machine Learning">ML</abbr>`,
        dEn: "Built an ML pipeline orchestrating Python models behind TypeScript / Fastify services, with Redis, Protocol Buffers messaging and Docker containers on Azure.",
        dFr: "Réalisation d'un pipeline de ML orchestrant des modèles Python derrière des services TypeScript / Fastify, avec Redis, des messages en Protocol Buffers et des conteneurs Docker sur Azure.",
        sk: ["techLeading", "ts", "oop", "fastify", "nodejs", "python", "redis", "azure", "docker", "sass", "protoBuffers"]
      },
      {
        en: "Automatic approval or rejection of medical files using ML",
        fr: "Approbation ou rejet automatique de dossiers médicaux à l'aide d'un modèle de ML",
        dEn: "Built an automated decisioning flow approving or rejecting medical files via ML models, orchestrated with Airflow and CI/CD on Jenkins.",
        dFr: "Réalisation d'un traitement automatisé approuvant ou rejetant des dossiers médicaux via des modèles de ML, orchestré avec Airflow et une CI/CD Jenkins.",
        sk: ["techLeading", "python", "oop", "docker", "airflow", "jenkins"]
      }
    ]
  },
  {
    org: "Famicity",
    url: "https://famicity.com",
    descEn: "Private, ad-free family social network built around a family tree, to share and preserve family memories across generations.",
    descFr: "Réseau social familial privé et sans publicité, organisé autour d'un arbre généalogique, pour partager et préserver les souvenirs de famille au fil des générations.",
    mode: "hybrid",
    s: [2015, 1],
    e: [2018, 11],
    tEn: "Senior Web Developer",
    tFr: "Développeur web sénior",
    projects: [
      {
        en: "Social network web & mobile apps for families, with feed and family tree",
        fr: "Réseau social web & mobile pour les familles, avec feed et arbre généalogique",
        dEn: "Developed the family social-network web & mobile apps (feed, family tree), migrating a legacy AngularJS codebase towards modern Angular in TypeScript.",
        dFr: "Développement des applications web & mobile du réseau social familial (feed, arbre généalogique), en migrant une base AngularJS historique vers Angular moderne en TypeScript.",
        sk: ["ts", "oop", "angular", "angularJS", "sass", "github"]
      }
    ]
  },
  {
    org: "Traveldoo",
    url: "https://www.traveldoo.com",
    descEn: "Corporate travel-booking and expense-management software (an Amadeus company).",
    descFr: "Éditeur de logiciels de réservation de voyages d'affaires et de gestion de notes de frais (filiale d'Amadeus).",
    mode: "onsite",
    s: [2013, 1],
    e: [2014, 12],
    tEn: "Senior Web Developer",
    tFr: "Développeur web sénior",
    projects: [
      {
        en: "Itinerary app",
        fr: "Application de calcul d'itinéraire",
        dEn: "Built an itinerary app computing multimodal routes via the Rome2Rio API, with an AngularJS frontend interfacing a GWT / Java backend.",
        dFr: "Réalisation d'une application de calcul d'itinéraires multimodaux via l'API Rome2Rio, avec un frontend AngularJS interfaçant un backend GWT / Java.",
        sk: ["js", "angularJS", "rome2rio", "gwt"]
      },
      {
        en: "Hotel booking web & mobile app",
        fr: "Application web & mobile de réservation d'hôtel",
        dEn: "Built a hotel-booking web & mobile app (AngularJS), packaged for mobile with PhoneGap / Cordova.",
        dFr: "Réalisation d'une application web & mobile de réservation d'hôtel (AngularJS), packagée pour le mobile avec PhoneGap / Cordova.",
        sk: ["js", "angularJS", "phonegap"]
      }
    ]
  },
  {
    org: "Xooloo",
    url: "https://xooloo.com",
    descEn: "Parental-control apps that coach children toward healthy digital habits rather than simply blocking usage.",
    descFr: "Applications de contrôle parental qui accompagnent les enfants vers de bons usages numériques plutôt que de simplement bloquer.",
    mode: "onsite",
    s: [2010, 9],
    e: [2012, 11],
    tEn: "Senior developer & quality manager",
    tFr: "Développeur sénior & responsable qualité",
    projects: [
      {
        en: "Parental control console",
        fr: "Console de contrôle parental",
        dEn: "Developed the parental-control management console as a Java / Swing desktop application.",
        dFr: "Développement de la console de gestion du contrôle parental sous forme d'application de bureau Java / Swing.",
        sk: ["java", "swing"]
      },
      {
        en: "Parental control mobile app",
        fr: "Application mobile de contrôle parental",
        dEn: "Contributed to the parental-control mobile app, building native iOS parts in Xcode alongside Java components.",
        dFr: "Contribution à l'application mobile de contrôle parental, avec les parties natives iOS développées sous Xcode aux côtés de composants Java.",
        sk: ["xcode", "java"]
      }
    ]
  },
  {
    org: "Xcalia",
    url: "https://en.wikipedia.org/wiki/Xcalia",
    descEn: "Enterprise data-integration and object/relational persistence software (SDO/DAS standards); acquired by Progress DataDirect in 2008.",
    descFr: "Éditeur de logiciels d'intégration de données et de persistance objet/relationnel (standards SDO/DAS) ; racheté par Progress DataDirect en 2008.",
    mode: "onsite",
    s: [2003, 1],
    e: [2010, 5],
    tEn: "Kernel + relational persistence team manager",
    tFr: "Responsable du pôle kernel & persistance relationnelle",
    projects: [
      {
        en: "LiDO — object/relational persistence engine",
        fr: "LiDO — moteur de persistance objet/relationnel",
        dEn: "Managed the team building LiDO, a Java object/relational persistence engine (JDO) mapping objects onto Oracle, PostgreSQL, MySQL and Versant databases.",
        dFr: "Encadrement de l'équipe développant LiDO, moteur de persistance objet/relationnel Java (JDO) mappant les objets vers des bases Oracle, PostgreSQL, MySQL et Versant.",
        sk: ["techLeading", "java", "oracle", "jdo", "beyondCompare", "versant", "idea", "eclipse", "postgresql", "mysql"]
      },
      {
        en: `<a href="https://web.archive.org/web/20070217212850/http://www.xcalia.com/products/core.jsp">XIC</a> (Xcalia Intermediation Core)`,
        fr: `<a href="https://web.archive.org/web/20070217212850/http://www.xcalia.com/products/core.jsp">XIC</a> (Xcalia Intermediation Core)`,
        dEn: "Led development of XIC, Xcalia's intermediation core federating heterogeneous data sources for composite applications, in Java with JDBC / JDO.",
        dFr: "Pilotage du développement de XIC, cœur d'intermédiation de Xcalia fédérant des sources de données hétérogènes pour des applications composites, en Java avec JDBC / JDO.",
        sk: ["techLeading", "java", "jdbc", "perforce", "junit", "oracle", "mysql", "postgresql", "jdo", "versant", "idea"]
      }
    ]
  },
  {
    org: "Valtech",
    url: "https://valtech.com",
    descEn: "Global digital agency and consultancy combining experience design, software engineering and business transformation.",
    descFr: "Agence et cabinet de conseil digital mondial combinant design d'expérience, ingénierie logicielle et transformation métier.",
    mode: "onsite",
    s: [1998, 12],
    e: [2002, 2],
    tEn: "Software Architect",
    tFr: "Architecte logiciel",
    projects: [
      {
        en: "Various consulting missions for IBM, GIE Symphonie (Kalamazoo), CNET (France Telecom R&D), EDF, BEA, BNP…",
        fr: "Diverses missions de conseil pour IBM, GIE Symphonie (Kalamazoo), CNET (France Telecom R&D), EDF, BEA, BNP…",
        dEn: "Delivered J2EE architecture and development consulting for major accounts (IBM, CNET / France Télécom R&D, EDF, BEA, BNP…), using RMI, JNDI, EJB, Swing and JDBC.",
        dFr: "Prestations de conseil en architecture et développement J2EE pour de grands comptes (IBM, CNET / France Télécom R&D, EDF, BEA, BNP…), en RMI, JNDI, EJB, Swing et JDBC.",
        sk: ["java", "rmi", "jndi", "j2ee", "swing", "jdbc", "ejb"]
      },
      {
        en: `Wrote and taught the <abbr title="Enterprise JavaBeans">EJB</abbr> training course`,
        fr: `Écriture et animation du cours <abbr title="Enterprise JavaBeans">EJB</abbr>`,
        dEn: "Authored and delivered Valtech's Enterprise JavaBeans (EJB) training course.",
        dFr: "Rédaction et animation du cours Enterprise JavaBeans (EJB) de Valtech.",
        sk: ["java", "jdbc", "ejb"]
      },
      {
        en: `Wrote and taught the <abbr title="Java 2 Enterprise Edition">J2EE</abbr> training course`,
        fr: `Écriture et animation du cours <abbr title="Java 2 Enterprise Edition">J2EE</abbr>`,
        dEn: "Authored and delivered Valtech's J2EE training course covering the full enterprise Java stack.",
        dFr: "Rédaction et animation du cours J2EE de Valtech couvrant l'ensemble de la pile Java entreprise.",
        sk: ["java", "j2ee", "jdbc", "ejb"]
      }
    ]
  },
  {
    org: "SQL Tech",
    url: "https://en.wikipedia.org/wiki/SQL",
    descEn: "French IT-services company (SSII) running a dedicated Java competence centre in the late 1990s.",
    descFr: "Société de services informatiques (SSII) française opérant un centre de compétences Java à la fin des années 1990.",
    mode: "onsite",
    s: [1997, 8],
    e: [1998, 11],
    tEn: "Java Skill Center expert",
    tFr: "Responsable du centre de compétences Java",
    projects: [
      {
        en: "Chronopost packet tracking",
        fr: "Suivi de colis de Chronopost",
        dEn: "Developed Chronopost's parcel-tracking application in Java (JBuilder) within the company's Java competence centre.",
        dFr: "Développement de l'application de suivi de colis de Chronopost en Java (JBuilder), au sein du centre de compétences Java de la société.",
        sk: ["jbuilder"]
      }
    ]
  },
  {
    org: "IBM",
    url: "https://ibm.com",
    descEn: "Global technology and consulting company (hardware, software, cloud and IT services).",
    descFr: "Groupe mondial de technologie et de conseil (matériel, logiciels, cloud et services informatiques).",
    mode: "onsite",
    s: [1997, 1],
    e: [1997, 8],
    tEn: "Software developer (Intern)",
    tFr: "Développeur (stagiaire)",
    projects: [
      {
        en: "FNAC's show booking app",
        fr: "Application web de réservation de spectacles de la FNAC",
        dEn: "As an intern, contributed to FNAC's show-booking web app, using Java (JBuilder) and Netscape LiveWire server-side JavaScript.",
        dFr: "En stage, contribution à l'application web de réservation de spectacles de la FNAC, en Java (JBuilder) et JavaScript côté serveur Netscape LiveWire.",
        sk: ["jbuilder", "livewire"]
      }
    ]
  }
]

// Personal / side projects, most recent first.
export const SIDE = [
  {
    en: `<a href="https://cosmochrony.org">Cosmochrony</a> — a non-injective projection theory of emergent physics`,
    fr: `<a href="https://cosmochrony.org">Cosmochrony</a> — théorie de la physique émergente par projection non injective`,
    s: [2025, 7],
    e: null,
    sk: ["theoreticalPhysics", "quantumMechanics", "generalRelativity", "quantumFieldTheory", "gaugeTheory", "cosmology", "spectralGeometry", "latex", "python"]
  },
  {
    en: `<a href="https://github.com/RR0/time">time</a> — API to represent date/time approximations (EDTF)`,
    fr: `<a href="https://github.com/RR0/time">time</a> — API pour représenter des dates approximatives (EDTF)`,
    s: [2024, 9],
    e: null,
    sk: ["vanillaJS", "nodejs", "npm"]
  },
  {
    en: `<a href="https://thesteps.to">thesteps.to</a> — SaaS to complete personal projects`,
    fr: `<a href="https://thesteps.to">thesteps.to</a> — SaaS d'accompagnement aux projets personnels`,
    s: [2023, 11],
    e: [2024, 11],
    sk: ["vanillaJS", "go", "css", "html", "gcp", "netlify"]
  },
  {
    en: `<a href="https://github.com/Javarome/testscript">testscript</a> — TypeScript unit test framework`,
    fr: `<a href="https://github.com/Javarome/testscript">testscript</a> — framework de test unitaire TypeScript`,
    s: [2023, 10],
    e: [2024, 9],
    sk: ["ts", "nodejs"]
  },
  {
    en: `<a href="https://github.com/Javarome/ssg-api">ssg-api</a> — API for statically generated websites`,
    fr: `<a href="https://github.com/Javarome/ssg-api">ssg-api</a> — API pour générer des sites web statiques`,
    s: [2022, 11],
    e: null,
    sk: ["html", "vanillaTS", "nodejs", "npm"]
  },
  {
    en: `<a href="https://github.com/RR0/uDb">uDb</a> — API & tool to decode & browse a deprecated binary UFO database`,
    fr: `<a href="https://github.com/RR0/uDb">uDb</a> — API & outil pour décoder et afficher une base ufologique binaire obsolète`,
    s: [2017, 3],
    e: [2025, 4],
    sk: ["vanillaTS", "nodejs", "npm"]
  },
  {
    en: `<a href="https://github.com/Javarome/s4j">s4j</a> — Java port of the C++ project <a href="https://github.com/Stellarium/stellarium">Stellarium</a>`,
    fr: `<a href="https://github.com/Javarome/s4j">s4j</a> — portage Java du projet C++ <a href="https://github.com/Stellarium/stellarium">Stellarium</a>`,
    s: [2006, 5],
    e: [2010, 12],
    sk: ["java", "cpp", "jogl", "swing"]
  },
  {
    en: `<a href="https://github.com/RR0/rr0.org">RR0</a> — web encyclopaedia on unexplained phenomena`,
    fr: `<a href="https://github.com/RR0/rr0.org">RR0</a> — encyclopédie web sur les phénomènes inexpliqués`,
    s: [1998, 7],
    e: null,
    sk: ["html", "css", "vanillaJS", "webComponents", "nodejs"]
  }
]

export const EDU = [
  {
    org: "ISTY",
    url: "https://www.isty.uvsq.fr",
    s: [1994, 9],
    e: [1997, 8],
    tEn: "Engineer's Degree, Computer Science",
    tFr: "Diplôme d'ingénieur en informatique",
    sk: ["unix", "c", "cpp", "delphi"]
  },
  {
    org: "IUT de Vélizy",
    url: "https://www.iut-velizy-rambouillet.uvsq.fr/",
    s: [1992, 9],
    e: [1994, 8],
    tEn: "Associate's Degree, Computer Science",
    tFr: "DUT Informatique",
    sk: ["c", "unix"]
  }
]

// Earliest professional start, used for the total-experience badge.
export const CAREER_START = [1997, 1]
