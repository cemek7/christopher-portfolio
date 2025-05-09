"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon, MailIcon, GithubIcon, LinkedinIcon } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Christopher Ozougwu
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
              Full-Stack Developer | Cybersecurity Expert | Technical Leader
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              Experienced Full-Stack Developer specializing in JavaScript, React.js, Node.js, and Python. Passionate
              about building scalable web applications and enhancing cybersecurity solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <div className="flex items-center gap-4 ml-2">
                <a
                  href="https://github.com/cemek7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/christopher-chukwuemeka-7b3362275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="mailto:ccemeka97@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MailIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-xs"></div>
              <img
                src="/hero1.jpeg?height=320&width=320"
                alt="Christopher Ozougwu"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

