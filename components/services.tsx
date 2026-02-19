"use client"

import { useState } from "react"
import { Globe, TrendingUp, Video, FileText, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Веб-сайты",
    num: "01",
    description:
      "Проектируем и разрабатываем высокоэффективные веб-сайты с использованием AI. Конверсия, скорость, эстетика — на первом месте.",
    tags: ["Лендинги", "Корпоративные сайты", "E-commerce", "Веб-приложения"],
  },
  {
    icon: TrendingUp,
    title: "Продажи",
    num: "02",
    description:
      "Автоматизируем воронки продаж с помощью AI-агентов. Увеличиваем конверсию и снижаем стоимость привлечения клиентов.",
    tags: ["AI-воронки", "CRM-интеграции", "Чат-боты", "Аналитика"],
  },
  {
    icon: Video,
    title: "AI-Видеоролики",
    num: "03",
    description:
      "Создаём рекламные ролики нового поколения с помощью генеративного AI. Быстро, качественно, с уникальным стилем.",
    tags: ["Рекламные ролики", "UGC-контент", "Анимация", "Продакшн"],
  },
  {
    icon: FileText,
    title: "Контент",
    num: "04",
    description:
      "Разрабатываем контент-стратегии и генерируем материалы с использованием AI. Тексты, визуал, стратегия — всё в одном.",
    tags: ["Копирайтинг", "SMM", "Визуальный контент", "Стратегия"],
  },
]

export function Services() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 md:mb-16 lg:mb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Что мы делаем
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tight">
              Услуги
            </h2>
          </div>
          <span className="hidden md:block text-sm text-muted-foreground tracking-wide">
            {"( 04 )"}
          </span>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-t border-border last:border-b"
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="flex items-center gap-4 md:gap-12 py-6 md:py-10 cursor-pointer">
                <span className="text-xs text-muted-foreground tracking-wider w-8">
                  {service.num}
                </span>

                <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <div className="flex items-center gap-4 md:w-64">
                    <service.icon
                      size={20}
                      className={`transition-colors duration-300 ${
                        active === index ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 max-w-xl">
                    {service.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className={`hidden md:block transition-all duration-300 ${
                    active === index
                      ? "text-primary translate-x-0 translate-y-0"
                      : "text-muted-foreground/30 -translate-x-1 translate-y-1"
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active === index ? "max-h-20 pb-8" : "max-h-0"
                }`}
              >
                <div className="flex flex-wrap gap-2 pl-14 md:pl-20">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider border border-border px-3 py-1.5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
