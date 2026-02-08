'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl animate-slide-down">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <nav className="space-y-2">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-tr-primary dark:text-gray-300 dark:hover:text-tr-accent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={onClose}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-4">
                TRS Laboratory
              </div>
              {siteConfig.labNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-lab-primary dark:text-gray-300 dark:hover:text-lab-accent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}