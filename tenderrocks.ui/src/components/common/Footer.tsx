import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              TenderRock Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Innovation-driven science and sustainability company.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-tr-primary dark:hover:text-tr-accent transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-tr-primary dark:hover:text-tr-accent transition-colors text-sm">Services</Link></li>
              <li><Link href="/team" className="text-gray-600 dark:text-gray-400 hover:text-tr-primary dark:hover:text-tr-accent transition-colors text-sm">Team</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-tr-primary dark:hover:text-tr-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-tr-primary" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">tenderrocksolutions@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-tr-primary" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">+234 813 368 6115</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-tr-primary" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/tenderrock-solutions/" className="text-gray-600 dark:text-gray-400 hover:text-tr-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/tenderrocks_solutions/" className="text-gray-600 dark:text-gray-400 hover:text-tr-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/TRS_Solutions" className="text-gray-600 dark:text-gray-400 hover:text-tr-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/tenderrocksolutions" className="text-gray-600 dark:text-gray-400 hover:text-tr-primary">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} TenderRock Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}