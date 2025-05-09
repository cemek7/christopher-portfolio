
"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, SendIcon, CheckIcon, AlertCircleIcon } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

 

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="mb-8 text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out using any of the methods below.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <MailIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <a href="mailto:ccemeka97@gmail.com" className="text-lg hover:text-primary transition-colors">
                      ccemeka97@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <PhoneIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                    <a href="tel:+2349078249804" className="text-lg hover:text-primary transition-colors">
                      +234 (0) 907 824 9804
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <LinkedinIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/christopher-chukwuemeka-7b3362275"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Christopher Ozougwu
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <GithubIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">GitHub</h4>
                    <a
                      href="https://github.com/cemek7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      cemek7
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="outline">
                  <a href="/christopher-ozougwu-resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form action="https://formspree.io/f/xrbqlejk" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a project..."
                    required
                    className="min-h-[150px] bg-background/50"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={status === "loading" || status === "success"}>
                  {status === "idle" && (
                    <>
                      <SendIcon className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                  {status === "loading" && "Sending..."}
                  {status === "success" && (
                    <>
                      <CheckIcon className="h-4 w-4 mr-2" />
                      Message Sent!
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <AlertCircleIcon className="h-4 w-4 mr-2" />
                      Error Sending
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

