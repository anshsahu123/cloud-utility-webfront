
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
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
            <Link to="/internship">
              <Button 
                className="relative bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-500 hover:via-orange-500 hover:to-amber-600 text-white font-bold shadow-lg hover:shadow-xl transition-all animate-bounce hover:animate-none border-2 border-amber-300"
              >
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Internship Program
              </Button>
            </Link>
            
            <Link to="/services" className="text-cloud-800 hover:text-cloud-600 transition-colors">
              Services
            </Link>
            
            <Link to="/about" className="text-cloud-800 hover:text-cloud-600 transition-colors">
              About Us
            </Link>
            
            <div className="relative group">
              <Link to="/case-studies" className="text-cloud-800 hover:text-cloud-600 transition-colors">
                Case Studies
              </Link>
              <div className="hidden group-hover:flex absolute top-full left-0 z-50 flex-col bg-white shadow-lg rounded-md py-2 w-48 text-left">
                <Link to="/case-studies/manufacturing" className="px-4 py-2 hover:bg-cloud-50 text-cloud-800">
                  Manufacturing
                </Link>
                <Link to="/case-studies/healthcare" className="px-4 py-2 hover:bg-cloud-50 text-cloud-800">
                  Healthcare
                </Link>
                <Link to="/case-studies/financial-services" className="px-4 py-2 hover:bg-cloud-50 text-cloud-800">
                  Financial Services
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <Link to="/testimonials" className="text-cloud-800 hover:text-cloud-600 transition-colors">
                Testimonials
              </Link>
              <div className="hidden group-hover:flex absolute top-full left-0 z-50 flex-col bg-white shadow-lg rounded-md py-2 w-48 text-left">
                <Link to="/testimonials/enterprise" className="px-4 py-2 hover:bg-cloud-50 text-cloud-800">
                  Enterprise
                </Link>
                <Link to="/testimonials/mid-market" className="px-4 py-2 hover:bg-cloud-50 text-cloud-800">
                  Mid-Market
                </Link>
                <Link to="/testimonials/small-business" className="px-4 py-2 hover:bg-cloud-50 text-cloud-800">
                  Small Business
                </Link>
              </div>
            </div>
            
            <Link to="/contact">
              <Button className="bg-cloud-600 hover:bg-cloud-700 text-white">Contact Us</Button>
            </Link>
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
                <Link to="/internship" className="w-full block" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-500 hover:via-orange-500 hover:to-amber-600 text-white font-bold shadow-lg border-2 border-amber-300"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Internship Program
                  </Button>
                </Link>
              </div>
              
              <Link 
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors text-left"
              >
                Services
              </Link>
              
              <Link 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors text-left"
              >
                About Us
              </Link>
              
              <div className="px-4">
                <Link 
                  to="/case-studies"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cloud-800 hover:text-cloud-600 w-full text-left font-medium mb-2 block"
                >
                  Case Studies
                </Link>
                <div className="pl-4 space-y-2 mb-2">
                  <Link 
                    to="/case-studies/manufacturing"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Manufacturing
                  </Link>
                  <Link 
                    to="/case-studies/healthcare"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Healthcare
                  </Link>
                  <Link 
                    to="/case-studies/financial-services"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Financial Services
                  </Link>
                </div>
              </div>
              
              <div className="px-4">
                <Link 
                  to="/testimonials"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cloud-800 hover:text-cloud-600 w-full text-left font-medium mb-2 block"
                >
                  Testimonials
                </Link>
                <div className="pl-4 space-y-2 mb-2">
                  <Link 
                    to="/testimonials/enterprise"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Enterprise
                  </Link>
                  <Link 
                    to="/testimonials/mid-market"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Mid-Market
                  </Link>
                  <Link 
                    to="/testimonials/small-business"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-cloud-700 hover:text-cloud-600 block w-full text-left text-sm"
                  >
                    Small Business
                  </Link>
                </div>
              </div>
              
              <div className="px-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-cloud-600 hover:bg-cloud-700 text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
