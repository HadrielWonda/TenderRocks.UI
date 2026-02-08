import Image from 'next/image'
import Link from 'next/link'
import { 
  Dna, 
  Microscope, 
  ShieldCheck, 
  Users, 
  Target,
  Activity,
  AlertTriangle
} from 'lucide-react'

export default function TRSLaboratoryPage() {
  const diagnosticServices = [
    'Paternity Testing',
    'Sperm Nucleotide Assay',
    'Embryonic DNA Screening',
    'Sickle Cell Variant Testing',
    'Complete Hematology Panels',
    'PCR-based Pathogen Detection',
    'Molecular Microbial Assays'
  ]

  const molecularTools = [
    { name: 'PCR Technology', description: 'Polymerase Chain Reaction for genetic material detection' },
    { name: 'Capillary Gel Electrophoresis', description: 'High-resolution DNA/RNA analysis' },
    { name: 'DNA/RNA Analysis', description: 'Comprehensive genetic information unraveling' },
    { name: 'Proteomics', description: 'Cellular function and biomarker examination' },
    { name: 'Metagenomics', description: 'Microbial community analysis' },
    { name: 'Bioinformatics', description: 'Computational biological data interpretation' }
  ]

  const publicHealthImpact = [
    'Early disease detection and timely intervention',
    'High specificity and sensitivity in results',
    'Reduced misdiagnosis and delayed treatment',
    'Evidence-based healthcare practices',
    'Enhanced disease surveillance',
    'Reduced antimicrobial resistance'
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            TRS Molecular Laboratory
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced molecular and reproductive diagnostics facility providing high-quality laboratory services with a focus on capacity development and scientific excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#services" className="btn-primary bg-cyan-600 hover:bg-cyan-700">
              Our Services
            </Link>
            <Link href="#contact" className="btn-secondary">
              Contact Laboratory
            </Link>
          </div>
        </div>
      </section>

      {/* The Diagnostic Gap */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <AlertTriangle className="mr-3 h-8 w-8 text-red-500" />
            The Diagnostic Gap We Address
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: 'o', 
                title: 'Misdiagnosis', 
                description: 'Incorrect identification leading to ineffective treatment' 
              },
              { 
                icon: 'o', 
                title: 'Delayed Diagnosis', 
                description: 'Prolonged waiting times worsening patient outcomes' 
              },
              { 
                icon: 'o', 
                title: 'Empirical Treatment', 
                description: 'Treatment without confirmatory tests' 
              }
            ].map((issue, index) => (
              <div key={index} className="card border-l-4 border-red-500">
                <div className="text-2xl mb-2">{issue.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Molecular Tools */}
      <section id="tools" className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-center mb-12">Molecular Tools & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {molecularTools.map((tool, index) => (
              <div key={index} className="card group hover:border-cyan-500 transition-colors">
                <Dna className="h-10 w-10 text-cyan-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Services */}
      <section id="services" className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-center mb-12">Our Diagnostic Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Microscope className="mr-3 h-8 w-8 text-cyan-600" />
                Clinical Applications
              </h3>
              <ul className="space-y-3">
                {diagnosticServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-cyan-500 rounded-full mt-2 mr-3"></div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="mr-3 h-8 w-8 text-cyan-600" />
                Public Health Impact
              </h3>
              <ul className="space-y-3">
                {publicHealthImpact.map((impact, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRS Advantage */}
      <section className="section-padding bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-center mb-12">The TRS Laboratory Advantage</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                title: 'Affordable', 
                description: 'Cost-conscious pricing for accessibility',
                icon: '💰'
              },
              { 
                title: 'Accessible', 
                description: 'Clinician-friendly referral pathways',
                icon: '📞'
              },
              { 
                title: 'Quality-Assured', 
                description: 'Global laboratory partnerships',
                icon: '🛡️'
              },
              { 
                title: 'Training Focus', 
                description: 'Capacity development programs',
                icon: '🎓'
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h3 className="font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold mb-8">Collaboration, Not Competition</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Working with healthcare facilities to make quality diagnostics accessible — so no patient is treated in uncertainty.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="card">
              <h3 className="font-semibold mb-4">Partner Laboratories</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-400">Inqaba Biotechnical Industries (Nigeria)</li>
                <li className="text-gray-600 dark:text-gray-400">Jena Bioscience (Germany)</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-4">Quality & Standards</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-400">Validated protocols & SOPs</li>
                <li className="text-gray-600 dark:text-gray-400">HEFMA registration underway</li>
                <li className="text-gray-600 dark:text-gray-400">Continuous quality improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}