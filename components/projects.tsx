"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"

const projects = [
  {
    title: "POS + IA agent",
    description: "It is a comprehensive POS system with the feature of an AI data analysis agent interacting with the system's database.",
    image: "/posAI.jpeg",
    demo: "https://pos-birt.onrender.com",
    repo: "https://github.com/santiaguay",
  },
  {
    title: "System of medical records",
    description: "A project that allows the creation of medical histories in a hospital.",
    image: "/historaClinica.jpeg",
    demo: "https://gyt-im59.onrender.com",
    repo: "https://github.com/santiguay/gyt/tree/DEPLOY",
  },
  {
    title: "AI Agent chatbot",
    description: "An artificial intelligence agent on WhatsApp that manages a business.",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQGM1WGOfM9mTQ/feedshare-shrink_1280/B4DZTJy9IDGkAk-/0/1738552366202?e=1743638400&v=beta&t=up0hyTILZlHbrLvMZTkOdpx5cC1Io8bdDJV7GD1KSAY",
    demo: "https://www.linkedin.com/in/santiago-benitez-05a943222/?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAADgGJIYBczkHMY-t_CnyAc9upnQbJEKDcdM",
    repo: "https://github.com/santiguay/AIAgentcloser-OP",
  },
  
  
]

export default function Projects() {
  const { language } = useLanguage()
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{translations[language].projects.title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="group overflow-hidden bg-background/50 backdrop-blur-sm border-border/50">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-6 relative z-10">
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex gap-4">
                  <Button asChild variant="default" size="sm" className="transition-transform hover:scale-105">
                    <Link href={project.demo} target="_blank">
                      {translations[language].projects.demo}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="transition-transform hover:scale-105">
                    <Link href={project.repo} target="_blank">
                      {translations[language].projects.repo}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

