import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and DOM update, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
              Empowering businesses with customized Salesforce solutions that
              drive growth and innovation.
            </p>
            <div className="flex space-x-4">  
              <a
                href="#"
                className="text-cloud-200 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/108646759/admin/dashboard/"
                className="text-cloud-200 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/cloud_utility/" 
                className="text-cloud-200 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("sales-cloud")}
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Sales Cloud
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("service-cloud")}
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Service Cloud
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("custom-solutions")}
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Custom Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("commerce-cloud")}
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Commerce Cloud
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("salesforce-consulting")}
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Salesforce Consulting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("salesforce-development")}
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Salesforce Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("healthcare-case-study")}
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Healthcare
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    scrollToSection("financial-services-case-study")
                  }
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
                  onClick={() => scrollToSection("about")}
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("live-projects")}
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Live Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-cloud-200 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <Link
                  to="/internship"
                  className="text-cloud-200 hover:text-white transition-colors block"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-cloud-200">M3, Shagun Tower, VijayNagar </li>
              <li className="text-cloud-200">Indore, Madhya Pradesh India</li>
              <li className="text-cloud-200">hradmin@cloudutility.in</li>
              <li className="text-cloud-200">+91 7803057202</li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
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
            <Link
              to="/privacy-policy"
              className="text-cloud-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-cloud-300 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/faqs"
              className="text-cloud-300 hover:text-white transition-colors"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;