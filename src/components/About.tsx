
import React from 'react';
import { Award, Briefcase, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "250+", label: "Clients Served" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="cloud-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-cloud-800">
              Your Trusted Partner in Salesforce Excellence
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-6">
              At Cloud Utility, we specialize in delivering high-impact Salesforce solutions that drive business growth and operational excellence. 
              Our team of certified Salesforce experts brings years of experience across industries to solve your most complex business challenges.
            </p>
          
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-8 h-8 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-white" size={16} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-cloud-800 text-lg">Industry Expertise</h3>
                  <p className="text-gray-600">
                    Deep domain knowledge across financial services, healthcare, retail, manufacturing, and more.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-8 h-8 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={16} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-cloud-800 text-lg">Certified Experts</h3>
                  <p className="text-gray-600">
                    Team of certified Salesforce consultants, developers, and architects dedicated to your success.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-8 h-8 rounded-full cloud-gradient flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-white" size={16} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-cloud-800 text-lg">Proven Results</h3>
                  <p className="text-gray-600">
                    Track record of delivering solutions that drive measurable business outcomes and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-cloud-50 rounded-xl p-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-cloud-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
