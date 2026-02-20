import { TRS_SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { Beaker, Leaf, Target, Users } from 'lucide-react'

const iconMap: Record<string, any> = {
  Leaf,
  Beaker,
  Target,
  Users,
}

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold mb-6 gradient-text">Our Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            TenderRock Solutions delivers integrated advisory and scientific services to strengthen systems, advance innovation, and support evidence-based decision-making.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-12 text-center">Consulting & Advisory Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TRS_SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Beaker
              return (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-tr-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 text-center">Capacity Development & Education</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-gray-600 dark:text-gray-400">Guidance for students and early-career professionals</p>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-semibold mb-2">Workshops</h3>
              <p className="text-gray-600 dark:text-gray-400">Training programs in molecular techniques and research</p>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-semibold mb-2">Public Engagement</h3>
              <p className="text-gray-600 dark:text-gray-400">Science education for broad audiences</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-tr-primary/10 to-tr-accent/10">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold mb-4">Explore Our Laboratory Services</h2>
          <p className="mb-6">Visit TRS Molecular Diagnostic Laboratory for advanced diagnostics.</p>
          <a href="/trslaboratory" className="btn-primary">Go to Lab Services</a>
        </div>
      </section>
    </div>
  )
}