import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Configure your backend URL here (Vite uses import.meta.env)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
    timeline: '',
    preferredContact: 'email'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Handle Click Triggered")
    setLoading(true);
    
    try {
      // Make API call to backend
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      console.log("response", response.status)
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      console.log('Form submitted successfully:', data);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll be in touch shortly.",
      });
      
      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        budget: '',
        timeline: '',
        preferredContact: 'email'
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Unable to submit your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-cloud-50 py-20">
      <div className="cloud-container">
        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-cloud-800">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-lg text-gray-600">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">How long does a typical Salesforce implementation take?</h3>
                  <p className="text-gray-600">
                    Implementation timelines vary based on complexity. Simple implementations take 2-4 weeks, 
                    while enterprise solutions may take 3-6 months.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">Do you provide training?</h3>
                  <p className="text-gray-600">
                    Yes, we offer comprehensive training programs tailored to different user roles.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">What type of ongoing support do you offer?</h3>
                  <p className="text-gray-600">
                    We offer various support packages including 24/7 premium support and monthly maintenance packages.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">Can you integrate Salesforce with existing systems?</h3>
                  <p className="text-gray-600">
                    Yes, we specialize in integrating Salesforce with ERP, marketing automation, and custom applications.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">Do you work with businesses of all sizes?</h3>
                  <p className="text-gray-600">
                    Yes, from small businesses to large enterprises. We tailor solutions to your needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">What makes Cloud Utility different?</h3>
                  <p className="text-gray-600">
                    Our approach focuses on business outcomes, not just technical implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-14 max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-cloud-800">
            Get In Touch With Our Experts
          </h2>
          <p className="font-sans text-lg text-gray-600">
            Whether you're looking to implement a new Salesforce solution or optimize your existing system, we're here to help.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cloud-800">We're Here to Help</h2>
            <p className="text-lg text-gray-600 mb-6">
              Ready to transform your business with Salesforce solutions? Contact us today.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="space-y-6">
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
                    <MapPin className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cloud-800">Visit Us</h3>
                    <p className="text-gray-600">M3, Shagun Tower<br />Vijay Nagar, Indore</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-cloud-800 mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/108646759/admin/dashboard/" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-cloud-100 transition-colors">
                  <Linkedin className="text-cloud-600" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-cloud-100 transition-colors">
                  <Twitter className="text-cloud-600" size={20} />
                </a>
                <a href="https://www.instagram.com/cloud_utility/" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-cloud-100 transition-colors">
                  <Instagram className="text-cloud-600" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cloud-50 rounded-bl-full opacity-50"></div>
            
            {success ? (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-cloud-800">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been received. Check your email for confirmation!
                </p>
                <Button onClick={() => setSuccess(false)} className="bg-cloud-600 hover:bg-cloud-700 text-white">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-cloud-800">Contact Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                      <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                      <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full" />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} className="w-full" />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full rounded-md border border-input bg-background px-3 py-2">
                        <option value="">Select budget range</option>
                        <option value="< $10,000">Less than $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="> $100,000">More than $100,000</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Project Timeline</label>
                      <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full rounded-md border border-input bg-background px-3 py-2">
                        <option value="">Select timeline</option>
                        <option value="Immediate">Immediate (ASAP)</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="preferredContact" value="email" checked={formData.preferredContact === 'email'} onChange={handleChange} className="mr-2" />
                        <span className="text-sm text-gray-600">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="preferredContact" value="phone" checked={formData.preferredContact === 'phone'} onChange={handleChange} className="mr-2" />
                        <span className="text-sm text-gray-600">Phone</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="w-full min-h-[120px]" placeholder="Tell us about your project..." />
                  </div>
                  
                  <div className="mb-6 text-sm text-gray-500">
                    <p>* Required fields</p>
                  </div>
                  
                  <Button type="submit" className="w-full bg-cloud-600 hover:bg-cloud-700 text-white" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Message"}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;