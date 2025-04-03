
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudyCard = ({ 
  title, 
  industry, 
  description, 
  result 
}: { 
  title: string, 
  industry: string, 
  description: string, 
  result: string 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
      <div className="h-48 bg-gradient-to-r from-cloud-400 to-cloud-600 flex items-center justify-center">
        <div className="text-white text-lg font-semibold">{industry}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-cloud-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="border-l-4 border-cloud-500 pl-4 bg-cloud-50 p-3 rounded-r-md">
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
      title: "Global Manufacturing Firm",
      industry: "Manufacturing",
      description: "Implemented a unified Sales Cloud solution across 12 countries, integrating with existing ERP systems.",
      result: "47% increase in sales productivity and 35% faster quote-to-cash cycle"
    },
    {
      title: "Regional Healthcare Provider",
      industry: "Healthcare",
      description: "Deployed Service Cloud to streamline patient communication and case management for better care coordination.",
      result: "68% reduction in case resolution time and 92% patient satisfaction"
    },
    {
      title: "Financial Services Company",
      industry: "Financial Services",
      description: "Developed custom Salesforce solution to handle complex compliance and reporting requirements.",
      result: "Reduced reporting time by 80% and improved data accuracy by 95%"
    }
  ];

  return (
    <section id="case-studies" className="section-padding bg-gray-50">
      <div className="cloud-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cloud-800">Case Studies</h2>
          <p className="text-lg text-gray-600">
            Discover how our Salesforce solutions have helped businesses across industries achieve remarkable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard 
              key={index} 
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
