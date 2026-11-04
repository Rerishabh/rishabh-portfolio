import { Mail } from 'lucide-react'
import { Archive } from './components/Archive'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'
import { Skills } from './components/Skills'
import { PUBLIC_PROJECTS } from './data/projects'

function App() {
  const featuredResearch = PUBLIC_PROJECTS.find(
    (project) => project.id === 'rh-dijkstra-webots',
  )
  const coursework = PUBLIC_PROJECTS.filter(
    (project) => project.category === 'coursework',
  )
  const mainProjects = PUBLIC_PROJECTS.filter(
    (project) =>
      project.category !== 'coursework' &&
      project.id !== 'rh-dijkstra-webots',
  )

  return (
    <div id="top" className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="mb-10 border-b-2 border-ink pb-6">
            <h2
              id="projects-heading"
              className="font-serif text-3xl font-normal tracking-tight text-ink md:text-5xl"
            >
              Projects
            </h2>
          </div>
          {featuredResearch && (
            <div className="mb-10">
              <div className="border-2 border-ink bg-surface p-6 shadow-[4px_4px_0px_#141413] sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end">
                  <div className="min-w-0 max-w-3xl">
                    <h3
                      id="research-heading"
                      className="font-display text-4xl leading-none tracking-tight sm:text-6xl"
                    >
                      {featuredResearch.name}
                    </h3>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                      {featuredResearch.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Research topics">
                      {[
                        'Webots Simulation',
                        'Python',
                        'Kinematics',
                        'Dijkstra Algorithm',
                      ].map((tag) => (
                        <li
                          key={tag}
                          className="border border-ink bg-canvas px-3 py-1.5 font-mono text-xs"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative flex h-36 min-w-0 items-center justify-center overflow-hidden border border-ink/20 bg-surface/50 md:h-44">
                    <svg
                      viewBox="0 0 320 196"
                      role="img"
                      aria-labelledby="trace-title trace-description"
                      className="h-full w-full"
                    >
                      <title id="trace-title">Kinematic path trace</title>
                      <desc id="trace-description">
                        A planned trajectory curves around an obstacle with a moving waypoint.
                      </desc>
                      <defs>
                        <pattern
                          id="trace-grid"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 20 0 L 0 0 0 20"
                            fill="none"
                            stroke="currentColor"
                            strokeOpacity="0.1"
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>
                      <rect width="320" height="196" fill="url(#trace-grid)" className="text-ink" />
                      <rect
                        x="143"
                        y="52"
                        width="38"
                        height="42"
                        fill="none"
                        stroke="#141413"
                        strokeOpacity="0.35"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M 24 124 C 72 124 77 42 124 42 C 157 42 145 116 192 116 C 232 116 239 64 296 42"
                        fill="none"
                        stroke="#1B4332"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <circle
                        cx="0"
                        cy="0"
                        r="5"
                        fill="#1B4332"
                        className="trace-node"
                      />
                      <circle cx="296" cy="42" r="3" fill="#1B4332" />
                    </svg>
                    <span className="pointer-events-none absolute left-2 top-2 text-[10px] font-mono uppercase tracking-widest text-muted">
                      [ KINEMATIC PATH TRACE // TRAJECTORY MODEL ]
                    </span>
                  </div>
                  {featuredResearch.repositoryUrl && (
                    <a
                      href={featuredResearch.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit shrink-0 items-center gap-2 rounded-sm bg-ink px-4 py-3 font-mono text-xs font-bold uppercase tracking-wide text-canvas transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface lg:col-start-2"
                    >
                      Inspect Source Code <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="grid gap-5 md:grid-cols-2">
            {mainProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index + 1}
              project={project}
            />
            ))}
          </div>
        </section>
        <Archive projects={coursework} />
      </main>
      <footer className="border-t-2 border-ink bg-ink text-canvas">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8 sm:px-8 lg:px-12">
          <p className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#FAF8F5]">
            Designed &amp; VibeCoded by Rishabh &copy; 2026
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Rerishabh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink bg-surface px-3.5 py-1.5 font-mono text-xs font-medium text-ink shadow-[3px_3px_0px_#FAF8F5] transition-[transform,box-shadow] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#FAF8F5] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#FAF8F5] motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 fill-current"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rishabhpaira/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink bg-surface px-3.5 py-1.5 font-mono text-xs font-medium text-ink shadow-[3px_3px_0px_#FAF8F5] transition-[transform,box-shadow] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#FAF8F5] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#FAF8F5] motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 fill-current"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhpaira@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink bg-surface px-3.5 py-1.5 font-mono text-xs font-medium text-ink shadow-[3px_3px_0px_#FAF8F5] transition-[transform,box-shadow] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#FAF8F5] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#FAF8F5] motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" focusable="false" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
