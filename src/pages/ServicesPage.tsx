
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Users, Database } from 'lucide-react';
import { useParams, Navigate } from 'react-router-dom';

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
      <Navbar />
      <main className="flex-grow">
        <section className="bg-cloud-50 py-24">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cloud-800">
                Our Salesforce Services
              </h1>
              <p className="font-sans text-lg text-gray-600">
                Leverage the full potential of Salesforce with our comprehensive suite of 
                services tailored to your business needs.
              </p>
            </div>
            
            <Tabs defaultValue={defaultTab} className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="sales-cloud" className="text-sm md:text-base py-3">Sales Cloud</TabsTrigger>
                <TabsTrigger value="service-cloud" className="text-sm md:text-base py-3">Service Cloud</TabsTrigger>
                <TabsTrigger value="custom-solutions" className="text-sm md:text-base py-3">Custom Solutions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sales-cloud" className="p-6 bg-white rounded-xl shadow-md">
                <div className="flex items-start gap-6 flex-col md:flex-row">
                  <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Sales Cloud Solutions</h2>
                    <p className="text-gray-600 mb-6">
                      Streamline your sales process, boost productivity, and close more deals with our 
                      comprehensive Sales Cloud solutions. We help you implement and customize Salesforce 
                      Sales Cloud to match your unique sales workflow.
                    </p>
                    
                    <h3 className="font-heading text-xl font-semibold mb-3 text-cloud-700">Key Features:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">1</span>
                        <div>
                          <p className="font-medium text-cloud-800">Lead Management</p>
                          <p className="text-gray-600">Capture, track, and nurture leads through your sales pipeline.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">2</span>
                        <div>
                          <p className="font-medium text-cloud-800">Opportunity Management</p>
                          <p className="text-gray-600">Track deals from qualification to close with customizable stages.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">3</span>
                        <div>
                          <p className="font-medium text-cloud-800">Sales Forecasting</p>
                          <p className="text-gray-600">Gain visibility into your sales pipeline with accurate forecasting tools.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">4</span>
                        <div>
                          <p className="font-medium text-cloud-800">Reporting & Analytics</p>
                          <p className="text-gray-600">Access real-time data with customizable dashboards and reports.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="service-cloud" className="p-6 bg-white rounded-xl shadow-md">
                <div className="flex items-start gap-6 flex-col md:flex-row">
                  <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Service Cloud Solutions</h2>
                    <p className="text-gray-600 mb-6">
                      Deliver exceptional customer service with automated workflows and intelligent case management.
                      Our Service Cloud implementations help you transform customer service with faster, smarter support.
                    </p>
                    
                    <h3 className="font-heading text-xl font-semibold mb-3 text-cloud-700">Key Features:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">1</span>
                        <div>
                          <p className="font-medium text-cloud-800">Case Management</p>
                          <p className="text-gray-600">Efficiently track, prioritize, and resolve customer cases.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">2</span>
                        <div>
                          <p className="font-medium text-cloud-800">Knowledge Base</p>
                          <p className="text-gray-600">Create and share articles to quickly solve common customer issues.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">3</span>
                        <div>
                          <p className="font-medium text-cloud-800">Omni-Channel Routing</p>
                          <p className="text-gray-600">Route cases to the right agent at the right time, across all channels.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">4</span>
                        <div>
                          <p className="font-medium text-cloud-800">Self-Service Portal</p>
                          <p className="text-gray-600">Empower customers to find answers and submit requests on their own.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="custom-solutions" className="p-6 bg-white rounded-xl shadow-md">
                <div className="flex items-start gap-6 flex-col md:flex-row">
                  <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Custom Salesforce Solutions</h2>
                    <p className="text-gray-600 mb-6">
                      Tailored Salesforce implementations to address your unique business challenges and goals.
                      We develop custom applications, integrations, and automation to extend Salesforce functionality.
                    </p>
                    
                    <h3 className="font-heading text-xl font-semibold mb-3 text-cloud-700">Our Custom Services:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">1</span>
                        <div>
                          <p className="font-medium text-cloud-800">Apex Development</p>
                          <p className="text-gray-600">Custom back-end development with Salesforce's robust programming language.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">2</span>
                        <div>
                          <p className="font-medium text-cloud-800">Lightning Web Components</p>
                          <p className="text-gray-600">Modern, responsive UI components built with the latest web standards.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">3</span>
                        <div>
                          <p className="font-medium text-cloud-800">Integration Services</p>
                          <p className="text-gray-600">Connect Salesforce with your existing systems and third-party applications.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">4</span>
                        <div>
                          <p className="font-medium text-cloud-800">Data Migration & Management</p>
                          <p className="text-gray-600">Clean, migrate, and manage your data for optimal Salesforce performance.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
