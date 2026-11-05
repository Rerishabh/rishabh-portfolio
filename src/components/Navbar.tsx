export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b-2 border-ink bg-canvas/95 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="#top"
          className="inline-flex items-center justify-center rounded-[4px] border-2 border-ink bg-surface px-3 py-1 font-serif text-2xl font-normal tracking-tight text-ink shadow-[3px_3px_0px_#141413] transition-[transform,box-shadow,background-color] duration-100 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[4px_4px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transform-none motion-reduce:transition-none"
        >
          Rishabh.
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-[4px] border-2 border-ink bg-surface px-2.5 py-1 font-mono text-xs font-medium tracking-wide text-ink shadow-[3px_3px_0px_#141413] transition-[transform,box-shadow,background-color] duration-100 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[4px_4px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transform-none motion-reduce:transition-none"
          >
            About
          </a>
          <a
            href="#toolbox"
            className="inline-flex items-center justify-center rounded-[4px] border-2 border-ink bg-surface px-2.5 py-1 font-mono text-xs font-medium tracking-wide text-ink shadow-[3px_3px_0px_#141413] transition-[transform,box-shadow,background-color] duration-100 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[4px_4px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transform-none motion-reduce:transition-none"
          >
            Toolbox
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-[4px] border-2 border-ink bg-surface px-2.5 py-1 font-mono text-xs font-medium tracking-wide text-ink shadow-[3px_3px_0px_#141413] transition-[transform,box-shadow,background-color] duration-100 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[4px_4px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transform-none motion-reduce:transition-none"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[4px] border-2 border-ink bg-surface px-2.5 py-1 font-mono text-xs font-medium tracking-wide text-ink shadow-[3px_3px_0px_#141413] transition-[transform,box-shadow,background-color] duration-100 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[4px_4px_0px_#141413] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#141413] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transform-none motion-reduce:transition-none"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
