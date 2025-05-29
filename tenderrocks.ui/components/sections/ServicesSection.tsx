import { ServiceCard } from '@/ui';

const ServicesSection = () => {
  const services = [
    {
      title: "Environmental Management Systems",
      description: "Comprehensive solutions for sustainable environmental practices and regulatory compliance"
    },
    {
      title: "Molecular & Computational Biology",
      description: "Advanced research in cell biogenetics using cutting-edge computational approaches"
    },
    {
      title: "Corporate Branding",
      description: "Strategic branding solutions for research institutions and environmental organizations"
    }
  ];

  return (
    <section id="services" className="py-20 bg-tender-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;