// Single source of truth for portfolio content — keep in sync with Doc/CV_*.docx
import restaurantArt from "../assets/images/work-restaurant.svg";
import blogArt from "../assets/images/work-blog.svg";
import redesignArt from "../assets/images/work-redesign.svg";

export const profile = {
  name: "Ishaq Hannan Rozen",
  role: "Quality Control Engineer · QA Engineer",
  location: "Jakarta, Indonesia",
  email: "hannanrozen4567@gmail.com",
  phone: "+62 882-1073-1718",
  whatsapp: "https://wa.me/6288210731718",
  linkedin: "https://www.linkedin.com/in/hannanrozen/",
  github: "https://github.com/hannanrozen",
  cv: "/CV_Ishaq_Hannan_Rozen_QA_2026.pdf",
  summary:
    "QC Engineer with 1+ year of hands-on experience across the full STLC — requirement analysis, test design, execution, defect tracking, and UAT — on enterprise web and mobile applications for government and telecommunications clients. 15+ projects handled and 3,000+ test cases authored.",
};

export const metrics = [
  // Numbers animate from `from` (default 0) to `to` when scrolled into view
  { to: 15, suffix: "+", label: "Projects tested", note: "Web, Android & iOS" },
  { to: 3000, suffix: "+", label: "Test cases authored", note: "Up to 500+ on one major project" },
  { from: 4, to: 1, prefix: "4h → ", suffix: "h", label: "Regression time", note: "75% faster on automated flows" },
  { to: 100, suffix: "%", label: "UAT sign-off rate", note: "Across handled projects" },
];

export const process = [
  {
    step: "01",
    title: "Analyze",
    body: "Break down SRS into testable requirements, roles, and business rules before a single case is written.",
  },
  {
    step: "02",
    title: "Design",
    body: "Write BDD (Given–When–Then) test cases covering positive, negative, and edge scenarios with traceability.",
  },
  {
    step: "03",
    title: "Execute",
    body: "Run functional, regression, E2E, and API checks per release; automate stable, high-value flows with Playwright.",
  },
  {
    step: "04",
    title: "Report",
    body: "File reproducible defects with steps, evidence, and expected results — then retest within the H+2 fixing SLA.",
  },
  {
    step: "05",
    title: "Sign-off",
    body: "Lead pre-UAT regression and UAT sessions with client stakeholders, triage findings, and close the loop.",
  },
];

export const experience = [
  {
    company: "PT Javan Cipta Solusi",
    place: "Yogyakarta · Remote",
    period: "Jul 2025 – Present",
    blurb:
      "IT consulting company delivering business process automation systems for government and private sectors.",
    roles: [
      { title: "Quality Control Engineer (Contract)", period: "Jan 2026 – Present" },
      { title: "Quality Control Intern", period: "Jul 2025 – Dec 2025" },
    ],
    highlights: [
      ["Testing across the STLC", "Functional, regression, E2E, and UAT testing on 15+ government and telecom projects — multi-role access control, approval flows, email and in-app notifications."],
      ["Test design", "3,000+ BDD test cases authored in total — up to 500+ per major project — from SRS analysis, with requirement traceability and test plans/runs organized per release."],
      ["Defect management", "Reported, prioritized, and retested 50+ defects per release cycle under an H+2 fixing SLA, working with developers and BAs."],
      ["UAT", "Led pre-UAT regression and coordinated UAT sessions (scripts, MoM, findings triage) — 100% UAT sign-off rate across handled projects."],
      ["Test automation", "Built Playwright + TypeScript E2E suites for a telecom deployment platform; automated ~20% of UAT cases and cut regression time by 75% (4h → 1h per cycle)."],
      ["Test stability", "Diagnosed flaky failures with network traces and API response checks, replacing unreliable UI signals with verifiable ones."],
      ["AI-assisted QA", "Authored reusable prompts/skills encoding team test case and defect standards for Claude Code + MCP integrations; led an AI-assisted automation pilot with ROI report."],
      ["Performance testing", "Load testing with JMeter to establish performance baselines before production release."],
      ["Mentoring & docs", "Mentored 6+ QC interns; authored 12 end-user guides as Technical Writer."],
    ],
  },
  {
    company: "PT Amerta Indah Otsuka",
    place: "Jakarta",
    period: "Nov 2023 – May 2024",
    roles: [{ title: "UI/UX Designer", period: "Nov 2023 – May 2024" }],
    highlights: [
      ["Usability evaluation", "Ran UEQ evaluation on the Otsuka Career website — 20% shorter task completion time and 50% higher user satisfaction."],
      ["Accessible design", "Designed and prototyped internal web apps (AIOnomic login, PROTRACE navigation) — a user-centered lens now applied to UI and usability testing."],
    ],
  },
];

export const caseStudies = [
  {
    title: "Telecom Network Deployment Platform",
    kind: "E2E Automation",
    context: "Telecommunications client · 2025–2026",
    problem:
      "Multi-role chained flows (vendor assignment → permit → approval) and batch submissions across many cluster IDs took hours to regress manually.",
    approach:
      "Playwright + TypeScript suites with page-level fixtures, shared run state across dependent specs, file-upload test data, and network-response assertions.",
    result: "Regression on automated flows: 75% faster (4h → 1h per cycle)",
    tags: ["Playwright", "TypeScript", "Fixtures", "Network assertions"],
  },
  {
    title: "Email & In-App Notification Regression",
    kind: "Regression",
    context: "Telecommunications client · 2026",
    problem:
      "Notification content and recipients differ per role and module — easy to miss silently broken summaries.",
    approach:
      "Executed a 57-case regression across 7 modules and multiple recipient roles, verifying email summaries in Mailpit against the SRS, including negative scenarios.",
    result: "57 cases · 7 modules · multi-role coverage",
    tags: ["Regression", "Mailpit", "Negative testing"],
  },
  {
    title: "Business Process Automation System",
    kind: "Functional",
    context: "Government sector · 2025",
    problem:
      "Workflow-driven modules with multi-role access control and approval chains carried high risk on transaction logic.",
    approach:
      "Functional and regression testing of each workflow stage, validating role permissions, transaction logic, and approval flows ahead of UAT.",
    result: "Entered UAT with approval flows validated",
    tags: ["Functional", "RBAC", "Workflow"],
  },
  {
    title: "Enterprise Internal Management System",
    kind: "End-to-End",
    context: "Private sector · 2025",
    problem: "Core modules feed management reports — wrong data means wrong decisions.",
    approach:
      "End-to-end functional validation of core modules with data-accuracy checks on generated reports.",
    result: "Critical defects caught before production",
    tags: ["E2E", "Data validation", "Reporting"],
  },
];

export const skills = [
  {
    group: "Testing",
    items: ["Functional", "Regression", "End-to-End", "Smoke & Sanity", "Exploratory", "API", "Cross-browser", "UAT", "Usability", "Mobile (Android/iOS)", "Load Testing"],
  },
  {
    group: "Automation & Tools",
    items: ["Playwright", "TypeScript", "JavaScript", "Maestro (mobile)", "JMeter", "Mailpit", "Claude Code"],
  },
  {
    group: "Test Design & Docs",
    items: ["SRS Analysis", "Test Plan", "Gherkin / BDD", "Requirement Traceability", "Defect Reporting", "UAT Scripts", "User Guides"],
  },
  {
    group: "Process & Management",
    items: ["SDLC", "STLC", "Agile / Scrum", "ActiveCollab", "Taiga", "Test management tool"],
  },
];

export const education = [
  {
    title: "Bachelor of Information Technology",
    org: "Universitas Negeri Yogyakarta",
    period: "2020 – 2024",
    note: "GPA 3.70 / 4.00",
  },
  {
    title: "Front-End Web Development Bootcamp",
    org: "Dibimbing.id",
    period: "2025",
    note: "Score 92.53 — applied to locator strategy & UI automation",
  },
  {
    title: "UI/UX Independent Study",
    org: "Productzilla Academy · Kampus Merdeka",
    period: "2023",
    note: "Score 82.00 — UX research, usability testing",
  },
];

export const earlierWork = [
  {
    title: "Bale Raos Website Slicing",
    description: "Responsive restaurant site built from a Figma design with HTML and Tailwind CSS.",
    image: restaurantArt,
    tech: ["HTML", "Tailwind CSS"],
    links: [
      { label: "Code", href: "https://github.com/hannanrozen/-DAY-24---Mini-Project.git" },
      { label: "Demo", href: "https://drive.google.com/file/d/1mcMSipBDe6WFewAOqG_64xKN3M5N_PBr/view?usp=drive_link" },
    ],
  },
  {
    title: "Dibimbing Blog & Article Slicing",
    description: "Pixel-faithful, responsive article and blog pages in HTML and CSS.",
    image: blogArt,
    tech: ["HTML", "CSS"],
    links: [
      { label: "Code", href: "https://github.com/hannanrozen/Dibimbing-Slicing.git" },
      { label: "Demo", href: "https://drive.google.com/file/d/1SosO3FVGD7asKI2CVy7usSpitz6DcVFA/view?usp=drive_link" },
    ],
  },
  {
    title: "House of Raminten Redesign",
    description: "Figma redesign focused on simpler navigation and stronger branding.",
    image: redesignArt,
    tech: ["Figma", "UI/UX"],
    links: [
      { label: "Figma", href: "https://www.figma.com/design/LxDtCyfMYw7bGDt85LZ55c/Assignment-EC1-Ishaq-Hannan-Rozen?node-id=0-1&t=5HfSofbiTm2yQzCa-1" },
      { label: "Prototype", href: "https://www.figma.com/proto/LxDtCyfMYw7bGDt85LZ55c/Assignment-EC1-Ishaq-Hannan-Rozen?page-id=0%3A1&node-id=2-6&viewport=468%2C610%2C0.15&t=oYwsqqXtdvanIByl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A6" },
    ],
  },
];
