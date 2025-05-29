import Link from 'next/link';

const HeroSection = () => (
  <section id="home" className="py-20 bg-gradient-to-b from-tender-light to-white">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Advancing Environmental & Biogenetic Research
        </h1>
        <p className="text-lg mb-10">
          Pioneering sustainable solutions for Nigeria's environmental challenges 
          and cutting-edge cell biogenetics research
        </p>
        <Link href="#contact">
          <a className="inline-block bg-tender-dark text-white px-8 py-3 rounded-md hover:bg-tender-light transition">
            Contact Us
          </a>
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;