import { Video, Camera, Edit, Film, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";

const FilmVideoPhotography = () => {
  const features = [
    { icon: Video, title: "Cinematography", desc: "Brand films, commercials, documentaries - pan-India services" },
    { icon: Camera, title: "Photography", desc: "E-commerce, fashion, corporate events across India" },
    { icon: Edit, title: "Video Editing", desc: "Professional cuts, color grading, VFX" },
    { icon: Film, title: "Reels & Shorts", desc: "Social media content for Indian audiences" },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Video Production and Photography",
    "provider": {
      "@type": "Organization",
      "name": "Never Ending Services"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": "Professional video production, cinematography and photography services across India"
  };

  const pricingTiers = [
    {
      name: "Cinematography & Video Production",
      items: [
        { service: "Full Production (Script→Shoot→Edit→Color→Delivery)", price: "₹25,000 - ₹1,20,000+" },
        { service: "Reels/Shorts Production", price: "₹4,000 - ₹12,000" },
        { service: "Drone Cinematography", price: "₹30,000 - ₹75,000+" },
      ]
    },
    {
      name: "Professional Photography",
      items: [
        { service: "Photography Session (1-2 hours)", price: "₹6,000 - ₹50,000+" },
        { service: "Product Photography (per image)", price: "₹800 - ₹8,000" },
        { service: "Event Coverage", price: "₹18,000 - ₹50,000+" },
      ]
    },
    {
      name: "Video & Photo Editing",
      items: [
        { service: "Basic Video Edit", price: "₹800 - ₹2,500" },
        { service: "Professional Edit with Effects", price: "₹6,000 - ₹20,000+" },
        { service: "Photo Editing (per image)", price: "₹100 - ₹750" },
        { service: "Photo Batch Editing (10-100 photos)", price: "₹2,000 - ₹9,000+" },
      ]
    }
  ];

  const faqItems = [
    {
      question: "What is the typical timeline for video production projects in India?",
      answer: "Timeline varies by project complexity. Reels/shorts take 3-5 days, corporate videos 1-2 weeks, brand films 2-4 weeks, and full commercial productions 4-8 weeks. We work across India (Mumbai, Delhi, Bangalore, Pune, etc.) and provide detailed timelines during consultation."
    },
    {
      question: "Do you provide services across all cities in India?",
      answer: "Yes! We offer professional video production and photography services pan-India. We have teams and partnerships in major metros including Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Kolkata, and all tier-1 and tier-2 cities. Travel and accommodation costs for remote locations are discussed upfront."
    },
    {
      question: "What's included in your video production pricing?",
      answer: "Our pricing includes pre-production (scripting, storyboarding), production (shooting with professional equipment, crew, lighting), and post-production (editing, color grading, sound design, basic VFX). Equipment, travel within city limits, and 2-3 revision rounds are included. Additional services like drone shoots, advanced VFX, or voice-over artists are quoted separately."
    },
    {
      question: "Can you handle both video shooting and photography for the same project?",
      answer: "Absolutely! We offer combined video + photo packages that are cost-effective. Many clients prefer this for corporate events, product launches, weddings, and brand campaigns. We can shoot both simultaneously or separately based on your requirements."
    },
    {
      question: "What types of businesses do you work with across India?",
      answer: "We serve diverse industries including startups, e-commerce brands, real estate, hospitality, healthcare, education, manufacturing, and corporate enterprises. From small businesses to large corporations across India, we customize our video production and photography services to match your industry needs and budget."
    },
    {
      question: "How soon can you start a video production project?",
      answer: "For urgent projects, we can start within 2-3 business days across major Indian cities. Standard projects typically begin within 5-7 days after initial consultation and payment. Timeline depends on crew availability, location coordination, and project complexity."
    },
    {
      question: "Do you provide video editing services for existing footage?",
      answer: "Yes! We offer standalone video editing services starting at ₹800 for basic edits. Services include cutting, color correction, audio enhancement, transitions, text overlays, and VFX. You can send us raw footage from anywhere in India, and we deliver edited videos digitally."
    },
    {
      question: "What payment terms do you offer for video production projects?",
      answer: "We typically follow a milestone-based payment: 40% advance to confirm booking, 30% on shoot day, and 30% on final delivery. For large projects (₹1 lakh+), we can structure custom payment schedules. We accept bank transfer, UPI, and online payments."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Video Production & Professional Photography Services India"
        description="Corporate video production, cinematography, product photography & drone shoots across India. From script to delivery. Serving Mumbai, Delhi, Bangalore & all metros. Starting ₹4,000."
        keywords="video production India, corporate video production, cinematography services India, professional photography India, product photography, drone shoots India, video editing services, commercial production India"
      />
      <Navbar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Video className="h-16 w-16 text-primary" />
              <span className="text-6xl">🎬</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              Professional Video Production & Photography Services India
            </h1>
            <p className="text-2xl font-semibold text-primary italic mt-6">
              "Every frame is a story, every story a chance to make your brand unforgettable."
            </p>
            <h2 className="text-xl text-muted-foreground leading-relaxed mt-4">
              Complete Production Services: Cinematography, Photography, Editing & Drone Shoots Across India
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional video production, brand films, commercial shoots, product photography, and post-production services. Serving businesses, brands & creators across Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai & all Indian metros.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient">
                  Start Your Project <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919406556785?text=I'm interested in Film, Video & Photography Production services">
                <Button size="lg" variant="outline">WhatsApp Now</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary/50 transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]">
                <CardContent className="p-6 text-center space-y-4">
                  <feature.icon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Video Production & Photography Services India</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Transparent pricing for professional video production and photography services across India. All packages include professional equipment, skilled crew & timely delivery.
          </p>
          <div className="space-y-12 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">{tier.name}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tier.items.map((item, i) => (
                      <div key={i} className="flex items-start justify-between gap-4 p-4 rounded-lg bg-background/50">
                        <div className="flex items-start gap-2 flex-1">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item.service}</span>
                        </div>
                        <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact">
              <Button size="lg" className="btn-gradient">Get Custom Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} schema={faqSchema} />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold gradient-text">Ready to Create Something Amazing?</h2>
          <p className="text-xl max-w-2xl mx-auto text-foreground/80">
            Professional film, video, and photography production services across all metro cities in India - Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai & beyond
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-gradient">Start Your Project Today</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FilmVideoPhotography;
