
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cloud-800 text-white">
      <div className="cloud-container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="font-bold text-lg text-cloud-800">CU</span>
              </div>
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
              <li><a href="#" className="text-cloud-200 hover:text-white transition-colors">Sales Cloud</a></li>
              <li><a href="#" className="text-cloud-200 hover:text-white transition-colors">Service Cloud</a></li>
              <li><a href="#" className="text-cloud-200 hover:text-white transition-colors">Custom Solutions</a></li>
              <li><a href="#" className="text-cloud-200 hover:text-white transition-colors">Implementation</a></li>
              <li><a href="#" className="text-cloud-200 hover:text-white transition-colors">Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-cloud-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="text-cloud-200 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#testimonials" className="text-cloud-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-cloud-200 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-cloud-200 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-cloud-200">123 Tech Boulevard, Suite 500</li>
              <li className="text-cloud-200">San Francisco, CA 94105</li>
              <li className="text-cloud-200">info@cloudutility.com</li>
              <li className="text-cloud-200">+1 (888) 555-1234</li>
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
