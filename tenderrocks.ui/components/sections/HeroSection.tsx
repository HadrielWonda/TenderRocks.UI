import Link from 'next/link';

const HeroSection = () => (
  <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-tender-light to-white dark:from-tender-dark dark:to-gray-900">
    <div className="absolute inset-0 opacity-10 dark:opacity-5">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
    </div>
    
    <div className="container relative mx-auto px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Advancing <span className="text-tender-dark dark:text-tender-light">Environmental</span> & <span className="text-tender-dark dark:text-tender-light">Biogenetic</span> Research
        </h1>
        <p className="text-xl text-tender-black dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Pioneering sustainable solutions for Nigeria's environmental challenges and cutting-edge cell biogenetics research
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact">
            <a className="inline-block bg-tender-dark hover:bg-tender-light text-white px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Contact Us
            </a>
          </Link>
          <Link href="#services">
            <a className="inline-block border-2 border-tender-dark text-tender-dark dark:border-tender-light dark:text-tender-light hover:bg-tender-dark hover:text-white dark:hover:bg-tender-light dark:hover:text-tender-dark px-8 py-4 rounded-lg transition-all">
              Our Services
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;