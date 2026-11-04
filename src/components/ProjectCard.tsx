import type { PublicProject } from '../types/portfolio'

interface ProjectCardProps {
  project: PublicProject
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLinks = project.repositoryUrl !== null || project.liveUrl !== null

  return (
    <article className="flex min-w-0 flex-col border-2 border-ink bg-surface p-5 shadow-[4px_4px_0px_#141413] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#141413] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-accent">
          {String(index).padStart(2, '0')} / {project.category}
        </p>
        <span className="sr-only">{project.category} project</span>
      </div>
      <h3 className="mt-8 font-display text-3xl leading-tight">
        {project.name}
      </h3>
      {project.description !== null && (
        <p className="mt-4 max-w-xl leading-7 text-muted">
          {project.description}
        </p>
      )}
      {project.technologies.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="border border-ink bg-canvas px-2.5 py-1 font-mono text-xs"
            >
              {technology}
            </li>
          ))}
        </ul>
      )}
      {project.contributions.length > 0 && (
        <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
          {project.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      )}
      {hasLinks && (
        <div className="mt-auto flex flex-wrap gap-2 pt-8 text-sm">
          {project.liveUrl !== null && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-ink px-3 py-1.5 font-mono text-xs font-bold text-canvas transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Live Demo ↗
            </a>
          )}
          {project.repositoryUrl !== null && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-ink px-3 py-1.5 font-mono text-xs font-bold text-canvas transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Source Code ↗
            </a>
          )}
        </div>
      )}
    </article>
  )
}
