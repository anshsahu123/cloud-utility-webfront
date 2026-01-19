import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Briefcase, GraduationCap, Code, Users, Clock, Award } from "lucide-react";

const FAQsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      icon: Briefcase,
      title: "General Questions",
      faqs: [
        {
          question: "What is Cloud Utility?",
          answer: "Cloud Utility is a leading Salesforce consulting and implementation company. We specialize in Sales Cloud, Service Cloud, custom Salesforce solutions, and offer comprehensive internship programs to help aspiring professionals build their careers in the Salesforce ecosystem."
        },
        {
          question: "What services does Cloud Utility offer?",
          answer: "We offer a wide range of services including Salesforce Sales Cloud implementation, Service Cloud solutions, custom Salesforce development, AI & machine learning integration, data analytics, cloud computing solutions, and professional training programs."
        },
        {
          question: "Where is Cloud Utility located?",
          answer: "Cloud Utility is based in India and serves clients globally. We work with businesses of all sizes, from startups to enterprise-level organizations, providing remote and on-site consulting services."
        },
        {
          question: "How can I contact Cloud Utility?",
          answer: "You can reach us through our contact page, email us at info@cloudutility.in, or connect with us on our social media channels. Our team typically responds within 24-48 business hours."
        }
      ]
    },
    {
      icon: GraduationCap,
      title: "Internship Program",
      faqs: [
        {
          question: "What is the Cloud Utility Internship Program?",
          answer: "Our Industrial Live Internship Program is a comprehensive training initiative where participants work on real industry projects, learn the complete Software Development Life Cycle (SDLC), and gain hands-on experience under the mentorship of industry experts."
        },
        {
          question: "Who is eligible for the internship?",
          answer: "The internship is open to students, fresh graduates, and career changers who are passionate about technology. Basic programming knowledge is beneficial but not mandatory for all domains. We look for enthusiasm, dedication, and willingness to learn."
        },
        {
          question: "What is the duration of the internship?",
          answer: "The internship program typically runs for 2-6 months, depending on the chosen domain and project requirements. We offer both full-time and part-time options to accommodate different schedules."
        },
        {
          question: "Is the internship paid or unpaid?",
          answer: "Our internship program is designed for learning and skill development. While the program itself is training-focused, exceptional performers may receive stipends and have opportunities for full-time employment upon completion."
        },
        {
          question: "What technologies will I learn during the internship?",
          answer: "Depending on your chosen track, you'll learn technologies including Salesforce Development, AI & Machine Learning, Data Science, Cloud Computing, Web & App Development, and Data Analytics. All tracks include hands-on project work."
        },
        {
          question: "Will I receive a certificate after completion?",
          answer: "Yes! Upon successful completion of the internship, you'll receive an Internship Certificate, a Letter of Recommendation (LOR), and a portfolio of projects you've worked on. These credentials are valuable for your career advancement."
        }
      ]
    },
    {
      icon: Code,
      title: "Technical Services",
      faqs: [
        {
          question: "What is Salesforce Sales Cloud?",
          answer: "Sales Cloud is Salesforce's CRM platform designed to streamline sales processes, manage leads and opportunities, automate workflows, and provide actionable insights to boost sales performance and revenue growth."
        },
        {
          question: "What is Salesforce Service Cloud?",
          answer: "Service Cloud is Salesforce's customer service platform that enables businesses to deliver exceptional customer support through multiple channels, case management, knowledge base, and AI-powered service automation."
        },
        {
          question: "Can Cloud Utility help with custom Salesforce development?",
          answer: "Absolutely! We specialize in custom Salesforce development including Apex programming, Lightning Web Components, Visualforce pages, custom integrations, and bespoke solutions tailored to your specific business needs."
        },
        {
          question: "Do you provide Salesforce integration services?",
          answer: "Yes, we offer comprehensive integration services connecting Salesforce with third-party applications, ERPs, marketing platforms, and other business systems using APIs, middleware, and native connectors."
        }
      ]
    },
    {
      icon: Users,
      title: "Working With Us",
      faqs: [
        {
          question: "How do I start a project with Cloud Utility?",
          answer: "Simply reach out through our contact page or email. We'll schedule a discovery call to understand your requirements, provide a detailed proposal, and once approved, begin the implementation process with dedicated project management."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve diverse industries including Healthcare, Financial Services, Manufacturing, Retail, Education, Real Estate, Telecom, Insurance, and more. Our solutions are customized to meet industry-specific requirements and compliance needs."
        },
        {
          question: "Do you offer ongoing support and maintenance?",
          answer: "Yes, we provide comprehensive post-implementation support including system maintenance, user training, troubleshooting, feature enhancements, and regular system health checks to ensure optimal performance."
        },
        {
          question: "What is your project delivery methodology?",
          answer: "We follow agile methodology with iterative development cycles, regular client communication, sprint reviews, and continuous feedback integration. This ensures transparency, flexibility, and on-time delivery of high-quality solutions."
        }
      ]
    },
    {
      icon: Clock,
      title: "Process & Timeline",
      faqs: [
        {
          question: "How long does a typical Salesforce implementation take?",
          answer: "Implementation timelines vary based on project scope. Simple implementations may take 4-8 weeks, while complex enterprise projects can span 3-6 months. We provide detailed timelines during the proposal phase."
        },
        {
          question: "What is your development process?",
          answer: "Our process includes: Discovery & Requirements gathering, Solution Design, Development & Configuration, Testing & QA, User Acceptance Testing, Deployment, Training, and Post-go-live Support."
        },
        {
          question: "How do you handle project changes or scope adjustments?",
          answer: "We maintain flexibility through our agile approach. Change requests are documented, impact-assessed, and implemented with client approval. We ensure transparency about timeline and cost implications of any scope changes."
        }
      ]
    },
    {
      icon: Award,
      title: "Quality & Credentials",
      faqs: [
        {
          question: "Are your consultants Salesforce certified?",
          answer: "Yes, our team consists of Salesforce certified professionals including Administrators, Developers, Architects, and Consultants. We maintain updated certifications across various Salesforce clouds and specializations."
        },
        {
          question: "How do you ensure project quality?",
          answer: "We follow strict quality assurance processes including code reviews, automated testing, manual testing, security audits, performance testing, and adherence to Salesforce best practices and coding standards."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes, we offer comprehensive training programs including end-user training, administrator training, developer training, and custom workshops tailored to your team's needs and skill levels."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services, internship program, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-b border-border/50 last:border-0"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:text-primary py-4 font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. 
                Reach out to us and we'll get back to you as soon as possible.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQsPage;
