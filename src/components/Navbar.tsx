
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="cloud-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full cloud-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">CU</span>
              </div>
              <span className="font-bold text-xl text-cloud-800">Cloud Utility</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-cloud-800 hover:text-cloud-600 transition-colors">Services</a>
            <a href="#about" className="text-cloud-800 hover:text-cloud-600 transition-colors">About Us</a>
            <a href="#case-studies" className="text-cloud-800 hover:text-cloud-600 transition-colors">Case Studies</a>
            <a href="#testimonials" className="text-cloud-800 hover:text-cloud-600 transition-colors">Testimonials</a>
            <Button href="#contact" className="bg-cloud-600 hover:bg-cloud-700 text-white">Contact Us</Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-cloud-800" />
            ) : (
              <Menu className="w-6 h-6 text-cloud-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#case-studies" 
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </a>
              <a 
                href="#testimonials" 
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <div className="px-4">
                <Button 
                  className="w-full bg-cloud-600 hover:bg-cloud-700 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
