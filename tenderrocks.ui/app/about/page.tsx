import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Target, Eye, Heart } from 'lucide-react'

export default function About() {
  const values = [
    {
      name: 'Excellence',
      description: 'We maintain the highest standards in all our research and analytical work.',
      icon: Target,
    },
    {
      name: 'Innovation',
      description: 'We continuously explore new methodologies and technologies to advance scientific understanding.',
      icon: Eye,
    },
    {
      name: 'Integrity',
      description: 'We conduct our research with honesty, transparency, and ethical responsibility.',
      icon: Heart,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="relative isolate overflow-hidden bg-white dark:bg-slate-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                  About Tenderrocks
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Pioneering research at the intersection of cell biology and environmental science.
                </p>
              </div>

              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                {values.map((value) => (
                  <div key={value.name} className="flex flex-col items-start">
                    <div className="rounded-md bg-primary-light dark:bg-primary-dark/20 p-3 ring-1 ring-primary-dark/10 dark:ring-primary-light/10">
                      <value.icon className="h-6 w-6 text-primary-dark dark:text-primary-light" />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white">
                        {value.name}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                      Our Mission
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                      At Tenderrocks, we are dedicated to advancing scientific knowledge in cell biology 
                      and environmental science through rigorous research, innovative methodologies, and 
                      collaborative partnerships. Our work focuses on understanding cellular mechanisms 
                      and their interactions with environmental factors to develop sustainable solutions 
                      for global challenges.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                      Our Vision
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                      We envision a world where scientific research in cell and environmental biology 
                      leads to sustainable innovations that improve human health and protect our planet. 
                      Through our dedicated work, we aim to contribute to a future where scientific 
                      understanding drives positive environmental stewardship and medical advancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}