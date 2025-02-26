"use client";
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Background from "@/components/background"
import LanguageToggle from "@/components/language-toggle"
import { Toaster } from "@/components/ui/toaster"
import { useEffect } from "react"
export default function Home() {
  useEffect(() => {
    fetch("https://pos-birt.onrender.com").catch((error) =>
      console.error("Error en pos-birt:", error)
    )
    fetch("https://gyt-im59.onrender.com").catch((error) =>
      console.error("Error en gyt-im59:", error)
    )
  }, [])
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Background />
      <LanguageToggle />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </div>
      <Toaster />
    </main>
  )
}

