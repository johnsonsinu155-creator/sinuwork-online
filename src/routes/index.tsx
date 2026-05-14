import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Sparkles,
  Layers,
  Search,
  PenTool,
  Smartphone,
  Component,
  Lightbulb,
  Users,
  Target,
  Workflow,
  TestTube,
  LayoutGrid,
  MessageCircle,
  Figma,
  GraduationCap,
  Star,
} from "lucide-react";
import portrait from "@/assets/sinu-portrait.png";
import { Nav } from "@/components/portfolio/Nav";
import { SectionHeading, SectionLabel } from "@/components/portfolio/Section";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const skills = [
  { icon: Search, label: "User Research & Analysis" },
  { icon: Workflow, label: "User Journey Mapping" },
  { icon: PenTool, label: "Wireframing & Prototyping" },
  { icon: Lightbulb, label: "Design Thinking" },
  { icon: TestTube, label: "Usability Testing" },
  { icon: Layers, label: "Information Architecture" },
  { icon: Sparkles, label: "Interaction Design" },
  { icon: LayoutGrid, label: "Grid & Layout Systems" },
  { icon: Figma, label: "Figma" },
  { icon: Target, label: "Problem Solving" },
  { icon: MessageCircle, label: "Communication" },
  { icon: Users, label: "Empathetic Design" },
];

const services = [
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Clean, intuitive, user-friendly digital experiences that balance aesthetics with functionality.",
  },
  {
    icon: Component,
    title: "Wireframing & Prototyping",
    desc: "Low- and high-fidelity wireframes and interactive prototypes to visualize flows before development.",
  },
  {
    icon: Search,
    title: "User Research & Testing",
    desc: "Understanding user needs through research, feedback and testing to design effective solutions.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Design",
    desc: "Responsive interfaces with a focus on accessibility, consistency and seamless user experiences.",
  },
  {
    icon: Layers,
    title: "Design Systems & Branding",
    desc: "Cohesive visual systems, style guides and UI components that strengthen brand identity.",
  },
  {
    icon: Lightbulb,
    title: "Design Strategy",
    desc: "Translating business goals and user needs into structured, scalable design decisions.",
  },
];

const projectStages = [
  "Problem Statement",
  "Research",
  "Wireframes",
  "Final UI",
  "User Flow",
  "Design Process",
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" aria-hidden />
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionLabel>UI / UX Designer</SectionLabel>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Hi, I'm <span className="text-gradient">Sinu</span>
            <br />
            <span className="relative inline-block">
              Johnson
              <span className="absolute -right-4 -top-2 h-3 w-3 rounded-full bg-accent animate-pulse-glow" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Designing intuitive digital experiences that blend functionality with
            thoughtful visual design.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:shadow-[0_0_40px_-5px_var(--accent)]"
            >
              View Portfolio
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "User-First", v: "Mindset" },
              { k: "Figma", v: "Design Tool" },
              { k: "B.Sc CS", v: "2022 – 25" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-xl font-bold text-foreground">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute -inset-6 rounded-full bg-accent/10 blur-2xl" aria-hidden />
            <div className="absolute inset-0 rounded-full border border-border bg-surface p-2 shadow-2xl">
              <img
                src={portrait}
                alt="Sinu Johnson, UI/UX designer"
                width={1024}
                height={1024}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            {/* floating chip */}
            <div className="absolute -left-6 bottom-10 hidden rounded-2xl border border-border bg-background/90 p-3 shadow-xl backdrop-blur md:block animate-float">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Available for</div>
                  <div className="text-sm font-semibold">UI/UX Projects</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-8 hidden rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-xl backdrop-blur md:block animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Based in</div>
              <div className="text-sm font-semibold">Kerala, India</div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="group mt-20 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent">
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Curious mind,
              <br />
              <span className="text-accent">user-first</span> heart.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              I'm a UI/UX designer passionate about creating intuitive, user-centered
              digital experiences that blend functionality with thoughtful visual design.
              I enjoy turning complex problems into simple, engaging interfaces that make
              everyday interactions feel seamless and meaningful.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Driven by curiosity and empathy, I'm constantly exploring new design trends,
              user behaviors, and creative ways to improve how people connect with
              technology.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {["Creative Thinker", "Empathetic Designer", "Problem Solver", "User-Focused"].map((q) => (
                <div
                  key={q}
                  className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium transition-colors hover:border-accent/60"
                >
                  <span className="mr-2 text-accent">◆</span>
                  {q}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <SectionLabel>Education</SectionLabel>
              <ol className="relative mt-4 space-y-8 border-l border-border pl-6">
                <li className="relative">
                  <span className="absolute -left-[33px] grid h-6 w-6 place-items-center rounded-full border border-accent bg-background">
                    <GraduationCap className="h-3.5 w-3.5 text-accent" />
                  </span>
                  <div className="text-xs uppercase tracking-wider text-accent">2022 — 2025</div>
                  <div className="mt-1 font-display text-xl font-semibold">B.Sc Computer Science</div>
                  <div className="text-sm text-muted-foreground">St. Thomas College, Kerala</div>
                </li>
                <li className="relative">
                  <span className="absolute -left-[33px] grid h-6 w-6 place-items-center rounded-full border border-border bg-background">
                    <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
                  </span>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Ongoing</div>
                  <div className="mt-1 font-display text-xl font-semibold">Self-taught UI/UX</div>
                  <div className="text-sm text-muted-foreground">Design systems, user research, prototyping</div>
                </li>
              </ol>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="font-display text-3xl font-bold text-accent">∞</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Curiosity</div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="font-display text-3xl font-bold text-accent">100%</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">User-Centered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title={<>Tools & abilities I bring to the <span className="text-accent">table</span>.</>}
          description="A blend of research, design thinking and visual craft — focused on shipping interfaces people enjoy using."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_-15px_var(--accent)]"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-background text-accent ring-1 ring-border">
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-4 text-sm font-semibold">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <section id="services" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Services"
          title={<>What I can <span className="text-accent">design</span> for you.</>}
          description="From early discovery to polished interfaces — end-to-end UX with a strong attention to detail."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all hover:border-accent/60"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-background text-accent ring-1 ring-border transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const placeholders = [
    { title: "Mobile Banking Redesign", tag: "Case Study" },
    { title: "SaaS Dashboard UX", tag: "Web App" },
    { title: "E-commerce Experience", tag: "Mobile" },
    { title: "Design System Kit", tag: "System" },
  ];
  return (
    <section id="projects" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title={<>Selected work — <span className="text-accent">coming soon</span>.</>}
          description="Live case studies are on the way. Each will document the full design process from problem to interface."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {placeholders.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all hover:border-accent/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-background ring-1 ring-border">
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                    Coming Soon
                  </div>
                </div>
                <div
                  className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl transition-all group-hover:bg-accent/30"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-accent">{p.tag}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-dashed border-border bg-surface/50 p-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
            <Star className="h-3.5 w-3.5" /> Each case study will cover
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {projectStages.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build something <span className="text-accent">meaningful</span>.</>}
          description="Have a project in mind, or just want to say hi? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Location", value: "Pathanamthitta, India – 689641" },
              { icon: Phone, label: "Phone", value: "+91 85907 25843", href: "tel:+918590725843" },
              { icon: Mail, label: "Email", value: "sinujohnson23@gmail.com", href: "mailto:sinujohnson23@gmail.com" },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/sinu-johnson",
                href: "https://www.linkedin.com/in/sinu-johnson-488642400/",
              },
            ].map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-background text-accent ring-1 ring-border">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="mt-0.5 text-sm font-semibold">{value}</div>
                  </div>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/60"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
                  {inner}
                </div>
              );
            })}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="rounded-3xl border border-border bg-surface p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-[0_0_40px_-5px_var(--accent)] sm:w-auto"
            >
              {sent ? "Message sent ✓" : "Send Message"}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-accent-foreground">S</span>
          sinu<span className="text-accent">.</span>
        </a>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li><a href="#about" className="hover:text-accent">About</a></li>
          <li><a href="#skills" className="hover:text-accent">Skills</a></li>
          <li><a href="#services" className="hover:text-accent">Services</a></li>
          <li><a href="#projects" className="hover:text-accent">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/sinu-johnson-488642400/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:sinujohnson23@gmail.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sinu Johnson. Designed & crafted with care.
      </div>
    </footer>
  );
}
