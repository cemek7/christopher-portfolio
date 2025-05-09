"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CodeIcon, ShieldIcon, UsersIcon, GraduationCapIcon } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="mb-4">
              With over 8 years of experience in Full-Stack Development, I've built a career focused on creating
              efficient, secure, and user-friendly web applications.
            </p>
            <p className="mb-4">
              Currently, I serve as the <strong>Product Development Lead at Belsoft Systems</strong>, where I lead the
              development of web applications, manage teams, and work with international investors to bring innovative
              solutions to market.
            </p>
            <p className="mb-4">
              My expertise spans <strong>React.js, Node.js, Python, Cybersecurity, and Network Security</strong>. I've
              developed an Electronic Document Management System (EDMS) and automated inventory management systems using
              Python.
            </p>
            <p>
              I hold a <strong>BSc in Computer Science from Ghana Technology University College</strong>, which has
              provided me with a solid foundation for my technical career.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <Card className="glass-card p-6 limelight">
              <div className="flex flex-col items-center text-center">
                <CodeIcon className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-muted-foreground">Full-stack development with React.js, Node.js, and Python</p>
              </div>
            </Card>

            <Card className="glass-card p-6 limelight">
              <div className="flex flex-col items-center text-center">
                <ShieldIcon className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                <p className="text-muted-foreground">Network security, ethical hacking, and system protection</p>
              </div>
            </Card>

            <Card className="glass-card p-6 limelight">
              <div className="flex flex-col items-center text-center">
                <UsersIcon className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                <p className="text-muted-foreground">Team management and agile development methodologies</p>
              </div>
            </Card>

            <Card className="glass-card p-6 limelight">
              <div className="flex flex-col items-center text-center">
                <GraduationCapIcon className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">BSc in Computer Science and multiple technical certifications</p>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-4">Interests</h3>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-primary/10 rounded-full text-primary">Gaming</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full text-primary">Web & Network Security</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full text-primary">AI & Automation</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

