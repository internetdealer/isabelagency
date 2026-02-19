"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

const words = ["Веб-сайты", "Продажи", "Видео", "Контент"]

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url(/images/hero-abstract.jpg)" }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary mb-6 md:mb-10 font-medium">
          AI-Agency
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tight text-foreground mb-4 md:mb-6">
          ISABEL
        </h1>

        <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center overflow-hidden mb-6 md:mb-8">
          <span
            key={currentWord}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-primary animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {words[currentWord]}
          </span>
        </div>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12 px-2">
          Мы создаём цифровые продукты нового поколения.
          Веб-сайты, AI-ролики, продажи и контент — всё на базе искусственного интеллекта.
        </p>

        <a
          href="#contact"
          className="inline-flex bg-primary text-primary-foreground px-8 py-3.5 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium hover:bg-primary/90 transition-colors duration-300"
        >
          Обсудить проект
        </a>
      </div>

      <a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
