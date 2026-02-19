const stats = [
  { value: "50+", label: "Проектов" },
  { value: "3x", label: "Рост конверсии" },
  { value: "24/7", label: "AI-поддержка" },
  { value: "98%", label: "Довольных клиентов" },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              О нас
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mb-6 text-balance uppercase tracking-tight">
              Мы -- не просто агентство
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                ISABEL — это AI-агентство нового поколения. Мы объединяем передовые технологии
                искусственного интеллекта с глубоким пониманием бизнеса, чтобы создавать
                решения, которые действительно работают.
              </p>
              <p>
                Наша команда — это дизайнеры, разработчики и AI-инженеры, которые создают
                цифровые продукты на стыке технологий и эстетики. Каждый проект — это
                уникальное решение, построенное под конкретные задачи бренда.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background p-6 md:p-10 flex flex-col items-center text-center"
                >
                  <span className="text-2xl md:text-4xl font-black text-primary mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
