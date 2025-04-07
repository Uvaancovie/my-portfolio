import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  url: string
  imageSrc: string
}

export function ProjectCard({ title, url, imageSrc }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">Visit {title}</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

