import Link from 'next/link'
import { TRS_SERVICES } from '@/lib/constants'
import { ArrowRight, Beaker, Leaf, Target, Users } from 'lucide-react'

const iconMap = {
  Leaf,
  Beaker,
  Target,
  Users,
}

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Delivering integrated advisory and scientific services through two complementary entities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card card-hover">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Beaker className="mr-3 h-8 w-8 text-tr-primary" />
              TRS Consulting & Advisory
            </h3>
            <ul className="space-y-4 mb-6">
              {TRS_SERVICES.map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap] || Beaker
                return (
                  <li key={index} className="flex items-start">
                    <Icon className="h-5 w-5 text-tr-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{service.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{service.description}</div>
                    </div>
                  </li>
                )
              })}
            </ul>
            <Link href="/services" className="text-tr-primary hover:text-tr-accent font-medium inline-flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="card card-hover">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Beaker className="mr-3 h-8 w-8 text-lab-primary" />
              TRS Molecular Laboratory
            </h3>
            <div className="space-y-4 mb-6">
              {[
                'Advanced Molecular Diagnostics',
                'Reproductive Health Services',
                'Genetic Testing & Screening',
                'Scientific Training & Capacity Building',
                'Research Collaboration'
              ].map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-2 w-2 bg-lab-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="font-medium">{service}</div>
                </div>
              ))}
            </div>
            <Link href="/trslaboratory" className="text-lab-primary hover:text-lab-accent font-medium inline-flex items-center">
              Visit Laboratory
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}