import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Skills from "@/components/skills"
import About from "@/components/about"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f3eb] text-[#13221b]">
      <Hero variant="personal" visual="portrait" />
      <Portfolio />
      <Skills />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
