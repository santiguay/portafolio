"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"

const technologies = [
  {
    name: "Python",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.worldvectorlogo.com/logos/django.svg",
  },
  {
    name: "React",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Express",
    logo: "https://expressjs.com/images/favicon.png",
  },
  {
    name: "JavaScript",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "HTML",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Langchain",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgdmlld0JveD0iMCAwIDcyIDcyIiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTM2IDcyQzU1Ljg4MjMgNzIgNzIgNTUuODgyMyA3MiAzNkM3MiAxNi4xMTc3IDU1Ljg4MjMgMCAzNiAwQzE2LjExNzcgMCAwIDE2LjExNzcgMCAzNkMwIDU1Ljg4MjMgMTYuMTE3NyA3MiAzNiA3MloiIGZpbGw9IiMxMjEyMTIiLz4KPHBhdGggZD0iTTIwLjI1IDQ4LjVIMjUuNzVWMjMuNUgyMC4yNVY0OC41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ2LjI1IDQ4LjVINTEuNzVWMjMuNUg0Ni4yNVY0OC41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMzLjI1IDQ4LjVIMzguNzVWMjMuNUgzMy4yNVY0OC41WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+",
  },
]

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const { language } = useLanguage()

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{translations[language].techStack.title}</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 max-w-3xl mx-auto">
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="relative group"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="relative w-20 h-20 mx-auto bg-background/50 rounded-xl p-4 backdrop-blur-sm border border-border/50">
              <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} fill className="object-contain p-2" />
            </div>
            {hoveredTech === tech.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded text-sm whitespace-nowrap shadow-lg"
              >
                {tech.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

