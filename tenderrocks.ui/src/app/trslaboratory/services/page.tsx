import { LAB_SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'

export default function LabServicesPage() {
  return (
    <div className="space-y-12">
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold mb-6 gradient-text-lab">TRS Molecular Diagnostic Laboratory Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Advanced molecular and reproductive diagnostics with a focus on precision and capacity development.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {LAB_SERVICES.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-lab-primary/10">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Test?</h2>
          <p className="mb-6">Contact us to discuss your specific diagnostic requirements.</p>
          <a href="/trslaboratory/contact" className="btn-primary bg-lab-primary hover:bg-lab-accent">Contact Laboratory</a>
        </div>
      </section>
    </div>
  )
}