import { useEffect, useState } from 'react'

export function Hero() {
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasEntered(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section id="top" className="border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-4xl min-w-0">
            <div className={`editorial-fade-up ${hasEntered ? 'is-visible' : ''}`}>
              <h1 className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
                Rishabh Paira
              </h1>
              <p className="mt-5 max-w-2xl font-mono text-sm font-semibold tracking-wide uppercase text-ink sm:text-base">
                Computer Science Student <span className="text-accent" aria-hidden="true">·</span> AI Engineer <span className="text-accent" aria-hidden="true">·</span> Robotics Researcher
              </p>
              <p className="mt-5 max-w-2xl text-base text-ink/80 leading-relaxed font-sans sm:mt-6 sm:text-lg">
                I turn ideas into intelligent software, exploring AI and robotics
                to build practical solutions to real-world problems.
              </p>
            </div>
            <div className={`editorial-fade-up editorial-fade-up-delay-hero ${hasEntered ? 'is-visible' : ''} mt-7 flex flex-wrap items-center gap-3`}>
              <a
                href="https://github.com/Rerishabh"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-2 rounded-sm border-2 border-ink bg-surface px-4 py-2.5 text-xs font-mono font-bold text-ink shadow-[3px_3px_0px_#141413] transition-all duration-150 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[5px_5px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                <svg
                  className="h-4 w-4 shrink-0 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rishabhpaira/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-2 rounded-sm border-2 border-ink bg-surface px-4 py-2.5 text-xs font-mono font-bold text-ink shadow-[3px_3px_0px_#141413] transition-all duration-150 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[5px_5px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M4.98 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9V9Z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://builder.aws.com/community/@rishabhpaira"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-2 rounded-sm border-2 border-ink bg-surface px-4 py-2.5 text-xs font-mono font-bold text-ink shadow-[3px_3px_0px_#141413] transition-all duration-150 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[5px_5px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M17.5 18.5H7.2a4.7 4.7 0 1 1 .48-9.38A6.2 6.2 0 0 1 19.3 11.2a3.7 3.7 0 0 1-1.8 7.3ZM7.7 10.7a3.1 3.1 0 1 0-.5 6.2h10.3a2.1 2.1 0 1 0 0-4.2h-.8l-.18-.77A4.6 4.6 0 0 0 9.2 10.6l-.45.55-.73-.25a3.1 3.1 0 0 0-.32-.2Z" />
                  <path d="M8.2 20.2c2.5 1.1 5.1 1.1 7.6 0-.5.8-1.2 1.3-2.1 1.6l.6 1.1c-1.5-.2-2.7-.7-3.8-1.5-1.1.8-2.3 1.3-3.8 1.5l.6-1.1c-.9-.3-1.6-.8-2.1-1.6.9.4 1.9.5 3 .4Z" />
                </svg>
                AWS Builder
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 border border-ink bg-surface px-3 py-1 font-mono text-xs font-medium text-ink shadow-[2px_2px_0px_#141413]">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span>Open to Software &amp; AI Engineering Roles</span>
            </div>
          </div>
          <div className={`editorial-fade-up editorial-fade-up-delay-hero ${hasEntered ? 'is-visible' : ''} flex justify-center lg:justify-end`}>
            <div className="relative aspect-square w-56 overflow-hidden rounded-sm border-2 border-ink bg-surface shadow-[4px_4px_0px_#141413] transition-[transform,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#141413] sm:w-64 lg:w-72">
              <img
                src="/avatar.jpeg"
                alt="Rishabh Paira, clay-style portrait"
                className="h-full w-full object-cover object-top"
                width={288}
                height={288}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
