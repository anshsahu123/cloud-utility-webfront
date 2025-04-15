
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="cloud-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d005d7f8-4062-40ba-9d96-b62610ca0adc.png" 
                alt="Cloud Utility Logo" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-cloud-800">Cloud Utility</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-cloud-800 hover:text-cloud-600 transition-colors"
            >
              Services
            </button>
            
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-cloud-800 hover:text-cloud-600 transition-colors"
            >
              About Us
            </button>
            
            <button 
              onClick={() => scrollToSection('case-studies')} 
              className="text-cloud-800 hover:text-cloud-600 transition-colors"
            >
              Case Studies
            </button>
            
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-cloud-800 hover:text-cloud-600 transition-colors"
            >
              Testimonials
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
            >
              <Button className="bg-cloud-600 hover:bg-cloud-700 text-white">Contact Us</Button>
            </button>
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
              <button 
                onClick={() => scrollToSection('services')}
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors text-left"
              >
                Services
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors text-left"
              >
                About Us
              </button>
              
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors text-left"
              >
                Case Studies
              </button>
              
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors text-left"
              >
                Testimonials
              </button>
              
              <div className="px-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-cloud-600 hover:bg-cloud-700 text-white"
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
