import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Shield, Users, Zap, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
      <article className="bg-card rounded-2xl border border-border overflow-hidden mb-16 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className={`grid md:grid-cols-2 gap-0 ${isEven ? '' : 'md:grid-flow-dense'}`}>
          {/* Image Section */}
          <div className={`relative h-80 md:h-auto overflow-hidden ${isEven ? '' : 'md:col-start-2'}`}>
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cloud-900/60 via-cloud-900/20 to-transparent"></div>
            <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border">
              <Icon className="w-8 h-8 text-cloud-600" strokeWidth={2} />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-4 py-2 bg-cloud-600 text-white text-sm font-semibold rounded-full shadow-lg">
                {caseStudy.subtitle}
              </span>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-8 md:p-12">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {caseStudy.title}
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {caseStudy.description}
            </p>
            
            {/* Result Highlight */}
            <div className="relative mb-10 p-6 rounded-xl bg-gradient-to-br from-cloud-50 to-cloud-100 border-l-4 border-cloud-600 shadow-sm">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-cloud-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-cloud-600 uppercase tracking-wide mb-1">Key Result</p>
                  <p className="font-semibold text-foreground text-lg leading-snug">
                    {caseStudy.result}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Accordion for Challenges, Solutions, Impact */}
            <Accordion type="single" collapsible className="space-y-4">
              {/* Challenges */}
              <AccordionItem value="challenges" className="border border-border rounded-xl overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-foreground">
                      Challenges
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-3 pt-2">
                    {caseStudy.challenges.map((challenge: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <span className="h-6 w-6 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5 group-hover:bg-red-100 transition-colors">
                          <span className="text-xs font-bold">!</span>
                        </span>
                        <span className="text-muted-foreground leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              {/* Solutions */}
              <AccordionItem value="solutions" className="border border-border rounded-xl overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-foreground">
                      Solutions
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-3 pt-2">
                    {caseStudy.solutions.map((solution: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <span className="h-6 w-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5 group-hover:bg-green-100 transition-colors">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        <span className="text-muted-foreground leading-relaxed">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Impact */}
              <AccordionItem value="impact" className="border border-border rounded-xl overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-foreground">
                      Impact & Results
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-3 pt-2">
                    {caseStudy.impact.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <span className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5 group-hover:bg-blue-100 transition-colors">
                          <span className="text-xs font-bold">★</span>
                        </span>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-background via-cloud-50/30 to-background py-20 md:py-32">
          <div className="cloud-container">
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto mb-24">
              <div className="inline-block mb-6 px-6 py-2 bg-cloud-600/10 text-cloud-700 rounded-full text-sm font-semibold uppercase tracking-wide border border-cloud-200">
                Client Success Stories
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Real Projects,<br />Real Impact
              </h1>
              <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Explore how we've helped organizations transform their operations with innovative 
                Salesforce solutions and cutting-edge technology.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyDetail key={index} caseStudy={caseStudy} index={index} />
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-24 pt-16 border-t border-border">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  Let's discuss how we can help transform your business with tailored Salesforce solutions 
                  that deliver measurable results and lasting impact.
                </p>
                <button 
                  onClick={() => window.location.href = '/#contact'}
                  className="group bg-cloud-600 hover:bg-cloud-700 text-white px-10 py-5 rounded-xl font-semibold inline-flex items-center gap-3 transition-all hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  Get Started Today 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
