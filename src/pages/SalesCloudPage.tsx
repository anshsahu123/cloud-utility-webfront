
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, BarChart2, LineChart, TrendingUp, Target, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const SalesCloudPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-cloud-50 py-24">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cloud-800">
                Sales Cloud Solutions
              </h1>
              <p className="font-sans text-lg text-gray-600">
                Transform your sales process with Salesforce Sales Cloud, designed to help you close more deals, faster.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="cloud-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-cloud-800">
                  Accelerate Your Sales Cycle
                </h2>
                <p className="text-gray-600 mb-6">
                  Sales Cloud gives your team the tools they need to work smarter and more efficiently. 
                  From lead management to opportunity tracking and advanced analytics, our Sales Cloud 
                  solutions are designed to streamline your entire sales process.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Reduce your sales cycle by up to 30%",
                    "Increase sales productivity by 25%",
                    "Improve forecast accuracy by 42%",
                    "Gain 360° visibility into your pipeline"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-cloud-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button className="bg-cloud-600 hover:bg-cloud-700 text-white">
                    Request a Demo
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Sales Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-cloud-50">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4 text-cloud-800">
                Key Features
              </h2>
              <p className="text-gray-600">
                Our Sales Cloud implementation provides everything you need to manage your entire sales cycle
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart2 size={28} />,
                  title: "Lead Management",
                  description: "Capture, track, and nurture leads through your sales pipeline with automated routing and scoring."
                },
                {
                  icon: <TrendingUp size={28} />,
                  title: "Opportunity Tracking",
                  description: "Manage deals from qualification to close with customizable stages tailored to your sales process."
                },
                {
                  icon: <LineChart size={28} />,
                  title: "Sales Forecasting",
                  description: "Generate accurate forecasts with real-time visibility into your team's pipeline and performance."
                },
                {
                  icon: <Target size={28} />,
                  title: "Territory Management",
                  description: "Optimize territory assignments to maximize coverage and minimize conflicts between sales reps."
                },
                {
                  icon: <HeartHandshake size={28} />,
                  title: "Account Management",
                  description: "Build stronger relationships with a complete view of customer interactions and account history."
                },
                {
                  icon: <BarChart2 size={28} />,
                  title: "Advanced Analytics",
                  description: "Gain actionable insights with customizable dashboards and reports to track KPIs and performance."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="w-12 h-12 mb-6 cloud-gradient rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-cloud-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="cloud-container">
            <div className="bg-cloud-600 rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-12 text-white">
                  <h2 className="font-heading text-3xl font-bold mb-6">
                    Ready to Transform Your Sales Process?
                  </h2>
                  <p className="mb-8 text-cloud-50">
                    Our team of certified Salesforce consultants is ready to help you implement
                    Sales Cloud and optimize it for your unique business needs.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-white text-cloud-600 hover:bg-cloud-50">
                      Contact Us Today
                    </Button>
                  </Link>
                </div>
                <div className="bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center hidden md:block">
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

export default SalesCloudPage;
