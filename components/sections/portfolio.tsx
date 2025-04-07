import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/ui/project-card"

const projects = [
  {
    title: "Lux Parking",
    url: "https://lux-parking.vercel.app",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Pearly White Dental",
    url: "https://pearlywhitedental.co.za",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "EB Medical Transport",
    url: "https://ebmedicaltransport.com",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "QuickTeq Media",
    url: "https://quickteq-media.vercel.app",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Cost Calculator",
    url: "https://cost-calculator-orpin.vercel.app",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "BFS Funeral Policy",
    url: "https://bfs-funeral-policy.vercel.app",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "BFS SEO",
    url: "https://bfs-seo.vercel.app",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "TG Govender",
    url: "https://tg-govender.vercel.app",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Umhlanga Funerals",
    url: "https://umhlanga-funerals.vercel.app",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Student AI",
    url: "https://studentai-beta.vercel.app",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Dopamine Tracker",
    url: "https://dopamine-tracker.vercel.app",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Grantiose CRM",
    url: "https://grantiose-crm.vercel.app",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Launches I'm Proud Of"
          subtitle="A selection of my recent projects and client work"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} url={project.url} imageSrc={project.imageSrc} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">Detailed case studies available on request.</p>
        </div>
      </div>
    </section>
  )
}

