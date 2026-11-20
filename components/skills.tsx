import { ArrowUpRight } from "lucide-react"

const capabilities = [
  {
    number: "01",
    title: "Applied AI",
    body: "Assistants grounded in a business’s services and rules. They can clarify missing details, use shared model routes and pass sensitive decisions to a person.",
  },
  {
    number: "02",
    title: "Customer messaging",
    body: "WhatsApp and Instagram integrations that connect incoming messages, media, customer context and staff follow-up.",
  },
  {
    number: "03",
    title: "Booking and commerce",
    body: "Appointment flows, storefront sales, inventory reservations and operational views designed to work together.",
  },
  {
    number: "04",
    title: "Production engineering",
    body: "Tenant-aware APIs, database changes, deployment workflows and diagnostics that make product behaviour easier to trust.",
  },
]

export default function Skills() {
  return (
    <section id="capabilities" className="bg-[#13221b] text-[#f4f3eb]">
      <div className="section-container py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow text-[#9dc6ad]">What I build with TechClave</p>
            <h2 className="section-heading mt-4 max-w-lg text-[#f4f3eb]">AI that fits the work around it.</h2>
            <p className="mt-5 max-w-md leading-7 text-[#c1cec4]">
              The model is one part. The product needs the right context, data, rules and human handoff around it.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#a5e0bd] transition-colors hover:text-white">
              Talk through a workflow <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {capabilities.map((item) => (
              <article key={item.number} className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:gap-5 md:py-7">
                <span className="font-mono text-xs tracking-[0.16em] text-[#9dc6ad]">{item.number}</span>
                <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="max-w-xl text-sm leading-6 text-[#c1cec4]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
