
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Code, Database, Puzzle, Settings, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomSolutionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-cloud-50 py-24">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cloud-800">
                Custom Salesforce Solutions
              </h1>
              <p className="font-sans text-lg text-gray-600">
                Tailored Salesforce implementations that address your unique business challenges and goals.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="cloud-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Custom Salesforce Development" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-cloud-800">
                  Solutions Built for Your Business
                </h2>
                <p className="text-gray-600 mb-6">
                  One size doesn't fit all when it comes to business solutions. Our custom Salesforce 
                  development services go beyond standard implementations to create solutions 
                  that perfectly match your unique processes, workflows, and requirements.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Tailor Salesforce to your exact business needs",
                    "Extend functionality with custom applications",
                    "Integrate with your existing systems",
                    "Automate complex business processes"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-cloud-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button className="bg-cloud-600 hover:bg-cloud-700 text-white">
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-cloud-50">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4 text-cloud-800">
                Our Custom Development Services
              </h2>
              <p className="text-gray-600">
                We provide comprehensive custom development to extend Salesforce functionality
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code size={28} />,
                  title: "Apex Development",
                  description: "Custom back-end development with Salesforce's powerful programming language to implement complex business logic."
                },
                {
                  icon: <GitBranch size={28} />,
                  title: "Lightning Web Components",
                  description: "Modern, responsive UI components built with the latest web standards for intuitive user experiences."
                },
                {
                  icon: <Puzzle size={28} />,
                  title: "API Integration",
                  description: "Connect Salesforce with your existing systems and third-party applications for seamless data flow."
                },
                {
                  icon: <Database size={28} />,
                  title: "Data Migration & Management",
                  description: "Clean, migrate, and manage your data for optimal Salesforce performance and data integrity."
                },
                {
                  icon: <Settings size={28} />,
                  title: "Process Automation",
                  description: "Build automated workflows, approval processes, and validation rules to streamline operations."
                },
                {
                  icon: <GitBranch size={28} />,
                  title: "Custom App Development",
                  description: "Create bespoke applications on the Salesforce platform to address specific business needs."
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="w-12 h-12 mb-6 cloud-gradient rounded-lg flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="cloud-container">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-12">
                  <h2 className="font-heading text-3xl font-bold mb-6 text-cloud-800">
                    Our Development Process
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We follow a transparent, collaborative approach to custom Salesforce development:
                  </p>
                  <ol className="space-y-6">
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full cloud-gradient flex items-center justify-center text-white font-bold">1</div>
                      <div className="ml-4">
                        <h3 className="font-heading font-semibold text-lg text-cloud-800">Discovery & Requirements</h3>
                        <p className="text-gray-600">We work closely with your team to understand your business processes and requirements.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full cloud-gradient flex items-center justify-center text-white font-bold">2</div>
                      <div className="ml-4">
                        <h3 className="font-heading font-semibold text-lg text-cloud-800">Solution Design</h3>
                        <p className="text-gray-600">Our architects design a custom solution that meets your needs while following Salesforce best practices.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full cloud-gradient flex items-center justify-center text-white font-bold">3</div>
                      <div className="ml-4">
                        <h3 className="font-heading font-semibold text-lg text-cloud-800">Development & Testing</h3>
                        <p className="text-gray-600">We develop and rigorously test your custom solution in a sandbox environment.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full cloud-gradient flex items-center justify-center text-white font-bold">4</div>
                      <div className="ml-4">
                        <h3 className="font-heading font-semibold text-lg text-cloud-800">Deployment & Training</h3>
                        <p className="text-gray-600">We deploy your solution and provide comprehensive training for your team.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center">
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

export default CustomSolutionsPage;
