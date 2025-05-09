"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MonitorIcon, ServerIcon, ShieldIcon, NetworkIcon, CloudIcon } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <MonitorIcon className="h-6 w-6" />,
    skills: ["React.js", "HTML", "CSS", "Redux", "JavaScript (ES6+)"],
  },
  {
    title: "Backend",
    icon: <ServerIcon className="h-6 w-6" />,
    skills: ["Node.js", "Python", "RESTful APIs"],
  },
  {
    title: "Cybersecurity",
    icon: <ShieldIcon className="h-6 w-6" />,
    skills: ["CEH", "Security+", "Network Security", "Firewalls"],
  },
  {
    title: "Networking",
    icon: <NetworkIcon className="h-6 w-6" />,
    skills: ["CCNA (Cisco Certified Network Associate)"],
  },
  {
    title: "DevOps & Infrastructure",
    icon: <CloudIcon className="h-6 w-6" />,
    skills: ["Microsoft 365 Integration", "System Automation", "Cloud Solutions"],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="glass-card p-6 h-full limelight">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary/10 mr-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Technical Proficiency</h3>
            <div className="space-y-4">
              {[
                { name: "JavaScript & React", level: 95 },
                { name: "Node.js & Express", level: 90 },
                { name: "Python", level: 85 },
                { name: "Cybersecurity", level: 90 },
                { name: "Networking", level: 85 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

