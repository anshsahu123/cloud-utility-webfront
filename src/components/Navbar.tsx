
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
            <div className="relative group">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-cloud-800 hover:text-cloud-600 transition-colors"
              >
                Services
              </button>
              <div className="hidden group-hover:flex absolute top-full left-0 z-50 flex-col bg-white shadow-lg rounded-md py-2 w-48 text-left">
                <button 
                  onClick={() => scrollToSection('sales-cloud')}
                  className="px-4 py-2 hover:bg-cloud-50 text-cloud-800"
                >
                  Sales Cloud
                </button>
                <button 
                  onClick={() => scrollToSection('service-cloud')}
                  className="px-4 py-2 hover:bg-cloud-50 text-cloud-800"
                >
                  Service Cloud
                </button>
                <button 
                  onClick={() => scrollToSection('custom-solutions')}
                  className="px-4 py-2 hover:bg-cloud-50 text-cloud-800"
                >
                  Custom Solutions
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-cloud-800 hover:text-cloud-600 transition-colors"
            >
              About Us
            </button>
            
            <div className="relative group">
              <button 
                onClick={() => scrollToSection('live-projects')} 
                className="text-cloud-800 hover:text-cloud-600 transition-colors"
              >
                Live Projects
              </button>
              <div className="hidden group-hover:flex absolute top-full left-0 z-50 flex-col bg-white shadow-lg rounded-md py-2 w-48 text-left">
                <button 
                  onClick={() => scrollToSection('manufacturing-case-study')}
                  className="px-4 py-2 hover:bg-cloud-50 text-cloud-800"
                >
                  Manufacturing
                </button>
                <button 
                  onClick={() => scrollToSection('healthcare-case-study')}
                  className="px-4 py-2 hover:bg-cloud-50 text-cloud-800"
                >
                  Healthcare
                </button>
                <button 
                  onClick={() => scrollToSection('financial-services-case-study')}
                  className="px-4 py-2 hover:bg-cloud-50 text-cloud-800"
                >
                  Financial Services
                </button>
              </div>
            </div>

            <Link to="/internship">
              <Button 
                variant="outline"
                className="text-cloud-800 hover:text-cloud-600 border-cloud-300"
              >
                Internship
              </Button>
            </Link>
            
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
              <div className="px-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-cloud-800 hover:text-cloud-600 w-full text-left font-medium mb-2"
                >
                  Services
                </button>
                <div className="pl-4 space-y-2 mb-2">
                  <button 
                    onClick={() => scrollToSection('sales-cloud')}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Sales Cloud
                  </button>
                  <button 
                    onClick={() => scrollToSection('service-cloud')}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Service Cloud
                  </button>
                  <button 
                    onClick={() => scrollToSection('custom-solutions')}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Custom Solutions
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors text-left"
              >
                About Us
              </button>
              
              <div className="px-4">
                <button 
                  onClick={() => scrollToSection('live-projects')}
                  className="text-cloud-800 hover:text-cloud-600 w-full text-left font-medium mb-2"
                >
                  Live Projects
                </button>
                <div className="pl-4 space-y-2 mb-2">
                  <button 
                    onClick={() => scrollToSection('manufacturing-case-study')}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Manufacturing
                  </button>
                  <button 
                    onClick={() => scrollToSection('healthcare-case-study')}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Healthcare
                  </button>
                  <button 
                    onClick={() => scrollToSection('financial-services-case-study')}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Financial Services
                  </button>
                </div>
              </div>

              <div className="px-4">
                <Link to="/internship" className="w-full block" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="outline"
                    className="w-full text-cloud-800 hover:text-cloud-600 border-cloud-300"
                  >
                    Internship
                  </Button>
                </Link>
              </div>
              
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
