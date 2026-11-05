import type { PublicProject } from '../types/portfolio'

interface ProjectCardProps {
  project: PublicProject
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLinks =
    project.repositoryUrl !== null ||
    project.liveUrl !== null ||
    Boolean(project.youtubeUrl)

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
              className="inline-flex items-center gap-1.5 rounded-sm bg-ink px-3 py-1.5 font-mono text-xs font-bold text-canvas shadow-[2px_2px_0px_#141413] transition-[transform,box-shadow,background-color] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[3px_3px_0px_#141413] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span>Live Demo</span>
              <svg
                className="h-3 w-3 shrink-0 stroke-current stroke-2 fill-none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5L21 3m0 0h-5.25M21 3v5.25M10.5 13.5H4.5a1.5 1.5 0 01-1.5-1.5V4.5A1.5 1.5 0 014.5 3h6a1.5 1.5 0 011.5 1.5v3"
                />
              </svg>
            </a>
          )}
          {project.repositoryUrl !== null && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="project-github-button group inline-flex items-center gap-1.5 rounded-sm bg-ink px-3 py-1.5 font-mono text-xs font-bold text-canvas shadow-[2px_2px_0px_#141413] transition-[transform,box-shadow,background-color] duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[3px_3px_0px_#141413] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transform-none motion-reduce:transition-none"
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
          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
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
          )}
        </div>
      )}
    </article>
  )
}
