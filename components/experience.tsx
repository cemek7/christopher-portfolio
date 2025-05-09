"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BriefcaseIcon, CalendarIcon } from "lucide-react"

const experiences = [
  {
    company: "Belsoft Systems",
    period: "2023 - Present",
    title: "Product Development Lead",
    description: [
      "Spearheaded rental property management app development",
      "Led a team of developers in agile methodologies",
      "Built strategies to attract foreign investors",
      "Improved workflow efficiency with modern web technologies",
    ],
  },
  {
    company: "Brentex Petroleum",
    period: "2022 - 2023",
    title: "IT Officer",
    description: [
      "Migrated entire company email system to Microsoft 365",
      "Developed a company-wide IT policy and improved network security",
      "Automated routine system maintenance tasks",
    ],
  },
  {
    company: "Wellman & Wellington",
    period: "2021",
    title: "Frontend Developer (Remote)",
    description: [
      "Upgraded company website security and implemented new UI features",
      "Developed wireframes and production-ready UI code",
    ],
  },
  {
    company: "Freelance",
    period: "2019 - 2022",
    title: "Python Developer",
    description: [
      "Built an in-house inventory management automation system",
      "Developed security monitoring scripts for network intrusion detection",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Experience & Work History
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>

                {/* Date */}
                <div className="md:w-1/2 mb-4 md:mb-0 flex items-center">
                  <div className={`glass-card p-4 inline-flex items-center ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <CalendarIcon className="h-5 w-5 mr-2 text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Content */}
                <Card className={`glass-card p-6 md:w-1/2 limelight ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}>
                  <div className="flex items-center mb-4">
                    <BriefcaseIcon className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                  </div>
                  <h4 className="text-lg font-medium mb-3 text-muted-foreground">{exp.title}</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

