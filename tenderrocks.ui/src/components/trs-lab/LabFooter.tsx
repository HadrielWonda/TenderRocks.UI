import Link from 'next/link'
import { SITE } from '@/lib/constants'
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react'

export default function LabFooter() {
  return (
    <footer className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              TRS Molecular Diagnostic Laboratory
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              An advanced molecular and reproductive diagnostics facility providing high-quality laboratory services with a focus on capacity development and scientific excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Laboratory Services</h4>
            <ul className="space-y-2">
              <li><Link href="/trslaboratory/services" className="text-gray-600 dark:text-gray-400 hover:text-lab-primary dark:hover:text-lab-accent transition-colors text-sm">Precision Molecular Diagnostics</Link></li>
              <li><Link href="/trslaboratory/services" className="text-gray-600 dark:text-gray-400 hover:text-lab-primary dark:hover:text-lab-accent transition-colors text-sm">Bioinformatics Services</Link></li>
              <li><Link href="/trslaboratory/services" className="text-gray-600 dark:text-gray-400 hover:text-lab-primary dark:hover:text-lab-accent transition-colors text-sm">Hematology & Prenatal Testing</Link></li>
              <li><Link href="/trslaboratory/services" className="text-gray-600 dark:text-gray-400 hover:text-lab-primary dark:hover:text-lab-accent transition-colors text-sm">Training Programs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Laboratory</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-lab-primary dark:text-lab-accent mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">{SITE.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-lab-primary dark:text-lab-accent mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">{SITE.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-lab-primary dark:text-lab-accent mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">{SITE.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow TRS</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/tenderrock-solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-lab-primary dark:hover:text-lab-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/tenderrocks_solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-lab-primary dark:hover:text-lab-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/TRS_Solutions" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-lab-primary dark:hover:text-lab-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-tr-primary dark:hover:text-tr-accent transition-colors inline-flex items-center">
                ← Visit TenderRock Solutions
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} TRS Molecular Diagnostic Laboratory. Part of TenderRock Solutions.
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              HEFMA registration underway • Quality assured diagnostics
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}