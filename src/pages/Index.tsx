import { Link } from "react-router-dom";
import { ArrowRight, Video, Camera, Share2, TrendingUp, Code, ShoppingCart, Edit, Shield, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StatsCounter from "@/components/StatsCounter";
import SEO from "@/components/SEO";
import TypewriterText from "@/components/TypewriterText";

const Index = () => {
  const services = [
    {
      icon: Video,
      title: "Cinematography & Video Production",
      description: "Brand films, reels, documentaries, and drone cinematography with script-to-delivery excellence.",
      path: "/services/film-video-photography",
      emoji: "🎬"
    },
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Portrait, product, and event photography with expert editing and retouching services.",
      path: "/services/film-video-photography",
      emoji: "📸"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Content creation, reels, ad management, and analytics to grow your online presence.",
      path: "/services/digital-social-media",
      emoji: "📱"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Full SEO and advertising campaigns with national focus and metro targeting.",
      path: "/services/digital-social-media",
      emoji: "📈"
    },
    {
      icon: Code,
      title: "Website Development",
      description: "MERN stack websites, e-commerce platforms, and lead generation sites with maintenance.",
      path: "/services/web-app-software",
      emoji: "💻"
    },
    {
      icon: Shield,
      title: "Software Solutions",
      description: "Custom apps, SaaS platforms, automation tools with deployment and ongoing support.",
      path: "/services/web-app-software",
      emoji: "🛡️"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Management",
      description: "Complete store setup, product management, and optimization for online sales.",
      path: "/services/ecommerce",
      emoji: "🛒"
    },
    {
      icon: Edit,
      title: "Video & Photo Editing",
      description: "Professional editing with color grading, effects, and brand overlays for all media.",
      path: "/services/film-video-photography",
      emoji: "✨"
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Mumbai-based Startup",
      text: "Never Ending Services transformed our digital presence! Their video production quality is outstanding.",
      rating: 5,
      city: "Mumbai"
    },
    {
      name: "Priya Sharma",
      company: "Delhi E-commerce Brand",
      text: "Professional team, quick delivery, and transparent pricing. Highly recommend for all digital needs!",
      rating: 5,
      city: "Delhi"
    },
    {
      name: "Amit Patel",
      company: "Bangalore Tech Company",
      text: "Their software solutions are top-notch. Helped us scale from MVP to full production seamlessly.",
      rating: 5,
      city: "Bangalore"
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Never Ending Services",
    "url": typeof window !== 'undefined' ? window.location.origin : "",
    "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : "",
    "description": "Leading pan-India digital agency offering video production, web development, social media marketing, e-commerce solutions & IT support",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Maharashtra"
    },
    "areaServed": [
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Bangalore" },
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": [
      "Video Production",
      "Digital Marketing",
      "Web Development",
      "E-Commerce Solutions",
      "IT Support"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Digital Marketing, Video Production & IT Solutions India"
        description="Leading pan-India digital agency offering video production, web development, social media marketing, e-commerce solutions & IT support. Serving businesses across Mumbai, Delhi, Bangalore & 15+ cities."
        keywords="digital marketing India, video production India, web development India, social media marketing India, IT support India, e-commerce solutions India, digital agency India"
        schema={organizationSchema}
      />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text  leading-tight">
               <TypewriterText text="Never Ending Services" speed={60} />
            </h1>
            <p className="text-xl md:text-2xl text-primary/90 font-light italic">
              <TypewriterText text="You believe in us. We believe in you. Together, we create magic." speed={70} />
            </p>
            <h2 className="text-2xl md:text-3xl text-foreground/80 font-light">
              Complete Digital, Video Production, Web Development & IT Services for Indian Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pan-India digital agency delivering professional video production, cinematography, web development, digital marketing, e-commerce solutions & IT support. Serving startups, SMEs & enterprises across Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai & 15+ metro cities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient text-lg px-8 py-6 hover:scale-105 transition-transform">
                  Get Started Today <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                  Explore Services
                </Button>
              </Link>
            </div>

            <div className="pt-12 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Based in Mumbai • Serving All India & Metro Cities
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90 text-primary" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <StatsCounter end={150} suffix="+" />
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center space-y-2">
              <StatsCounter end={7} suffix="+" />
              <p className="text-muted-foreground">Cities Served</p>
            </div>
            <div className="text-center space-y-2">
              <StatsCounter end={300} suffix="+" />
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center space-y-2">
              <StatsCounter end={50} suffix="+" />
              <p className="text-muted-foreground">Running Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: "All-in-One Solution", desc: "Complete digital services under one roof" },
              { icon: Star, title: "5-Star Rated", desc: "Trusted by 300+ satisfied clients nationwide" },
              { icon: TrendingUp, title: "Fast Delivery", desc: "Quick turnaround without compromising quality" }
            ].map((usp, i) => (
              <Card key={i} className="border-border bg-card/50 hover:bg-card transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]">
                <CardContent className="p-8 text-center space-y-4">
                  <usp.icon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">{usp.title}</h3>
                  <p className="text-muted-foreground">{usp.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold gradient-text">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for your business growth across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-border bg-card hover:border-primary/50 transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-4xl">{service.emoji}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.path}>
                    <Button variant="ghost" className="group-hover:text-primary transition-colors p-0 h-auto">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="btn-gradient">
                View All Services <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold gradient-text">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by businesses across India</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card/50 transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 italic leading-relaxed">{testimonial.text}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    <p className="text-xs text-primary mt-1">{testimonial.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Ready to Transform Your Business?</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Get a free consultation and custom quote for your project today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-gradient text-lg px-8 py-6">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:+919406556785">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50">
                Call Now: +91 94065 56785
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
