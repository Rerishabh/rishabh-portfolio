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
        <div className="mb-10 border-b-2 border-ink pb-6">
          <h2
            id="archive-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-5xl"
          >
            Coursework
          </h2>
        </div>
        <ul className="divide-y divide-ink/20 border-y-2 border-ink">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="grid gap-2 py-4 transition-colors hover:bg-surface/50 sm:grid-cols-[4rem_1fr_auto] sm:items-center px-2"
            >
              <span className="font-mono text-xs font-bold text-ink/60">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-sm font-medium text-ink sm:text-base">
                {project.name}
              </span>
              {project.repositoryUrl !== null && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 border border-ink bg-surface px-3 py-1 font-mono text-xs font-medium text-ink shadow-[2px_2px_0px_#141413] transition-[transform,box-shadow] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#141413] active:translate-x-0 active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
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
