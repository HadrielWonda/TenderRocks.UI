import Logo from '../../ui/Logo';

const Footer = () => (
  <footer className="bg-tender-dark text-white py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex flex-col">
            <span className="text-2xl leading-none font-bold">TENDER</span>
            <span className="text-2xl leading-none font-bold">ROCKS</span>
            <span className="text-xl">SOLUTIONS</span>
          </div>
          <p className="mt-2 text-tender-light">
            Advancing Nigerian environmental and biogenetic research
          </p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-tender-light">+234 805 871 0576</p>
          <p className="text-tender-light">tenderrocksolutions..gmail.com</p>
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} Tender Rocks Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;