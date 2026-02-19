"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Инструменты", href: "#tools" },
  { label: "Подход", href: "#approach" },
  { label: "О нас", href: "#about" },
  { label: "Контакт", href: "#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="ISABEL"
            width={60}
            height={30}
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex bg-primary text-primary-foreground px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-primary/90 transition-colors duration-300"
        >
          Начать проект
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-background z-40 flex flex-col items-center justify-center gap-8 px-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl uppercase tracking-[0.3em] text-foreground hover:text-primary transition-colors w-full text-center py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.2em] font-medium mt-4"
          >
            Начать проект
          </a>
        </div>
      )}
    </header>
  )
}
