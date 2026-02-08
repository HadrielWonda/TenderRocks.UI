import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { ThemeProvider } from '@/lib/theme'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import LabHeader from '@/components/trs-lab/LabHeader'
import LabFooter from '@/components/trs-lab/LabFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TRS Molecular Laboratory - Advanced Diagnostics & Research',
  description: 'Advanced molecular and reproductive diagnostics facility providing high-quality laboratory services with a focus on capacity development and scientific excellence.',
  keywords: ['molecular diagnostics', 'reproductive health', 'genetic testing', 'laboratory services', 'scientific training'],
}

export default function LabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-lab-background to-white dark:from-gray-900 dark:to-gray-800">
            <LabHeader />
            <main className="flex-grow">
              {children}
            </main>
            <LabFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}