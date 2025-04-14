
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import SalesCloudPage from "./pages/SalesCloudPage";
import ServiceCloudPage from "./pages/ServiceCloudPage";
import CustomSolutionsPage from "./pages/CustomSolutionsPage";
import AboutPage from "./pages/AboutPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ManufacturingCaseStudyPage from "./pages/ManufacturingCaseStudyPage";
import HealthcareCaseStudyPage from "./pages/HealthcareCaseStudyPage";
import FinancialServicesCaseStudyPage from "./pages/FinancialServicesCaseStudyPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import EnterpriseTestimonialsPage from "./pages/EnterpriseTestimonialsPage";
import MidMarketTestimonialsPage from "./pages/MidMarketTestimonialsPage";
import SmallBusinessTestimonialsPage from "./pages/SmallBusinessTestimonialsPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services Routes */}
          <Route path="/services/:serviceType?" element={<ServicesPage />} />
          <Route path="/services/sales-cloud" element={<SalesCloudPage />} />
          <Route path="/services/service-cloud" element={<ServiceCloudPage />} />
          <Route path="/services/custom-solutions" element={<CustomSolutionsPage />} />
          
          {/* About Route */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* Case Studies Routes */}
          <Route path="/case-studies/:industryType?" element={<CaseStudiesPage />} />
          <Route path="/case-studies/manufacturing" element={<ManufacturingCaseStudyPage />} />
          <Route path="/case-studies/healthcare" element={<HealthcareCaseStudyPage />} />
          <Route path="/case-studies/financial-services" element={<FinancialServicesCaseStudyPage />} />
          
          {/* Testimonials Routes */}
          <Route path="/testimonials/:clientType?" element={<TestimonialsPage />} />
          <Route path="/testimonials/enterprise" element={<EnterpriseTestimonialsPage />} />
          <Route path="/testimonials/mid-market" element={<MidMarketTestimonialsPage />} />
          <Route path="/testimonials/small-business" element={<SmallBusinessTestimonialsPage />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
