import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TenderRock Solutions - Science. Sustainability. Solutions.',
  description: 'Innovation-driven science and sustainability company',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tenderrocksolutions.com',
    title: 'TenderRock Solutions',
    description: 'Science. Sustainability. Solutions.',
    siteName: 'TenderRock Solutions',
    images: [
      {
        url: '/logos/trs-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'TenderRock Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TenderRock Solutions',
    description: 'Science. Sustainability. Solutions.',
    images: ['/logos/trs-logo.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}