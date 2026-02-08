import { Clock } from 'lucide-react'

interface ComingSoonProps {
  title: string
  description: string
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
          <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">{description}</p>
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
          <span className="h-2 w-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
          Coming Soon
        </div>
      </div>
    </div>
  )
}