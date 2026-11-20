import { ArrowUpRight } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="bg-[#f4f3eb]">
      <div className="section-container grid grid-cols-1 gap-10 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">A little about how I work</p>
          <h2 className="section-heading mt-4 max-w-md">Start with the real workflow.</h2>
        </div>
        <div className="max-w-3xl">
          <p className="text-xl leading-8 tracking-[-0.02em] text-[#253a2e] md:text-2xl md:leading-9">
            I’m a product development lead and full-stack engineer. I work from the customer problem through the data model, interface and production support.
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-[#5a6a60]">
            At TechClave, I focus on practical AI and business software: systems that understand the context, handle routine work and make it clear when a person should step in.
          </p>
          <div className="mt-9 grid gap-5 border-t border-[#d9ded4] pt-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Education</p>
              <p className="mt-2 font-medium text-[#193026]">BSc, Computer Science</p>
              <p className="mt-1 text-sm text-[#66766b]">Ghana Technology University College</p>
            </div>
            <div>
              <p className="eyebrow">Earlier work</p>
              <p className="mt-2 font-medium text-[#193026]">Security, systems and automation</p>
              <p className="mt-1 text-sm text-[#66766b]">Belsoft Systems · Brentex Petroleum · Wellman & Wellington</p>
            </div>
            <div className="sm:col-span-2">
              <p className="eyebrow">Certifications</p>
              <p className="mt-2 text-sm text-[#53635a]">Certified Ethical Hacker · CompTIA Security+ · Cisco CCNA (2021)</p>
            </div>
          </div>
          <a href="https://github.com/cemek7" target="_blank" rel="noreferrer" className="text-link mt-8">
            See my code on GitHub <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
