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
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <a href="#" className="flex items-center gap-3">
          {logoError ? (
            <span className="text-xl font-black uppercase tracking-tight text-foreground">ISABEL</span>
          ) : (
            <img
              src="/images/logo.svg"
              alt="ISABEL"
              className="h-8 w-auto"
              onError={() => setLogoError(true)}
              style={{ maxWidth: '120px', height: 'auto' }}
            />
          )}
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
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden fixed left-0 right-0 top-[65px] bottom-0 z-50 bg-background border-t border-border shadow-2xl flex flex-col gap-0 px-6 py-8 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors w-full text-left py-4 border-b border-border/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-full text-center bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium mt-4 rounded-lg"
            >
              Начать проект
            </a>
          </div>
        </>
      )}
    </header>
  )
}
