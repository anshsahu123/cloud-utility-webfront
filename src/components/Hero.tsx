
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden hero-gradient text-white py-20 md:py-32">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/5 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-white/5 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="cloud-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Elevate Your Business with Salesforce Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cloud-50">
            Custom Salesforce implementations tailored to your unique business challenges.
            Drive growth, boost efficiency, and transform customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg px-8 py-6 bg-white text-cloud-800 hover:bg-cloud-50 font-medium">
              Explore Services
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 font-medium">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
