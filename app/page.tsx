import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Certifications from "@/components/certifications"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="gradient-background fixed inset-0 -z-10"></div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

