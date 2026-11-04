import { useEffect, useRef, useState } from 'react'

const CARDS = [
  { label: 'Building Toward', value: 'AI Engineering · Intelligent Systems' },
  { label: 'Status', value: 'Computer Science Undergraduate' },
  { label: 'Technical Interests', value: 'Motion Planning · Machine Learning · Systems' },
  { label: 'Activities', value: 'Hackathons · Research · Open Source' },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || !('IntersectionObserver' in window)) {
      setHasEntered(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-surface py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* ── Full-width section heading ── */}
        <div className={`editorial-fade-up ${hasEntered ? 'is-visible' : ''} mb-10 border-b-2 border-ink pb-6`}>
          <h2
            id="about-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-5xl"
          >
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* ── Left: bio copy ── */}
        <div className={`editorial-fade-up editorial-fade-up-delay-100 ${hasEntered ? 'is-visible' : ''} lg:col-span-7`}>
          <h3
            className="mb-6 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl"
          >
            <span className="block">Curious by nature.</span>
            <span className="block lg:whitespace-nowrap">
              Building with purpose.
            </span>
          </h3>
          <div className="space-y-4 font-sans text-base leading-relaxed text-ink/80">
            <p>
              I'm a Computer Science student interested in intelligent systems,
              machine learning, and robotics. I enjoy learning engineering
              concepts by turning them into working software.
            </p>
            <p>
              From building web applications to exploring robot motion planning,
              I'm interested in how thoughtful software design and algorithms can
              solve practical problems.
            </p>
          </div>
        </div>

        {/* ── Right: A-board pavement stand ── */}
        <div
          className={`editorial-fade-up editorial-fade-up-delay-100 ${hasEntered ? 'is-visible' : ''} lg:col-span-5 flex flex-col items-center`}
        >
          {/* Hinge / pivot bar */}
          <div
            aria-hidden="true"
            className="h-2 w-16 rounded-t-sm bg-ink mx-auto"
          />

          {/* Board face */}
          <div
            className="relative w-full max-w-md border-2 border-ink bg-[#F5F2EB] p-5 shadow-[4px_4px_0px_#141413]"
          >
            {/* Inner info cards */}
            <div className="flex flex-col gap-2.5">
              {CARDS.map(({ label, value }) => (
                <div
                  key={label}
                  className="border border-ink/20 bg-surface/80 p-3.5"
                >
                  <p className="mb-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                    {label}
                  </p>
                  <p className="text-sm font-semibold leading-snug text-ink">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stand legs row */}
          <div
            aria-hidden="true"
            className="relative flex w-full max-w-md justify-between px-4"
          >
            {/* Left leg stack */}
            <div className="flex flex-col items-center">
              {/* rear/angled support – slightly wider, tucked behind */}
              <div className="w-4 h-6 bg-ink/40 -mb-5 ml-0.5" />
              {/* front leg */}
              <div className="w-3 h-7 bg-ink" />
            </div>

            {/* Right leg stack */}
            <div className="flex flex-col items-center">
              {/* rear/angled support */}
              <div className="w-4 h-6 bg-ink/40 -mb-5 -ml-0.5" />
              {/* front leg */}
              <div className="w-3 h-7 bg-ink" />
            </div>
          </div>

          {/* Ground shadow */}
          <div
            aria-hidden="true"
            className="mt-1 h-1 w-3/4 max-w-xs mx-auto rounded-full bg-ink/20 blur-[1px]"
          />
        </div>
      </div>
    </div>
  </section>
)
}
