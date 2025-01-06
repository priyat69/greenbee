import React, { useState } from 'react';
import { Menu, X, Bug, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Bug className="h-8 w-8 text-accent-400 transform rotate-45" />
            <span className="ml-2 text-2xl font-bold text-primary-600">GreenBee</span>
          </div>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 flex">
          {/* Sidebar Content */}
          <div className="bg-white w-64 h-full overflow-y-auto z-50">
            <div className="px-4 py-6">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bug className="h-8 w-8 text-accent-400 transform rotate-45" />
                  <span className="ml-2 text-2xl font-bold text-primary-600">GreenBee</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-primary-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Links */}
              <div className="mt-6 space-y-2">
                <a href="#home" className="block px-3 py-2 text-primary-700 hover:text-accent-400">Home</a>
                <a href="#about" className="block px-3 py-2 text-primary-700 hover:text-accent-400">About</a>
                <a href="#services" className="block px-3 py-2 text-primary-700 hover:text-accent-400">Services</a>
                <a href="#impact" className="block px-3 py-2 text-primary-700 hover:text-accent-400">Impact</a>
                <a href="#testimonials" className="block px-3 py-2 text-primary-700 hover:text-accent-400">Testimonials</a>

                {/* Dropdown Menu */}
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="w-full flex items-center justify-between px-3 py-2 text-primary-700 hover:text-accent-400"
                  >
                    More <ChevronDown className={`h-5 w-5 transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      <a href="#faq" className="block px-3 py-2 text-primary-600 hover:text-accent-400">FAQs</a>
                      <a href="#support" className="block px-3 py-2 text-primary-600 hover:text-accent-400">Support</a>
                      <a href="#blog" className="block px-3 py-2 text-primary-600 hover:text-accent-400">Blog</a>
                    </div>
                  )}
                </div>

                <a
                  href="#contact"
                  className="block px-3 py-2 bg-primary-600 text-white rounded-full text-center mt-4"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>

          {/* Close Sidebar */}
          <div
            className="flex-1"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
