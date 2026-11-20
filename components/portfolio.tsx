import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const earlierWork = [
  {
    number: "02",
    title: "Rental property management platform",
    summary: "A web application for tenant records, rent tracking and maintenance requests.",
    tools: "React · Node.js · Express · MongoDB",
  },
  {
    number: "03",
    title: "Document management for an energy business",
    summary: "A role-based system for storing, organising and finding company documents.",
    tools: "Django · PostgreSQL · AWS S3",
  },
  {
    number: "04",
    title: "Inventory and operations automation",
    summary: "Python tools that reduced manual inventory tracking and routine systems work.",
    tools: "Python · Flask · SQLite",
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="bg-[#fbfaf6]">
      <div className="section-container py-20 md:py-28">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected work <span className="mx-2 text-[#9ca69b]">/</span> 01—04</p>
            <h2 className="section-heading mt-4 max-w-2xl">Software built around what people need to do.</h2>
          </div>
          <a href="mailto:ccemeka97@gmail.com?subject=Product%20engineering%20conversation" className="text-link w-fit">
            Discuss a project <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <article className="grid grid-cols-1 overflow-hidden rounded-[1.5rem] border border-[#d9ded4] bg-[#f2f6ef] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
            <div>
              <p className="eyebrow text-[#087f5b]">01 <span className="mx-2 text-[#9ca69b]">/</span> TechClave · Product engineering</p>
              <h3 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#13221b] md:text-5xl">
                Booka gives every enquiry a useful next step.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#53635a]">
                A multi-tenant booking and commerce platform that brings WhatsApp and Instagram enquiries, AI-assisted replies, appointments and inventory into one operating flow.
              </p>
              <ul className="mt-7 space-y-3 text-sm leading-6 text-[#35483d]">
                <li className="flex gap-3"><span className="text-[#087f5b]">↗</span><span>Messages route to the right business inbox and stay attached to the conversation.</span></li>
                <li className="flex gap-3"><span className="text-[#087f5b]">↗</span><span>AI uses business context and rules, with a path to ask for details or hand off.</span></li>
                <li className="flex gap-3"><span className="text-[#087f5b]">↗</span><span>Bookings and sales connect to stock checks, reservations and follow-up.</span></li>
              </ul>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="https://app.techclave.cloud/booka" target="_blank" rel="noreferrer" className="button-primary">
                Visit Booka <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#66766b]">WhatsApp · Instagram · AI</span>
            </div>
          </div>

          <a
            href="https://app.techclave.cloud/booka"
            target="_blank"
            rel="noreferrer"
            className="group relative min-h-[340px] overflow-hidden border-t border-[#d9ded4] bg-white lg:min-h-[600px] lg:border-l lg:border-t-0"
            aria-label="Open the Booka product page"
          >
            <Image
              src="/booka-product-preview.png"
              alt="Booka product page showing a customer messaging and booking workflow"
              fill
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-[#f4f3eb]/95 px-4 py-2 text-xs font-medium text-[#193026] shadow-sm">
              Product view <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
          </a>
        </article>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {earlierWork.map((project) => (
            <article key={project.number} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-[#d9ded4] py-6 md:gap-6 md:py-8">
              <span className="font-mono text-xs tracking-[0.15em] text-[#087f5b]">{project.number}</span>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-[#193026]">{project.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#5a6a60]">{project.summary}</p>
                <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#7b897f]">{project.tools}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
