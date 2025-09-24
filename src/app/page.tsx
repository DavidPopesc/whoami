

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-24 pb-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">David Popescu</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Software engineer focused on building reliable, maintainable web applications.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded hover:opacity-80 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="border border-black dark:border-white px-6 py-2 rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-700 dark:text-gray-300">
            I enjoy working with TypeScript, React, and Node.js. My focus is on clean code, thoughtful UI, and solving real problems. I value open source and learning from others.
          </p>
        </div>
      </section>

      <section id="skills" className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-gray-200 dark:bg-gray-800 rounded px-3 py-1 text-sm">TypeScript</li>
            <li className="bg-gray-200 dark:bg-gray-800 rounded px-3 py-1 text-sm">React</li>
            <li className="bg-gray-200 dark:bg-gray-800 rounded px-3 py-1 text-sm">Next.js</li>
            <li className="bg-gray-200 dark:bg-gray-800 rounded px-3 py-1 text-sm">Node.js</li>
            <li className="bg-gray-200 dark:bg-gray-800 rounded px-3 py-1 text-sm">PostgreSQL</li>
            <li className="bg-gray-200 dark:bg-gray-800 rounded px-3 py-1 text-sm">Tailwind CSS</li>
            <li className="bg-gray-200 dark:bg-gray-800 rounded px-3 py-1 text-sm">Docker</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-6">
            <li className="bg-white dark:bg-gray-800 rounded shadow p-4 text-left">
              <h3 className="font-bold text-lg mb-1">Personal Portfolio</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">This site. Built with Next.js, React, and Tailwind CSS.</p>
              <a href="https://github.com/DavidPopesc/whoami" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Source</a>
            </li>
            <li className="bg-white dark:bg-gray-800 rounded shadow p-4 text-left">
              <h3 className="font-bold text-lg mb-1">Open Source Contributions</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">Contributed to various React and Node.js libraries on GitHub.</p>
              <a href="https://github.com/DavidPopesc" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">GitHub</a>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">Feel free to reach out for collaboration or just to say hi.</p>
          <a
            href="mailto:hello@david.dev"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded hover:opacity-80 transition"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
