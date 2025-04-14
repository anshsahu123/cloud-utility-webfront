
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmallBusinessTestimonialsPage = () => {
  const testimonials = [
    {
      quote: "As a small business, we were concerned about the investment in Salesforce, but Cloud Utility showed us how to implement it cost-effectively while still getting powerful results. Their team was attentive to our budget constraints and delivered an excellent solution.",
      author: "Rebecca Martinez",
      position: "Founder & CEO",
      company: "Bright Ideas Marketing",
      industry: "Marketing",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "Cloud Utility helped us implement Sales Cloud in a way that was tailored to our specific needs as a boutique consulting firm. The solution they delivered has helped us nurture client relationships more effectively and increase our repeat business.",
      author: "James Peterson",
      position: "Managing Partner",
      company: "Summit Consulting",
      industry: "Consulting",
      rating: 4,
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "We were impressed by how Cloud Utility was able to deliver enterprise-class Salesforce capabilities at a scale and price point that worked for our small but growing team. Their solution has given us the foundation we need to scale efficiently.",
      author: "Emma Johnson",
      position: "Operations Director",
      company: "Innovative Solutions",
      industry: "Professional Services",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
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
                Small Business Client Testimonials
              </h1>
              <p className="font-sans text-lg text-gray-600">
                See how Cloud Utility has helped small businesses leverage the power of Salesforce 
                to accelerate growth and improve customer relationships, all within budget.
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
                Ready to Transform Your Small Business?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We offer affordable Salesforce solutions designed specifically for small businesses 
                looking to streamline operations and accelerate growth.
              </p>
              <Link to="/contact">
                <Button className="bg-cloud-600 hover:bg-cloud-700 text-white px-8 py-6 text-lg">
                  Schedule a Free Consultation
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
                <Link to="/testimonials/mid-market" className="inline-flex items-center text-cloud-600 hover:text-cloud-700 font-medium">
                  Mid-Market Testimonials <ArrowRight size={16} className="ml-2" />
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

export default SmallBusinessTestimonialsPage;
