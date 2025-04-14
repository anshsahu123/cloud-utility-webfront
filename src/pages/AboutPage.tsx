
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Briefcase, TrendingUp, Users, Target, Shield } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: "250+", label: "Clients Served" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-cloud-50 py-24">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cloud-800">
                About Cloud Utility
              </h1>
              <p className="font-sans text-lg text-gray-600">
                Your trusted partner in Salesforce excellence, delivering high-impact solutions 
                that drive business growth and operational efficiency.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16">
          <div className="cloud-container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 mb-6 cloud-gradient rounded-lg flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Our Mission</h2>
                <p className="text-gray-600">
                  At Cloud Utility, our mission is to empower businesses with innovative Salesforce 
                  solutions that drive digital transformation, enhance customer experiences, and 
                  accelerate growth. We are committed to delivering excellence in every project, 
                  focusing on measurable outcomes and long-term client success.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 mb-6 cloud-gradient rounded-lg flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Our Vision</h2>
                <p className="text-gray-600">
                  We envision a future where every organization can harness the full potential of 
                  Salesforce to create seamless, personalized experiences for their customers and 
                  employees. Our goal is to be the most trusted Salesforce partner, known for our 
                  technical expertise, innovation, and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Company Values */}
        <section className="py-16 bg-cloud-50">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold mb-4 text-cloud-800">Our Core Values</h2>
              <p className="font-sans text-lg text-gray-600">
                These principles guide everything we do at Cloud Utility, from how we work with clients 
                to how we develop our team.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-cloud-100 flex items-center justify-center mr-2 text-cloud-600">1</span>
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We are committed to delivering exceptional quality in everything we do, 
                  exceeding expectations and setting new standards in the industry.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-cloud-100 flex items-center justify-center mr-2 text-cloud-600">2</span>
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We continuously seek creative solutions to complex problems, 
                  embracing new technologies and methodologies to drive value.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-cloud-100 flex items-center justify-center mr-2 text-cloud-600">3</span>
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical practices, 
                  building trust through our actions and accountability.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-cloud-100 flex items-center justify-center mr-2 text-cloud-600">4</span>
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  We work closely with our clients as true partners, understanding their 
                  unique challenges and co-creating effective solutions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-cloud-100 flex items-center justify-center mr-2 text-cloud-600">5</span>
                  Continuous Learning
                </h3>
                <p className="text-gray-600">
                  We invest in ongoing education and professional development, 
                  staying at the forefront of Salesforce innovations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-cloud-100 flex items-center justify-center mr-2 text-cloud-600">6</span>
                  Results-Driven
                </h3>
                <p className="text-gray-600">
                  We focus on delivering measurable business outcomes and ROI, 
                  aligning our solutions with our clients' strategic objectives.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold mb-4 text-cloud-800">Our Leadership Team</h2>
              <p className="font-sans text-lg text-gray-600">
                Meet the experienced professionals guiding Cloud Utility's mission to deliver 
                exceptional Salesforce solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 bg-gradient-to-r from-cloud-400 to-cloud-600"></div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-cloud-800">Sarah Johnson</h3>
                  <p className="text-cloud-600 mb-4">Chief Executive Officer</p>
                  <p className="text-gray-600 mb-4">
                    With over 20 years of experience in technology consulting, Sarah leads 
                    Cloud Utility with a focus on innovation and client success.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 bg-gradient-to-r from-cloud-400 to-cloud-600"></div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-cloud-800">Michael Chen</h3>
                  <p className="text-cloud-600 mb-4">Chief Technology Officer</p>
                  <p className="text-gray-600 mb-4">
                    A certified Salesforce Technical Architect with 15+ years of experience 
                    developing enterprise solutions across industries.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-64 bg-gradient-to-r from-cloud-400 to-cloud-600"></div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-cloud-800">Priya Patel</h3>
                  <p className="text-cloud-600 mb-4">VP of Consulting Services</p>
                  <p className="text-gray-600 mb-4">
                    Priya brings 12 years of Salesforce implementation expertise and a 
                    passion for helping clients achieve digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
