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
        <div className="max-w-4xl min-w-0">
          <div className={`editorial-fade-up ${hasEntered ? 'is-visible' : ''}`}>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Rishabh Paira
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-medium sm:text-base md:text-lg xl:whitespace-nowrap">
              Computer Science Student · AI Engineer · Robotics Researcher
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
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-sm border-2 border-ink bg-surface px-4 py-2.5 text-xs font-mono font-bold text-ink shadow-[3px_3px_0px_#141413] transition-all duration-150 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[5px_5px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg
                className="w-4 h-4 fill-current transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rishabhpaira/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-sm border-2 border-ink bg-surface px-4 py-2.5 text-xs font-mono font-bold text-ink shadow-[3px_3px_0px_#141413] transition-all duration-150 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[5px_5px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-sm border-2 border-ink bg-surface px-4 py-2.5 text-xs font-mono font-bold text-ink shadow-[3px_3px_0px_#141413] transition-all duration-150 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[5px_5px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
          <p className="mt-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-accent/40 bg-[#e8f0ea] px-3 py-1.5 font-mono text-xs text-accent sm:mt-6">
            <span aria-hidden="true">●</span>
            <span>Open to Software &amp; AI Engineering Roles</span>
          </p>
        </div>
      </div>
    </section>
  )
}
