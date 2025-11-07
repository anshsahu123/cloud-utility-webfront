
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManufacturingCaseStudyPage = () => {
  const caseStudies = [
    {
      title: "Global Manufacturing Firm",
      subtitle: "Sales Cloud Implementation",
      description: "Implemented a unified Sales Cloud solution across 12 countries, integrating with existing ERP systems.",
      result: "47% increase in sales productivity and 35% faster quote-to-cash cycle",
      challenges: [
        "Operating in 12 countries with different sales processes",
        "Legacy ERP systems with limited integration capabilities",
        "Lack of standardized sales reporting across regions"
      ],
      solutions: [
        "Implemented Sales Cloud with regionalized configurations",
        "Built custom API integrations with SAP and other ERP systems",
        "Developed standardized dashboards and reports for global visibility"
      ],
      image: "https://images.unsplash.com/photo-1530939027401-ab95738c8a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Precision Parts Manufacturer",
      subtitle: "Service Cloud & Field Service",
      description: "Deployed an integrated service solution to manage complex equipment maintenance and support workflows.",
      result: "63% reduction in service response time and 28% increase in first-time fix rate",
      challenges: [
        "Complex equipment service requirements",
        "Distributed field service teams across multiple locations",
        "Paper-based service documentation process"
      ],
      solutions: [
        "Implemented Service Cloud with Field Service Lightning",
        "Deployed mobile solutions for field technicians",
        "Developed custom maintenance scheduling algorithms"
      ],
      image: "https://images.unsplash.com/photo-1581091921178-a7988ba27031?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const CaseStudyDetail = ({ caseStudy, index }: { caseStudy: any, index: number }) => (
    <div className={`py-16 ${index % 2 === 1 ? 'bg-cloud-50' : ''}`}>
      <div className="cloud-container">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className={`${index % 2 === 1 ? 'order-2' : 'order-1'} p-8 md:p-10`}>
              <div className="mb-4 text-sm font-medium text-cloud-600">{caseStudy.subtitle}</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-cloud-800">{caseStudy.title}</h2>
              <p className="text-gray-600 mb-6">{caseStudy.description}</p>
              
              <div className="bg-cloud-50 p-4 rounded-lg border border-cloud-100 mb-6">
                <p className="font-medium text-cloud-800">Result: {caseStudy.result}</p>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-cloud-700">Challenges</h3>
                  <ul className="space-y-2">
                    {caseStudy.challenges.map((challenge: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <XCircle size={18} className="text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-cloud-700">Solutions</h3>
                  <ul className="space-y-2">
                    {caseStudy.solutions.map((solution: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-cloud-600 hover:bg-cloud-700 text-white">
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
            </div>
            <div className={`${index % 2 === 1 ? 'order-1' : 'order-2'} bg-gray-100`}>
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-cloud-800 py-24 bg-[url('https://images.unsplash.com/photo-1531986379973-aaf67e220881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-blend-overlay bg-opacity-80">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Manufacturing Live Projects
              </h1>
              <p className="font-sans text-xl text-cloud-50">
                See how we've helped manufacturing companies transform their operations with 
                Salesforce solutions, driving efficiency and growth.
              </p>
            </div>
          </div>
        </section>

        {caseStudies.map((caseStudy, index) => (
          <CaseStudyDetail key={index} caseStudy={caseStudy} index={index} />
        ))}

        <section className="py-16 bg-cloud-50">
          <div className="cloud-container">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold mb-6 text-cloud-800">
                Ready to Transform Your Manufacturing Operations?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Let's discuss how our Salesforce solutions can help you streamline processes, 
                increase efficiency, and drive growth for your manufacturing business.
              </p>
              <Link to="/contact">
                <Button className="bg-cloud-600 hover:bg-cloud-700 text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="cloud-container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2 text-cloud-800">
                  Explore More Live Projects
                </h3>
                <p className="text-gray-600">
                  See how we've helped businesses across various industries
                </p>
              </div>
              <div className="flex space-x-4 mt-6 md:mt-0">
                <Link to="/live-projects/healthcare" className="inline-flex items-center text-cloud-600 hover:text-cloud-700 font-medium">
                  Healthcare <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/live-projects/financial-services" className="inline-flex items-center text-cloud-600 hover:text-cloud-700 font-medium">
                  Financial Services <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ManufacturingCaseStudyPage;
