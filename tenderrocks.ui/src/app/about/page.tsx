import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { Target, Users, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-6 gradient-text">About TenderRock Solutions</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Established in 2021, TenderRock Solutions (TRS) is an innovation-driven science and sustainability company operating at the intersection of environmental management, applied life sciences, and educational administration.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card hover={false} className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
              <CardHeader>
                <Globe className="h-10 w-10 text-tr-primary mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  To be a leading force in advancing science, sustainability, and capacity development, pioneering innovative solutions that drive measurable transformation in Africa and beyond.
                </p>
              </CardContent>
            </Card>
            <Card hover={false} className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
              <CardHeader>
                <Target className="h-10 w-10 text-tr-primary mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  To provide innovative, evidence-based solutions in environmental management, life sciences, and molecular diagnostics, while nurturing emerging scientists and empowering stakeholders with the knowledge, tools, and strategies needed to foster a sustainable, resilient, and equitable future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8">The TRS Journey</h2>
          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-tr-primary">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-tr-primary rounded-full"></div>
              <h3 className="text-xl font-semibold mb-2">2021: Founding</h3>
              <p className="text-gray-600 dark:text-gray-400">
                TRS began as a consulting and implementation support firm, focusing on research, strategy, and project advisory services.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-tr-primary">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-tr-primary rounded-full"></div>
              <h3 className="text-xl font-semibold mb-2">COVID-19 Era</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We expanded into biomedical support, collaborating with diagnostic laboratories and enhancing our operational capacity.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-tr-primary">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-tr-primary rounded-full"></div>
              <h3 className="text-xl font-semibold mb-2">2025: Laboratory Launch</h3>
              <p className="text-gray-600 dark:text-gray-400">
                TRS launched TRS Molecular Laboratory as a separate legal entity dedicated to advanced molecular and reproductive diagnostics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Values (SPICE)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { letter: 'S', word: 'Sustainability', desc: 'Guides every project and decision' },
              { letter: 'P', word: 'Partnership', desc: 'We value collaboration and collective action' },
              { letter: 'I', word: 'Integrity', desc: 'Operate with transparency and strong ethics' },
              { letter: 'C', word: 'Creativity', desc: 'Innovation drives our approach' },
              { letter: 'E', word: 'Excellence', desc: 'Pursue excellence in service delivery' },
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <div className="text-2xl font-bold text-tr-primary mb-2">{value.letter}</div>
                <h3 className="font-semibold mb-1">{value.word}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}