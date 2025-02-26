"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-context"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      className="fixed top-4 right-4 bg-background/50 backdrop-blur-sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
    >
      {language === "es" ? "EN" : "ES"}
    </Button>
  )
}

