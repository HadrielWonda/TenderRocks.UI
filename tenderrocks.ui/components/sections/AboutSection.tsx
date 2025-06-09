const AboutSection = () => (
  <section id="about" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <div className="w-24 h-1 bg-tender-light mx-auto"></div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            <div className="absolute -bottom-6 -right-6 bg-tender-light p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-white">Dr. Adetokunbo Michael Soyoye</h4>
              <p className="text-white">Founder & Lead Researcher</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-6">
            Transforming Environmental and Biogenetic Research in Nigeria
          </h3>
          
          <div className="space-y-6">
            <p>
              Tender Rocks Solutions was founded by Dr. Adetokunbo Michael Soyoye, a NEBOSH-CEM Certified Environmental Manager 
              and Ph.D. in Molecular Biology, to address Nigeria's pressing environmental concerns while advancing biogenetic 
              research capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-tender-light/10 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-tender-dark dark:text-tender-light mb-2">15+ Years Experience</h4>
                <p>In environmental management and cellular research</p>
              </div>
              <div className="p-5 bg-tender-light/10 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-tender-dark dark:text-tender-light mb-2">Cutting-edge Research</h4>
                <p>Combining molecular biology with computational approaches</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-tender-light/20 text-tender-dark dark:text-tender-light rounded-full text-sm">
                Environmental Management
              </span>
              <span className="px-4 py-2 bg-tender-light/20 text-tender-dark dark:text-tender-light rounded-full text-sm">
                Molecular Biology
              </span>
              <span className="px-4 py-2 bg-tender-light/20 text-tender-dark dark:text-tender-light rounded-full text-sm">
                Corporate Branding
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;