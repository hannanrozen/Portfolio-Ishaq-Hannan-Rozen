import { useState, useCallback } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useScrollEffect, useReveal, useCountUp } from "./hooks/useScrollEffect";
import {
  profile,
  metrics,
  process,
  experience,
  caseStudies,
  skills,
  education,
  earlierWork,
} from "./data/profile";
import Logo from "./assets/images/Logo.svg";
import ProfileImage from "./assets/images/profile.webp";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

const Reveal = ({ children, className = "", as: Tag = "div" }) => {
  const { ref, isVisible } = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

const SectionHeader = ({ eyebrow, title, description }) => (
  <Reveal className="mb-12 max-w-2xl">
    <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
    )}
  </Reveal>
);

const Tag = ({ children }) => (
  <span className="rounded-md border border-line bg-white px-2.5 py-1 font-mono text-xs text-muted">
    {children}
  </span>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrolled, activeSection } = useScrollEffect(SECTION_IDS);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "border-b border-line bg-white/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <div className="flex items-center gap-3">
          <a href="#home" className="flex items-center" aria-label="Home">
            <img src={Logo} alt="" className="h-8 w-auto" />
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-2.5 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-pass opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pass" />
            </span>
            Available
          </span>
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-ink"
                    : "text-subtle hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-md p-2 text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <ul id="mobile-menu" className="space-y-1 px-4 pb-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  activeSection === item.id
                    ? "bg-surface text-ink"
                    : "text-muted"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

// Career facts presented as a passing test report
const ReportCard = ({ className = "" }) => (
  <div className={`overflow-hidden rounded-2xl border border-line bg-white/95 shadow-2xl shadow-slate-900/15 backdrop-blur ${className}`}>
    <div className="flex items-center justify-between border-b border-line bg-surface px-4 py-2.5">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      </div>
      <span className="font-mono text-xs text-subtle">qa-engineer.spec.ts</span>
    </div>
    <div className="space-y-3 p-4 font-mono text-[12px]">
      <p className="text-subtle">
        <span className="text-accent">describe</span>("Ishaq Hannan Rozen")
      </p>
      <ul className="space-y-2 pl-2">
        {[
          "owns the full STLC end to end",
          "designs 200+ BDD cases per major project",
          "retests 50+ defects per release (H+2 SLA)",
          "cuts regression 4h → 1h with Playwright",
          "ships with 100% UAT pass rate",
        ].map((line) => (
          <li key={line} className="flex items-start gap-2.5 text-ink">
            <Check size={14} className="mt-0.5 shrink-0 text-pass" strokeWidth={3} />
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
        <span className="rounded bg-green-50 px-2 py-0.5 text-xs font-semibold text-pass">
          5 passed
        </span>
        <span className="text-xs text-subtle">0 failed · 0 flaky</span>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
    <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
    <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-sm text-accent md:text-base">
          {profile.role}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I help teams ship with confidence — turning requirements into
          traceable test cases, catching defects before users do, and
          automating the regressions that slow releases down.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700"
          >
            View case studies <ArrowRight size={16} />
          </a>
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-slate-400"
          >
            <Download size={16} /> Download CV
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5 text-sm text-subtle">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={15} /> {profile.location}
          </span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Portrait with the report card overlapping its lower-left corner */}
      <div className="relative mx-auto w-full max-w-[440px] pb-28 lg:mr-0">
        <div className="absolute top-6 right-0 -z-10 aspect-[4/5] w-[78%] translate-x-4 rounded-3xl border border-line bg-accent-soft/50" aria-hidden="true" />
        <img
          src={ProfileImage}
          alt="Portrait of Ishaq Hannan Rozen"
          width="800"
          height="1000"
          className="ml-auto aspect-[4/5] w-[78%] rounded-3xl object-cover shadow-xl shadow-slate-300/50"
        />
        <ReportCard className="absolute bottom-0 left-0 w-[88%]" />
      </div>
    </div>
  </section>
);

const CountUp = ({ from = 0, to, prefix = "", suffix = "" }) => {
  const { ref, value } = useCountUp(from, to);
  const final = `${prefix}${to}${suffix}`;
  return (
    <span ref={ref} data-testid="metric-value" data-final={final}>
      <span className="sr-only">{final}</span>
      <span aria-hidden="true">
        {prefix}
        {value}
        {suffix}
      </span>
    </span>
  );
};

const Metrics = () => (
  <section aria-label="Key metrics" className="border-y border-line bg-surface">
    <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-line px-4 sm:px-6 md:grid-cols-4 md:divide-x">
      {metrics.map((metric) => (
        <div key={metric.label} className="px-2 py-8 md:px-6">
          <dt className="text-sm font-medium text-ink">{metric.label}</dt>
          <dd className="mt-2 text-3xl font-semibold tracking-tight text-ink tabular-nums md:text-4xl">
            <CountUp {...metric} />
          </dd>
          <dd className="mt-1 text-xs text-subtle">{metric.note}</dd>
        </div>
      ))}
    </dl>
  </section>
);

const Process = () => (
  <section id="approach" className="py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="How I test"
        title="Quality is a process, not a phase."
        description={profile.summary}
      />
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {process.map((item) => (
          <li key={item.step} className="bg-white p-6">
            <span className="font-mono text-xs text-accent">{item.step}</span>
            <h3 className="mt-3 font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="bg-surface py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeader eyebrow="Experience" title="Where I've been testing." />
      <div className="space-y-6">
        {experience.map((job) => (
          <Reveal
            key={job.company}
            as="article"
            className="grid gap-8 rounded-2xl border border-line bg-white p-6 md:grid-cols-[260px_1fr] md:p-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-ink">{job.company}</h3>
              <p className="mt-1 text-sm text-subtle">{job.place}</p>
              <p className="mt-1 font-mono text-xs text-subtle">{job.period}</p>
              <ol className="mt-5 space-y-3 border-l border-line pl-4">
                {job.roles.map((role) => (
                  <li key={role.title} className="relative">
                    <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-accent" aria-hidden="true" />
                    <p className="text-sm font-medium text-ink">{role.title}</p>
                    <p className="font-mono text-xs text-subtle">{role.period}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              {job.blurb && <p className="mb-5 text-sm text-subtle">{job.blurb}</p>}
              <ul className="grid gap-x-8 gap-y-5 lg:grid-cols-2">
                {job.highlights.map(([title, body]) => (
                  <li key={title}>
                    <p className="text-sm font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section id="work" className="py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="Case studies"
        title="Selected QA work."
        description="Client names are withheld under NDA. Each project is summarized by the risk, the approach, and the outcome."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <Reveal
            key={study.title}
            as="article"
            className="flex flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-slate-200/70 md:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs font-medium text-accent">
                {study.kind}
              </span>
              <span className="text-xs text-subtle">{study.context}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink">{study.title}</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-subtle">Risk</dt>
                <dd className="mt-1 leading-relaxed text-muted">{study.problem}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-subtle">Approach</dt>
                <dd className="mt-1 leading-relaxed text-muted">{study.approach}</dd>
              </div>
            </dl>
            <p className="mt-6 flex items-start gap-2 rounded-lg bg-surface px-4 py-3 text-sm font-medium text-ink">
              <Check size={16} className="mt-0.5 shrink-0 text-pass" strokeWidth={3} />
              {study.result}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="bg-surface py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeader eyebrow="Toolkit" title="Skills & education." />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <Reveal key={skill.group} className="rounded-2xl border border-line bg-white p-6">
            <h3 className="text-sm font-semibold text-ink">{skill.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="mt-16 mb-6 font-mono text-xs font-medium uppercase tracking-widest text-subtle">
        Education & training
      </h3>
      <ul className="grid gap-6 md:grid-cols-3">
        {education.map((item) => (
          <Reveal as="li" key={item.title} className="rounded-2xl border border-line bg-white p-6">
            <p className="font-mono text-xs text-subtle">{item.period}</p>
            <p className="mt-2 font-semibold text-ink">{item.title}</p>
            <p className="mt-1 text-sm text-muted">{item.org}</p>
            <p className="mt-3 text-sm text-accent">{item.note}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

const EarlierWork = () => (
  <section id="earlier" className="py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeader
        eyebrow="Background"
        title="Front-end & UI/UX roots."
        description="Before QA I built and designed interfaces — which is why I write stable locators and test like a user."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {earlierWork.map((work) => (
          <Reveal key={work.title} as="article" className="group overflow-hidden rounded-2xl border border-line bg-white">
            <div className="overflow-hidden border-b border-line">
              <img
                src={work.image}
                alt={`Illustration of ${work.title}`}
                width="365"
                height="200"
                loading="lazy"
                className="aspect-[365/200] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-ink">{work.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{work.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {work.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <div className="flex gap-3">
                  {work.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-xs font-medium text-accent hover:underline"
                    >
                      {link.label} <ArrowUpRight size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ContactLink = ({ href, icon: Icon, label, value, external }) => (
  <a
    href={href}
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    className="flex items-center gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-white/30 hover:bg-white/5"
  >
    <Icon size={18} className="shrink-0 text-teal-300" />
    <span>
      <span className="block text-xs text-slate-400">{label}</span>
      <span className="text-sm text-white">{value}</span>
    </span>
  </a>
);

const Contact = () => (
  <section id="contact" className="bg-ink py-24 text-white">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
      <div>
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-teal-300">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Need someone to break it before your users do?
        </h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-300">
          I'm open to QA / QC Engineer roles and collaborations. The fastest
          way to reach me is email or WhatsApp.
        </p>
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-slate-200"
        >
          <MessageCircle size={16} /> Chat on WhatsApp
        </a>
      </div>
      <div className="grid content-start gap-3 sm:grid-cols-2">
        <ContactLink href={`mailto:${profile.email}`} icon={Mail} label="Email" value={profile.email} />
        <ContactLink href={`tel:${profile.phone.replace(/[\s-]/g, "")}`} icon={Phone} label="Phone" value={profile.phone} />
        <ContactLink href={profile.linkedin} icon={Linkedin} label="LinkedIn" value="in/hannanrozen" external />
        <ContactLink href={profile.github} icon={Github} label="GitHub" value="hannanrozen" external />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-ink pb-10 text-slate-500">
    <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-4 pt-8 text-xs sm:flex-row sm:justify-between sm:px-6">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p className="font-mono">Built with React · Tailwind · smoke-tested with Playwright</p>
    </div>
  </footer>
);

const Portfolio = () => (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
    >
      Skip to content
    </a>
    <Navigation />
    <main id="main">
      <Hero />
      <Metrics />
      <Process />
      <Experience />
      <CaseStudies />
      <Skills />
      <EarlierWork />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Portfolio;
