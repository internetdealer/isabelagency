"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "E-commerce платформа",
    category: "Веб-разработка",
    image: "/images/work-web.jpg",
    year: "2025",
  },
  {
    title: "AI-рекламный ролик",
    category: "Видеопродакшн",
    image: "/images/work-video.jpg",
    year: "2025",
  },
  {
    title: "Контент-стратегия бренда",
    category: "Контент и SMM",
    image: "/images/work-content.jpg",
    year: "2026",
  },
]

export function Works() {
  return (
    <section id="works" className="py-24 md:py-32 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">
              Портфолио
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground">
              Работы
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>

                  <div className="flex items-end justify-between">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
