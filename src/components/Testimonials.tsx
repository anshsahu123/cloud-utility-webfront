
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  company,
  image
}: { 
  quote: string, 
  author: string, 
  position: string, 
  company: string,
  image: string
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 card-hover">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
        ))}
      </div>
      
      <div className="flex items-start mb-6">
        <div className="text-cloud-600 text-4xl font-serif leading-none mr-2">"</div>
        <p className="text-gray-600 italic font-display">{quote}</p>
        <div className="text-cloud-600 text-4xl font-serif leading-none ml-2">"</div>
      </div>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-cloud-100">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-heading font-semibold text-cloud-800">{author}</p>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cloud Utility transformed our sales operations with a tailored Salesforce solution. The team's expertise and attention to detail exceeded our expectations.",
      author: "Sarah Johnson",
      position: "VP of Sales",
      company: "Global Tech Industries",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Working with Cloud Utility was a game-changer for our customer service team. Our Salesforce implementation was smooth and the results have been impressive.",
      author: "Michael Chen",
      position: "CIO",
      company: "HealthFirst Group",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The custom Salesforce solutions developed by Cloud Utility helped us streamline complex workflows and significantly improved our operational efficiency.",
      author: "Priya Patel",
      position: "Director of Operations",
      company: "Financial Partners Ltd",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Cloud Utility's team took the time to understand our unique challenges and delivered a Salesforce solution that perfectly addresses our needs.",
      author: "David Rodriguez",
      position: "CEO",
      company: "Innovate Manufacturing",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="cloud-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-cloud-800">What Our Clients Say</h2>
          <p className="font-sans text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with Cloud Utility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              quote={testimonial.quote} 
              author={testimonial.author} 
              position={testimonial.position} 
              company={testimonial.company} 
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
