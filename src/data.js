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
    skills: "Skills", work: "Work Experience", projects: "Side Projects", education: "Education",
    present: "Present", searchPlaceholder: "Filter by skill 🔎", filteredBy: "Filtered by",
    clear: "clear", earlyLink: "I started earlier", earlyTitle: "'s early computer history",
    earlyExit: "click anywhere or press [ESC] to exit_"
  },
  fr: {
    title: "Développeur sénior & responsable d'équipe",
    statement: "Plus de 30 ans de développement front et back, à encadrer et motiver des équipes de développeurs. Je conçois mes projets pour rester maintenables et accueillir le changement rapidement. Spécialisé dans le web standard & vanilla. Je peux prendre un projet en charge de l'expression des besoins jusqu'à la mise en production.",
    skills: "Compétences", work: "Expérience", projects: "Projets personnels", education: "Formation",
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
    mode: "remote",
    s: [2025, 3],
    e: null,
    tEn: "Tech Lead → Engineering Manager",
    tFr: "Responsable technique → Responsable d'ingénierie",
    projects: [
      {
        en: "Library to render ads using different original formats",
        fr: "Bibliothèque permettant le rendu des publicités dans différents formats originaux",
        sk: ["peopleManagement", "techLeading", "webComponents", "vanillaJS", "vanillaTS", "oop", "oauth", "github", "gcp", "css", "html", "jira", "vite", "claude", "codex"]
      },
      {
        en: "Graphical tool to create and manage ads",
        fr: "Outil graphique de création et gestion de publicités",
        sk: ["peopleManagement", "techLeading", "webComponents", "vanillaJS", "vanillaTS", "oop", "oauth", "github", "gcp", "css", "html", "jira", "vite", "claude", "codex"]
      }
    ]
  },
  {
    org: "Ringover",
    url: "https://ringover.com",
    mode: "hybrid",
    s: [2024, 11],
    e: [2025, 1],
    tEn: "Tech Lead",
    tFr: "Responsable technique de projets",
    projects: [
      {
        en: `<a href="https://www.ringover.com/sales-enablement">Empower</a> uses AI to provide insights on telephony assets`,
        fr: `<a href="https://www.ringover.fr/sales-enablement">Empower</a> fournit des services d'IA au-dessus de la téléphonie numérique`,
        sk: ["techLeading", "vanillaJS", "webComponents", "oop", "go", "css", "html", "jira", "vite"]
      },
      {
        en: "Design system with fine-grained imports of styles and web components",
        fr: "Système de composants UI avec import fin de styles et de composants web",
        sk: ["techLeading", "vanillaJS", "webComponents", "oop", "go", "css", "html", "jira", "vite", "npm"]
      }
    ]
  },
  {
    org: "Arianee",
    url: "https://arianee.com",
    mode: "remote",
    s: [2022, 11],
    e: [2023, 11],
    tEn: "Web3 tooling tech lead",
    tFr: "Responsable de l'équipe outils Web3",
    projects: [
      {
        en: `Maintenance and end-of-life of a Web3 <abbr title="Content Management System">CMS</abbr>`,
        fr: `Maintenance et fin de vie d'un <abbr title="Content Management System">CMS</abbr> Web3`,
        sk: ["peopleManagement", "techLeading", "angular", "oop", "mongodb", "sass", "circleci"]
      },
      {
        en: `<a href="https://arianee.notion.site/ARN-User-Guide-c2aeabd71df94190aa1b7988bbdfb4c1">Tools box + SaaS</a> to create Web3 websites`,
        fr: `<a href="https://arianee.notion.site/ARN-User-Guide-c2aeabd71df94190aa1b7988bbdfb4c1">Bibliothèque d'outils + SaaS</a> pour créer des sites Web3`,
        sk: ["peopleManagement", "techLeading", "webComponents", "angular", "oop", "nx", "fastify", "ethers", "npm", "walletConnect", "mongodb", "netlify", "sass", "circleci"]
      },
      {
        en: `<a href="https://app.arianee.com"><abbr title="Decentralized App">dApp</abbr> Wallet</a>`,
        fr: `<a href="https://app.arianee.com"><abbr title="Decentralized App">dApp</abbr> de Wallet</a>`,
        sk: ["peopleManagement", "techLeading", "angular", "oop", "nx", "nodejs", "gcp", "ethers", "walletConnect", "netlify", "pwa", "sass", "circleci"]
      }
    ]
  },
  {
    org: "Beam",
    url: "https://www.beamapp.co",
    mode: "remote",
    s: [2021, 3],
    e: [2022, 9],
    tEn: "Lead Web Developer",
    tFr: "Responsable des développements web",
    projects: [
      {
        en: "Responsive web app to browse / search / edit notes",
        fr: "Application web réactive de consultation / recherche / édition de notes",
        sk: ["peopleManagement", "techLeading", "vanillaTS", "webComponents", "oop", "graphql", "rest", "webCrypto", "jest", "netlify", "sass"]
      },
      {
        en: `Web server to publish notes with <abbr title="Server-Side Rendering">SSR</abbr>`,
        fr: `Serveur web pour publier des notes servies en <abbr title="Server-Side Rendering">SSR</abbr>`,
        sk: ["peopleManagement", "techLeading", "vanillaTS", "webComponents", "oop", "fastify", "rest", "gcp", "gitlab", "docker"]
      }
    ]
  },
  {
    org: "Zelros",
    url: "https://zelros.com",
    mode: "hybrid",
    s: [2019, 1],
    e: [2021, 2],
    tEn: "Lead software developer",
    tFr: "Responsable technique de projets",
    projects: [
      {
        en: `"AiCO", an intelligent, multilingual virtual assistant for insurance phone counsellors`,
        fr: `« AiCO », un assistant virtuel intelligent et multilingue pour les téléopérateurs d'assurance`,
        sk: ["techLeading", "ts", "oop", "express"]
      },
      {
        en: `"Anna" knowledge management web app`,
        fr: `Application web de gestion des connaissances « Anna »`,
        sk: ["techLeading", "ts", "oop", "nlp", "postgresql", "keycloak", "mongoose"]
      },
      {
        en: `Machine Learning pipeline`,
        fr: `Pipeline de <abbr title="Machine Learning">ML</abbr>`,
        sk: ["techLeading", "ts", "oop", "fastify", "nodejs", "python", "redis", "azure", "docker", "sass", "protoBuffers"]
      },
      {
        en: "Automatic approval or rejection of medical files using ML",
        fr: "Approbation ou rejet automatique de dossiers médicaux à l'aide d'un modèle de ML",
        sk: ["techLeading", "python", "oop", "docker", "airflow", "jenkins"]
      }
    ]
  },
  {
    org: "Famicity",
    url: "https://famicity.com",
    mode: "hybrid",
    s: [2015, 1],
    e: [2018, 11],
    tEn: "Senior Web Developer",
    tFr: "Développeur web sénior",
    projects: [
      {
        en: "Social network web & mobile apps for families, with feed and family tree",
        fr: "Réseau social web & mobile pour les familles, avec feed et arbre généalogique",
        sk: ["ts", "oop", "angular", "angularJS", "sass", "github"]
      }
    ]
  },
  {
    org: "Traveldoo",
    url: "https://www.traveldoo.com",
    mode: "onsite",
    s: [2013, 1],
    e: [2014, 12],
    tEn: "Senior Web Developer",
    tFr: "Développeur web sénior",
    projects: [
      {en: "Itinerary app", fr: "Application de calcul d'itinéraire", sk: ["js", "angularJS", "rome2rio", "gwt"]},
      {
        en: "Hotel booking web & mobile app",
        fr: "Application web & mobile de réservation d'hôtel",
        sk: ["js", "angularJS", "phonegap"]
      }
    ]
  },
  {
    org: "Xooloo",
    url: "https://xooloo.com",
    mode: "onsite",
    s: [2010, 9],
    e: [2012, 11],
    tEn: "Senior developer & quality manager",
    tFr: "Développeur sénior & responsable qualité",
    projects: [
      {en: "Parental control console", fr: "Console de contrôle parental", sk: ["java", "swing"]},
      {en: "Parental control mobile app", fr: "Application mobile de contrôle parental", sk: ["xcode", "java"]}
    ]
  },
  {
    org: "Xcalia",
    url: "https://en.wikipedia.org/wiki/Xcalia",
    mode: "onsite",
    s: [2003, 1],
    e: [2010, 5],
    tEn: "Kernel + relational persistence team manager",
    tFr: "Responsable du pôle kernel & persistance relationnelle",
    projects: [
      {
        en: "LiDO — object/relational persistence engine",
        fr: "LiDO — moteur de persistance objet/relationnel",
        sk: ["techLeading", "java", "oracle", "jdo", "beyondCompare", "versant", "idea", "eclipse", "postgresql", "mysql"]
      },
      {
        en: `<a href="https://web.archive.org/web/20070217212850/http://www.xcalia.com/products/core.jsp">XIC</a> (Xcalia Intermediation Core)`,
        fr: `<a href="https://web.archive.org/web/20070217212850/http://www.xcalia.com/products/core.jsp">XIC</a> (Xcalia Intermediation Core)`,
        sk: ["techLeading", "java", "jdbc", "perforce", "junit", "oracle", "mysql", "postgresql", "jdo", "versant", "idea"]
      }
    ]
  },
  {
    org: "Valtech",
    url: "https://valtech.com",
    mode: "onsite",
    s: [1998, 12],
    e: [2002, 2],
    tEn: "Software Architect",
    tFr: "Architecte logiciel",
    projects: [
      {
        en: "Various consulting missions for IBM, GIE Symphonie (Kalamazoo), CNET (France Telecom R&D), EDF, BEA, BNP…",
        fr: "Diverses missions de conseil pour IBM, GIE Symphonie (Kalamazoo), CNET (France Telecom R&D), EDF, BEA, BNP…",
        sk: ["java", "rmi", "jndi", "j2ee", "swing", "jdbc", "ejb"]
      },
      {
        en: `Wrote and taught the <abbr title="Enterprise JavaBeans">EJB</abbr> training course`,
        fr: `Écriture et animation du cours <abbr title="Enterprise JavaBeans">EJB</abbr>`,
        sk: ["java", "jdbc", "ejb"]
      },
      {
        en: `Wrote and taught the <abbr title="Java 2 Enterprise Edition">J2EE</abbr> training course`,
        fr: `Écriture et animation du cours <abbr title="Java 2 Enterprise Edition">J2EE</abbr>`,
        sk: ["java", "j2ee", "jdbc", "ejb"]
      }
    ]
  },
  {
    org: "SQL Tech",
    url: "https://en.wikipedia.org/wiki/SQL",
    mode: "onsite",
    s: [1997, 8],
    e: [1998, 11],
    tEn: "Java Skill Center expert",
    tFr: "Responsable du centre de compétences Java",
    projects: [
      {en: "Chronopost packet tracking", fr: "Suivi de colis de Chronopost", sk: ["jbuilder"]}
    ]
  },
  {
    org: "IBM",
    url: "https://ibm.com",
    mode: "onsite",
    s: [1997, 1],
    e: [1997, 8],
    tEn: "Software developer (Intern)",
    tFr: "Développeur (stagiaire)",
    projects: [
      {
        en: "FNAC's show booking app",
        fr: "Application web de réservation de spectacles de la FNAC",
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
    sk: ["java", "jogl", "swing"]
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
    sk: ["c"]
  }
]

// Earliest professional start, used for the total-experience badge.
export const CAREER_START = [1997, 1]
