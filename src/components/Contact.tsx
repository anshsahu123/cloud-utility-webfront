
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

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
            
            <div className="space-y-6 mb-8">
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
          
          <div className="bg-white rounded-xl shadow-md p-8">
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
    </section>
  );
};

export default Contact;
