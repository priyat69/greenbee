import React from 'react';
import { Bug, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Bug className="h-8 w-8 text-accent-400 transform rotate-45" />
              <span className="ml-2 text-2xl font-bold">GreenBee</span>
            </div>
            <p className="text-gray-300">
              Promoting sustainability in the hospitality industry through innovation and collaboration.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-accent-400">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent-400">Services</a></li>
              <li><a href="#impact" className="text-gray-300 hover:text-accent-400">Our Impact</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-accent-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-accent-400" />
                <span>123 Green Street, Eco City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent-400" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent-400" />
                <span>info@greenbee.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} GreenBee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;