import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import TechStack from "@/components/sections/tech-stack"
import Engagement from "@/components/sections/engagement"
import Portfolio from "@/components/sections/portfolio"
import Pricing from "@/components/sections/pricing"
import Contact from "@/components/sections/contact"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <ScrollArea className="h-full">
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Engagement />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
    </ScrollArea>
  )
}

