
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-cloud-50">
      <div className="cloud-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cloud-800">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ready to transform your business with Salesforce solutions? Contact us today to schedule a consultation with our experts.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-8 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80" 
                  alt="Contact decoration" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cloud-800">Email Us</h3>
                    <p className="text-gray-600">info@cloudutility.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cloud-800">Call Us</h3>
                    <p className="text-gray-600">+1 (888) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cloud-800">Visit Us</h3>
                    <p className="text-gray-600">123 Tech Boulevard, Suite 500<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-cloud-800 mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-cloud-100 transition-colors">
                  <Linkedin className="text-cloud-600" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-cloud-100 transition-colors">
                  <Twitter className="text-cloud-600" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-cloud-100 transition-colors">
                  <Instagram className="text-cloud-600" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cloud-50 rounded-bl-full opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-cloud-800">Contact Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      className="w-full" 
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="w-full" 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <Input 
                    id="company" 
                    name="company" 
                    className="w-full" 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    className="w-full min-h-[120px]" 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-cloud-600 hover:bg-cloud-700 text-white">
                  Submit Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
