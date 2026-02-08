import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
      variant === 'default' && 'bg-tr-primary text-white',
      variant === 'secondary' && 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300',
      variant === 'outline' && 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300',
      variant === 'success' && 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
      variant === 'warning' && 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
      className
    )}>
      {children}
    </span>
  )
}