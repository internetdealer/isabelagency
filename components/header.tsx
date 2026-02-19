"use client"

import { useState, useEffect } from "react"
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

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

      {/* Mobile Navigation Overlay - Fullscreen */}
      {open && (
        <div 
          className="lg:hidden fixed overflow-hidden"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            margin: 0,
            padding: 0,
            backgroundColor: '#ffffff',
            background: '#ffffff'
          }}
        >
          {/* Mobile Menu Panel */}
          <div className="h-full w-full flex flex-col" style={{ backgroundColor: '#ffffff' }}>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0" style={{ backgroundColor: '#ffffff' }}>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
                Меню
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-secondary rounded transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-foreground" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-8" style={{ backgroundColor: '#ffffff' }}>
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-6 py-5 text-lg font-medium uppercase tracking-[0.1em] text-foreground hover:bg-secondary hover:text-primary transition-all duration-200 border-b border-border/30 last:border-0 active:bg-secondary/50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
            
            {/* CTA Button */}
            <div className="p-6 border-t border-border" style={{ backgroundColor: '#ffffff' }}>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-primary text-primary-foreground px-6 py-4 text-sm uppercase tracking-[0.2em] font-medium rounded-lg hover:bg-primary/90 transition-colors active:bg-primary/80"
              >
                Начать проект
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
