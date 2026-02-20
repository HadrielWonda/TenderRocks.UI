import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import {  Building, Stethoscope, Microscope } from 'lucide-react'

const partners = [
  {
    name: 'Aris',
    description: 'A strategic partner in advancing healthcare and diagnostic solutions across Nigeria.',
    icon: Building,
    type: 'Corporate Partner',
  },
  {
    name: 'Green Leaf Clinic',
    description: 'Collaboration in fertility medicine and reproductive health education, enhancing clinical outcomes.',
    icon: Stethoscope,
    type: 'Clinical Partner',
  },
  {
    name: 'Afren AI',
    description: 'Joint research initiatives integrating artificial intelligence with genomic data analysis.',
    icon: Building,
    type: 'Technology Partner',
  },
  {
    name: 'TRS Molecular Diagnostic Laboratory',
    description: 'Our dedicated molecular diagnostics entity, working in synergy to provide advanced testing and capacity building.',
    icon: Microscope,
    type: 'Sister Entity',
  },
]

export default function PartnershipsPage() {
  return (
    <div className="space-y-12">
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold mb-6 gradient-text">Our Partnerships</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            TenderRock Solutions collaborates with governments, private institutions, health facilities, and academic organisations to deliver impactful solutions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Stethoscope className="mr-3 h-8 w-8 text-tr-primary" />
            Key Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => {
              const Icon = partner.icon
              return (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <Icon className="h-10 w-10 text-tr-primary mr-4" />
                      <div>
                        <CardTitle>{partner.name}</CardTitle>
                        <p className="text-sm text-tr-primary font-medium">{partner.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{partner.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            We are always open to new collaborations. Partner with us to access interdisciplinary expertise, advanced diagnostics, and a growing pipeline of African scientific talent.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us for Partnership
          </Link>
        </div>
      </section>
    </div>
  )
}