// Skill catalogue: display name, reference URL, category and short description.
// `IMPLIES` encodes skills implied by another (e.g. Java implies OOP), so the
// skill cloud and the skill filter also credit implied skills, like the
// original site did.

// Category tint colours (subtle, same lightness/chroma, hue varies by family).
export const CAT_COLOR = {
  lang: "oklch(0.93 0.035 255)",
  frontend: "oklch(0.93 0.05 150)",
  backend: "oklch(0.93 0.05 195)",
  data: "oklch(0.93 0.045 305)",
  java: "oklch(0.93 0.055 45)",
  devops: "oklch(0.94 0.045 350)",
  ai: "oklch(0.93 0.06 85)",
  blockchain: "oklch(0.93 0.06 100)",
  physics: "oklch(0.92 0.05 285)",
  management: "oklch(0.93 0.05 25)",
  other: "oklch(0.95 0.006 260)"
}

// key: [displayName, url, category, description]
export const SKILLS = {
  js: ["JavaScript", "https://developer.mozilla.org/docs/Web/JavaScript", "lang", "Programming language for browsers and NodeJS"],
  ts: ["TypeScript", "https://www.typescriptlang.org", "lang", "Microsoft's typed superset of JavaScript"],
  java: ["Java", "https://www.java.com", "lang", "Write once, run anywhere language & platform"],
  c: ["C", "https://www.open-std.org/jtc1/sc22/wg14/", "lang", "C programming language"],
  cpp: ["C++", "https://www.open-std.org/jtc1/sc22/wg21/", "lang", "C++ programming language"],
  python: ["Python", "https://www.python.org", "lang", "Language used by most ML libraries"],
  go: ["Go", "https://go.dev", "lang", "Go (golang), for fast application servers"],
  delphi: ["Delphi", "https://en.wikipedia.org/wiki/Delphi_(software)", "lang", "Borland IDE to build Windows apps (Pascal)"],
  latex: ["LaTeX", "https://www.latex-project.org", "lang", "Document preparation for scientific typesetting"],
  pascal: ["Pascal", "https://en.wikipedia.org/wiki/Pascal_(programming_language)", "lang", "Procedural programming language"],
  oop: ["OOP", "https://en.wikipedia.org/wiki/Object-oriented_programming", "lang", "Object-Oriented Programming approach"],
  html: ["HTML", "https://developer.mozilla.org/docs/Web/HTML", "frontend", "HyperText Markup Language for web pages"],
  css: ["CSS", "https://developer.mozilla.org/docs/Web/CSS", "frontend", "Cascading Style Sheets for web page styles"],
  sass: ["Sass", "https://sass-lang.com", "frontend", "Tool to extend CSS capabilities"],
  webComponents: ["Web Components", "https://developer.mozilla.org/docs/Web/API/Web_components", "frontend", "Reusable custom elements standard"],
  vanillaJS: ["Vanilla JS", "http://vanilla-js.com", "frontend", "JS/TS used without heavy frameworks"],
  vanillaTS: ["Vanilla TS", "https://www.typescriptlang.org", "frontend", "TypeScript used without heavy frameworks"],
  angular: ["Angular", "https://angular.io", "frontend", "Google web framework (modern Angular)"],
  angularJS: ["AngularJS", "https://angularjs.org", "frontend", "Legacy Google web framework"],
  pwa: ["PWA", "https://en.wikipedia.org/wiki/Progressive_web_app", "frontend", "Progressive Web Apps that behave like OS apps"],
  phonegap: ["Phonegap", "https://en.wikipedia.org/wiki/Apache_Cordova", "frontend", "Wraps a web app into a native mobile app"],
  gwt: ["GWT", "https://www.gwtproject.org", "frontend", "Compiles Java into JavaScript"],
  xcode: ["XCode", "https://developer.apple.com/xcode", "frontend", "Build native macOS/iOS apps"],
  nodejs: ["NodeJS", "https://nodejs.org", "backend", "Run JavaScript outside the browser"],
  fastify: ["Fastify", "https://fastify.dev", "backend", "TypeScript web server framework"],
  express: ["Express", "https://expressjs.com", "backend", "JavaScript web server framework"],
  rest: ["REST", "https://en.wikipedia.org/wiki/REST", "backend", "Standard for HTTP APIs"],
  graphql: ["GraphQL", "https://graphql.org/", "backend", "Query server APIs in a tailored way"],
  webCrypto: ["Web Crypto", "https://developer.mozilla.org/docs/Web/API/Web_Crypto_API", "backend", "Cryptographic primitives in the browser"],
  protoBuffers: ["ProtoBuf", "https://protobuf.dev", "backend", "Optimized data serialization"],
  http: ["HTTP", "https://en.wikipedia.org/wiki/HTTP", "backend", "Standard protocol for serving web pages"],
  nes: ["NES", "https://en.wikipedia.org/wiki/Netscape_Enterprise_Server", "backend", "Netscape Enterprise Server (server-side JS)"],
  postgresql: ["PostgreSQL", "https://www.postgresql.org", "data", "Postgres relational database"],
  mysql: ["MySQL", "https://www.mysql.com", "data", "MySQL relational database"],
  mongodb: ["MongoDB", "https://www.mongodb.com", "data", "NoSQL JSON database"],
  mongoose: ["Mongoose", "https://mongoosejs.com", "data", "Schema/typing layer over MongoDB"],
  oracle: ["Oracle", "https://www.oracle.com/database/", "data", "Oracle relational database"],
  redis: ["Redis", "https://redis.io", "data", "Key/value storage"],
  jdo: ["JDO", "https://www.oracle.com/java/technologies/java-data-objects.html", "data", "Java persistence standard (Java Data Objects)"],
  jdbc: ["JDBC", "https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/", "data", "Java API to access relational databases"],
  versant: ["Versant", "https://en.wikipedia.org/wiki/Versant_Corporation", "data", "Object database (ODBMS)"],
  sql: ["SQL", "https://en.wikipedia.org/wiki/SQL", "data", "Standard query language for relational DBs"],
  ejb: ["EJB", "https://wikipedia.org/wiki/Enterprise_JavaBeans", "java", "Enterprise JavaBeans"],
  j2ee: ["J2EE", "https://www.oracle.com/java/technologies/appmodel.html", "java", "Java 2 Enterprise Edition APIs"],
  rmi: ["RMI", "https://docs.oracle.com/javase/tutorial/rmi/index.html", "java", "Java Remote Method Invocation"],
  jndi: ["JNDI", "https://docs.oracle.com/javase/tutorial/jndi/overview/index.html", "java", "Java Naming and Directory Interface"],
  swing: ["Swing", "https://docs.oracle.com/javase/tutorial/uiswing/index.html", "java", "Java desktop UI API"],
  jogl: ["JOGL", "https://jogamp.org/jogl", "java", "Java bindings for OpenGL"],
  junit: ["JUnit", "https://junit.org/", "java", "Java unit testing framework"],
  jbuilder: ["JBuilder", "https://en.wikipedia.org/wiki/JBuilder", "java", "Borland's Java IDE"],
  livewire: ["Livewire", "https://en.wikipedia.org/wiki/Netscape_Enterprise_Server", "java", "Database access from JS on Netscape server"],
  openGL: ["OpenGL", "https://www.opengl.org", "java", "Open Graphics Library"],
  docker: ["Docker", "https://www.docker.com", "devops", "Run apps in containers"],
  github: ["GitHub", "https://github.com", "devops", "Project hosting SaaS"],
  gitlab: ["GitLab", "https://gitlab.com", "devops", "Project hosting SaaS"],
  git: ["Git", "https://git-scm.com/", "devops", "Decentralized version control system"],
  circleci: ["CircleCI", "https://circleci.com", "devops", "CI software as a service"],
  jenkins: ["Jenkins", "https://www.jenkins.io", "devops", "CI automation server"],
  vite: ["ViteJS", "https://vite.dev", "devops", "Modern web build tool"],
  nx: ["Nx", "https://nx.dev", "devops", "Monorepo tooling"],
  npm: ["NPM", "https://www.npmjs.com/", "devops", "NodeJS package manager"],
  jira: ["Jira", "https://www.atlassian.com/software/jira", "devops", "Project management ticketing (Atlassian)"],
  idea: ["IntelliJ IDEA", "https://www.jetbrains.com/idea", "devops", "IntelliJ IDEA Java IDE"],
  eclipse: ["Eclipse", "https://eclipseide.org/", "devops", "Open-source Java IDE"],
  netlify: ["Netlify", "https://netlify.com", "devops", "Web hosting service"],
  gcp: ["GCP", "https://cloud.google.com", "devops", "Google Cloud Platform"],
  azure: ["Azure", "https://azure.microsoft.com", "devops", "Microsoft Azure cloud"],
  beyondCompare: ["Beyond Compare", "https://www.scootersoftware.com/", "devops", "File comparison tool"],
  perforce: ["Perforce", "https://www.perforce.com/products/helix-core", "devops", "Version control system"],
  airflow: ["Airflow", "https://airflow.apache.org", "devops", "Workflow orchestration server"],
  jest: ["Jest", "https://jestjs.io", "devops", "JS/TS unit test framework"],
  claude: ["Claude AI", "https://claude.ai", "ai", "Anthropic's AI assistant for development"],
  codex: ["Codex", "https://openai.com/codex", "ai", "OpenAI's AI coding agent"],
  nlp: ["NLP", "https://en.wikipedia.org/wiki/Natural_language_processing", "ai", "Natural Language Processing (ML on text)"],
  ml: ["ML", "https://en.wikipedia.org/wiki/Machine_learning", "ai", "Machine Learning"],
  ethers: ["Ethers", "https://ethers.org/", "blockchain", "JS library for the Ethereum blockchain"],
  walletConnect: ["WalletConnect", "https://walletconnect.com/", "blockchain", "Connect blockchain wallets on the web"],
  management: ["Management", "https://en.wikipedia.org/wiki/Engineering_management", "management", "Leading, mentoring and organising developer teams"],
  theoreticalPhysics: ["Theoretical physics", "https://en.wikipedia.org/wiki/Theoretical_physics", "physics", "Mathematical modelling of physical phenomena"],
  quantumMechanics: ["QM", "https://en.wikipedia.org/wiki/Quantum_mechanics", "physics", "Physics at atomic and subatomic scales"],
  quantumFieldTheory: ["QFT", "https://en.wikipedia.org/wiki/Quantum_field_theory", "physics", "Unifies quantum mechanics and relativistic fields"],
  gaugeTheory: ["Gauge theory", "https://en.wikipedia.org/wiki/Gauge_theory", "physics", "Field theory based on local gauge symmetries"],
  generalRelativity: ["GR", "https://en.wikipedia.org/wiki/General_relativity", "physics", "Relativistic theory of gravitation & spacetime"],
  cosmology: ["Cosmology", "https://en.wikipedia.org/wiki/Cosmology", "physics", "Structure and evolution of the universe"],
  spectralGeometry: ["Spectral geometry", "https://en.wikipedia.org/wiki/Spectral_geometry", "physics", "Geometry through operator spectra"],
  unix: ["Unix", "https://en.wikipedia.org/wiki/Unix", "other", "Unix operating system"],
  macos: ["MacOS", "https://en.wikipedia.org/wiki/MacOS", "other", "Apple's OS for Mac computers"],
  keycloak: ["Keycloak", "https://www.keycloak.org", "other", "Identity & Access Management solution"],
  oauth: ["OAuth", "https://oauth.net", "other", "Authentication & authorization protocol"],
  rome2rio: ["Rome2Rio", "https://www.rome2rio.com", "other", "Itinerary / routing API"]
}

export const IMPLIES = {
  ts: ["js"], vanillaTS: ["ts"], webComponents: ["html"], cpp: ["c"],
  postgresql: ["sql"], mongodb: ["js"], mongoose: ["mongodb"], nlp: ["ml"],
  xcode: ["macos"], java: ["oop"], jndi: ["java"], rmi: ["java"], jogl: ["java", "openGL"],
  swing: ["java", "oop"], jdo: ["java"], jdbc: ["java"], oracle: ["java"], ejb: ["java"], j2ee: ["java"],
  nodejs: ["js"], fastify: ["ts", "nodejs"], express: ["js", "nodejs"], rest: ["http"],
  webCrypto: ["js"], jest: ["js"], gitlab: ["git"], github: ["git"], css: ["html"], sass: ["css"],
  ethers: ["js"], walletConnect: ["ethers"], jbuilder: ["java"], livewire: ["nes"], nes: ["js"],
  delphi: ["pascal"], pwa: ["js"], keycloak: ["oauth"], oauth: ["http"], airflow: ["python"],
  gwt: ["java"], angular: ["ts"], angularJS: ["ts"],
  quantumMechanics: ["theoreticalPhysics"], quantumFieldTheory: ["quantumMechanics"],
  gaugeTheory: ["quantumFieldTheory"], generalRelativity: ["theoreticalPhysics"], cosmology: ["generalRelativity"]
}

// Order in which skill categories are listed in the Skills section.
export const CAT_ORDER = ["lang", "frontend", "backend", "data", "java", "devops", "ai", "blockchain", "management", "physics", "other"]

// Expand a list of skill keys with everything they imply (transitively).
// Duplicates are kept on purpose so counts reflect how often a skill applies.
export function expand(keys) {
  const out = []
  const visit = k => {
    out.push(k);
    (IMPLIES[k] || []).forEach(visit)
  }
  keys.forEach(visit)
  return out
}

// Build a renderable tag descriptor for a skill key.
export function tag(key) {
  const s = SKILLS[key]
  if (!s) return {key, name: key, url: "#", bg: CAT_COLOR.other, cat: "other", title: key}
  const [name, url, cat, desc] = s
  return {key, name, url, cat, bg: CAT_COLOR[cat] || CAT_COLOR.other, title: desc ? `${name} — ${desc}` : name}
}
