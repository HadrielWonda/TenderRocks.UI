'use client';

import { useState } from 'react';
import NavLink from '../ui/NavLink';


interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-tender-dark dark:text-tender-light"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-tender-dark shadow-lg z-50">
          <div className="flex flex-col py-4">
            <NavLink href="#home" className="px-6 py-3">Home</NavLink>
            <NavLink href="#about" className="px-6 py-3">About</NavLink>
            <NavLink href="#services" className="px-6 py-3">Services</NavLink>
            <NavLink href="#contact" className="px-6 py-3">Contact</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;