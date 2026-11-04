export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b-2 border-ink bg-canvas/95 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="#top"
          className="font-serif text-2xl font-normal tracking-tight text-ink transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          Rishabh.
        </a>
        <div className="flex items-center gap-3 text-sm sm:gap-6">
          <a
            href="#about"
            className="rounded-sm py-1 font-mono text-xs font-medium tracking-wide text-ink/75 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:text-sm"
          >
            About
          </a>
          <a
            href="#toolbox"
            className="rounded-sm py-1 font-mono text-xs font-medium tracking-wide text-ink/75 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:text-sm"
          >
            Toolbox
          </a>
          <a
            href="#projects"
            className="rounded-sm py-1 font-mono text-xs font-medium tracking-wide text-ink/75 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:text-sm"
          >
            Projects
          </a>
        </div>
      </nav>
    </header>
  )
}
