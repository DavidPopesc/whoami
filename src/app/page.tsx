

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-24 pb-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">David Popescu</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Computer Science student at the University of North Georgia focused on making business web applications.
          </p>
          
        </div>
      </section>

      <section id="about" className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-700 dark:text-gray-300">
            My life goal is to create digital infrastructure that businesses rely on. My heart is 
            set on React and Next.js. As the owner of an awesome Pool Cleaning company, I see so many use cases for pool apps.
            My big project is a Pool Company Application, and I can't wait to share more about it on my blog!
          </p>
        </div>
      </section>

      <section id="skills" className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">My Beloved Tech Stack</h2>
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

      {/* projects (take the 2 most recent ones from the blog) */}
      <section id="contact" className="py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Socials</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">Feel free to reach out for collaboration, take a peek at my code, or just say hi!</p>
          <a
            href="https://github.com/DavidPopesc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-2 py-2 rounded hover:opacity-80 transition"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/david-popescu-44330b347/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-2 py-2 rounded hover:opacity-80 transition ml-4" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.5h3.414v1.569h.049c.476-.9 1.637-1.852 3.372-1.852 3.604 0 4.271 2.372 4.271 5.456v6.327zm-14.693-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.064 2.063-2.064 1.14 0 2.063.926 2.063 2.064 0 1.139-.923 2.065-2.063 2.065zm1.777 13.019h-3.554v-11.5h3.554v11.5zm16.469-20.452h-22.451c-.981 0-1.776.795-1.776 1.776v20.451c0 .981.795 1.776 1.776 1.776h22.451c.981 0 1.776-.795 1.776-1.776v-20.451c0-.981-.795-1.776-1.776-1.776z"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
