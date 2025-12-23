import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Pricing = () => {
  // Film, Video & Photography Production
  const filmVideoPricing = [
    {
      category: "Cinematography & Video Production",
      items: [
        { service: "Full Production (Script→Shoot→Edit→Color→Delivery)", price: "₹25,000 - ₹1,20,000+" },
        { service: "Reels/Shorts Production", price: "₹4,000 - ₹12,000" },
        { service: "Drone Cinematography", price: "₹30,000 - ₹75,000+" },
      ]
    },
    {
      category: "Professional Photography",
      items: [
        { service: "Photography Session (1-2 hours)", price: "₹6,000 - ₹50,000+" },
        { service: "Product Photography (per image)", price: "₹800 - ₹8,000" },
        { service: "Event Coverage", price: "₹18,000 - ₹50,000+" },
      ]
    },
    {
      category: "Video & Photo Editing",
      items: [
        { service: "Basic Video Edit", price: "₹800 - ₹2,500" },
        { service: "Professional Edit with Effects", price: "₹6,000 - ₹20,000+" },
        { service: "Photo Editing (per image)", price: "₹100 - ₹750" },
        { service: "Photo Batch Editing (10-100 photos)", price: "₹2,000 - ₹9,000+" },
      ]
    }
  ];

  // Digital & Social Media Marketing
  const digitalMarketingPricing = [
    {
      category: "Social Media Management & Marketing",
      tiers: [
        { tier: "Basic", price: "₹7,000 - ₹12,000/month", features: ["Local Business Focus", "Content Calendar", "Basic Posts & Reels", "Monthly Analytics", "2 Platforms"] },
        { tier: "Professional", price: "₹30,000 - ₹80,000/month", features: ["Multi-Platform", "Advanced Content", "Influencer Collaboration", "Paid Ad Management", "Weekly Reports", "3-4 Platforms"], popular: true },
        { tier: "Enterprise", price: "₹1,50,000 - ₹2,00,000/month", features: ["National Campaigns", "Full Team", "Celebrity Collaborations", "24/7 Management", "All Platforms", "Custom Strategy"] }
      ]
    },
    {
      category: "Digital Marketing (SEO + Paid Ads)",
      tiers: [
        { tier: "Basic", price: "₹10,000/month", features: ["Local SEO", "Basic Google Ads", "Monthly Reports", "Keyword Research"] },
        { tier: "Professional", price: "₹25,000 - ₹60,000/month", features: ["National SEO", "Google + Social Ads", "Advanced Analytics", "Metro Targeting", "Competitor Analysis", "A/B Testing"], popular: true },
        { tier: "Enterprise", price: "₹1,20,000 - ₹3,00,000/month", features: ["Full SEO Suite", "Multi-Platform Ads", "Dedicated Team", "24/7 Monitoring", "Custom Reporting", "Strategy Consulting"] }
      ]
    }
  ];

  // Web, App & Software Development
  const webAppPricing = [
    {
      category: "Website Design & Development",
      tiers: [
        { tier: "Basic Website", price: "₹12,000 - ₹25,000", features: ["5-8 Pages", "Mobile Responsive", "Contact Forms", "Basic SEO", "1 Month Support"] },
        { tier: "Professional", price: "₹50,000 - ₹1,50,000", features: ["Custom Design", "E-commerce Ready", "Advanced SEO", "CMS Integration", "Admin Panel", "6 Months Support"], popular: true },
        { tier: "Enterprise", price: "₹2,50,000 - ₹5,00,000+", features: ["Full Custom Build", "Multi-language", "Advanced Features", "Payment Gateway", "Analytics", "1 Year Support"] }
      ]
    },
    {
      category: "Custom Software Solutions",
      tiers: [
        { tier: "Small App/MVP", price: "₹75,000 - ₹2,50,000", features: ["Basic Features", "Mobile/Web App", "API Integration", "Cloud Deployment", "3 Months Support"] },
        { tier: "Mid-Size Application", price: "₹2,50,000 - ₹7,00,000", features: ["Advanced Features", "Multi-Platform", "Custom APIs", "Scalable Architecture", "Admin Dashboard", "1 Year Support"], popular: true },
        { tier: "Enterprise SaaS", price: "₹7,00,000 - ₹20,00,000+", features: ["Full Featured Platform", "Multi-Tenant", "Advanced Security", "Custom Integrations", "Dedicated Team", "Lifetime Support"] }
      ]
    }
  ];

  // E-Commerce Solutions
  const ecommercePricing = [
    {
      category: "E-Commerce Management (Monthly)",
      tiers: [
        { tier: "Starter", price: "₹5,000/month", features: ["Basic Store Setup", "Up to 50 Products", "Monthly Reports", "Email Support"] },
        { tier: "Professional", price: "₹15,000 - ₹40,000/month", features: ["Advanced Store", "Unlimited Products", "Product Photography", "Account Management", "Weekly Analytics", "Marketing Support"], popular: true },
        { tier: "Enterprise", price: "₹1,20,000/month", features: ["Multi-Channel", "Premium Photography", "Dedicated Manager", "24/7 Support", "Custom Integration", "Full Marketing Suite"] }
      ]
    },
    {
      category: "Product Photography Add-on",
      items: [
        { service: "Basic Session (10-15 products, white background)", price: "₹2,000" },
        { service: "Professional (25-50 products, lifestyle shots)", price: "₹5,000 - ₹12,000" },
        { service: "Premium (Full catalog, creative shoots)", price: "₹15,000+" },
      ]
    }
  ];

  // IT & Technical Support
  const itSupportPricing = [
    {
      category: "Annual Maintenance Contract (AMC)",
      tiers: [
        { tier: "Basic", price: "₹3,000 - ₹10,000/year", features: ["Up to 10 Devices", "Quarterly Visits", "Email Support", "Basic Troubleshooting"] },
        { tier: "Professional", price: "₹25,000 - ₹60,000/year", features: ["Up to 50 Devices", "Monthly Visits", "Priority Support", "Network Monitoring", "Security Updates"], popular: true },
        { tier: "Enterprise", price: "₹1,00,000+/year", features: ["Unlimited Devices", "Weekly Visits", "24/7 Support", "Full IT Management", "Security Audits", "Dedicated Manager"] }
      ]
    },
    {
      category: "One-Time Services",
      items: [
        { service: "Network Setup (Small Office)", price: "₹10,000 - ₹30,000" },
        { service: "Network Setup (Large Office)", price: "₹50,000 - ₹1,50,000+" },
        { service: "Server Installation", price: "₹25,000 - ₹80,000" },
        { service: "Emergency Support (per incident)", price: "₹2,000 - ₹8,000" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">
              No hidden costs. Professional services at competitive rates.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          
          {/* 1. Film, Video & Photography Production */}
          <div>
            <h2 className="text-4xl font-bold gradient-text text-center mb-12">Film, Video & Photography Production</h2>
            <div className="space-y-12 max-w-6xl mx-auto">
              {filmVideoPricing.map((section, idx) => (
                <Card key={idx} className="border-border transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]">
                  <CardContent className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-6 text-primary">{section.category}</h3>
                    <div className="grid md:grid-cols-2 gap-4 flex-1">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-start justify-between gap-4 p-4 rounded-lg bg-background/50">
                          <div className="flex items-start gap-2 flex-1">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item.service}</span>
                          </div>
                          <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="mt-6">
                      <Button className="w-full btn-gradient">Get Quote</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 2. Digital & Social Media Marketing */}
          <div className="bg-secondary/10 -mx-4 px-4 py-20">
            <h2 className="text-4xl font-bold gradient-text text-center mb-12">Digital & Social Media Marketing</h2>
            <div className="space-y-12 max-w-6xl mx-auto">
              {digitalMarketingPricing.map((section, sIdx) => (
                <div key={sIdx}>
                  <h3 className="text-2xl font-bold mb-8 text-center">{section.category}</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {section.tiers.map((tier, tIdx) => (
                      <Card key={tIdx} className={`border-border transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02] ${tier.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                        <CardContent className="p-8 flex flex-col h-full">
                          {tier.popular && (
                            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                              Most Popular
                            </span>
                          )}
                          <div className="mt-4">
                            <h4 className="text-xl font-bold mb-2">{tier.tier}</h4>
                            <p className="text-2xl font-bold text-primary">{tier.price}</p>
                          </div>
                          <ul className="space-y-3 mt-6 flex-1">
                            {tier.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Link to="/contact" className="mt-6">
                            <Button className="w-full btn-gradient">Get Started</Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Web, App & Software Development */}
          <div>
            <h2 className="text-4xl font-bold gradient-text text-center mb-12">Web, App & Software Development</h2>
            <div className="space-y-12 max-w-6xl mx-auto">
              {webAppPricing.map((section, sIdx) => (
                <div key={sIdx}>
                  <h3 className="text-2xl font-bold mb-8 text-center">{section.category}</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {section.tiers.map((tier, tIdx) => (
                      <Card key={tIdx} className={`border-border transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02] ${tier.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                        <CardContent className="p-8 flex flex-col h-full">
                          {tier.popular && (
                            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                              Most Popular
                            </span>
                          )}
                          <div className="mt-4">
                            <h4 className="text-xl font-bold mb-2">{tier.tier}</h4>
                            <p className="text-2xl font-bold text-primary">{tier.price}</p>
                          </div>
                          <ul className="space-y-3 mt-6 flex-1">
                            {tier.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Link to="/contact" className="mt-6">
                            <Button className="w-full btn-gradient">Get Quote</Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. E-Commerce Solutions */}
          <div className="bg-secondary/10 -mx-4 px-4 py-20">
            <h2 className="text-4xl font-bold gradient-text text-center mb-12">E-Commerce Solutions</h2>
            <div className="space-y-12 max-w-6xl mx-auto">
              {ecommercePricing.map((section, sIdx) => (
                <div key={sIdx}>
                  <h3 className="text-2xl font-bold mb-8 text-center">{section.category}</h3>
                  {section.tiers ? (
                    <div className="grid md:grid-cols-3 gap-8">
                      {section.tiers.map((tier, tIdx) => (
                        <Card key={tIdx} className={`border-border transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02] ${tier.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                          <CardContent className="p-8 flex flex-col h-full">
                            {tier.popular && (
                              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                                Most Popular
                              </span>
                            )}
                            <div className="mt-4">
                              <h4 className="text-xl font-bold mb-2">{tier.tier}</h4>
                              <p className="text-2xl font-bold text-primary">{tier.price}</p>
                            </div>
                            <ul className="space-y-3 mt-6 flex-1">
                              {tier.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-2">
                                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Link to="/contact" className="mt-6">
                              <Button className="w-full btn-gradient">Get Started</Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                      {section.items?.map((item, i) => (
                        <Card key={i} className="border-border transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]">
                          <CardContent className="p-6 text-center flex flex-col h-full">
                            <h4 className="text-lg font-bold">{item.service}</h4>
                            <p className="text-2xl font-bold text-primary mt-3 flex-1">{item.price}</p>
                            <Link to="/contact" className="mt-4">
                              <Button className="w-full btn-gradient">Get Quote</Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 5. IT & Technical Support */}
          <div>
            <h2 className="text-4xl font-bold gradient-text text-center mb-12">IT & Technical Support</h2>
            <div className="space-y-12 max-w-6xl mx-auto">
              {itSupportPricing.map((section, sIdx) => (
                <div key={sIdx}>
                  <h3 className="text-2xl font-bold mb-8 text-center">{section.category}</h3>
                  {section.tiers ? (
                    <div className="grid md:grid-cols-3 gap-8">
                    {section.tiers.map((tier, tIdx) => (
                      <Card key={tIdx} className={`border-border transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02] ${tier.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                        <CardContent className="p-8 flex flex-col h-full">
                          {tier.popular && (
                            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                              Most Popular
                            </span>
                          )}
                          <div className="mt-4">
                            <h4 className="text-xl font-bold mb-2">{tier.tier}</h4>
                            <p className="text-2xl font-bold text-primary">{tier.price}</p>
                          </div>
                          <ul className="space-y-3 mt-6 flex-1">
                            {tier.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Link to="/contact" className="mt-6">
                            <Button className="w-full btn-gradient">Get Started</Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="border-border transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]">
                    <CardContent className="p-8 flex flex-col">
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.items?.map((item, i) => (
                          <div key={i} className="flex items-start justify-between gap-4 p-4 rounded-lg bg-background/50">
                            <div className="flex items-start gap-2 flex-1">
                              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{item.service}</span>
                            </div>
                            <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.price}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/contact" className="mt-6">
                        <Button className="w-full btn-gradient">Get Quote</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold gradient-text">Need a Custom Package?</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            We create tailored solutions combining multiple services for your specific needs
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-gradient text-lg px-8 py-6">
              Request Custom Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
