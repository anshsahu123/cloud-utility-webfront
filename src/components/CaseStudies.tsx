
import React from 'react';
import { ArrowRight, BarChart2, TrendingUp, CheckSquare } from 'lucide-react';

const CaseStudyCard = ({ 
  title, 
  industry, 
  description, 
  result,
  icon: Icon 
}: { 
  title: string, 
  industry: string, 
  description: string, 
  result: string,
  icon: any
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
      <div className="h-48 bg-gradient-to-r from-cloud-400 to-cloud-600 flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')] bg-center bg-cover"></div>
        <div className="text-white text-lg font-semibold z-10 flex flex-col items-center">
          <Icon size={48} className="mb-3" />
          {industry}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-cloud-500 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
        
        <div className="mt-8 border-l-4 border-cloud-500 pl-4 bg-cloud-50 p-3 rounded-r-md">
          <p className="font-medium text-cloud-800">Result: {result}</p>
        </div>
        <div className="mt-6">
          <a 
            href="#" 
            className="inline-flex items-center text-cloud-600 hover:text-cloud-700 font-medium"
          >
            View Case Study <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: BarChart2,
      title: "Global Manufacturing Firm",
      industry: "Manufacturing",
      description: "Implemented a unified Sales Cloud solution across 12 countries, integrating with existing ERP systems.",
      result: "47% increase in sales productivity and 35% faster quote-to-cash cycle"
    },
    {
      icon: TrendingUp,
      title: "Regional Healthcare Provider",
      industry: "Healthcare",
      description: "Deployed Service Cloud to streamline patient communication and case management for better care coordination.",
      result: "68% reduction in case resolution time and 92% patient satisfaction"
    },
    {
      icon: CheckSquare,
      title: "Financial Services Company",
      industry: "Financial Services",
      description: "Developed custom Salesforce solution to handle complex compliance and reporting requirements.",
      result: "Reduced reporting time by 80% and improved data accuracy by 95%"
    }
  ];

  return (
    <section id="live-projects" className="section-padding bg-gray-50">
      <div className="cloud-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-cloud-800">Live Projects</h2>
          <p className="font-sans text-lg text-gray-600">
            Discover how our Salesforce solutions have helped businesses across industries achieve remarkable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard 
              key={index} 
              icon={caseStudy.icon}
              title={caseStudy.title} 
              industry={caseStudy.industry} 
              description={caseStudy.description} 
              result={caseStudy.result} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
