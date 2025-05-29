const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">About Us</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        <div className="flex-1">
          {/* Placeholder for Dr. Soyoye's photo */}
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">
            Dr. Adetokunbo Michael Soyoye
          </h3>
          <p className="mb-2">Founder & Lead Researcher</p>
          <p className="mb-4">
            NEBOSH-CEM Certified Environmental Manager | Ph.D. in Molecular Biology
          </p>
          <p>
            With over 15+ years of experience in environmental management and cellular research, 
            Dr. Soyoye established Tender Rocks Solutions to address Nigeria's pressing 
            environmental concerns while advancing biogenetic research capabilities.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;