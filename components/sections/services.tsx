import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Rocket, ShoppingCart, BarChart, Layers } from "lucide-react"

const services = [
  {
    title: "Custom Web Builds",
    description:
      "Lightning‑fast marketing sites, landing pages and portals powered by Next.js 15, TypeScript and Tailwind CSS.",
    icon: Code,
  },
  {
    title: "SaaS & AI Products",
    description: "MVPs, internal tools and micro‑SaaS apps using .NET 8, Supabase, MongoDB and Azure.",
    icon: Rocket,
  },
  {
    title: "Template Marketplace",
    description: "Ready‑to‑sell Next.js & C# boilerplates, Framer components and UI kits that keep margins near 100%.",
    icon: Layers,
  },
  {
    title: "E‑commerce & Payments",
    description: "Stripe, LemonSqueezy, PayFast—whatever it takes to convert clicks into cash.",
    icon: ShoppingCart,
  },
  {
    title: "Growth Engineering",
    description: "SEO, analytics, CRO and paid ads (Google, Meta, TikTok) to scale your MRR once we launch.",
    icon: BarChart,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What I Do" subtitle="Comprehensive services to bring your digital vision to life" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

