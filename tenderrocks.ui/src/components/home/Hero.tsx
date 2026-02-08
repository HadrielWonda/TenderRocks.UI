import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Beaker, Shield, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70 dark:from-gray-900/90 dark:via-gray-900/85 dark:to-gray-900/80"></div>
      </div>

      <div className="container-narrow text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            TRS: Science. Sustainability. Solutions.
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-6 rounded-2xl">
            An innovation-driven science and sustainability company operating at the intersection of environmental management, applied life sciences, and educational administration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/about" className="btn-primary">
              Discover Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: Beaker,
              title: 'Scientific Rigor',
              description: 'Evidence-based approaches to complex challenges'
            },
            {
              icon: Shield,
              title: 'Sustainability First',
              description: 'Guiding every project and decision'
            },
            {
              icon: Users,
              title: 'Capacity Building',
              description: 'Developing the next generation of scientists'
            }
          ].map((item, index) => (
            <div key={index} className="card card-hover backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
              <item.icon className="h-12 w-12 text-tr-primary dark:text-tr-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}