import { Target, Cpu, BarChart3, Users } from "lucide-react"

const approaches = [
  {
    icon: Target,
    title: "Стратегия под бренд",
    text: "Каждый проект начинается с глубокого погружения в бренд. Мы не используем шаблоны — каждое решение создаётся индивидуально, исходя из целей, аудитории и позиционирования вашего бизнеса.",
  },
  {
    icon: Cpu,
    title: "AI на каждом этапе",
    text: "Искусственный интеллект — не модное слово, а инструмент. Мы встраиваем AI в каждый процесс: от генерации дизайна и текстов до аналитики и оптимизации рекламных кампаний.",
  },
  {
    icon: BarChart3,
    title: "Данные вместо догадок",
    text: "Все решения подкреплены данными. Мы анализируем поведение пользователей, A/B-тестируем гипотезы и оптимизируем воронки на основе реальных метрик, а не интуиции.",
  },
  {
    icon: Users,
    title: "Партнёрство, а не подряд",
    text: "Мы становимся частью вашей команды. Постоянная связь, прозрачные процессы и совместное достижение результатов — так работает современное AI-агентство.",
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-16 md:py-24 lg:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 lg:gap-24">
          <div className="lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Наш подход
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight mb-4">
              Почему AI-агентство?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Традиционные агентства работают медленно и дорого. Мы используем AI, чтобы делать больше за меньшее время -- без потери качества.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {approaches.map((item, i) => (
              <div key={i} className="bg-background p-6 md:p-8 group">
                <item.icon
                  size={24}
                  className="text-primary mb-6"
                />
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
