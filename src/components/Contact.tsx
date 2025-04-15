
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Calendar, Clock, FileText, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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
    setLoading(true);
    
    try {
      // In a real implementation, this would be an API call to your backend
      // For demonstration, we'll simulate a server response after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted with data:', formData);
      
      // Show success toast and reset form
      toast({
        title: "Contact form submitted!",
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
      
      // In real implementation, you would make an API call to your backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Unable to submit your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-cloud-50 py-20">
      <div className="cloud-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-cloud-800">
            Get In Touch With Our Experts
          </h2>
          <p className="font-sans text-lg text-gray-600">
            Whether you're looking to implement a new Salesforce solution, optimize your existing system, 
            or simply learn more about our services, our team is here to help.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cloud-800">
              We're Here to Help
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ready to transform your business with Salesforce solutions? Contact us today to 
              schedule a consultation with our experts. We'll help you identify the right solutions 
              for your specific business needs.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-8 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c" 
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
                    <p className="text-gray-600">support@cloudutility.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cloud-800">Call Us</h3>
                    <p className="text-gray-600">+1 (888) 555-1234 (Sales)</p>
                    <p className="text-gray-600">+1 (888) 555-5678 (Support)</p>
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
                
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cloud-800">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="font-semibold text-cloud-800 text-xl mb-4">Our Offices</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-100 p-4 rounded-lg">
                  <h4 className="font-medium text-cloud-700">San Francisco (HQ)</h4>
                  <p className="text-gray-600 text-sm">123 Tech Boulevard, Suite 500<br />San Francisco, CA 94105</p>
                </div>
                
                <div className="border border-gray-100 p-4 rounded-lg">
                  <h4 className="font-medium text-cloud-700">New York</h4>
                  <p className="text-gray-600 text-sm">456 Madison Avenue, 12th Floor<br />New York, NY 10022</p>
                </div>
                
                <div className="border border-gray-100 p-4 rounded-lg">
                  <h4 className="font-medium text-cloud-700">Chicago</h4>
                  <p className="text-gray-600 text-sm">789 Michigan Ave, Suite 300<br />Chicago, IL 60611</p>
                </div>
                
                <div className="border border-gray-100 p-4 rounded-lg">
                  <h4 className="font-medium text-cloud-700">London</h4>
                  <p className="text-gray-600 text-sm">10 Victoria Street<br />London, SW1H 0NB, UK</p>
                </div>
              </div>
              
              <div className="mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833" 
                  alt="Office buildings" 
                  className="w-full h-48 object-cover rounded-lg"
                />
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
            
            {success ? (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-cloud-800">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been received. One of our experts will be in touch with you shortly.
                </p>
                <Button 
                  onClick={() => setSuccess(false)} 
                  className="bg-cloud-600 hover:bg-cloud-700 text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
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
                        value={formData.firstName}
                        onChange={handleChange}
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
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                        className="w-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="w-full" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full" 
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="">Select budget range</option>
                        <option value="< $10,000">Less than $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="> $100,000">More than $100,000</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="">Select timeline</option>
                        <option value="Immediate">Immediate (ASAP)</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Contact Method
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-600">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-600">Phone</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      className="w-full min-h-[120px]" 
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <div className="mb-6 text-sm text-gray-500">
                    <p>* Required fields</p>
                    <p className="mt-2">
                      By submitting this form, you agree to our 
                      <a href="#" className="text-cloud-600 hover:underline"> privacy policy</a> and 
                      <a href="#" className="text-cloud-600 hover:underline"> terms of service</a>.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-cloud-600 hover:bg-cloud-700 text-white"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Message"}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
        
        {/* Additional Contact Section with FAQ */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-cloud-800">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-lg text-gray-600">
              Find answers to common questions about our services and how we can help your business.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">How long does a typical Salesforce implementation take?</h3>
                  <p className="text-gray-600">
                    Implementation timelines vary based on complexity and scope. Simple implementations can take 2-4 weeks, 
                    while more complex enterprise solutions may take 3-6 months or more. During our initial consultation, we'll 
                    provide you with a detailed timeline based on your specific requirements.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">Do you provide training for our team?</h3>
                  <p className="text-gray-600">
                    Yes, we offer comprehensive training programs tailored to different user roles within your organization. 
                    Our training includes both group sessions and one-on-one coaching to ensure your team is comfortable and 
                    confident using your new Salesforce solution.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">What type of ongoing support do you offer?</h3>
                  <p className="text-gray-600">
                    We offer various support packages including 24/7 premium support, regular business hours support, and 
                    monthly maintenance packages. All clients receive a dedicated account manager to ensure consistent 
                    communication and responsive service.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">Can you integrate Salesforce with our existing systems?</h3>
                  <p className="text-gray-600">
                    Absolutely. We specialize in integrating Salesforce with a wide range of business systems including ERP, 
                    marketing automation, accounting software, e-commerce platforms, and custom applications. Our integration 
                    experts will ensure seamless data flow between your systems.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">Do you work with businesses of all sizes?</h3>
                  <p className="text-gray-600">
                    Yes, we have experience working with organizations of all sizes, from small businesses to large enterprises. 
                    We tailor our approach and solutions to match the specific needs, budget, and scale of your business.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-cloud-800 text-lg mb-2">What makes Cloud Utility different from other Salesforce consultants?</h3>
                  <p className="text-gray-600">
                    Our approach focuses on business outcomes rather than just technical implementation. We take the time to 
                    understand your business processes and goals, ensuring that your Salesforce solution is aligned with your 
                    strategic objectives. Additionally, our team consists of certified experts with deep industry experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Don't see your question here?</p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="bg-cloud-600 hover:bg-cloud-700 text-white"
              >
                Ask Us Directly
              </Button>
            </div>
          </div>
        </div>
        
        {/* Industry Expertise Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-cloud-800">
              Our Industry Expertise
            </h2>
            <p className="font-sans text-lg text-gray-600">
              We've helped businesses across various industries transform their operations with Salesforce.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" 
                alt="Healthcare" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-cloud-800 text-lg mb-2">Healthcare</h3>
              <p className="text-gray-600">
                Streamline patient management, improve care coordination, and enhance operational efficiency with our 
                healthcare-focused Salesforce solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                alt="Financial Services" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-cloud-800 text-lg mb-2">Financial Services</h3>
              <p className="text-gray-600">
                Enhance client relationships, ensure compliance, and optimize wealth management processes with our 
                financial services Salesforce implementations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="Manufacturing" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-cloud-800 text-lg mb-2">Manufacturing</h3>
              <p className="text-gray-600">
                Improve supply chain visibility, streamline sales operations, and enhance customer service with our 
                manufacturing-focused Salesforce solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
