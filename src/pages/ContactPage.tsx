
import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-cloud-50 py-24">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-cloud-800">
                Contact Us
              </h1>
              <p className="font-sans text-lg text-gray-600">
                Have questions about our Salesforce services? Ready to start your digital transformation journey?
                Reach out to our team of experts today.
              </p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
