
import React from 'react';
import { CheckCircle, Database, Users, Zap } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 card-hover">
      <div className="w-12 h-12 mb-6 cloud-gradient rounded-lg flex items-center justify-center">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800">{title}</h3>
      <p className="text-gray-600">{description}</p>

      <div className="mt-6 space-y-2">
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="flex items-center">
            <CheckCircle size={16} className="text-cloud-500 mr-2 flex-shrink-0" />
            <span className="text-sm text-gray-600">Feature {i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Sales Cloud",
      description: "Streamline your sales process, boost productivity, and close more deals with Sales Cloud solutions."
    },
    {
      icon: Users,
      title: "Service Cloud",
      description: "Deliver exceptional customer service with automated workflows and intelligent case management."
    },
    {
      icon: Database,
      title: "Custom Solutions",
      description: "Tailored Salesforce implementations to address your unique business challenges and goals."
    }
  ];

  return (
    <section id="services" className="section-padding bg-cloud-50">
      <div className="cloud-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-cloud-800">Our Salesforce Services</h2>
          <p className="font-sans text-lg text-gray-600">
            Leverage the full potential of Salesforce with our comprehensive suite of services tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
