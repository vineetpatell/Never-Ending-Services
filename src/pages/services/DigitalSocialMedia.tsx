import { Share2, TrendingUp, Search, Target, BarChart3, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";

const DigitalSocialMedia = () => {
  const features = [
    { icon: Share2, title: "Social Media Management", desc: "Complete social media strategy" },
    { icon: Search, title: "SEO Optimization", desc: "Rank higher on search engines" },
    { icon: Target, title: "Paid Advertising", desc: "Google Ads, Meta Ads campaigns" },
    { icon: BarChart3, title: "Analytics & Insights", desc: "Data-driven decision making" },
  ];

  const pricingTiers = [
    {
      name: "Social Media Management & Marketing",
      description: "Content creation, influencer collaboration, paid campaigns",
      plans: [
        {
          tier: "Basic",
          price: "₹7,000 - ₹12,000/month",
          features: ["Local Business Focus", "Content Calendar", "Basic Posts & Reels", "Monthly Analytics", "2 Platforms"]
        },
        {
          tier: "Professional",
          price: "₹30,000 - ₹80,000/month",
          features: ["Multi-Platform", "Advanced Content", "Influencer Collaboration", "Paid Ad Management", "Weekly Reports", "3-4 Platforms"],
          popular: true
        },
        {
          tier: "Enterprise",
          price: "₹1,50,000 - ₹2,00,000/month",
          features: ["National Campaigns", "Full Team", "Celebrity Collaborations", "24/7 Management", "All Platforms", "Custom Strategy"]
        }
      ]
    },
    {
      name: "Digital Marketing (SEO + Paid Ads)",
      description: "SEO, Paid Ads, Google Ads, Meta Ads, Blog writing, Analytics, Remarketing",
      plans: [
        {
          tier: "Basic",
          price: "₹10,000/month",
          features: ["Local SEO", "Basic Google Ads", "Monthly Reports", "Keyword Research"]
        },
        {
          tier: "Professional",
          price: "₹25,000 - ₹60,000/month",
          features: ["National SEO", "Google + Social Ads", "Advanced Analytics", "Metro Targeting", "Competitor Analysis", "A/B Testing"],
          popular: true
        },
        {
          tier: "Enterprise",
          price: "₹1,20,000 - ₹3,00,000/month",
          features: ["Full SEO Suite", "Multi-Platform Ads", "Dedicated Team", "24/7 Monitoring", "Custom Reporting", "Strategy Consulting"]
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: "How long does it take to see results from digital marketing campaigns in India?",
      answer: "SEO typically shows results in 3-6 months as organic rankings build. Paid advertising (Google Ads, Facebook Ads) delivers immediate traffic within days. Social media growth is gradual, showing engagement improvements in 2-3 months. We provide monthly reports tracking all metrics across India markets."
    },
    {
      question: "Do you provide digital marketing services across all Indian cities?",
      answer: "Yes, we offer pan-India digital marketing services! Whether you're in Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata, or smaller cities, we manage campaigns remotely using advanced tools. We understand regional markets and create localized strategies for different Indian audiences."
    },
    {
      question: "What's included in your monthly digital marketing packages?",
      answer: "Monthly packages include strategy development, content creation (posts, graphics, videos), platform management, ad campaign setup & optimization, analytics reporting, and regular consultations. Professional plans include influencer outreach and paid advertising management. All content rights belong to you."
    },
    {
      question: "Can you manage both SEO and paid advertising together?",
      answer: "Absolutely! We recommend an integrated approach. While SEO builds long-term organic visibility, paid ads deliver immediate results. We create coordinated campaigns where paid ads support SEO keyword research, and organic content enhances ad quality scores, maximizing your ROI across India."
    },
    {
      question: "Which social media platforms do you manage for Indian businesses?",
      answer: "We manage all major platforms: Facebook, Instagram, LinkedIn, Twitter (X), YouTube, and emerging platforms like WhatsApp Business. We recommend platforms based on your industry - B2B companies benefit from LinkedIn, e-commerce from Instagram, while local businesses thrive on Facebook and WhatsApp."
    },
    {
      question: "How do you measure digital marketing success?",
      answer: "We track KPIs including website traffic, lead generation, conversion rates, engagement rates, cost per lead, ROI, keyword rankings, and social media growth. Monthly dashboards show real-time performance. Success metrics are customized to your business goals across Indian markets."
    },
    {
      question: "Do you create content in regional Indian languages?",
      answer: "Yes! We create content in Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, Bengali, and other regional languages. Multilingual content significantly improves engagement in regional markets. We have native language experts ensuring cultural relevance and proper messaging."
    },
    {
      question: "What's the minimum commitment period for digital marketing services?",
      answer: "We recommend a minimum 3-month commitment for meaningful results, especially for SEO and social media growth. However, we offer flexible month-to-month contracts for paid advertising campaigns. No long-term lock-ins - you can upgrade, downgrade, or pause based on performance and budget."
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
        title="Digital Marketing Agency India | SEO, Social Media & Paid Ads"
        description="Complete digital marketing solutions - SEO, Google Ads, social media management & analytics. Pan-India services for businesses in Mumbai, Delhi, Bangalore & beyond. Starting ₹7,000/month."
        keywords="digital marketing agency India, SEO services India, social media marketing India, Google Ads India, Facebook advertising, Instagram marketing, digital marketing company, paid advertising India"
      />
      <Navbar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Share2 className="h-16 w-16 text-primary" />
              <span className="text-6xl">📱</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              Digital Marketing Agency India | SEO, Social Media & Paid Advertising
            </h1>
            <p className="text-2xl font-semibold text-primary italic mt-6">
              "Your brand's voice deserves to be heard — let's spark conversations that convert."
            </p>
            <h2 className="text-xl text-muted-foreground leading-relaxed mt-4">
              Complete Digital Marketing Solutions: SEO, Social Media Management, Google Ads & Content Marketing
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ROI-driven digital marketing services for Indian businesses. Expert SEO, social media management, paid advertising, content creation & analytics. Serving Mumbai, Delhi, Bangalore, Pune & all metro cities nationwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient">
                  Grow Your Brand <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919406556785?text=I'm interested in Digital & Social Media Marketing services">
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

      {/* Pricing Sections */}
      {pricingTiers.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`py-20 ${sectionIndex % 2 === 0 ? 'bg-secondary/10' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold gradient-text mb-4">{section.name}</h2>
              <p className="text-muted-foreground text-lg">{section.description}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {section.plans.map((plan, index) => (
                <Card key={index} className={`border-border ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                  <CardContent className="p-8 space-y-6">
                    {plan.popular && (
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                      <p className="text-3xl font-bold text-primary">{plan.price}</p>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className="w-full btn-gradient">Get Started</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <FAQ items={faqItems} schema={faqSchema} />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold gradient-text">Ready to Scale Your Digital Presence?</h2>
          <p className="text-xl max-w-2xl mx-auto text-foreground/80">
            Expert digital and social media marketing services across all metro cities in India
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-gradient">Get Custom Strategy</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalSocialMedia;
