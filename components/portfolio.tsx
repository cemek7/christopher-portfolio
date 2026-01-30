"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon, CodeIcon, HomeIcon, FileTextIcon, ShieldIcon } from "lucide-react"

const projects = [
  {
    title: "Rental Property Management App",
    company: "Belsoft Systems",
    description:
      "A comprehensive web application for managing rental properties, including tenant management, payment tracking, and maintenance requests.",
    image: "https://picsum.photos/200/300?grayscale",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    category: "web",
    links: {
      demo: "#",
      github: "#",
    },
    icon: <HomeIcon className="h-10 w-10" />,
  },
  {
    title: "Electronic Document Management System (EDMS)",
    company: "Brentex Petroleum",
    description:
      "A secure document management system for storing, organizing, and retrieving company documents with role-based access control.",
    image: "https://picsum.photos/200/300?grayscale",
    technologies: ["Python", "Django", "PostgreSQL", "AWS S3"],
    category: "web",
    links: {
      demo: "#",
      github: "#",
    },
    icon: <FileTextIcon className="h-10 w-10" />,
  },
  {
    title: "Automated Inventory Management System",
    company: "Freelance Project",
    description:
      "An automated system for tracking inventory levels, orders, and deliveries with real-time alerts and reporting.",
    image: "https://picsum.photos/200/300?grayscale",
    technologies: ["Python", "Flask", "SQLite", "React"],
    category: "automation",
    links: {
      demo: "#",
      github: "#",
    },
    icon: <CodeIcon className="h-10 w-10" />,
  },
  {
    title: "Website Security Upgrade & UI Development",
    company: "Wellman & Wellington",
    description:
      "Enhanced website security and implemented modern UI features for improved user experience and protection against common web vulnerabilities.",
    image: "https://picsum.photos/200/300?grayscale",
    technologies: ["JavaScript", "React", "CSS3"],
    category: "security",
    links: {
      demo: "#",
      github: "#",
    },
    icon: <ShieldIcon className="h-10 w-10" />,
  },
]

export default function Portfolio() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Portfolio & Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
              All Projects
            </Button>
            <Button variant={filter === "web" ? "default" : "outline"} onClick={() => setFilter("web")}>
              Web Applications
            </Button>
            <Button variant={filter === "automation" ? "default" : "outline"} onClick={() => setFilter("automation")}>
              Automation
            </Button>
            <Button variant={filter === "security" ? "default" : "outline"} onClick={() => setFilter("security")}>
              Security
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card overflow-hidden h-full limelight">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                      {project.company}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">{project.icon}</div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

