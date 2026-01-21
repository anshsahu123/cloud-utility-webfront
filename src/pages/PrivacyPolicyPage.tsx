import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Lock, UserCheck, Database, Bell, Globe, Mail } from "lucide-react";
import privacyHeroImage from "@/assets/privacy-hero.jpg";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Database,
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us, including:
      
      • Personal Information: Name, email address, phone number, and other contact details when you fill out forms or contact us.
      • Professional Information: Resume, educational background, skills, and work experience when applying for internships or positions.
      • Account Information: Username and password if you create an account with us.
      • Communication Data: Messages, feedback, and correspondence you send to us.
      • Usage Data: Information about how you interact with our website, including pages visited, time spent, and navigation patterns.`
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      content: `We use the information we collect for various purposes:
      
      • To provide, maintain, and improve our services
      • To process internship applications and communicate with applicants
      • To respond to your inquiries and provide customer support
      • To send you updates, newsletters, and marketing communications (with your consent)
      • To analyze usage patterns and optimize our website performance
      • To detect, prevent, and address technical issues or security threats
      • To comply with legal obligations and enforce our terms`
    },
    {
      icon: Lock,
      title: "3. Data Security",
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
      
      • Encryption of data in transit and at rest
      • Regular security assessments and audits
      • Access controls and authentication mechanisms
      • Employee training on data protection practices
      
      However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      icon: UserCheck,
      title: "4. Your Rights and Choices",
      content: `You have several rights regarding your personal information:
      
      • Access: Request a copy of the personal data we hold about you
      • Correction: Request correction of inaccurate or incomplete data
      • Deletion: Request deletion of your personal data (subject to legal requirements)
      • Portability: Request transfer of your data to another service provider
      • Opt-out: Unsubscribe from marketing communications at any time
      • Restriction: Request limitation of processing in certain circumstances
      
      To exercise these rights, please contact us using the information provided below.`
    },
    {
      icon: Globe,
      title: "5. Cookies and Tracking Technologies",
      content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include:
      
      • Essential Cookies: Required for basic website functionality
      • Analytics Cookies: Help us understand how visitors interact with our website
      • Marketing Cookies: Used to deliver relevant advertisements (if applicable)
      
      You can manage your cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.`
    },
    {
      icon: Shield,
      title: "6. Third-Party Services",
      content: `We may use third-party services that collect, monitor, and analyze data to improve our services. These third parties have their own privacy policies governing the use of your information:
      
      • Analytics providers (e.g., Google Analytics)
      • Email service providers
      • Cloud hosting services
      • Customer relationship management tools
      
      We encourage you to review the privacy policies of these third-party services.`
    },
    {
      icon: Bell,
      title: "7. Data Retention",
      content: `We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including:
      
      • Active service relationships: Duration of your engagement with us
      • Internship applications: Up to 2 years for consideration in future opportunities
      • Legal compliance: As required by applicable laws and regulations
      • Dispute resolution: As necessary to resolve any disputes
      
      After the retention period, we securely delete or anonymize your data.`
    },
    {
      icon: Mail,
      title: "8. Contact Us",
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
      
      Email: info@cloudutility.in
      Address: Cloud Utility, India
      
      We will respond to your inquiry within a reasonable timeframe and work to address any concerns you may have.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={privacyHeroImage} 
            alt="Privacy and security concept" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 backdrop-blur-sm mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  At Cloud Utility, we are committed to protecting your privacy and ensuring the security 
                  of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you visit our website or use our services.
                </p>

                <Separator className="my-8" />

                {sections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <div key={index} className="mb-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-xl font-semibold text-foreground mb-4">
                            {section.title}
                          </h2>
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>
                      </div>
                      {index < sections.length - 1 && <Separator className="mt-8" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h3 className="font-semibold text-foreground mb-2">
                Your Privacy Matters
              </h3>
              <p className="text-muted-foreground text-sm">
                We are committed to transparency about our data practices. If you have any questions 
                about this Privacy Policy or wish to exercise your data rights, please contact our 
                privacy team. We're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
