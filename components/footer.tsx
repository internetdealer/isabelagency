import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-12 md:py-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/logo.svg"
              alt="ISABEL"
              className="h-8 w-auto mb-5"
              style={{ maxWidth: '120px', height: 'auto' }}
            />
            <p className="text-sm text-background/60 leading-relaxed max-w-xs mb-5">
              ISABEL -- AI-агентство нового поколения. Создаём сайты, ролики и стратегии продаж с помощью AI.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-primary/90 transition-colors"
            >
              Начать проект
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background mb-5 font-medium">
              Навигация
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Услуги", href: "#services" },
                { label: "Процесс работы", href: "#process" },
                { label: "Инструменты", href: "#tools" },
                { label: "Наш подход", href: "#approach" },
                { label: "Клиенты", href: "#brands" },
                { label: "О нас", href: "#about" },
                { label: "Связаться", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background mb-5 font-medium">
              Услуги
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "AI Веб-сайты",
                "Автоматизация продаж",
                "AI Видео-ролики",
                "Контент-стратегия",
                "Таргетированная реклама",
                "Чат-боты и ассистенты",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm text-background/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background mb-5 font-medium">
              Контакты
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-background/40 block mb-1">Email</span>
                <a
                  href="mailto:nemytykh@icloud.com"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  nemytykh@icloud.com
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-background/40 block mb-1">Телефон</span>
                <a
                  href="tel:+79017421090"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  +7 (901) 742-10-90
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-background/40 block mb-1">Режим работы</span>
                <span className="text-sm text-background/60">
                  10:00 — 22:00
                </span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-background/40 block mb-1">Локация</span>
                <span className="text-sm text-background/60">
                  Москва
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-background/40 tracking-wider">
            &copy; {new Date().getFullYear()} ISABEL. Все права защищены.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors tracking-wider">
              Политика конфиденциальности
            </a>
            <span className="text-background/20">|</span>
            <span className="text-xs text-background/40 tracking-wider">
              AI-Powered Agency
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
