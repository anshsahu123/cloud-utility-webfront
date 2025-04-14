
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useParams, Navigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CaseStudiesPage = () => {
  const { industryType } = useParams();
  const defaultTab = industryType || "manufacturing";
  
  // Validate if the industry type is valid
  const validIndustries = ["manufacturing", "healthcare", "financial-services"];
  if (industryType && !validIndustries.includes(industryType)) {
    return <Navigate to="/case-studies/manufacturing" replace />;
  }

  const manufacturingCases = [
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
      ]
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
      ]
    }
  ];

  const healthcareCases = [
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
      ]
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
      ]
    }
  ];

  const financialCases = [
    {
      title: "Financial Services Company",
      subtitle: "Wealth Management Platform",
      description: "Developed custom Salesforce solution to handle complex compliance and reporting requirements.",
      result: "Reduced reporting time by 80% and improved data accuracy by 95%",
      challenges: [
        "Highly regulated environment with strict compliance needs",
        "Complex client relationship structures",
        "Legacy systems with data quality issues"
      ],
      solutions: [
        "Implemented Financial Services Cloud with custom security model",
        "Built relationship mapping for households and related entities",
        "Developed automated compliance reporting and documentation"
      ]
    },
    {
      title: "Global Investment Bank",
      subtitle: "Client Relationship Management",
      description: "Created a unified platform for client engagement across investment banking services.",
      result: "37% increase in cross-selling and 45% improvement in client retention",
      challenges: [
        "Siloed client information across banking divisions",
        "Limited visibility into client relationship history",
        "Manual processes for opportunity management"
      ],
      solutions: [
        "Implemented custom Financial Services Cloud solution",
        "Built 360-degree client view with relationship intelligence",
        "Developed automated opportunity tracking and alerts"
      ]
    }
  ];

  const CaseStudyDetail = ({ caseStudy }: { caseStudy: any }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
      <div className="p-8">
        <div className="mb-4 text-sm font-medium text-cloud-600">{caseStudy.subtitle}</div>
        <h3 className="font-heading text-2xl font-bold mb-4 text-cloud-800">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-6">{caseStudy.description}</p>
        
        <div className="bg-cloud-50 p-4 rounded-lg border border-cloud-100 mb-6">
          <p className="font-medium text-cloud-800">Result: {caseStudy.result}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3 text-cloud-700">Challenges</h4>
            <ul className="space-y-2">
              {caseStudy.challenges.map((challenge: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-2 flex-shrink-0 text-xs">!</span>
                  <span className="text-gray-600">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3 text-cloud-700">Solutions</h4>
            <ul className="space-y-2">
              {caseStudy.solutions.map((solution: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2 flex-shrink-0 text-xs">✓</span>
                  <span className="text-gray-600">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <a 
            href="#" 
            className="inline-flex items-center text-cloud-600 hover:text-cloud-700 font-medium"
          >
            View Full Case Study <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-cloud-50 py-24">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cloud-800">
                Case Studies
              </h1>
              <p className="font-sans text-lg text-gray-600">
                Discover how our Salesforce solutions have helped businesses across industries 
                achieve remarkable results and overcome complex challenges.
              </p>
            </div>
            
            <Tabs defaultValue={defaultTab} className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="manufacturing" className="text-sm md:text-base py-3">Manufacturing</TabsTrigger>
                <TabsTrigger value="healthcare" className="text-sm md:text-base py-3">Healthcare</TabsTrigger>
                <TabsTrigger value="financial-services" className="text-sm md:text-base py-3">Financial Services</TabsTrigger>
              </TabsList>
              
              <TabsContent value="manufacturing">
                {manufacturingCases.map((caseStudy, index) => (
                  <CaseStudyDetail key={index} caseStudy={caseStudy} />
                ))}
              </TabsContent>
              
              <TabsContent value="healthcare">
                {healthcareCases.map((caseStudy, index) => (
                  <CaseStudyDetail key={index} caseStudy={caseStudy} />
                ))}
              </TabsContent>
              
              <TabsContent value="financial-services">
                {financialCases.map((caseStudy, index) => (
                  <CaseStudyDetail key={index} caseStudy={caseStudy} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
