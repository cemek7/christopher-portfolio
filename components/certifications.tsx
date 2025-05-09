"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { AwardIcon, CalendarIcon } from "lucide-react"

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH)",
    organization: "EC Council",
    year: "2021",
    description: "Professional certification for ethical hackers and penetration testers",
  },
  {
    title: "Security+",
    organization: "CompTIA",
    year: "2021",
    description: "Certification validating baseline cybersecurity skills",
  },
  {
    title: "CCNA (Cisco Certified Network Associate)",
    organization: "Cisco",
    year: "2021",
    description: "Certification for network administrators covering routing and switching",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 h-full limelight">
                <div className="flex items-center mb-4">
                  <AwardIcon className="h-6 w-6 mr-2 text-primary" />
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                </div>
                <div className="flex items-center mb-3 text-muted-foreground">
                  <span>{cert.organization}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{cert.year}</span>
                  </div>
                </div>
                <p>{cert.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg">
            These certifications demonstrate my commitment to maintaining the highest standards in cybersecurity and
            networking.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

