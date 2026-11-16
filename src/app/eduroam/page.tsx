import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eduroam & Passpoint Research | David Popescu",
  description:
    "A University of North Georgia student researching Passpoint and how to set up a home network that fellow students can join automatically.",
};

export default function Eduroam() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="glow-text text-4xl md:text-5xl font-bold mb-10 text-center">eduroam &amp; Passpoint</h1>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              Hi, I&apos;m a student at the University of North Georgia, and I&apos;m doing some
              personal research and personal projects about Passpoint technologies and how
              convenient they are, and potentially looking into finding ways to make them even
              more convenient.
            </p>
            <p>
              I would like to learn how to create and set up a Passpoint network at my own home
              before setting them up at my local libraries at GCPL. This way, students studying
              there would automatically get connected without needing to waste valuable time
              figuring out how to connect.
            </p>
            <p>
              I&apos;ve got a Ubiquiti router that I know supports Passpoint configurations.
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-12">
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
            <a
              href="https://www.linkedin.com/in/david-popescu-44330b347/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover inline-block border border-black/[.08] dark:border-white/[.145] text-foreground px-2 py-2 rounded transition"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.5h3.414v1.569h.049c.476-.9 1.637-1.852 3.372-1.852 3.604 0 4.271 2.372 4.271 5.456v6.327zm-14.693-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.064 2.063-2.064 1.14 0 2.063.926 2.063 2.064 0 1.139-.923 2.065-2.063 2.065zm1.777 13.019h-3.554v-11.5h3.554v11.5zm16.469-20.452h-22.451c-.981 0-1.776.795-1.776 1.776v20.451c0 .981.795 1.776 1.776 1.776h22.451c.981 0 1.776-.795 1.776-1.776v-20.451c0-.981-.795-1.776-1.776-1.776z"/>
              </svg>
            </a>
            <a
              href="https://devpost.com/DavidPopesc"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover inline-block border border-black/[.08] dark:border-white/[.145] text-foreground px-2 py-2 rounded transition"
              aria-label="Devpost"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.474 2.163v8.253h1.336c2.5 0 3.937-1.336 3.937-4.117 0-2.828-1.395-4.136-3.867-4.136H10.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
