import { MessageSquare, Search, Lightbulb, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Знакомство и бриф",
    description:
      "Изучаем ваш бренд, целевую аудиторию и бизнес-задачи. Проводим глубокий анализ рынка и конкурентов, чтобы понять, какое решение принесёт максимальный результат.",
  },
  {
    icon: Search,
    num: "02",
    title: "Стратегия и план",
    description:
      "Разрабатываем индивидуальную стратегию на основе данных. Определяем каналы, инструменты и AI-модели, которые будут работать именно на ваши цели.",
  },
  {
    icon: Lightbulb,
    num: "03",
    title: "Разработка и AI-продакшн",
    description:
      "Запускаем разработку: создаём сайты, генерируем видео, настраиваем воронки продаж и контент-машины. Всё — с использованием передовых AI-инструментов.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Запуск и масштабирование",
    description:
      "Запускаем проект, отслеживаем метрики и оптимизируем результаты. Масштабируем то, что работает, с помощью AI-автоматизации.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            Как мы работаем
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tight">
            Процесс
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-secondary p-8 md:p-10 flex flex-col group hover:bg-background transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs text-muted-foreground tracking-wider">
                  {step.num}
                </span>
                <step.icon
                  size={20}
                  className="text-primary"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
