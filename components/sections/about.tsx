import { SectionHeading } from "@/components/ui/section-heading"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Who I Am"
          subtitle="A brief introduction to my background and expertise"
          align="center"
        />

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6">
            I'm Uvaan Covie (aka <span className="font-medium">@covie_codes</span>)—a 21‑year‑old Durban‑based
            full‑stack engineer, SaaS founder and growth‑obsessed maker.
          </p>

          <p className="text-lg mb-6">
            I run a lean, personal studio that ships web experiences, AI‑powered products and revenue‑ready templates in
            record time.
          </p>

          <p className="text-lg font-medium">Think of me as your on‑call CTO, designer and marketer rolled into one.</p>
        </div>
      </div>
    </section>
  )
}

