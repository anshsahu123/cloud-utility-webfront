
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const MidMarketTestimonialsPage = () => {
  const testimonials = [
    {
      quote: "Cloud Utility's team took the time to understand our unique challenges as a growing healthcare provider and delivered a Salesforce solution that perfectly addresses our needs. Their implementation has helped us improve patient engagement while streamlining our internal processes.",
      author: "David Rodriguez",
      position: "CEO",
      company: "Allied Healthcare Group",
      industry: "Healthcare",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "We selected Cloud Utility to help us modernize our sales and service processes, and they delivered beyond our expectations. Their Salesforce implementation has given us the scalability we needed to support our rapid growth while improving our customer experience.",
      author: "Jennifer Thompson",
      position: "Director of Sales",
      company: "Velocity Software",
      industry: "Software",
      rating: 4,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "Working with Cloud Utility was a game-changer for our retail business. Their Salesforce implementation unified our customer data across online and physical stores, giving us insights that have helped us increase customer loyalty and lifetime value.",
      author: "Michael Wilson",
      position: "CTO",
      company: "Urban Retail Group",
      industry: "Retail",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-cloud-50 py-24">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cloud-800">
                Mid-Market Client Testimonials
              </h1>
              <p className="font-sans text-lg text-gray-600">
                Discover how Cloud Utility has helped mid-sized businesses transform their operations 
                and drive growth with tailored Salesforce solutions.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-8 mb-10 relative">
                  <div className="absolute -top-6 right-8 text-cloud-100">
                    <Quote size={80} className="fill-cloud-50" />
                  </div>
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} mr-1`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8 italic text-lg relative z-10">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-cloud-100">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-cloud-800 text-lg">{testimonial.author}</p>
                      <p className="text-cloud-600">{testimonial.position}, {testimonial.company}</p>
                      <p className="text-sm text-gray-500">Industry: {testimonial.industry}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h3 className="font-heading text-2xl font-bold mb-6 text-cloud-800">
                Ready to Scale Your Business with Salesforce?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Our mid-market Salesforce solutions are designed to give you the tools and insights 
                you need to accelerate growth and improve customer engagement.
              </p>
              <Link to="/contact">
                <Button className="bg-cloud-600 hover:bg-cloud-700 text-white px-8 py-6 text-lg">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="cloud-container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2 text-cloud-800">
                  Explore More Testimonials
                </h3>
                <p className="text-gray-600">
                  See what clients of all sizes have to say about working with us
                </p>
              </div>
              <div className="flex space-x-6 mt-6 md:mt-0">
                <Link to="/testimonials/enterprise" className="inline-flex items-center text-cloud-600 hover:text-cloud-700 font-medium">
                  Enterprise Testimonials <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/testimonials/small-business" className="inline-flex items-center text-cloud-600 hover:text-cloud-700 font-medium">
                  Small Business Testimonials <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MidMarketTestimonialsPage;
