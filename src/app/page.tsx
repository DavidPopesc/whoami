

const projects = [
  {
    name: "Focus Wizard",
    tag: "🏆 Winner — UGAHacks11",
    stack: "Solana, Electron, React, TypeScript, C++",
    description:
      "A desktop Pomodoro app backed by a Solana smart contract: your SOL sits in escrow for the length of a focus session and pays back out in proportion to verified on-task time, no custodial backend involved. Paired the on-chain escrow with AI distraction detection and escalating voice interventions. Won MLH Best Use of Presage, built in 48 hours.",
    href: "https://devpost.com/software/focus-wizard",
    linkLabel: "Devpost",
  },
  {
    name: "Better Form",
    tag: "Building now",
    stack: "Next.js, TypeScript, PostgreSQL (Neon), Stripe Connect",
    description:
      "A form-builder platform for creating, publishing, and managing forms and submissions. Paid forms accept crypto and stablecoin payments alongside cards through Stripe Connect, routing funds straight to each creator's connected account, with webhook-confirmed submissions.",
    href: "https://github.com/DavidPopesc",
    linkLabel: "GitHub",
  },
  {
    name: "Pool Company App",
    tag: "Building now",
    stack: "Next.js, React Native, Expo, Node.js, PostgreSQL (Supabase)",
    description:
      "A field-ops platform for a pool service company managing 60+ recurring accounts, built from firsthand experience on the routes. Mobile technician workflows cover service checklists, chemical dosing, and photo uploads, synced live with a web admin dashboard. Stripe invoicing is live; card, ACH, and crypto payments are in active development.",
    href: "https://github.com/DavidPopesc",
    linkLabel: "GitHub",
  },
  {
    name: "100 Million Dollar Startup Idea",
    tag: "🏆 Winner — CUhackit '26",
    stack: "AI-powered founder critique platform",
    description:
      "Simulates a panel of 3 VC personas that challenge startup pitches from different investment angles, built in 24 hours. Users upload a pitch deck, respond to AI questioning, and get feedback on clarity, jargon, and founder-investor fit. Won the Launchpad Tech Ventures Startup Toolkit Challenge.",
    href: "https://devpost.com/software/one-hundred-million-dollar-startup-idea",
    linkLabel: "Devpost",
  },
];

const experience = [
  {
    role: "Technician & Software Developer",
    org: "Suwanee Pools LLC",
    location: "Suwanee, GA",
    period: "Apr 2022 — Present",
    href: "https://suwaneepools.com",
    bullets: [
      "Implemented Bitcoin payments on customer invoices, giving clients a crypto option alongside traditional payment methods.",
      "Developed internal software tools to support operations, including a pool company application and workflow-specific utilities for service management.",
      "Service 60 commercial and residential accounts as a field technician, bringing firsthand operational context to the software.",
    ],
  },
  {
    role: "Web Developer",
    org: "Think Chess LLC",
    location: "Cumming, GA",
    period: "Aug 2022 — Aug 2023",
    bullets: [
      "Redesigned and overhauled the organization's website to improve structure, usability, and presentation.",
      "Strengthened the payment portal used to process thousands of transactions by improving security and reliability.",
    ],
  },
  {
    role: "Web Developer, Volunteer",
    org: "Saint Mary Romanian Church",
    location: "Dacula, GA",
    period: "Jan 2024 — Present",
    bullets: [
      "Responsible for updating and maintaining the website.",
      "Building a stablecoin donation option offered alongside traditional payment methods.",
      "Building a feature to automate calendar-related updates and improve site administration.",
    ],
  },
];

const stack = [
  "TypeScript",
  "JavaScript",
  "Python",
  "C++",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "Vue",
  "Node.js",
  "Electron",
  "PostgreSQL",
  "SQLite",
  "MySQL",
  "Tailwind CSS",
  "Solana",
  "Smart Contracts",
  "Stablecoin Payments",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-3">$ whoami</p>
          <h1 className="glow-text text-4xl md:text-5xl font-bold mb-4">David Popescu</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Computer Science &amp; Cybersecurity student at the University of North Georgia.
            I build software that solves real problems I run into, from field operations to
            on-chain payments, one weekend hackathon at a time.
          </p>
        </div>
      </section>

      <section id="about" className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-2">01 / about</p>
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-700 dark:text-gray-300">
            I like finding a real, annoying problem and just building the tool that fixes it.
            Working pool service routes gave me a field-ops app; volunteering at my church gave
            me a stablecoin donation flow; a 48-hour hackathon gave me an escrow smart contract
            on Solana. My heart is set on React and Next.js, but I&apos;ll reach for whatever
            actually solves the problem &mdash; crypto rails included.
          </p>
        </div>
      </section>

      <section id="projects" className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-2">02 / projects</p>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 className="text-2xl font-semibold">Projects &amp; Hackathons</h2>
            <a
              href="https://devpost.com/DavidPopesc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              See all on Devpost →
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group block rounded-lg border border-black/[.08] dark:border-white/[.145] bg-white dark:bg-gray-950 p-5 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold group-hover:text-accent transition-colors">{project.name}</h3>
                </div>
                <p className="text-xs font-medium text-accent mb-2">
                  {project.tag}
                </p>
                <p className="font-mono-tag text-xs text-gray-500 dark:text-gray-400 mb-2">{project.stack}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
                <span className="inline-block mt-3 text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-accent transition-colors">
                  {project.linkLabel} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-2">03 / experience</p>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <div
                key={job.org}
                className="border-l-2 border-black/[.08] dark:border-white/[.145] pl-4 hover:border-accent transition-colors"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-semibold">
                    {job.role} ·{" "}
                    {job.href ? (
                      <a
                        href={job.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {job.org}
                      </a>
                    ) : (
                      job.org
                    )}
                  </h3>
                  <span className="font-mono-tag text-xs text-gray-500 dark:text-gray-400">{job.period}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{job.location}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-2">04 / stack</p>
          <h2 className="text-2xl font-semibold mb-4">My Beloved Tech Stack</h2>
          <ul className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <li
                key={item}
                className="chip border border-black/[.08] dark:border-white/[.145] rounded px-3 py-1 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-2">05 / contact</p>
          <h2 className="text-2xl font-semibold mb-4">Socials</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">Feel free to reach out for collaboration, take a peek at my code, or just say hi!</p>

          <a
            href="https://github.com/DavidPopesc"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover inline-block border border-black/[.08] dark:border-white/[.145] text-foreground px-2 py-2 rounded transition"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/david-popescu-44330b347/" target="_blank" rel="noopener noreferrer" className="card-hover inline-block border border-black/[.08] dark:border-white/[.145] text-foreground px-2 py-2 rounded transition ml-4" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.5h3.414v1.569h.049c.476-.9 1.637-1.852 3.372-1.852 3.604 0 4.271 2.372 4.271 5.456v6.327zm-14.693-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.064 2.063-2.064 1.14 0 2.063.926 2.063 2.064 0 1.139-.923 2.065-2.063 2.065zm1.777 13.019h-3.554v-11.5h3.554v11.5zm16.469-20.452h-22.451c-.981 0-1.776.795-1.776 1.776v20.451c0 .981.795 1.776 1.776 1.776h22.451c.981 0 1.776-.795 1.776-1.776v-20.451c0-.981-.795-1.776-1.776-1.776z"/>
            </svg>
          </a>
          <a
            href="https://devpost.com/DavidPopesc"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover inline-block border border-black/[.08] dark:border-white/[.145] text-foreground px-2 py-2 rounded transition ml-4"
            aria-label="Devpost"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.474 2.163v8.253h1.336c2.5 0 3.937-1.336 3.937-4.117 0-2.828-1.395-4.136-3.867-4.136H10.07z"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
