
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ShoppingCart, Briefcase, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-cloud-800 text-white">
      <div className="cloud-container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/d005d7f8-4062-40ba-9d96-b62610ca0adc.png" 
                alt="Cloud Utility Logo" 
                className="h-10 w-auto bg-white rounded-full p-1"
              />
              <span className="font-bold text-xl">Cloud Utility</span>
            </div>
            <p className="text-cloud-100 mb-4">
              Empowering businesses with customized Salesforce solutions that drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cloud-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cloud-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cloud-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-cloud-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('sales-cloud')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Sales Cloud
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('service-cloud')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Service Cloud
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('custom-solutions')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Custom Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('commerce-cloud')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Commerce Cloud
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('salesforce-consulting')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Salesforce Consulting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('salesforce-development')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Salesforce Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('healthcare-case-study')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Healthcare
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('financial-services-case-study')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Financial Services
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('case-studies')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('enterprise-testimonials')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Enterprise Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('mid-market-testimonials')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Mid-Market Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('small-business-testimonials')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Small Business
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-cloud-200">123 Tech Boulevard, Suite 500</li>
              <li className="text-cloud-200">San Francisco, CA 94105</li>
              <li className="text-cloud-200">info@cloudutility.com</li>
              <li className="text-cloud-200">+1 (888) 555-1234</li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cloud-700 mt-8 pt-8 text-center text-cloud-300">
          <p>&copy; {currentYear} Cloud Utility. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-cloud-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-cloud-300 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
