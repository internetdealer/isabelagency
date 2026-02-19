"use client"

import { useState } from "react"
import { ArrowUpRight, Phone, Mail } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 font-medium">
            Контакт
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mb-4 text-balance uppercase tracking-tight">
            Готовы начать?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Расскажите нам о вашем проекте, и мы свяжемся с вами в течение 24 часов.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          <a
            href="mailto:nemytykh@icloud.com"
            className="flex items-center gap-4 bg-background border border-border px-6 py-5 hover:border-primary transition-colors duration-300 group"
          >
            <Mail size={18} className="text-primary shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</p>
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">nemytykh@icloud.com</p>
            </div>
          </a>
          <a
            href="tel:+79017421090"
            className="flex items-center gap-4 bg-background border border-border px-6 py-5 hover:border-primary transition-colors duration-300 group"
          >
            <Phone size={18} className="text-primary shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Телефон</p>
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">+7 (901) 742-10-90</p>
            </div>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-4 bg-primary text-primary-foreground px-6 py-5 group"
          >
            <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-1">Или</p>
              <p className="text-sm font-medium">Заполните форму ниже</p>
            </div>
          </a>
        </div>

        <form
          action="https://formsubmit.co/nemytykh@icloud.com"
          method="POST"
          className="bg-background border border-border p-6 md:p-10"
        >
          <input type="hidden" name="_subject" value="Новая заявка с сайта ISABEL" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="flex flex-wrap gap-3 mb-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Ваше имя"
              className="bg-secondary border border-border rounded-full px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors w-full sm:w-auto sm:flex-1 min-w-[180px]"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+7 (___) ___-__-__"
              className="bg-secondary border border-border rounded-full px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors w-full sm:w-auto sm:flex-1 min-w-[180px]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="email@example.com"
              className="bg-secondary border border-border rounded-full px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors w-full sm:w-auto sm:flex-1 min-w-[180px]"
            />
          </div>

          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Расскажите о вашем проекте..."
            className="w-full bg-secondary border border-border rounded-2xl px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-none mb-8"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="group flex items-center gap-3 bg-primary text-primary-foreground px-12 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Отправить
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
