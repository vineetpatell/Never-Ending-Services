import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollRestoration from "./components/ScrollRestoration";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import FilmVideoPhotography from "./pages/services/FilmVideoPhotography";
import DigitalSocialMedia from "./pages/services/DigitalSocialMedia";
import WebAppSoftware from "./pages/services/WebAppSoftware";
import Ecommerce from "./pages/services/Ecommerce";
import ITSupport from "./pages/services/ITSupport";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import DigitalMarketingPartnerIndia from "./pages/blog/DigitalMarketingPartnerIndia";
import VideoProductionBrandStorytelling from "./pages/blog/VideoProductionBrandStorytelling";
import EcommerceGrowthStrategies from "./pages/blog/EcommerceGrowthStrategies";
import WebsiteDesignTrends2024 from "./pages/blog/WebsiteDesignTrends2024";
import SocialMediaMarketingROI from "./pages/blog/SocialMediaMarketingROI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollRestoration />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/film-video-photography" element={<FilmVideoPhotography />} />
          <Route path="/services/digital-social-media" element={<DigitalSocialMedia />} />
          <Route path="/services/web-app-software" element={<WebAppSoftware />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/it-support" element={<ITSupport />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/digital-marketing-partner-india" element={<DigitalMarketingPartnerIndia />} />
          <Route path="/blog/video-production-brand-storytelling" element={<VideoProductionBrandStorytelling />} />
          <Route path="/blog/ecommerce-growth-strategies-india" element={<EcommerceGrowthStrategies />} />
          <Route path="/blog/website-design-trends-2024" element={<WebsiteDesignTrends2024/>} />
          <Route path="/blog/social-media-marketing-roi" element={<SocialMediaMarketingROI />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
