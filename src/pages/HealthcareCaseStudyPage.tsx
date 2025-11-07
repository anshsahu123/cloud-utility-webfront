
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthcareCaseStudyPage = () => {
  const caseStudies = [
    {
      title: "Regional Healthcare Provider",
      subtitle: "Patient Engagement Solution",
      description: "Deployed Service Cloud to streamline patient communication and case management for better care coordination.",
      result: "68% reduction in case resolution time and 92% patient satisfaction",
      challenges: [
        "Fragmented patient communication across departments",
        "Manual case routing causing delays in patient care",
        "Limited visibility into patient interaction history"
      ],
      solutions: [
        "Implemented Health Cloud with patient engagement features",
        "Built automated case routing based on specialty and urgency",
        "Developed a 360-degree patient view dashboard"
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Medical Device Manufacturer",
      subtitle: "Sales & Service Integration",
      description: "Created an integrated platform for medical device sales, service, and compliance tracking.",
      result: "41% faster order processing and 53% improvement in compliance documentation",
      challenges: [
        "Strict regulatory compliance requirements",
        "Complex ordering and configuration process",
        "Disconnected sales and service systems"
      ],
      solutions: [
        "Implemented Sales Cloud with CPQ for complex configurations",
        "Built custom compliance documentation processes",
        "Integrated service history with sales opportunities"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
        <section className="bg-cloud-800 py-24 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-blend-overlay bg-opacity-80">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Healthcare Live Projects
              </h1>
              <p className="font-sans text-xl text-cloud-50">
                See how we've helped healthcare organizations enhance patient care 
                and streamline operations with Salesforce solutions.
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
                Ready to Transform Your Healthcare Organization?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Let's discuss how our Salesforce solutions can help you improve patient care, 
                streamline operations, and ensure compliance.
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
                <Link to="/live-projects/manufacturing" className="inline-flex items-center text-cloud-600 hover:text-cloud-700 font-medium">
                  Manufacturing <ArrowRight size={16} className="ml-2" />
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

export default HealthcareCaseStudyPage;
