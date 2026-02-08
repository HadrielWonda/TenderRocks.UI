'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const mainNav = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Team", href: "/team" },
  { title: "Partnerships", href: "/partnerships" },
  { title: "Contact", href: "/contact" },
  { title: "Blog", href: "/blog" },
  { title: "Education", href: "/education" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md dark:bg-gray-900/90 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/logos/trs-logo.jpg"
                  alt="TenderRock Solutions Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  TenderRock Solutions
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Science. Sustainability. Solutions.
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tr-primary dark:text-gray-300 dark:hover:text-tr-accent transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/trslaboratory"
              className="ml-4 px-4 py-2 text-sm font-medium text-white bg-lab-primary hover:bg-lab-accent rounded-lg transition-colors"
            >
              TRS Lab
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              type="button"
              className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 mt-2 pt-4 pb-4">
            <div className="space-y-1">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-tr-primary dark:text-gray-300 dark:hover:text-tr-accent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/trslaboratory"
                className="block px-3 py-2 text-base font-medium text-white bg-lab-primary hover:bg-lab-accent rounded-lg transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                TRS Laboratory
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}