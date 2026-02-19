import { ArrowUpRight } from "lucide-react"

const brandTypes = [
  {
    title: "E-commerce бренды",
    desc: "Интернет-магазины, которым нужен рост конверсии и автоматизация маркетинга.",
  },
  {
    title: "Стартапы",
    desc: "Молодые компании, которым нужно быстро выйти на рынок с качественным продуктом.",
  },
  {
    title: "Личные бренды",
    desc: "Эксперты и блогеры, которым нужна система контента и продаж.",
  },
  {
    title: "B2B компании",
    desc: "Бизнесы, которые хотят автоматизировать лидогенерацию и коммуникацию с клиентами.",
  },
]

export function Brands() {
  return (
    <section id="brands" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16 lg:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            Для кого
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4">
            С кем мы работаем
          </h2>
          <p className="text-sm md:text-base text-background/60 max-w-2xl leading-relaxed">
            ISABEL помогает брендам разного масштаба — от стартапов до крупных
            e-commerce проектов. Главное — амбиции и готовность к росту.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {brandTypes.map((item, i) => (
            <div
              key={i}
              className="border border-background/15 p-6 md:p-8 hover:border-primary hover:bg-primary/10 transition-all duration-500 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-background/40 tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-background/20 group-hover:text-primary transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-background/50 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
