
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-cloud-800 hover:text-cloud-600 transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/services/sales-cloud" className="cursor-pointer">Sales Cloud</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/service-cloud" className="cursor-pointer">Service Cloud</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/custom-solutions" className="cursor-pointer">Custom Solutions</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/about" className="text-cloud-800 hover:text-cloud-600 transition-colors">About Us</Link>
            
            {/* Case Studies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-cloud-800 hover:text-cloud-600 transition-colors">
                Case Studies <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/case-studies/manufacturing" className="cursor-pointer">Manufacturing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/case-studies/healthcare" className="cursor-pointer">Healthcare</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/case-studies/financial-services" className="cursor-pointer">Financial Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Testimonials Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-cloud-800 hover:text-cloud-600 transition-colors">
                Testimonials <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/testimonials/enterprise" className="cursor-pointer">Enterprise</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/testimonials/mid-market" className="cursor-pointer">Mid-Market</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/testimonials/small-business" className="cursor-pointer">Small Business</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-cloud-800" onClick={() => {}}>
                  <span>Services</span>
                </div>
                <div className="pl-4 mt-2 flex flex-col space-y-2">
                  <Link to="/services/sales-cloud" className="text-cloud-700 hover:text-cloud-600" onClick={() => setIsMenuOpen(false)}>Sales Cloud</Link>
                  <Link to="/services/service-cloud" className="text-cloud-700 hover:text-cloud-600" onClick={() => setIsMenuOpen(false)}>Service Cloud</Link>
                  <Link to="/services/custom-solutions" className="text-cloud-700 hover:text-cloud-600" onClick={() => setIsMenuOpen(false)}>Custom Solutions</Link>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="text-cloud-800 hover:text-cloud-600 px-4 py-2 hover:bg-cloud-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-cloud-800" onClick={() => {}}>
                  <span>Case Studies</span>
                </div>
                <div className="pl-4 mt-2 flex flex-col space-y-2">
                  <Link to="/case-studies/manufacturing" className="text-cloud-700 hover:text-cloud-600" onClick={() => setIsMenuOpen(false)}>Manufacturing</Link>
                  <Link to="/case-studies/healthcare" className="text-cloud-700 hover:text-cloud-600" onClick={() => setIsMenuOpen(false)}>Healthcare</Link>
                  <Link to="/case-studies/financial-services" className="text-cloud-700 hover:text-cloud-600" onClick={() => setIsMenuOpen(false)}>Financial Services</Link>
                </div>
              </div>
              
              <div className="px-4 py-2">
                <div className="flex items-center justify-between text-cloud-800" onClick={() => {}}>
                  <span>Testimonials</span>
                </div>
                <div className="pl-4 mt-2 flex flex-col space-y-2">
                  <Link to="/testimonials/enterprise" className="text-cloud-700 hover:text-cloud-600" onClick={() => setIsMenuOpen(false)}>Enterprise</Link>
                  <Link to="/testimonials/mid-market" className="text-cloud-700 hover:text-cloud-600" onClick={() => setIsMenuOpen(false)}>Mid-Market</Link>
                  <Link to="/testimonials/small-business" className="text-cloud-700 hover:text-cloud-600" onClick={() => setIsMenuOpen(false)}>Small Business</Link>
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
