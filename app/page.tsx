import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MarqueeStrip } from "@/components/marquee-strip"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Tools } from "@/components/tools"
import { Approach } from "@/components/approach"
import { Brands } from "@/components/brands"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MarqueeStrip />
      <Services />
      <Process />
      <Tools />
      <Approach />
      <Brands />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
