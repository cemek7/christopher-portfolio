import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type HackathonProject = {
  number: string
  title: string
  event: string
  summary: string
  tools: string
  image?: string
  imageAlt: string
  visual?: "release" | "brief"
  status?: string
  links: { label: string; href: string }[]
}

const hackathonProjects: HackathonProject[] = [
  {
    number: "02",
    title: "TasteRoute",
    event: "Qloo Agentic Hackathon",
    summary: "Turns a city, mood and time window into a three-to-five-stop outing. An agent queries Qloo Taste AI, and every stop includes a traceable reason.",
    tools: "Qloo Taste AI · Next.js · TypeScript",
    image: "/tasteroute-preview.png",
    imageAlt: "TasteRoute outing planner with city, mood, time and preference controls",
    links: [
      { label: "Try the demo", href: "https://tasteroute-sepia.vercel.app" },
      { label: "Source", href: "https://github.com/cemek7/tasteroute" },
    ],
  },
  {
    number: "03",
    title: "Release Guardian",
    event: "GitLab Transcend Hackathon",
    summary: "Collects bounded CI evidence and applies versioned release policies. It prepares an assessment; a person makes the release decision.",
    tools: "GitLab CI · policy evaluation · human approval",
    visual: "release",
    imageAlt: "Release Guardian evidence, policy and human decision flow",
    links: [{ label: "Source", href: "https://gitlab.com/cemek7/release-guardian" }],
  },
  {
    number: "04",
    title: "Brief-to-Frame",
    event: "UGREEN AI NAS Hackathon · Skill concept",
    summary: "Compares a photographer’s shot list with an approved photo scope, shows matches and gaps, then proposes a review album for confirmation.",
    tools: "Photo search · brief analysis · approval-first workflow",
    visual: "brief",
    imageAlt: "Brief-to-Frame workflow from shoot brief to approved review album",
    status: "Static validation passed · NAS runtime not yet tested",
    links: [],
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

        <div className="mb-6 mt-16 flex flex-col gap-3 border-t border-[#d9ded4] pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Hackathon work <span className="mx-2 text-[#9ca69b]">/</span> 02—04</p>
            <h3 className="section-heading mt-3 max-w-2xl text-3xl md:text-4xl">Small teams. Real constraints. Useful prototypes.</h3>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#66766b]">Recent work across recommendation agents, release confidence and careful photo workflows.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {hackathonProjects.map((project) => (
            <article key={project.number} className="flex flex-col overflow-hidden rounded-[1.25rem] border border-[#d9ded4] bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#13221b]">
                {project.image ? (
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover object-top" />
                ) : project.visual === "release" ? (
                  <div role="img" aria-label={project.imageAlt} className="flex h-full flex-col justify-between p-6 text-[#f4f3eb]">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#a5e0bd]">Release evidence</p>
                    <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1.5 text-center text-[0.65rem] sm:gap-2 sm:text-xs">
                      <span className="rounded-lg border border-white/20 bg-white/5 px-1.5 py-3 sm:px-2">CI evidence</span>
                      <span className="text-[#a5e0bd]">→</span>
                      <span className="rounded-lg border border-white/20 bg-white/5 px-1.5 py-3 sm:px-2">Policy result</span>
                      <span className="text-[#a5e0bd]">→</span>
                      <span className="rounded-lg border border-[#a5e0bd]/50 bg-[#a5e0bd]/10 px-1.5 py-3 sm:px-2">Human decision</span>
                    </div>
                    <p className="text-sm text-white/70">The release decision stays with a person.</p>
                  </div>
                ) : (
                  <div role="img" aria-label={project.imageAlt} className="flex h-full flex-col justify-between bg-[#e8efe4] p-6 text-[#193026]">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#087f5b]">Photo selection</p>
                    <div className="flex items-center justify-between gap-1.5 text-center text-[0.65rem] sm:gap-2 sm:text-xs">
                      <span className="rounded-lg border border-[#c8d6c8] bg-white/80 px-1.5 py-3 sm:px-3">Shoot brief</span>
                      <span className="text-[#087f5b]">→</span>
                      <span className="rounded-lg border border-[#c8d6c8] bg-white/80 px-1.5 py-3 sm:px-3">Approved photos</span>
                      <span className="text-[#087f5b]">→</span>
                      <span className="rounded-lg border border-[#c8d6c8] bg-white/80 px-1.5 py-3 sm:px-3">Review album</span>
                    </div>
                    <p className="text-sm text-[#53635a]">Album creation waits for approval.</p>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="eyebrow text-[#087f5b]">{project.number} <span className="mx-2 text-[#9ca69b]">/</span> {project.event}</span>
                </div>
                <h4 className="mt-4 text-2xl font-semibold tracking-tight text-[#13221b]">{project.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#53635a]">{project.summary}</p>
                <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#7b897f]">{project.tools}</p>
                {project.status && <p className="mt-3 text-xs text-[#8a5b22]">{project.status}</p>}
                {project.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="text-link">
                        {link.label} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
