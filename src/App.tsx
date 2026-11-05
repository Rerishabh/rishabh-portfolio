import { Footer } from './components/Footer'
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
                          className="border border-ink bg-canvas px-3.5 py-1.5 font-mono text-xs"
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
                  <div className="flex flex-wrap items-center gap-3 lg:col-start-2">
                    {featuredResearch.repositoryUrl && (
                      <a
                        href={featuredResearch.repositoryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-github-button group inline-flex w-fit shrink-0 items-center gap-1.5 rounded-sm bg-ink px-3 py-1.5 font-mono text-xs font-bold text-canvas shadow-[2px_2px_0px_#141413] transition-[transform,box-shadow,background-color] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[3px_3px_0px_#141413] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transform-none motion-reduce:transition-none"
                      >
                        <svg
                          className="project-github-icon h-3.5 w-3.5 shrink-0 fill-current"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                    <a
                      href="https://youtu.be/bDEnAkktaOg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-youtube-button group inline-flex w-fit shrink-0 items-center gap-1.5 rounded-sm bg-[#FF0000] px-3 py-1.5 font-mono text-xs font-bold text-white shadow-[2px_2px_0px_#141413] transition-[transform,box-shadow,filter] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[3px_3px_0px_#141413] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      <svg
                        className="project-youtube-icon h-3.5 w-3.5 shrink-0 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span>YouTube</span>
                    </a>
                  </div>
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
      </main>
      <Footer />
    </div>
  )
}

export default App
