const roles = [
  {
    period: "Current product work",
    company: "TechClave",
    title: "Product engineering",
    summary: "Building Booka and AI-enabled workflows for customer messaging, booking and commerce.",
  },
  {
    period: "2023 — Present",
    company: "Belsoft Systems",
    title: "Product Development Lead",
    summary: "Led a team building a rental property management app, moving tenant, rent and maintenance workflows into production software.",
  },
  {
    period: "2022 — 2023",
    company: "Brentex Petroleum",
    title: "IT Officer",
    summary: "Handled Microsoft 365 migration, IT policy, network security and routine systems automation.",
  },
  {
    period: "Earlier work",
    company: "Wellman & Wellington · Independent",
    title: "Frontend and Python development",
    summary: "Delivered website improvements, inventory automation and security-focused tools.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-[#fbfaf6]">
      <div className="section-container py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="section-heading mt-4 max-w-md">Product thinking, engineering depth.</h2>
          </div>
          <div className="divide-y divide-[#d9ded4] border-y border-[#d9ded4]">
            {roles.map((role) => (
              <article key={role.company} className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6 md:py-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#77877b]">{role.period}</p>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-medium tracking-tight text-[#193026]">{role.company}</h3>
                    <p className="text-sm text-[#087f5b]">{role.title}</p>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5a6a60]">{role.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
