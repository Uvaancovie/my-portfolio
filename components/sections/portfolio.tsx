import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/ui/project-card"

const projects = [
  {
    title: "Lux Parking",
    url: "https://luxpark.co.za/",
    imageSrc: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//Screenshot%202025-05-16%20142431.png",
  },
  {
    title: "Pearly White Dental",
    url: "https://pearlywhitedental.co.za",
    imageSrc: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//Screenshot%202025-05-16%20142550.png",
  },
  {
    title: "EB Medical Transport",
    url: "https://ebmedicaltransport.com",
    imageSrc: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//Screenshot%202025-05-16%20142649.png",
  },
  
  {
    title: "Cost Calculator",
    url: "https://cost-calculator-orpin.vercel.app",
    imageSrc: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//Screenshot%202025-05-16%20142800.png",
  },
  {
    title: "BFS Funeral Policy",
    url: "https://ballitofuneraldirectors.co.za/",
    imageSrc: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//Screenshot%202025-05-16%20142910.png",
  },
 
  
  {
    title: "Umhlanga Funerals",
    url: "https://www.umhlangafunerals.co.za/",
    imageSrc: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//Screenshot%202025-05-16%20143022.png",
  },
  {
    title: "Vehicle Roadworthy Centre ",
    url: "https://www.vehicleroadworthy.co.za/",
    imageSrc: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//Screenshot%202025-05-16%20143113.png",
  },
  {
    title: "The Strategy Studio",
    url: "https://the-strategy-studio.vercel.app/",
    imageSrc: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//Screenshot%202025-05-16%20143220.png",
  },
  {
    title: "Flare Frenzi",
    url: "https://www.flarefrenzi.co.za/",
    imageSrc: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//Screenshot%202025-05-16%20143650.png",
  },
   {
    title: "Hollow Point Security",
    url: "https://www.hollowpointsecurity.co.za/",
    imageSrc: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/projects//Screenshot%202025-05-16%20143758.png",
  }
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

