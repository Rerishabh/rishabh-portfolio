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
          <div className="mb-10 flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Selected work
              </p>
              <h2
                id="projects-heading"
                className="mt-2 font-display text-4xl tracking-tight sm:text-5xl"
              >
                Project index
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted">
              Hackathon and software projects from the field journal.
            </p>
          </div>
          {featuredResearch && (
            <div className="mb-10">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Featured Research Spotlight
              </p>
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
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            Systems Field Journal · Hosted with AWS Amplify
          </p>
          <a
            href="https://github.com/Rerishabh"
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-sm underline underline-offset-4 transition-colors hover:text-[#b7d7c2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            GitHub Profile ↗
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
