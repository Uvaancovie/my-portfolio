import Link from "next/link"
import { Mail, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Uvaan Covie</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Full-stack engineer, SaaS founder and growth-obsessed maker based in Durban.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-sm hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              <Link href="mailto:hello@uvaancovie.com" className="flex items-center text-sm hover:underline">
                <Mail className="h-4 w-4 mr-2" />
                hello@uvaancovie.com
              </Link>
              <Link
                href="https://instagram.com/covie_codes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:underline"
              >
                <Instagram className="h-4 w-4 mr-2" />
                @covie_codes
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Uvaan Covie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

