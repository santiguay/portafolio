"use client"

import Image from "next/image"
import Link from "next/link"
import Typewriter from "typewriter-effect"
import { Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"

export default function Hero() {
  const { language } = useLanguage()
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-48 h-48 mb-8"
      >
        <Image
          src="/profile.jpeg"
          alt="Profile picture"
          fill
          className="rounded-full border-4 border-primary/20 object-cover"
          priority
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-pulse" />
      </motion.div>
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Typewriter
          options={{
            strings: [translations[language].hero.greeting, translations[language].hero.role],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 80,
          }}
        />
      </motion.h1>
      <motion.div
        className="flex space-x-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="https://www.linkedin.com/in/santiago-benitez-05a943222/"
          target="_blank"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all hover:scale-110 hover:rotate-6"
        >
          <Linkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn Profile</span>
        </Link>
        <Link
          href="https://github.com/santiguay"
          target="_blank"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all hover:scale-110 hover:-rotate-6"
        >
          <Github className="w-6 h-6" />
          <span className="sr-only">GitHub Profile</span>
        </Link>
      </motion.div>
    </motion.section>
  )
}

