import React, { useState } from 'react';
import { Menu, X, Bug } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Bug className="h-8 w-8 text-accent-400 transform rotate-45" />
            <span className="ml-2 text-2xl font-bold text-primary-600">GreenBee</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary-700 hover:text-accent-400 transition-colors">Home</a>
            <a href="#about" className="text-primary-700 hover:text-accent-400 transition-colors">About</a>
            <a href="#services" className="text-primary-700 hover:text-accent-400 transition-colors">Services</a>
            <a href="#impact" className="text-primary-700 hover:text-accent-400 transition-colors">Impact</a>
            <a href="#testimonials" className="text-primary-700 hover:text-accent-400 transition-colors">Testimonials</a>
            <a href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-accent-400 transition-colors">
              Get Involved
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-primary-700 hover:text-accent-400">Home</a>
            <a href="#about" className="block px-3 py-2 text-primary-700 hover:text-accent-400">About</a>
            <a href="#services" className="block px-3 py-2 text-primary-700 hover:text-accent-400">Services</a>
            <a href="#impact" className="block px-3 py-2 text-primary-700 hover:text-accent-400">Impact</a>
            <a href="#testimonials" className="block px-3 py-2 text-primary-700 hover:text-accent-400">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 bg-primary-600 text-white rounded-full text-center mt-4 mx-2">
              Get Involved
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;