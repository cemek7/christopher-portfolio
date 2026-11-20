import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react"

const links = [
  { label: "Email", value: "ccemeka97@gmail.com", href: "mailto:ccemeka97@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "Christopher Ozougwu", href: "https://www.linkedin.com/in/christopher-chukwuemeka-7b3362275", icon: Linkedin },
  { label: "GitHub", value: "cemek7", href: "https://github.com/cemek7", icon: Github },
  { label: "Phone", value: "+234 (0) 907 824 9804", href: "tel:+2349078249804", icon: Phone },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-[#dce9dd]">
      <div className="section-container grid grid-cols-1 gap-10 py-20 md:py-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-[#087f5b]">Contact</p>
          <h2 className="section-heading mt-4 max-w-xl text-[#13221b]">Have a workflow worth improving?</h2>
          <p className="mt-5 max-w-lg leading-7 text-[#53635a]">
            Tell me what your customers or team are trying to get done. We can work out whether software or AI can make the next step easier.
          </p>
          <a href="mailto:ccemeka97@gmail.com?subject=Let%E2%80%99s%20talk%20about%20a%20product" className="button-primary mt-8">
            Email Christopher <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <div className="grid content-start gap-x-8 sm:grid-cols-2">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group border-t border-[#afc4b2] py-5">
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#67786c]">
                <Icon aria-hidden="true" className="h-4 w-4" /> {label}
              </span>
              <span className="mt-3 flex items-center gap-2 text-sm font-medium text-[#193026] group-hover:text-[#087f5b]">
                {value} <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
