import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block">Uvaan Covie</span>
            <span className="block text-gray-600 dark:text-gray-400 text-2xl md:text-3xl mt-2">
              Full-Stack Engineer & SaaS Founder
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I ship web experiences, AI-powered products and revenue-ready templates in record time. Think of me as your
            on-call CTO, designer and marketer rolled into one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#portfolio">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact" className="flex items-center">
                Let's Connect <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>
    </section>
  )
}

