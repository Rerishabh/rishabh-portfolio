import type { PublicProject } from '../types/portfolio'

interface ArchiveProps {
  projects: PublicProject[]
}

export function Archive({ projects }: ArchiveProps) {
  if (projects.length === 0) {
    return null
  }

  return (
    <section
      id="archive"
      aria-labelledby="archive-heading"
      className="border-t-2 border-ink"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
          Academic archive
        </p>
        <h2 id="archive-heading" className="mt-3 font-display text-4xl sm:text-5xl">
          Coursework
        </h2>
        <ul className="mt-8 divide-y divide-ink border-y-2 border-ink">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="grid gap-2 py-4 sm:grid-cols-[4rem_1fr_auto] sm:items-center"
            >
              <span className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-medium">{project.name}</span>
              {project.repositoryUrl !== null && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit rounded-sm bg-ink px-3 py-1.5 font-mono text-xs font-bold text-canvas transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  Source Code ↗
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
