import Image from 'next/image'
import Link from 'next/link'
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Shield,
  Microscope,
  Dna,
  Database,
  Cpu
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'

export default function LabAboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-lab-primary/20 to-lab-accent/20 dark:from-lab-primary/10 dark:to-lab-accent/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/lab-background.jpg" // Optional background image
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container-narrow text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-lab">
            About TRS Molecular Diagnostic Laboratory
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Advancing molecular diagnostics to transform healthcare in Africa and beyond.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Microscope className="mr-3 h-8 w-8 text-lab-primary" />
                Who We Are
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                TRS Molecular Diagnostic Laboratory, established in 2025 as a spin-off from TenderRock Solutions, 
                is an advanced molecular and reproductive diagnostics facility. We provide high-quality molecular, 
                genetic, and reproductive laboratory services in accordance with recognized clinical and research standards.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our mission is to bridge the diagnostic gap in underserved communities, empower clinicians with 
                evidence-based tools, and nurture the next generation of African scientists through hands-on training 
                and capacity development.
              </p>
            </div>
            <div className="bg-lab-primary/5 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-lab-primary">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "To be a leading laboratory in molecular diagnostics and capacity development across Africa, 
                supporting clinical decision-making, research, and innovation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge: Ikorodu Context */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 text-center">The Challenge We Address</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-lab-primary mb-4" />
                <CardTitle>Rapid Population Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Ikorodu's peri-urban setting experiences rapidly expanding population, placing significant 
                  demands on healthcare infrastructure.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-lab-primary mb-4" />
                <CardTitle>High Patient Volumes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Only 1 General Hospital and over 30 private health facilities consistently manage high patient 
                  volumes, stretching resources thin.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">The Diagnostic Gap</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: 'Misdiagnosis',
                description: 'Incorrect identification of illnesses leads to ineffective treatment paths.',
                color: 'text-red-500'
              },
              {
                icon: AlertTriangle,
                title: 'Delayed Diagnosis',
                description: 'Prolonged waiting times for accurate diagnosis worsen patient outcomes.',
                color: 'text-orange-500'
              },
              {
                icon: AlertTriangle,
                title: 'Empirical Treatment',
                description: 'Treatment initiated without confirmatory tests often leads to suboptimal results.',
                color: 'text-yellow-500'
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-red-500">
                <CardHeader>
                  <item.icon className={`h-8 w-8 ${item.color} mb-2`} />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h4 className="font-semibold mb-2">Public Health Consequences:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Treatment failure and prolonged illness</li>
              <li>Increased antimicrobial resistance due to inappropriate antibiotic use</li>
              <li>Higher morbidity rates and escalating healthcare costs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Molecular Diagnostics */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Molecular Diagnostics Changes Everything</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: 'Early Detection', desc: 'Identifies diseases at earliest stages for timely intervention' },
              { icon: Shield, title: 'High Specificity & Sensitivity', desc: 'Precise results, minimizing false positives/negatives' },
              { icon: Activity, title: 'Confirmatory Testing', desc: 'Validates ambiguous cases, providing clarity for treatment' },
              { icon: TrendingUp, title: 'Better Treatment Decisions', desc: 'Guides clinicians to most effective therapies' }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-lab-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-lab-primary/10 rounded-lg text-center">
            <h4 className="text-xl font-semibold mb-2">Public Health Value</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Reduces unnecessary hospital visits and patient burden. Enhances disease surveillance and case tracking capabilities. 
              Supports evidence-based healthcare practices, improving overall population health.
            </p>
          </div>
        </div>
      </section>

      {/* Molecular Tools */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 text-center">Molecular Tools & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Dna, title: 'DNA Analysis', desc: 'Unravelling genetic information to identify predispositions and pathogens.' },
              { icon: Dna, title: 'RNA Analysis', desc: 'Studying gene expression for insights into disease progression.' },
              { icon: Microscope, title: 'Proteomics', desc: 'Examining proteins to understand cellular functions and biomarkers.' },
              { icon: Database, title: 'Metagenomics', desc: 'Analyzing microbial communities to understand health and disease.' },
              { icon: Cpu, title: 'Bioinformatics', desc: 'Computational tools to interpret complex biological data.' }
            ].map((tool, index) => (
              <Card key={index} className="hover:shadow-md">
                <CardHeader>
                  <tool.icon className="h-8 w-8 text-lab-primary mb-3" />
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{tool.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Core Platforms</h3>
            <ul className="grid md:grid-cols-3 gap-4">
              <li className="flex items-center"><div className="h-2 w-2 bg-lab-primary rounded-full mr-2"></div> PCR (Polymerase Chain Reaction)</li>
              <li className="flex items-center"><div className="h-2 w-2 bg-lab-primary rounded-full mr-2"></div> Capillary Gel Electrophoresis</li>
              <li className="flex items-center"><div className="h-2 w-2 bg-lab-primary rounded-full mr-2"></div> Molecular Microbial Assays</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold mb-6">Clinically Relevant Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Our diagnostic services support healthcare, research, and scientific capacity development.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              'Paternity Testing',
              'Sperm Nucleotide Assay',
              'Embryonic DNA Screening',
              'Sickle Cell Variant (SCV) Testing',
              'Haematology Support',
              'Molecular Microbial Assays',
            ].map((service, idx) => (
              <div key={idx} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-lab-primary mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{service}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">Services can be adapted to facility needs.</p>
          <Link href="/trslaboratory/services" className="btn-primary bg-lab-primary hover:bg-lab-accent mt-8 inline-block">
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Quality, Access & Trust */}
      <section className="section-padding bg-lab-primary/10">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 text-center">The TRS Advantage</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-lab-primary mx-auto mb-4" />
                <CardTitle>Affordable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Cost-conscious pricing to ensure accessibility for all.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-lab-primary mx-auto mb-4" />
                <CardTitle>Accessible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Clinician-friendly referral pathways designed for ease of use.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-lab-primary mx-auto mb-4" />
                <CardTitle>Quality-Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Leveraging global laboratory partnerships for reliable results.</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-center">Partner Laboratories</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="text-center">
              <p className="font-semibold">Inqaba Biotechnical Industries</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Nigeria – A leading African genomics company</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Jena Bioscience</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Germany – Renowned for advanced sequencing technologies</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl italic text-gray-700 dark:text-gray-300">
              "Making quality health diagnostics accessible — so no patient is treated in uncertainty."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold mb-4">Collaboration, Not Competition</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            We work with healthcare facilities, researchers, and institutions to strengthen diagnostic capacity 
            and improve patient outcomes.
          </p>
          <Link href="/trslaboratory/contact" className="btn-primary bg-lab-primary hover:bg-lab-accent">
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  )
}