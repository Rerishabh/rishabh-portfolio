import { useEffect, useRef, useState } from 'react'

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
      className="mx-auto max-w-6xl px-6 py-12 sm:px-8 md:py-16 lg:px-12"
    >
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
        <div className={`editorial-fade-up ${hasEntered ? 'is-visible' : ''} lg:col-span-7`}>
          <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-accent">
            01 / ABOUT
          </p>
          <h2
            id="about-heading"
            className="mb-6 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl"
          >
            <span className="block">Curious by nature.</span>
            <span className="block lg:whitespace-nowrap">
              Building with purpose.
            </span>
          </h2>
          <div className="space-y-4 font-sans text-base leading-relaxed text-ink/80">
            <p>
            I’m a Computer Science student interested in intelligent systems,
            machine learning, and robotics. I enjoy learning engineering
            concepts by turning them into working software.
            </p>
            <p>
            From building web applications to exploring robot motion planning,
            I’m interested in how thoughtful software design and algorithms can
            solve practical problems.
            </p>
          </div>
          <blockquote className="mt-6 max-w-xl border-2 border-l-4 border-ink border-l-accent bg-surface p-5 font-serif text-base italic text-ink/90 shadow-[3px_3px_0px_#141413] sm:text-lg">
            I’m driven by the moment an idea moves from an abstract algorithm
            into something that actually works.
          </blockquote>
        </div>
        <div className="flex flex-col gap-3.5 lg:col-span-5">
          {[
            ['Building Toward', 'AI Engineering · Intelligent Systems', ''],
            ['Status', 'Computer Science Undergraduate', 'editorial-fade-up-delay-100'],
            ['Technical Interests', 'Motion Planning · Machine Learning · Systems', 'editorial-fade-up-delay-200'],
            ['Activities', 'Hackathons · Research · Open Source', 'editorial-fade-up-delay-300'],
          ].map(([label, value, delay]) => (
            <div
              key={label}
              className={`editorial-fade-up ${hasEntered ? 'is-visible' : ''} ${delay} flex flex-col justify-center border-2 border-ink bg-surface p-4 shadow-[3px_3px_0px_#141413] transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#141413]`}
            >
              <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                {label}
              </p>
              <p className="text-sm font-semibold leading-snug text-ink">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
