"use client"

const toolCategories = [
  {
    category: "Разработка и дизайн",
    description: "Создаём сайты и приложения с помощью лучших AI-платформ.",
    tools: [
      { name: "Bolt.ai", role: "AI-разработка" },
      { name: "V0", role: "UI-генерация" },
      { name: "Lovable", role: "AI-прототипирование" },
      { name: "Vercel", role: "Деплой и хостинг" },
    ],
  },
  {
    category: "Реклама и маркетинг",
    description: "Настраиваем и ведём рекламные кампании через ведущие площадки.",
    tools: [
      { name: "VK Ads", role: "Таргетинг ВКонтакте" },
      { name: "Яндекс.Директ", role: "Контекстная реклама" },
      { name: "Google Ads", role: "Глобальная реклама" },
      { name: "Meta Ads", role: "Таргетинг в соцсетях" },
    ],
  },
  {
    category: "AI-Видео и контент",
    description: "Генерируем видеоролики и визуальный контент нового уровня.",
    tools: [
      { name: "Runway", role: "AI-видеогенерация" },
      { name: "Pika", role: "Видео из текста" },
      { name: "HeyGen", role: "AI-аватары" },
      { name: "Midjourney", role: "AI-визуал" },
    ],
  },
  {
    category: "Чат-боты и автоматизация",
    description: "Внедряем AI-ассистентов для продаж и поддержки клиентов.",
    tools: [
      { name: "ChatGPT API", role: "AI-диалоги" },
      { name: "Claude API", role: "AI-анализ" },
      { name: "Voiceflow", role: "Конструктор ботов" },
      { name: "Make", role: "AI-автоматизация" },
    ],
  },
]

export function Tools() {
  return (
    <section id="tools" className="py-16 md:py-24 lg:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            Стек технологий
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tight mb-4">
            Инструменты
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Мы используем передовые AI-платформы и инструменты, чтобы создавать
            продукты быстрее, качественнее и эффективнее.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {toolCategories.map((cat, i) => (
            <div key={i} className="bg-background p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2 font-medium">
                {cat.category}
              </p>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 border border-border px-4 py-2.5 hover:border-primary hover:bg-secondary transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {tool.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {tool.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
