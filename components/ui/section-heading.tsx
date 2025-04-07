interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  return (
    <div className={`max-w-2xl mb-12 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>}
    </div>
  )
}

