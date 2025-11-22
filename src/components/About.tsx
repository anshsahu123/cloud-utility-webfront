
import React from 'react';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="cloud-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-cloud-800">About Cloud Utility</h2>
          <p className="font-sans text-lg text-gray-600">
            We're a team of Salesforce experts dedicated to transforming businesses through innovative cloud solutions
                Your trusted partner in Salesforce excellence, delivering high-impact solutions 
                that drive business growth and operational efficiency.
          </p>
        </div>
        
        {/* Team Collaboration Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="font-display text-2xl font-bold mb-4 text-cloud-800">Our Team</h3>
            <p className="text-gray-600 mb-6">
              Our team of certified Salesforce professionals brings together decades of combined experience across industries and specialties. We're problem-solvers, innovators, and trusted advisors who are passionate about helping our clients succeed.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                <Users className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-cloud-800">Collaborative Approach</h4>
                <p className="text-gray-600">We work closely with your team to understand your unique needs.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                <Award className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-cloud-800">Certified Experts</h4>
                <p className="text-gray-600">Our team holds multiple Salesforce certifications across all clouds.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 bg-cloud-50 rounded-xl p-8 shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Team Collaboration" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
        
        {/* Vision & Values Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-cloud-50 rounded-xl p-8 shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
              alt="Our Vision" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-cloud-800">Our Vision & Values</h3>
            <p className="text-gray-600 mb-6">
              At Cloud Utility, we envision a world where businesses of all sizes can harness the full power of Salesforce to transform their operations and drive exceptional growth.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                <Lightbulb className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-cloud-800">Innovation</h4>
                <p className="text-gray-600">We constantly explore new ways to solve complex business challenges.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-cloud-800">Client Success</h4>
                <p className="text-gray-600">Your success is our success - we're invested in your long-term growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
