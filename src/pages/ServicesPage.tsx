
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Users, Database } from 'lucide-react';
import { useParams, Navigate } from 'react-router-dom';
import Services from '@/components/Services';

const ServicesPage = () => {
  const { serviceType } = useParams();
  const defaultTab = serviceType || "sales-cloud";
  
  // Validate if the service type is valid
  const validServices = ["sales-cloud", "service-cloud", "custom-solutions"];
  if (serviceType && !validServices.includes(serviceType)) {
    return <Navigate to="/services/sales-cloud" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Services />
      <main className="flex-grow">
        <section className="bg-cloud-50 py-24">
        
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
        </section>
      </main> 
    </div>
  );
};

export default ServicesPage;
