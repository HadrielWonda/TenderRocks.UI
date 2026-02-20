import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import ComingSoon from '@/components/common/ComingSoon'

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <ServicesOverview />
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Platforms</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Expanding knowledge and sharing research through digital platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card border-2 border-dashed border-gray-300 dark:border-gray-700 text-center p-8">
              <ComingSoon 
                title="Research Blog" 
                description="Stay updated with our latest research publications, scientific insights, and industry developments."
              />
            </div>
            <div className="card border-2 border-dashed border-gray-300 dark:border-gray-700 text-center p-8">
              <ComingSoon 
                title="Educational Platform" 
                description="Access training programs, workshops, educational resources, and capacity development materials."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}