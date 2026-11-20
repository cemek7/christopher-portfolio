import Image from "next/image"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

export type HeroVariant = "personal" | "techclave"

type HeroProps = { variant?: HeroVariant; visual?: "portrait" | "product" }

export default function Hero({ variant = "personal", visual }: HeroProps) {
  const isTechClave = variant === "techclave"
  const showProductVisual = visual ? visual === "product" : isTechClave

  return (
    <section id="home" className="relative overflow-hidden border-b border-[#d9ded4] bg-[#f4f3eb]">
      <div className="section-container relative grid min-w-0 grid-cols-[minmax(0,1fr)] min-h-[calc(100svh-76px)] items-center gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div className="relative z-10 w-full min-w-0 max-w-full">
          <p className="eyebrow mb-7">
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#087f5b]" />
            Christopher Ozougwu <span className="mx-2 text-[#9ca69b]">/</span> TechClave
          </p>
          {isTechClave ? (
            <>
              <h1 className="w-full max-w-3xl whitespace-normal text-[clamp(2.35rem,8.5vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#13221b]">
                Useful AI moves<br className="sm:hidden" /> the work <span className="text-[#087f5b]">forward.</span>
              </h1>
              <p className="mt-7 w-full min-w-0 max-w-xl text-lg leading-8 text-[#53635a] md:text-xl">
                At TechClave, I build software that turns customer conversations into bookings, sales and clear next steps.
              </p>
            </>
          ) : (
            <>
              <h1 className="w-full max-w-3xl whitespace-normal text-[clamp(2.35rem,8.5vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#13221b]">
                I build AI<br className="sm:hidden" /> products for<br className="sm:hidden" /> <span className="text-[#087f5b]">real work.</span>
              </h1>
              <p className="mt-7 w-full min-w-0 max-w-xl text-lg leading-8 text-[#53635a] md:text-xl">
                I’m Christopher, a product builder at TechClave. I build AI-enabled software for customer conversations, bookings and everyday business operations.
              </p>
            </>
          )}

          <div className="mt-9 flex w-full min-w-0 flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a className="button-primary" href="#work">
              Explore selected work <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a className="button-secondary" href="#contact">
              Start a conversation <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 flex w-full max-w-full flex-wrap gap-x-7 gap-y-2 border-t border-[#d9ded4] pt-5 text-sm text-[#53635a]">
            <span>Applied AI</span>
            <span>Product engineering</span>
            <span>Customer operations</span>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[520px]">
          {showProductVisual ? (
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-[#d9ded4] bg-white shadow-[0_24px_70px_rgba(25,48,36,0.12)]">
              <Image
                src="/booka-product-preview.png"
                alt="Booka product page showing its AI customer operations workflow"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10251b]/95 via-[#10251b]/75 to-transparent px-6 pb-6 pt-20 text-white">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[#b4dfc8]">Built at TechClave</p>
                <p className="mt-2 text-2xl font-medium tracking-tight">Booka</p>
                <p className="mt-1 text-sm text-white/75">AI front desk · bookings · customer messaging</p>
              </div>
            </div>
          ) : (
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[#dce4d9] shadow-[0_24px_70px_rgba(25,48,36,0.14)]">
              <Image
                src="/hero1.jpeg"
                alt="Christopher Ozougwu, product builder at TechClave"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-[50%_34%]"
              />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/70 bg-[#f4f3eb]/95 px-4 py-2 text-sm text-[#193026] shadow-sm">
                Product engineering <span className="mx-2 text-[#8b998e]">·</span> Applied AI
              </div>
            </div>
          )}
          <div className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 rounded-full border border-[#a6c8b3]" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
