export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-blue-100 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="text-center md:order-1 md:mt-0">
            <p className="text-sm leading-5 text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Tenderrocks Research & Analysis. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-base leading-6 text-gray-600 dark:text-gray-400">
            Advancing cell and environmental biology research
          </p>
        </div>
      </div>
    </footer>
  )
}