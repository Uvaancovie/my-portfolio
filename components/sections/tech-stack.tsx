import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "Next.js 15",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn/ui",
  "C#/.NET 8",
  "Azure",
  "Supabase",
  "MongoDB",
  "SQL Server",
  "Vercel",
]

export default function TechStack() {
  return (
    <section id="stack" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Signature Stack"
          subtitle="The technologies I use to build powerful, scalable applications"
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4 bg-white dark:bg-gray-800 shadow-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

