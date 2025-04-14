
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseTestimonialsPage = () => {
  const testimonials = [
    {
      quote: "Cloud Utility transformed our sales operations with a tailored Salesforce solution that integrated seamlessly with our complex enterprise systems. The team's expertise and attention to detail exceeded our expectations, and we've seen a significant improvement in our sales productivity and customer engagement metrics.",
      author: "Sarah Johnson",
      position: "VP of Sales",
      company: "Global Tech Industries",
      industry: "Technology",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "As a large manufacturing company with operations in multiple countries, we needed a partner who could help us standardize our Salesforce implementation while respecting regional differences. Cloud Utility delivered a comprehensive solution that has streamlined our processes and provided unprecedented visibility into our global sales pipeline.",
      author: "Robert Chen",
      position: "CIO",
      company: "Precision Manufacturing Corp",
      industry: "Manufacturing",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The custom Salesforce solutions developed by Cloud Utility for our financial services firm helped us navigate complex regulatory requirements while significantly improving our operational efficiency. Their team's deep understanding of both Salesforce and our industry was invaluable.",
      author: "Priya Patel",
      position: "Director of Operations",
      company: "Financial Partners Ltd",
      industry: "Financial Services",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
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
                Enterprise Client Testimonials
              </h1>
              <p className="font-sans text-lg text-gray-600">
                See what our enterprise clients have to say about their experience working with 
                Cloud Utility on Salesforce implementations and solutions.
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
                Ready to Join Our Enterprise Clients?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Our team of Salesforce experts is ready to help your enterprise navigate complex challenges 
                and achieve exceptional results with tailored Salesforce solutions.
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
                <Link to="/testimonials/mid-market" className="inline-flex items-center text-cloud-600 hover:text-cloud-700 font-medium">
                  Mid-Market Testimonials <ArrowRight size={16} className="ml-2" />
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

export default EnterpriseTestimonialsPage;
