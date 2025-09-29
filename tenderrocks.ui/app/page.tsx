import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Microscope, Leaf, TestTube, Users } from 'lucide-react'

export default function Home() {
  const features = [
    {
      name: 'Cell Biology Research',
      description: 'Advanced cellular analysis and research methodologies to understand biological processes at the molecular level.',
      icon: Microscope,
    },
    {
      name: 'Environmental Analysis',
      description: 'Comprehensive environmental impact studies and ecosystem monitoring for sustainable development.',
      icon: Leaf,
    },
    {
      name: 'Laboratory Testing',
      description: 'State-of-the-art laboratory facilities for precise and reliable biological testing and analysis.',
      icon: TestTube,
    },
    {
      name: 'Expert Team',
      description: 'Led by Dr. Adetokunbo Soyeye with a team of dedicated researchers and scientists.',
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                  Advancing Cell & Environmental Biology Research
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Tenderrocks is at the forefront of innovative research in cell biology and environmental science, 
                  providing cutting-edge analysis and solutions for a sustainable future.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/about"
                    className="rounded-md bg-primary-dark dark:bg-primary-light px-3.5 py-2.5 text-sm font-semibold text-white dark:text-slate-900 shadow-sm hover:bg-primary-dark/90 dark:hover:bg-primary-light/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
                  >
                    Learn More
                  </a>
                  <a
                    href="/team"
                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-primary-dark dark:hover:text-primary-light"
                  >
                    Meet Our Team <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-dark dark:text-primary-light">Our Expertise</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Comprehensive Research Solutions
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                We combine cutting-edge technology with expert knowledge to deliver reliable research and analysis 
                in cell biology and environmental science.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light dark:bg-primary-dark">
                        <feature.icon className="h-6 w-6 text-primary-dark dark:text-primary-light" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-dark dark:bg-primary-light">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white dark:text-slate-900 sm:text-4xl">
                Ready to collaborate?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100 dark:text-slate-700">
                Contact us to discuss how our research expertise can support your projects and initiatives.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}