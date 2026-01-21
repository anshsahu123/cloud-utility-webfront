import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";
import termsHeroImage from "@/assets/terms-hero.jpg";

const TermsAndConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using Cloud Utility's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.`
    },
    {
      title: "2. Services Description",
      content: `Cloud Utility provides Salesforce consulting, implementation, and development services including but not limited to Sales Cloud, Service Cloud, custom solutions, and internship programs. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.`
    },
    {
      title: "3. User Responsibilities",
      content: `Users agree to provide accurate and complete information when using our services or submitting applications. You are responsible for maintaining the confidentiality of any account credentials and for all activities under your account. You agree not to use our services for any unlawful purpose or in violation of any applicable laws.`
    },
    {
      title: "4. Intellectual Property",
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of Cloud Utility and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.`
    },
    {
      title: "5. Internship Program Terms",
      content: `Participation in our internship program is subject to acceptance and availability. Interns must complete assigned tasks and maintain professional conduct. We reserve the right to terminate internship participation for violation of program guidelines. Certificates and letters of recommendation are issued at our discretion based on performance.`
    },
    {
      title: "6. Confidentiality",
      content: `During the course of using our services or participating in our programs, you may have access to confidential information. You agree to maintain the confidentiality of such information and not disclose it to any third party without prior written consent.`
    },
    {
      title: "7. Limitation of Liability",
      content: `Cloud Utility shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.`
    },
    {
      title: "8. Payment Terms",
      content: `For paid services, payment terms will be specified in individual service agreements. All fees are non-refundable unless otherwise stated. We reserve the right to modify our pricing with reasonable notice.`
    },
    {
      title: "9. Termination",
      content: `We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.`
    },
    {
      title: "10. Governing Law",
      content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.`
    },
    {
      title: "11. Changes to Terms",
      content: `We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new Terms.`
    },
    {
      title: "12. Contact Information",
      content: `For any questions regarding these Terms and Conditions, please contact us at info@cloudutility.in or through our contact page.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={termsHeroImage} 
            alt="Business agreement and partnership" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 backdrop-blur-sm mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms and Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Welcome to Cloud Utility. These Terms and Conditions govern your use of our website 
                  and services. By accessing or using our services, you agree to be bound by these terms.
                </p>

                <Separator className="my-8" />

                {sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                    {index < sections.length - 1 && <Separator className="mt-8" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h3 className="font-semibold text-foreground mb-2">
                Questions about our Terms?
              </h3>
              <p className="text-muted-foreground text-sm">
                If you have any questions or concerns about these Terms and Conditions, 
                please don't hesitate to reach out to our team. We're here to help clarify 
                any aspects of our policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
