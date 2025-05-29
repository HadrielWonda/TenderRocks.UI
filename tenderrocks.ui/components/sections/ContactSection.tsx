import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ContactItem from '../../ui/ContactItem'; 

const ContactSection = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-tender-dark mb-16">Contact Us</h2>
      
      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
        <div className="flex-1">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-72" />
        </div>
        
        <div className="flex-1">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-tender-dark mb-2">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              Reach out to discuss research collaborations or environmental projects
            </p>
            
            <div className="space-y-3">
              <ContactItem label="Phone" value="+234 805 871 0576" />
              <ContactItem label="Email" value="tenderrocksolutions@gmail.com" />
            </div>
          </div>
          
          <form className="space-y-4">
            <InputField label="Name" type="text" />
            <InputField label="Email" type="email" />
            <TextAreaField label="Message" />
            <button 
              type="submit" 
              className="bg-tender-dark text-white px-6 py-2 rounded-md hover:bg-tender-light transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;