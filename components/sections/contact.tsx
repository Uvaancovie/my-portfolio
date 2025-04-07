import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Build"
          subtitle="If you have an idea that needs code, design or distribution—drop me a message and let's make it fly."
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <Card className="border border-gray-200 dark:border-gray-800 shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-gray-500" />
                      <Link href="mailto:hello@uvaancovie.com" className="hover:underline">
                        hello@uvaancovie.com
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-gray-500" />
                      <span>+27 XX XXX XXXX</span>
                    </div>
                    <div className="flex items-center">
                      <Instagram className="h-5 w-5 mr-3 text-gray-500" />
                      <Link
                        href="https://instagram.com/covie_codes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        @covie_codes
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <ExternalLink className="h-5 w-5 mr-3 text-gray-500" />
                      <Link
                        href="https://vercel.com/uvaancovie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Vercel Showcase
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Ready to Start?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Send me a message with your project details and I'll get back to you within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <Button asChild size="lg" className="w-full">
                      <Link href="mailto:hello@uvaancovie.com">Email Me</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full">
                      <Link href="https://instagram.com/covie_codes" target="_blank" rel="noopener noreferrer">
                        DM on Instagram
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

