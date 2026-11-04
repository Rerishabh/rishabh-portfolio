import { GitFork } from 'lucide-react'

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b-2 border-ink bg-canvas/95 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight transition-all duration-150 hover:-translate-y-0.5 hover:text-accent active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Rishabh.
        </a>
        <div className="flex items-center gap-4 text-sm text-muted sm:gap-6">
          <a
            href="#about"
            className="rounded-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            About
          </a>
          <a
            href="#toolbox"
            className="rounded-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            Toolbox
          </a>
          <a
            href="#projects"
            className="rounded-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            Projects
          </a>
          <a
            href="#archive"
            className="rounded-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            Archive
          </a>
          <a
            href="https://github.com/Rerishabh"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="rounded-sm text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            <GitFork size={19} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
