
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Shield, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden hero-gradient text-white py-20 md:py-32">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/5 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-white/5 animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}>
        </div>
      </div>

      <div className="cloud-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-white/20 rounded-full blur-md"></div>
              <div className="relative bg-white/10 p-4 rounded-full">
                <Cloud size={36} className="text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Elevate Your Business with <span className="relative inline-block">
              <span className="relative z-10">Salesforce</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-cloud-400/30 -rotate-1"></span>
            </span> Solutions
          </h1>
          
          <p className="font-sans text-xl md:text-2xl mb-8 text-cloud-50">
            Custom Salesforce implementations tailored to your unique business challenges.
            Drive growth, boost efficiency, and transform customer experiences.
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-cloud-800 hover:bg-cloud-50 font-medium group">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 font-medium">
              Schedule a Consultation
            </Button>
          </div> */}
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-center">
                <Cloud className="text-white mb-2" size={24} />
              </div>
              <h3 className="font-heading font-medium text-lg">Certified Experts</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-center">
                <Shield className="text-white mb-2" size={24} />
              </div>
              <h3 className="font-heading font-medium text-lg">Secure Solutions</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-center">
                <BarChart className="text-white mb-2" size={24} />
              </div>
              <h3 className="font-heading font-medium text-lg">Measurable Results</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
