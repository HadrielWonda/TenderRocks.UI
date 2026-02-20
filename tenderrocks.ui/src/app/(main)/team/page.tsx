import { MANAGEMENT_TEAM, EXPERT_PANEL, ADDITIONAL_TEAM } from '@/lib/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import Image from 'next/image'
import { Award, Briefcase, GraduationCap } from 'lucide-react'

export default function TeamPage() {
  return (
    <div className="space-y-12">
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold mb-6 gradient-text">Our Team</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Powered by professionals with expertise in environmental and life sciences, educational administration, policy analysis, and capacity building.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3 h-8 w-8 text-tr-primary" />
            Management Team
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {MANAGEMENT_TEAM.map((member, index) => (
              <Card key={index} className="card-hover flex flex-col items-center text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-tr-primary">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <div className="text-sm text-tr-primary font-medium">{member.title}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Award className="mr-3 h-8 w-8 text-tr-primary" />
            Panel of Experts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERT_PANEL.map((expert, index) => (
              <Card key={index} className="card-hover flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-tr-primary">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{expert.name}</CardTitle>
                  <div className="text-sm text-tr-primary font-medium">{expert.expertise}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{expert.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {ADDITIONAL_TEAM.length > 0 && (
        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 h-8 w-8 text-tr-primary" />
              Business Development
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ADDITIONAL_TEAM.map((member, index) => (
                <Card key={index} className="card-hover flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-tr-primary">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <div className="text-sm text-tr-primary font-medium">{member.title}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center">
            <GraduationCap className="h-12 w-12 text-tr-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Join Our Network</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              We're always looking for talented scientists, researchers, and sustainability experts to collaborate with.
            </p>
            <a href="mailto:tenderrocksolutions@gmail.com" className="btn-primary">
              Express Interest
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}