import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const engagementOptions = [
  {
    title: "One‑off Project",
    description: "Fixed scope, fixed price.",
    features: [
      "Clearly defined deliverables",
      "Milestone-based payments",
      "Post-launch support",
      "Handover documentation",
    ],
  },
  {
    title: "Monthly Product Partner",
    description: "Continuous design-dev-growth loop.",
    features: [
      "Ongoing development",
      "Regular updates and improvements",
      "Priority support",
      "Growth strategy implementation",
    ],
  },
  {
    title: "Revenue‑Share Collab",
    description: "We split upside on template or SaaS launches.",
    features: [
      "Shared risk and reward",
      "Long-term partnership",
      "Combined marketing efforts",
      "Joint product ownership",
    ],
  },
]

export default function Engagement() {
  return (
    <section id="engagement" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Engagement Options" subtitle="Flexible ways to work together based on your needs" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementOptions.map((option, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{option.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

