import { useState } from 'react';
import Logo from '../ui/Logo';
import NavLink from '../ui/NavLink';
import ThemeToggle from '../ui/ThemeToggle';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-tender-dark shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <ThemeToggle />
        </nav>
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-tender-dark dark:text-tender-light ml-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </header>
  );
};

export default Header;