import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, Users, Zap } from 'lucide-react';
import signalLampImg from '@/assets/case-study-signallamp.jpg';
import octopusImg from '@/assets/case-study-octopus.jpg';
import launchpadImg from '@/assets/case-study-launchpad.jpg';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "SignalLamp Health Cloud",
      subtitle: "Healthcare Data Management",
      image: signalLampImg,
      icon: Users,
      description: "Implemented Salesforce Health Cloud for SignalLamp to revolutionize patient data tracking, streamline clinical workflows, and enhance healthcare team collaboration across multiple facilities.",
      result: "68% reduction in patient data retrieval time and 45% improvement in care coordination efficiency",
      challenges: [
        "Fragmented patient data across multiple legacy systems",
        "Limited real-time visibility into patient care workflows",
        "Complex regulatory compliance requirements (HIPAA)",
        "Need for seamless integration with existing EHR systems"
      ],
      solutions: [
        "Deployed Health Cloud with unified patient 360-degree view",
        "Implemented secure data integration with HL7 and FHIR standards",
        "Built custom care coordination tools for clinical teams",
        "Developed automated compliance tracking and audit trails"
      ],
      impact: [
        "Improved patient outcomes through better care coordination",
        "Reduced administrative burden on healthcare staff by 40%",
        "Enhanced patient satisfaction scores by 35%",
        "Achieved full HIPAA compliance with automated monitoring"
      ]
    },
    {
      title: "Octopus Platform",
      subtitle: "Website Development & CMS Integration",
      image: octopusImg,
      icon: Zap,
      description: "Built a dynamic, high-performance website for Octopus Platform with integrated CMS capabilities, enabling easy content management and delivering an exceptional user experience.",
      result: "80% faster content updates and 50% improvement in page load performance",
      challenges: [
        "Static website limiting content flexibility and updates",
        "No centralized content management system",
        "Performance bottlenecks affecting user experience",
        "Need for scalable architecture to support growth"
      ],
      solutions: [
        "Developed modern, responsive website with React and Next.js",
        "Integrated headless CMS for dynamic content management",
        "Implemented CDN and caching strategies for optimal performance",
        "Built intuitive admin interface for non-technical content updates"
      ],
      impact: [
        "Content team can now update website independently",
        "Page load times reduced from 4.5s to 1.2s average",
        "Mobile traffic increased by 60% due to responsive design",
        "SEO rankings improved significantly with technical optimizations"
      ]
    },
    {
      title: "Launchpad – U.S. Government",
      subtitle: "Secure Government Salesforce Solutions",
      image: launchpadImg,
      icon: Shield,
      description: "Delivered a comprehensive Salesforce solution for the U.S. Government's Launchpad project, focusing on scalability, data security, and compliance with federal regulations.",
      result: "100% compliance achieved with FedRAMP standards and 99.99% system uptime",
      challenges: [
        "Stringent federal security and compliance requirements",
        "Need for scalable architecture handling thousands of users",
        "Integration with multiple government legacy systems",
        "Zero tolerance for data breaches or system downtime"
      ],
      solutions: [
        "Implemented Government Cloud with FedRAMP-compliant architecture",
        "Built multi-layer security model with encryption at rest and in transit",
        "Developed custom integrations with secure government APIs",
        "Established comprehensive disaster recovery and backup protocols"
      ],
      impact: [
        "Successfully passed all federal security audits",
        "System handles 10,000+ concurrent users without degradation",
        "Reduced inter-agency data sharing time by 75%",
        "Zero security incidents since deployment"
      ]
    }
  ];

  const CaseStudyDetail = ({ caseStudy, index }: { caseStudy: any; index: number }) => {
    const Icon = caseStudy.icon;
    const isEven = index % 2 === 0;
    
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 hover:shadow-xl transition-shadow">
        <div className={`grid md:grid-cols-2 gap-0 ${isEven ? '' : 'md:grid-flow-dense'}`}>
          <div className={`relative h-64 md:h-auto ${isEven ? '' : 'md:col-start-2'}`}>
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
              <Icon className="w-8 h-8 text-cloud-600" />
            </div>
          </div>
          
          <div className="p-8 md:p-10">
            <div className="mb-3 text-sm font-semibold text-cloud-600 uppercase tracking-wide">{caseStudy.subtitle}</div>
            <h3 className="font-heading text-3xl font-bold mb-4 text-cloud-800">{caseStudy.title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{caseStudy.description}</p>
            
            <div className="bg-gradient-to-r from-cloud-50 to-cloud-100 p-5 rounded-xl border-l-4 border-cloud-500 mb-8">
              <p className="font-semibold text-cloud-800 text-lg">📊 {caseStudy.result}</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-heading text-lg font-bold mb-3 text-cloud-800 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Challenges
                </h4>
                <ul className="space-y-2">
                  {caseStudy.challenges.map((challenge: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3 flex-shrink-0 text-xs mt-0.5">!</span>
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-heading text-lg font-bold mb-3 text-cloud-800 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Solutions
                </h4>
                <ul className="space-y-2">
                  {caseStudy.solutions.map((solution: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0 text-xs mt-0.5">✓</span>
                      <span className="text-gray-600">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-lg font-bold mb-3 text-cloud-800 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Impact
                </h4>
                <ul className="space-y-2">
                  {caseStudy.impact.map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 text-xs mt-0.5">★</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-cloud-50 to-white py-24">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cloud-800">
                Our Success Stories
              </h1>
              <p className="font-sans text-xl text-gray-600 leading-relaxed">
                Real projects, real impact. Explore how we've helped organizations transform their operations 
                with innovative Salesforce solutions and cutting-edge technology.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyDetail key={index} caseStudy={caseStudy} index={index} />
              ))}
            </div>

            <div className="text-center mt-16 pt-16 border-t border-gray-200">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-cloud-800">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with tailored Salesforce solutions.
              </p>
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="bg-cloud-600 hover:bg-cloud-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all hover:shadow-lg"
              >
                Get Started Today <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
