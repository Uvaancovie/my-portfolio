import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    title: "Web App Starter",
    price: "R2,000",
    period: "/month",
    description: "Perfect for small businesses needing a professional web presence",
    features: [
      "Responsive Next.js website",
      "Custom domain setup",
      "SEO optimization",
      "Contact form integration",
      "Monthly maintenance",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    title: "Business Growth",
    price: "R5,000",
    period: "/month",
    description: "Comprehensive solution for established businesses looking to scale",
    features: [
      "Everything in Web App Starter",
      "E-commerce functionality",
      "Content management system",
      "Analytics dashboard",
      "Weekly updates",
      "Priority support",
    ],
    cta: "Scale Now",
    popular: true,
  },
  {
    title: "Enterprise SaaS",
    price: "R12,000",
    period: "/month",
    description: "Full-featured custom SaaS development for complex requirements",
    features: [
      "Everything in Business Growth",
      "Custom SaaS development",
      "User authentication system",
      "Database integration",
      "API development",
      "Dedicated support",
      "Weekly strategy calls",
    ],
    cta: "Contact for Details",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Pricing Plans"
          subtitle="Transparent pricing options tailored to your project needs"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`border ${
                plan.popular
                  ? "border-purple-400 dark:border-purple-600 shadow-lg"
                  : "border-gray-200 dark:border-gray-800 shadow-md"
              } hover:shadow-xl transition-shadow relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs font-bold py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className={`w-full ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : ""}`}>
                  <Link href="#contact">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-400">
            All plans include a free consultation to understand your specific needs. Custom quotes are available for
            projects with unique requirements.
          </p>
        </div>
      </div>
    </section>
  )
}

