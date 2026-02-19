export function MarqueeStrip() {
  const items = [
    "AI-Веб-сайты",
    "Автоматизация продаж",
    "AI-Видеоролики",
    "Контент-стратегия",
    "Брендинг",
    "UI/UX Дизайн",
    "AI-Реклама",
    "Digital-маркетинг",
  ]

  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className="border-y border-border overflow-hidden py-5 bg-secondary">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-8"
          >
            {item}
            <span className="inline-block w-1.5 h-1.5 bg-primary" />
          </span>
        ))}
      </div>
    </div>
  )
}
