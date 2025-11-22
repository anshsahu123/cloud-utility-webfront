import React, { useEffect } from 'react';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Zap, Users, Database, BarChart2, TrendingUp, CheckSquare, Star, ShoppingCart, Briefcase, Code } from 'lucide-react';
import CaseStudiesPage from './CaseStudiesPage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';

const SalesCloudSection = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <div className="flex items-start gap-6 flex-col md:flex-row">
      <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center flex-shrink-0">
        <Zap className="text-white" size={32} />
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Sales Cloud Solutions</h3>
        <p className="text-gray-600 mb-6">
          Streamline your sales process, boost productivity, and close more deals with our 
          comprehensive Sales Cloud solutions. We help you implement and customize Salesforce 
          Sales Cloud to match your unique sales workflow.
        </p>
        
        <h4 className="font-heading text-xl font-semibold mb-3 text-cloud-700">Key Features:</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">1</span>
            <div>
              <p className="font-medium text-cloud-800">Lead Management</p>
              <p className="text-gray-600">Capture, track, and nurture leads through your sales pipeline.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">2</span>
            <div>
              <p className="font-medium text-cloud-800">Opportunity Management</p>
              <p className="text-gray-600">Track deals from qualification to close with customizable stages.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">3</span>
            <div>
              <p className="font-medium text-cloud-800">Sales Forecasting</p>
              <p className="text-gray-600">Gain visibility into your sales pipeline with accurate forecasting tools.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">4</span>
            <div>
              <p className="font-medium text-cloud-800">Reporting & Analytics</p>
              <p className="text-gray-600">Access real-time data with customizable dashboards and reports.</p>
            </div>
          </li>
        </ul>
        
        <div className="mt-8">
          <img 
            src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
            alt="Sales Dashboard" 
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
);

const ServiceCloudSection = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <div className="flex items-start gap-6 flex-col md:flex-row">
      <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center flex-shrink-0">
        <Users className="text-white" size={32} />
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Service Cloud Solutions</h3>
        <p className="text-gray-600 mb-6">
          Deliver exceptional customer service with automated workflows and intelligent case management.
          Our Service Cloud implementations help you transform customer service with faster, smarter support.
        </p>
        
        <h4 className="font-heading text-xl font-semibold mb-3 text-cloud-700">Key Features:</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">1</span>
            <div>
              <p className="font-medium text-cloud-800">Case Management</p>
              <p className="text-gray-600">Efficiently track, prioritize, and resolve customer cases.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">2</span>
            <div>
              <p className="font-medium text-cloud-800">Knowledge Base</p>
              <p className="text-gray-600">Create and share articles to quickly solve common customer issues.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">3</span>
            <div>
              <p className="font-medium text-cloud-800">Omni-Channel Routing</p>
              <p className="text-gray-600">Route cases to the right agent at the right time, across all channels.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">4</span>
            <div>
              <p className="font-medium text-cloud-800">Self-Service Portal</p>
              <p className="text-gray-600">Empower customers to find answers and submit requests on their own.</p>
            </div>
          </li>
        </ul>
        
        <div className="mt-8">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
            alt="Service Cloud Dashboard" 
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
);

const CustomSolutionsSection = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <div className="flex items-start gap-6 flex-col md:flex-row">
      <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center flex-shrink-0">
        <Database className="text-white" size={32} />
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Custom Salesforce Solutions</h3>
        <p className="text-gray-600 mb-6">
          Tailored Salesforce implementations to address your unique business challenges and goals.
          We develop custom applications, integrations, and automation to extend Salesforce functionality.
        </p>
        
        <h4 className="font-heading text-xl font-semibold mb-3 text-cloud-700">Our Custom Services:</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">1</span>
            <div>
              <p className="font-medium text-cloud-800">Apex Development</p>
              <p className="text-gray-600">Custom back-end development with Salesforce's robust programming language.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">2</span>
            <div>
              <p className="font-medium text-cloud-800">Lightning Web Components</p>
              <p className="text-gray-600">Modern, responsive UI components built with the latest web standards.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">3</span>
            <div>
              <p className="font-medium text-cloud-800">Integration Services</p>
              <p className="text-gray-600">Connect Salesforce with your existing systems and third-party applications.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">4</span>
            <div>
              <p className="font-medium text-cloud-800">Data Migration & Management</p>
              <p className="text-gray-600">Clean, migrate, and manage your data for optimal Salesforce performance.</p>
            </div>
          </li>
        </ul>
        
        <div className="mt-8">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="Custom Salesforce Development" 
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
);

const CommerceCloudSection = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <div className="flex items-start gap-6 flex-col md:flex-row">
      <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center flex-shrink-0">
        <ShoppingCart className="text-white" size={32} />
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Commerce Cloud Solutions</h3>
        <p className="text-gray-600 mb-6">
          Create seamless online shopping experiences with our powerful e-commerce solutions built on Salesforce Commerce Cloud. 
          We help you build and optimize digital storefronts that drive conversions and customer loyalty.
        </p>
        
        <h4 className="font-heading text-xl font-semibold mb-3 text-cloud-700">Key Features:</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">1</span>
            <div>
              <p className="font-medium text-cloud-800">Personalized Shopping Experiences</p>
              <p className="text-gray-600">Deliver tailored product recommendations and content based on customer data and behavior.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">2</span>
            <div>
              <p className="font-medium text-cloud-800">AI-Powered Recommendations</p>
              <p className="text-gray-600">Leverage Einstein AI to suggest products that align with customer preferences and buying history.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">3</span>
            <div>
              <p className="font-medium text-cloud-800">Omnichannel Commerce</p>
              <p className="text-gray-600">Create consistent shopping experiences across web, mobile, social, and physical stores.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">4</span>
            <div>
              <p className="font-medium text-cloud-800">Optimized Checkout Process</p>
              <p className="text-gray-600">Streamline the path to purchase with customizable, frictionless checkout flows.</p>
            </div>
          </li>
        </ul>
        
        <div className="mt-8">
          <img 
            src="https://images.unsplash.com/photo-1570857502809-08184874388e" 
            alt="E-commerce Shopping Experience" 
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
        
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-heading text-lg font-semibold mb-2 text-cloud-700">B2C Commerce</h4>
            <p className="text-gray-600">
              Create engaging shopping experiences for consumers with personalized content, 
              promotions, and mobile-first designs that drive conversion.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0" 
              alt="B2C Commerce" 
              className="w-full h-48 object-cover rounded-xl mt-4"
            />
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-2 text-cloud-700">B2B Commerce</h4>
            <p className="text-gray-600">
              Streamline complex business transactions with customer-specific catalogs, 
              pricing, and approval workflows designed for B2B relationships.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623" 
              alt="B2B Commerce" 
              className="w-full h-48 object-cover rounded-xl mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SalesforceConsultingSection = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <div className="flex items-start gap-6 flex-col md:flex-row">
      <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center flex-shrink-0">
        <Briefcase className="text-white" size={32} />
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Salesforce Consulting Services</h3>
        <p className="text-gray-600 mb-6">
          Maximize your Salesforce investment with strategic guidance from our certified consultants. 
          We help you align Salesforce capabilities with your business objectives to drive growth and innovation.
        </p>
        
        <h4 className="font-heading text-xl font-semibold mb-3 text-cloud-700">Our Consulting Approach:</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">1</span>
            <div>
              <p className="font-medium text-cloud-800">Implementation Strategy</p>
              <p className="text-gray-600">Develop a comprehensive roadmap for Salesforce adoption aligned with your business goals.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">2</span>
            <div>
              <p className="font-medium text-cloud-800">Business Process Optimization</p>
              <p className="text-gray-600">Redesign workflows to leverage Salesforce capabilities and increase operational efficiency.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">3</span>
            <div>
              <p className="font-medium text-cloud-800">Change Management</p>
              <p className="text-gray-600">Ensure smooth adoption with strategic communication, training, and organizational alignment.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">4</span>
            <div>
              <p className="font-medium text-cloud-800">ROI Analysis & Optimization</p>
              <p className="text-gray-600">Measure performance and continuously refine your Salesforce implementation for maximum value.</p>
            </div>
          </li>
        </ul>
        
        <div className="mt-8">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
            alt="Salesforce Consulting Session" 
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
        
        <div className="mt-8 bg-cloud-50 p-6 rounded-lg">
          <h4 className="font-heading text-lg font-semibold mb-3 text-cloud-700">Our Consulting Team</h4>
          <p className="text-gray-600 mb-4">
            Our team of certified Salesforce consultants brings decades of combined experience across industries. 
            We pride ourselves on our business-first approach, ensuring that technology serves your strategic objectives.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                alt="Salesforce Consultant" 
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <p className="font-medium text-cloud-800">15+ Certified Consultants</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998" 
                alt="Industry Experience" 
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <p className="font-medium text-cloud-800">Multi-Industry Experience</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093" 
                alt="Business Strategy" 
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <p className="font-medium text-cloud-800">Business-First Approach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SalesforceDevelopmentSection = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <div className="flex items-start gap-6 flex-col md:flex-row">
      <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center flex-shrink-0">
        <Code className="text-white" size={32} />
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Salesforce Development Services</h3>
        <p className="text-gray-600 mb-6">
          Extend the power of Salesforce with custom development that addresses your unique requirements. 
          Our experienced developers create tailored solutions that seamlessly integrate with your Salesforce ecosystem.
        </p>
        
        <h4 className="font-heading text-xl font-semibold mb-3 text-cloud-700">Development Capabilities:</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">1</span>
            <div>
              <p className="font-medium text-cloud-800">Custom App Development</p>
              <p className="text-gray-600">Build bespoke applications on the Salesforce platform to address specific business needs.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">2</span>
            <div>
              <p className="font-medium text-cloud-800">API Integration</p>
              <p className="text-gray-600">Connect Salesforce with external systems and third-party applications through robust APIs.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">3</span>
            <div>
              <p className="font-medium text-cloud-800">Lightning Component Building</p>
              <p className="text-gray-600">Create responsive, reusable UI components that enhance the Salesforce user experience.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="h-6 w-6 rounded-full cloud-gradient flex items-center justify-center text-white font-medium mr-3 flex-shrink-0">4</span>
            <div>
              <p className="font-medium text-cloud-800">Automation Development</p>
              <p className="text-gray-600">Build complex automation solutions using Apex, Flows, and Process Builder.</p>
            </div>
          </li>
        </ul>
        
        <div className="mt-8">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" 
            alt="Salesforce Development" 
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cloud-50 p-5 rounded-lg">
            <h4 className="font-heading text-lg font-semibold mb-2 text-cloud-700">Technology Stack</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center bg-white p-2 rounded-md">
                <span className="w-3 h-3 bg-cloud-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-700">Apex</span>
              </div>
              <div className="flex items-center bg-white p-2 rounded-md">
                <span className="w-3 h-3 bg-cloud-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-700">JavaScript</span>
              </div>
              <div className="flex items-center bg-white p-2 rounded-md">
                <span className="w-3 h-3 bg-cloud-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-700">Lightning Web Components</span>
              </div>
              <div className="flex items-center bg-white p-2 rounded-md">
                <span className="w-3 h-3 bg-cloud-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-700">Visualforce</span>
              </div>
              <div className="flex items-center bg-white p-2 rounded-md">
                <span className="w-3 h-3 bg-cloud-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-700">SOQL/SOSL</span>
              </div>
              <div className="flex items-center bg-white p-2 rounded-md">
                <span className="w-3 h-3 bg-cloud-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-700">REST/SOAP APIs</span>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
              alt="Code on screen" 
              className="w-full h-48 object-cover rounded-xl mt-4"
            />
          </div>
          <div className="bg-cloud-50 p-5 rounded-lg">
            <h4 className="font-heading text-lg font-semibold mb-2 text-cloud-700">Development Methodology</h4>
            <p className="text-gray-600 mb-3">
              We follow Agile development practices with iterative delivery, ensuring you see progress 
              and can provide feedback throughout the development lifecycle.
            </p>
            <div className="space-y-2">
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium text-cloud-800">Sprint Planning</p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-cloud-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium text-cloud-800">Development</p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-cloud-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium text-cloud-800">Testing</p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-cloud-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium text-cloud-800">Deployment</p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-cloud-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12" 
              alt="Development process" 
              className="w-full h-48 object-cover rounded-xl mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ManufacturingCaseStudy = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <div className="flex flex-col">
      <div className="mb-6">
        <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center">
          <BarChart2 className="text-white" size={32} />
        </div>
      </div>
      
      <h3 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Global Manufacturing Firm Case Study</h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-cloud-50 p-4 rounded-lg">
          <h4 className="font-semibold text-cloud-700 mb-2">The Challenge</h4>
          <p className="text-gray-600">
            A global manufacturing company with operations in 12 countries faced challenges with 
            inconsistent sales processes, lack of visibility into the global pipeline, and 
            difficulties integrating with existing ERP systems.
          </p>
        </div>
        
        <div className="bg-cloud-50 p-4 rounded-lg">
          <h4 className="font-semibold text-cloud-700 mb-2">Our Solution</h4>
          <p className="text-gray-600">
            We implemented a unified Sales Cloud solution with custom integrations to connect
            with their existing ERP systems. We standardized sales processes while accommodating
            regional differences and developed custom dashboards for global visibility.
          </p>
        </div>
        
        <div className="bg-cloud-50 p-4 rounded-lg">
          <h4 className="font-semibold text-cloud-700 mb-2">The Results</h4>
          <p className="text-gray-600">
            <strong>47% increase</strong> in sales productivity
            <br />
            <strong>35% faster</strong> quote-to-cash cycle
            <br />
            <strong>98% adoption rate</strong> across all regions
          </p>
        </div>
      </div>
      
      <img 
        src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937" 
        alt="Manufacturing Factory" 
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      
      <div className="bg-cloud-50 p-6 rounded-lg">
        <h4 className="font-semibold text-cloud-700 mb-2">Client Testimonial</h4>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
          ))}
        </div>
        <p className="text-gray-600 italic">
          "Cloud Utility's implementation of Sales Cloud transformed our global sales operations, 
          giving us unprecedented visibility and standardization while respecting regional needs. 
          The integration with our ERP system was seamless, and the results have exceeded our expectations."
        </p>
        <div className="mt-4">
          <p className="font-medium">Robert Chen, CIO</p>
          <p className="text-sm text-gray-500">Precision Manufacturing Corp</p>
        </div>
      </div>
    </div>
  </div>
);

const HealthcareCaseStudy = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <div className="flex flex-col">
      <div className="mb-6">
        <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center">
          <TrendingUp className="text-white" size={32} />
        </div>
      </div>
      
      <h3 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Regional Healthcare Provider Case Study</h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-cloud-50 p-4 rounded-lg">
          <h4 className="font-semibold text-cloud-700 mb-2">The Challenge</h4>
          <p className="text-gray-600">
            A regional healthcare provider struggled with fragmented patient communication, 
            slow case resolution times, and lack of coordination between departments, 
            leading to decreased patient satisfaction.
          </p>
        </div>
        
        <div className="bg-cloud-50 p-4 rounded-lg">
          <h4 className="font-semibold text-cloud-700 mb-2">Our Solution</h4>
          <p className="text-gray-600">
            We deployed Service Cloud with custom case management workflows tailored to 
            healthcare requirements. We implemented a comprehensive knowledge base and 
            integrated with electronic health records for a unified view of patient information.
          </p>
        </div>
        
        <div className="bg-cloud-50 p-4 rounded-lg">
          <h4 className="font-semibold text-cloud-700 mb-2">The Results</h4>
          <p className="text-gray-600">
            <strong>68% reduction</strong> in case resolution time
            <br />
            <strong>92% patient</strong> satisfaction rate
            <br />
            <strong>45% decrease</strong> in call transfers
          </p>
        </div>
      </div>
      
      <img 
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
        alt="Healthcare Team Meeting" 
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      
      <div className="bg-cloud-50 p-6 rounded-lg">
        <h4 className="font-semibold text-cloud-700 mb-2">Client Testimonial</h4>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
          ))}
        </div>
        <p className="text-gray-600 italic">
          "Working with Cloud Utility was a game-changer for our patient communication and 
          case management. The Service Cloud implementation has dramatically improved our 
          response times and coordination between departments, leading to significantly 
          better patient experiences and outcomes."
        </p>
        <div className="mt-4">
          <p className="font-medium">Jennifer Thompson, Director of Patient Services</p>
          <p className="text-sm text-gray-500">Allied Healthcare Group</p>
        </div>
      </div>
    </div>
  </div>
);

const FinancialServicesCaseStudy = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <div className="flex flex-col">
      <div className="mb-6">
        <div className="w-16 h-16 cloud-gradient rounded-lg flex items-center justify-center">
          <CheckSquare className="text-white" size={32} />
        </div>
      </div>
      
      <h3 className="font-heading text-2xl font-bold mb-4 text-cloud-800">Financial Services Company Case Study</h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-cloud-50 p-4 rounded-lg">
          <h4 className="font-semibold text-cloud-700 mb-2">The Challenge</h4>
          <p className="text-gray-600">
            A financial services company faced complex compliance and reporting requirements 
            that were time-consuming and error-prone. They needed a solution that could 
            automate regulatory reporting while maintaining data accuracy.
          </p>
        </div>
        
        <div className="bg-cloud-50 p-4 rounded-lg">
          <h4 className="font-semibold text-cloud-700 mb-2">Our Solution</h4>
          <p className="text-gray-600">
            We developed a custom Salesforce solution with automated compliance workflows, 
            data validation rules, and custom reports tailored to financial regulations. 
            We integrated with existing financial systems and implemented robust security protocols.
          </p>
        </div>
        
        <div className="bg-cloud-50 p-4 rounded-lg">
          <h4 className="font-semibold text-cloud-700 mb-2">The Results</h4>
          <p className="text-gray-600">
            <strong>80% reduction</strong> in reporting time
            <br />
            <strong>95% improvement</strong> in data accuracy
            <br />
            <strong>Zero compliance</strong> violations since implementation
          </p>
        </div>
      </div>
      
      <img 
        src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
        alt="Financial Dashboard" 
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      
      <div className="bg-cloud-50 p-6 rounded-lg">
        <h4 className="font-semibold text-cloud-700 mb-2">Client Testimonial</h4>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
          ))}
        </div>
        <p className="text-gray-600 italic">
          "The custom Salesforce solutions developed by Cloud Utility helped us navigate 
          complex regulatory requirements while significantly improving our operational 
          efficiency. What used to take our team days now takes just hours, and the 
          improvement in data accuracy has been remarkable."
        </p>
        <div className="mt-4">
          <p className="font-medium">Priya Patel, Director of Operations</p>
          <p className="text-sm text-gray-500">Financial Partners Ltd</p>
        </div>
      </div>
    </div>
  </div>
);

const EnterpriseTestimonials = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <h3 className="font-heading text-2xl font-bold mb-6 text-cloud-800">Enterprise Client Testimonials</h3>
    
    <div className="space-y-8">
      <div className="bg-cloud-50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Sarah Johnson" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">
              "Cloud Utility transformed our sales operations with a tailored Salesforce solution that integrated 
              seamlessly with our complex enterprise systems. The team's expertise and attention to detail exceeded 
              our expectations, and we've seen a significant improvement in our sales productivity and customer 
              engagement metrics."
            </p>
            <div>
              <p className="font-heading font-semibold text-cloud-800">Sarah Johnson</p>
              <p className="text-cloud-600">VP of Sales, Global Tech Industries</p>
              <p className="text-sm text-gray-500">Industry: Technology</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-cloud-50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt="Robert Chen" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">
              "As a large manufacturing company with operations in multiple countries, we needed a partner who 
              could help us standardize our Salesforce implementation while respecting regional differences. 
              Cloud Utility delivered a comprehensive solution that has streamlined our processes and provided 
              unprecedented visibility into our global sales pipeline."
            </p>
            <div>
              <p className="font-heading font-semibold text-cloud-800">Robert Chen</p>
              <p className="text-cloud-600">CIO, Precision Manufacturing Corp</p>
              <p className="text-sm text-gray-500">Industry: Manufacturing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MidMarketTestimonials = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <h3 className="font-heading text-2xl font-bold mb-6 text-cloud-800">Mid-Market Client Testimonials</h3>
    
    <div className="space-y-8">
      <div className="bg-cloud-50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
              <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857" alt="David Rodriguez" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">
              "Cloud Utility's team took the time to understand our unique challenges as a growing healthcare 
              provider and delivered a Salesforce solution that perfectly addresses our needs. Their implementation 
              has helped us improve patient engagement while streamlining our internal processes."
            </p>
            <div>
              <p className="font-heading font-semibold text-cloud-800">David Rodriguez</p>
              <p className="text-cloud-600">CEO, Allied Healthcare Group</p>
              <p className="text-sm text-gray-500">Industry: Healthcare</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-cloud-50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" alt="Jennifer Thompson" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="flex mb-4">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
              ))}
              <Star size={16} className="text-gray-300 mr-1" />
            </div>
            <p className="text-gray-600 mb-6 italic">
              "We selected Cloud Utility to help us modernize our sales and service processes, and they delivered 
              beyond our expectations. Their Salesforce implementation has given us the scalability we needed to 
              support our rapid growth while improving our customer experience."
            </p>
            <div>
              <p className="font-heading font-semibold text-cloud-800">Jennifer Thompson</p>
              <p className="text-cloud-600">Director of Sales, Velocity Software</p>
              <p className="text-sm text-gray-500">Industry: Software</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SmallBusinessTestimonials = () => (
  <div className="bg-white rounded-xl shadow-md p-8 my-8">
    <h3 className="font-heading text-2xl font-bold mb-6 text-cloud-800">Small Business Client Testimonials</h3>
    
    <div className="space-y-8">
      <div className="bg-cloud-50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Rebecca Martinez" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">
              "As a small business, we were concerned about the investment in Salesforce, but Cloud Utility 
              showed us how to implement it cost-effectively while still getting powerful results. Their team 
              was attentive to our budget constraints and delivered an excellent solution."
            </p>
            <div>
              <p className="font-heading font-semibold text-cloud-800">Rebecca Martinez</p>
              <p className="text-cloud-600">Founder & CEO, Bright Ideas Marketing</p>
              <p className="text-sm text-gray-500">Industry: Marketing</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-cloud-50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
              <img src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" alt="James Peterson" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="flex mb-4">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
              ))}
              <Star size={16} className="text-gray-300 mr-1" />
            </div>
            <p className="text-gray-600 mb-6 italic">
              "Cloud Utility helped us implement Sales Cloud in a way that was tailored to our specific needs 
              as a boutique consulting firm. The solution they delivered has helped us nurture client 
              relationships more effectively and increase our repeat business."
            </p>
            <div>
              <p className="font-heading font-semibold text-cloud-800">James Peterson</p>
              <p className="text-cloud-600">Managing Partner, Summit Consulting</p>
              <p className="text-sm text-gray-500">Industry: Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <div id="services" className="section-padding bg-cloud-50">
          <div className="cloud-container">
            {/* <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-cloud-800">Our Salesforce Services</h2>
              <p className="font-sans text-lg text-gray-600">
                Leverage the full potential of Salesforce with our comprehensive suite of services tailored to your business needs.
              </p>
            </div> */}
            
            <ServicesPage />
            
            <div id="sales-cloud" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Sales Cloud Solutions</h2>
              <SalesCloudSection />
            </div>
            
            <div id="service-cloud" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Service Cloud Solutions</h2>
              <ServiceCloudSection />
            </div>
            
            <div id="custom-solutions" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Custom Solutions</h2>
              <CustomSolutionsSection />
            </div>
            
            <div id="commerce-cloud" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Commerce Cloud Solutions</h2>
              <CommerceCloudSection />
            </div>
            
            <div id="salesforce-consulting" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Salesforce Consulting</h2>
              <SalesforceConsultingSection />
            </div>
            
            <div id="salesforce-development" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Salesforce Development</h2>
              <SalesforceDevelopmentSection />
            </div>
          </div>
        </div>
        
        <div id="about">
          <AboutPage />
        </div>
        
        <div id="live-projects" className="section-padding bg-gray-50">
          <div className="cloud-container"> 
            
            <CaseStudies />
            
            <div id="manufacturing-case-study" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Manufacturing Case Study</h2>
              <ManufacturingCaseStudy />
            </div>
            
            <div id="healthcare-case-study" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Healthcare Case Study</h2>
              <HealthcareCaseStudy />
            </div>
            
            <div id="financial-services-case-study" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Financial Services Case Study</h2>
              <FinancialServicesCaseStudy />
            </div>

            <CaseStudiesPage />
          </div>
        </div>
        
        {/* <div id="testimonials" className="section-padding">
          <div className="cloud-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-cloud-800">What Our Clients Say</h2>
              <p className="font-sans text-lg text-gray-600">
                Don't just take our word for it. Here's what our clients have to say about working with Cloud Utility.
              </p>
            </div>
            

            
            <div id="enterprise-testimonials" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Enterprise Client Testimonials</h2>
              <EnterpriseTestimonials />
            </div>
            
            <div id="mid-market-testimonials" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Mid-Market Client Testimonials</h2>
              <MidMarketTestimonials />
            </div>
            
            <div id="small-business-testimonials" className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-cloud-800">Small Business Client Testimonials</h2>
              <SmallBusinessTestimonials />
            </div>
          </div>
        </div> */}
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
