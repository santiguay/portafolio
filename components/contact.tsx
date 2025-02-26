"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { language } = useLanguage()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      nombre: formData.get("name"),
      email: formData.get("email"),
      mensaje: formData.get("message"),
    }

    try {
      const response = await fetch("https://hook.us2.make.com/u1pbv1p9di6yfsvjfkb1eeuggyln8prc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Error al enviar el mensaje")

      toast({
        title: translations[language].contact.success,
        description: translations[language].contact.successDetail,
      })

      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: translations[language].contact.error,
        description: translations[language].contact.errorDetail,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{translations[language].contact.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input name="name" placeholder={translations[language].contact.name} required className="w-full" />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder={translations[language].contact.email}
              required
              className="w-full"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder={translations[language].contact.message}
              required
              className="w-full min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? translations[language].contact.sending : translations[language].contact.send}
          </Button>
        </form>
      </div>
    </section>
  )
}

