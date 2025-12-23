import { Link } from "react-router-dom";
import { Video, Camera, Share2, TrendingUp, Code, Shield, ShoppingCart, Edit, Headphones, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Film, Video & Photography Production",
      description: "Complete production services from script to delivery - cinematography, photography, editing, and post-production.",
      subServices: [
        "Cinematography & Video Production (Brand videos, music videos, commercials, documentaries, drone shoots)",
        "Script to shooting, editing, coloring, delivery",
        "Reels/Shorts, Drone shoots",
        "Professional Photography (E-commerce, fashion, corporate events)",
        "Video & Photo Editing (Reels, ads, catalog, promo edits)"
      ],
      path: "/services/film-video-photography",
      emoji: "🎬",
      priceRange: "₹4,000 - ₹1,50,000+"
    },
    {
      icon: Share2,
      title: "Digital & Social Media Marketing",
      description: "End-to-end digital marketing solutions - from social media management to SEO, paid ads, and analytics.",
      subServices: [
        "Social Media Management & Marketing (Content creation, influencer collaboration, paid campaigns)",
        "Digital Marketing (SEO, Paid Ads, Google Ads, Meta Ads, Blog writing, Analytics, Remarketing campaigns)"
      ],
      path: "/services/digital-social-media",
      emoji: "📱",
      priceRange: "₹7,000 - ₹3,00,000/month"
    },
    {
      icon: Code,
      title: "Web, App & Software Development",
      description: "Custom websites, mobile apps, and enterprise software solutions with modern technology stack.",
      subServices: [
        "Website Design & Development (Mobile-first, SEO optimized, e-commerce platforms)",
        "Custom Software Solutions (Apps, SaaS, CRMs, Automation tools, Dashboards)"
      ],
      path: "/services/web-app-software",
      emoji: "💻",
      priceRange: "₹12,000 - ₹20,00,000+"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce management - store setup, catalog creation, product photography, and analytics.",
      subServices: [
        "E-Commerce Management (Store setup, product listing, catalog management, promotion analytics)",
        "Product & Service Catalog Creation (Print/digital catalogs, analytics, multilingual options)"
      ],
      path: "/services/ecommerce",
      emoji: "🛒",
      priceRange: "₹2,000 - ₹1,20,000/month"
    },
    {
      icon: Headphones,
      title: "IT & Technical Support",
      description: "Comprehensive IT support services - maintenance, troubleshooting, network setup, and security.",
      subServices: [
        "IT Support Services (Annual maintenance, network/server setup, troubleshooting, security audits)"
      ],
      path: "/services/it-support",
      emoji: "🔧",
      priceRange: "₹3,000 - ₹1,50,000/year"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Our Services | Digital, Video Production & IT Solutions India"
        description="Complete digital services for Indian businesses - video production, digital marketing, web development, e-commerce solutions & IT support. Serving Mumbai, Delhi, Bangalore & 15+ cities."
        keywords="digital services India, video production services, web development services, digital marketing services, e-commerce solutions, IT support India, business services India"
      />
      <Navbar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive digital, creative, and IT solutions for businesses across India
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-border bg-card hover:border-primary/50 transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <service.icon className="h-14 w-14 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-5xl">{service.emoji}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Includes:</p>
                    <ul className="space-y-1.5">
                      {service.subServices.map((subService, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{subService}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Starting from <span className="text-primary font-semibold">{service.priceRange}</span>
                    </p>
                    <Link to={service.path}>
                      <Button className="w-full btn-gradient group-hover:scale-105 transition-transform">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold gradient-text">Need a Custom Solution?</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            We create tailored packages combining multiple services for your specific needs
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-gradient text-lg px-8 py-6">
              Get Custom Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
