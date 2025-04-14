
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star } from 'lucide-react';
import { useParams, Navigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TestimonialsPage = () => {
  const { clientType } = useParams();
  const defaultTab = clientType || "enterprise";
  
  // Validate if the client type is valid
  const validTypes = ["enterprise", "mid-market", "small-business"];
  if (clientType && !validTypes.includes(clientType)) {
    return <Navigate to="/testimonials/enterprise" replace />;
  }

  const enterpriseTestimonials = [
    {
      quote: "Cloud Utility transformed our sales operations with a tailored Salesforce solution that integrated seamlessly with our complex enterprise systems. The team's expertise and attention to detail exceeded our expectations, and we've seen a significant improvement in our sales productivity and customer engagement metrics.",
      author: "Sarah Johnson",
      position: "VP of Sales",
      company: "Global Tech Industries",
      industry: "Technology",
      rating: 5,
      image: "https://placehold.co/150x150"
    },
    {
      quote: "As a large manufacturing company with operations in multiple countries, we needed a partner who could help us standardize our Salesforce implementation while respecting regional differences. Cloud Utility delivered a comprehensive solution that has streamlined our processes and provided unprecedented visibility into our global sales pipeline.",
      author: "Robert Chen",
      position: "CIO",
      company: "Precision Manufacturing Corp",
      industry: "Manufacturing",
      rating: 5,
      image: "https://placehold.co/150x150"
    },
    {
      quote: "The custom Salesforce solutions developed by Cloud Utility for our financial services firm helped us navigate complex regulatory requirements while significantly improving our operational efficiency. Their team's deep understanding of both Salesforce and our industry was invaluable.",
      author: "Priya Patel",
      position: "Director of Operations",
      company: "Financial Partners Ltd",
      industry: "Financial Services",
      rating: 5,
      image: "https://placehold.co/150x150"
    }
  ];

  const midMarketTestimonials = [
    {
      quote: "Cloud Utility's team took the time to understand our unique challenges as a growing healthcare provider and delivered a Salesforce solution that perfectly addresses our needs. Their implementation has helped us improve patient engagement while streamlining our internal processes.",
      author: "David Rodriguez",
      position: "CEO",
      company: "Allied Healthcare Group",
      industry: "Healthcare",
      rating: 5,
      image: "https://placehold.co/150x150"
    },
    {
      quote: "We selected Cloud Utility to help us modernize our sales and service processes, and they delivered beyond our expectations. Their Salesforce implementation has given us the scalability we needed to support our rapid growth while improving our customer experience.",
      author: "Jennifer Thompson",
      position: "Director of Sales",
      company: "Velocity Software",
      industry: "Software",
      rating: 4,
      image: "https://placehold.co/150x150"
    },
    {
      quote: "Working with Cloud Utility was a game-changer for our retail business. Their Salesforce implementation unified our customer data across online and physical stores, giving us insights that have helped us increase customer loyalty and lifetime value.",
      author: "Michael Wilson",
      position: "CTO",
      company: "Urban Retail Group",
      industry: "Retail",
      rating: 5,
      image: "https://placehold.co/150x150"
    }
  ];

  const smallBusinessTestimonials = [
    {
      quote: "As a small business, we were concerned about the investment in Salesforce, but Cloud Utility showed us how to implement it cost-effectively while still getting powerful results. Their team was attentive to our budget constraints and delivered an excellent solution.",
      author: "Rebecca Martinez",
      position: "Founder & CEO",
      company: "Bright Ideas Marketing",
      industry: "Marketing",
      rating: 5,
      image: "https://placehold.co/150x150"
    },
    {
      quote: "Cloud Utility helped us implement Sales Cloud in a way that was tailored to our specific needs as a boutique consulting firm. The solution they delivered has helped us nurture client relationships more effectively and increase our repeat business.",
      author: "James Peterson",
      position: "Managing Partner",
      company: "Summit Consulting",
      industry: "Consulting",
      rating: 4,
      image: "https://placehold.co/150x150"
    },
    {
      quote: "We were impressed by how Cloud Utility was able to deliver enterprise-class Salesforce capabilities at a scale and price point that worked for our small but growing team. Their solution has given us the foundation we need to scale efficiently.",
      author: "Emma Johnson",
      position: "Operations Director",
      company: "Innovative Solutions",
      industry: "Professional Services",
      rating: 5,
      image: "https://placehold.co/150x150"
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="bg-white rounded-xl shadow-md p-8 mb-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
            <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} mr-1`} 
              />
            ))}
          </div>
          <p className="text-gray-600 mb-6 italic font-display text-lg">"{testimonial.quote}"</p>
          <div>
            <p className="font-heading font-semibold text-cloud-800 text-lg">{testimonial.author}</p>
            <p className="text-cloud-600">{testimonial.position}, {testimonial.company}</p>
            <p className="text-sm text-gray-500">Industry: {testimonial.industry}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-cloud-50 py-24">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cloud-800">
                Client Testimonials
              </h1>
              <p className="font-sans text-lg text-gray-600">
                Don't just take our word for it. Here's what our clients have to say about 
                working with Cloud Utility on their Salesforce implementations.
              </p>
            </div>
            
            <Tabs defaultValue={defaultTab} className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="enterprise" className="text-sm md:text-base py-3">Enterprise</TabsTrigger>
                <TabsTrigger value="mid-market" className="text-sm md:text-base py-3">Mid-Market</TabsTrigger>
                <TabsTrigger value="small-business" className="text-sm md:text-base py-3">Small Business</TabsTrigger>
              </TabsList>
              
              <TabsContent value="enterprise">
                {enterpriseTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </TabsContent>
              
              <TabsContent value="mid-market">
                {midMarketTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </TabsContent>
              
              <TabsContent value="small-business">
                {smallBusinessTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
