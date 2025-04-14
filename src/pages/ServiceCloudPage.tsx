
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Headset, MessageSquare, Users, UserCheck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCloudPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-cloud-50 py-24">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cloud-800">
                Service Cloud Solutions
              </h1>
              <p className="font-sans text-lg text-gray-600">
                Deliver exceptional customer service across every channel with Salesforce Service Cloud.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="cloud-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-heading text-3xl font-bold mb-6 text-cloud-800">
                  Transform Your Customer Service
                </h2>
                <p className="text-gray-600 mb-6">
                  Service Cloud gives your support team everything they need to provide fast, 
                  personalized service on any channel — from phone to chat to social media. 
                  Our implementations help you automate service processes and deliver exceptional customer experiences.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Reduce case resolution time by up to 35%",
                    "Improve agent productivity by 40%",
                    "Increase customer satisfaction by 25%",
                    "Provide seamless omni-channel support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-cloud-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button className="bg-cloud-600 hover:bg-cloud-700 text-white">
                    Request a Demo
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Customer Service Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-cloud-50">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4 text-cloud-800">
                Key Features
              </h2>
              <p className="text-gray-600">
                Our Service Cloud implementation provides powerful tools to deliver exceptional customer support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Headset size={28} />,
                  title: "Case Management",
                  description: "Efficiently track, prioritize, and resolve customer cases with automated workflows and intelligent routing."
                },
                {
                  icon: <MessageSquare size={28} />,
                  title: "Knowledge Base",
                  description: "Create and share articles to quickly solve common customer issues and reduce repeat cases."
                },
                {
                  icon: <Users size={28} />,
                  title: "Omni-Channel Routing",
                  description: "Route cases to the right agent at the right time across all channels for seamless customer experience."
                },
                {
                  icon: <UserCheck size={28} />,
                  title: "Self-Service Portal",
                  description: "Empower customers to find answers and submit requests on their own with a customizable portal."
                },
                {
                  icon: <Shield size={28} />,
                  title: "Field Service",
                  description: "Manage mobile workers, optimize scheduling, and improve first-time fix rates for on-site service."
                },
                {
                  icon: <MessageSquare size={28} />,
                  title: "Live Chat & Messaging",
                  description: "Provide real-time support through web chat, mobile messaging, and social media channels."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="w-12 h-12 mb-6 cloud-gradient rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="cloud-container">
            <div className="bg-cloud-600 rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center hidden md:block">
                </div>
                <div className="p-10 md:p-12 text-white">
                  <h2 className="font-heading text-3xl font-bold mb-6">
                    Elevate Your Customer Service Experience
                  </h2>
                  <p className="mb-8 text-cloud-50">
                    Our team of certified Salesforce consultants will help you implement
                    Service Cloud and optimize it for your unique customer service needs.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-white text-cloud-600 hover:bg-cloud-50">
                      Contact Us Today
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceCloudPage;
