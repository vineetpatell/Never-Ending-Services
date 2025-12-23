import { Code, Monitor, Smartphone, Cloud, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";

const WebAppSoftware = () => {
  const features = [
    { icon: Monitor, title: "Website Development", desc: "Modern, responsive websites" },
    { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android applications" },
    { icon: Cloud, title: "SaaS Platforms", desc: "Cloud-based solutions" },
    { icon: Zap, title: "Automation", desc: "Workflow automation tools" },
  ];

  const pricingTiers = [
    {
      name: "Website Design & Development",
      description: "Mobile-first, SEO optimized, e-commerce platforms",
      plans: [
        {
          tier: "Basic Website",
          price: "₹12,000 - ₹25,000",
          features: ["5-8 Pages", "Mobile Responsive", "Contact Forms", "Basic SEO", "1 Month Support"]
        },
        {
          tier: "Professional",
          price: "₹50,000 - ₹1,50,000",
          features: ["Custom Design", "E-commerce Ready", "Advanced SEO", "CMS Integration", "Admin Panel", "6 Months Support"],
          popular: true
        },
        {
          tier: "Enterprise",
          price: "₹2,50,000 - ₹5,00,000+",
          features: ["Full Custom Build", "Multi-language", "Advanced Features", "Payment Gateway", "Analytics", "1 Year Support"]
        }
      ]
    },
    {
      name: "Custom Software Solutions",
      description: "Apps, SaaS, CRMs, Automation tools, Dashboards",
      plans: [
        {
          tier: "Small App/MVP",
          price: "₹75,000 - ₹2,50,000",
          features: ["Basic Features", "Mobile/Web App", "API Integration", "Cloud Deployment", "3 Months Support"]
        },
        {
          tier: "Mid-Size Application",
          price: "₹2,50,000 - ₹7,00,000",
          features: ["Advanced Features", "Multi-Platform", "Custom APIs", "Scalable Architecture", "Admin Dashboard", "1 Year Support"],
          popular: true
        },
        {
          tier: "Enterprise SaaS",
          price: "₹7,00,000 - ₹20,00,000+",
          features: ["Full Featured Platform", "Multi-Tenant", "Advanced Security", "Custom Integrations", "Dedicated Team", "Lifetime Support"]
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: "What is the typical development timeline for websites and apps in India?",
      answer: "Basic websites take 2-4 weeks, professional e-commerce sites 4-8 weeks, custom web applications 8-16 weeks, and enterprise SaaS platforms 4-8 months. Mobile apps typically require 3-6 months depending on complexity. We provide detailed project timelines and milestone schedules during initial consultation."
    },
    {
      question: "Do you provide web and app development services across all cities in India?",
      answer: "Yes! We serve clients pan-India remotely using modern collaboration tools. Whether you're in Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai, Ahmedabad, or any other city, we deliver the same quality service. In-person meetings can be arranged in major metros when needed."
    },
    {
      question: "What's included in your web development pricing?",
      answer: "Pricing includes UI/UX design, frontend & backend development, responsive mobile optimization, basic SEO setup, content integration, testing, deployment, and support period (1-12 months based on package). Domain, hosting, third-party integrations, and content creation are typically separate but can be bundled."
    },
    {
      question: "Can you rebuild or modernize our existing website or application?",
      answer: "Absolutely! We specialize in website redesigns, platform migrations (WordPress to custom, old tech to modern stack), mobile app rebuilds, and feature additions. We audit your current system, identify improvements, and execute phased migrations to minimize downtime and preserve SEO rankings."
    },
    {
      question: "Which technologies do you use for development?",
      answer: "We use modern, scalable technologies: React, Next.js, Node.js for web development; React Native and Flutter for mobile apps; Python, Node.js for backend; MongoDB, PostgreSQL for databases; AWS, Google Cloud for hosting. Technology selection is based on your project requirements, scalability needs, and budget."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes! All projects include initial support (duration varies by package). We offer monthly maintenance plans covering bug fixes, security updates, performance monitoring, backups, and minor updates. Emergency support and feature additions are available on-demand across India."
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer: "Yes, we integrate payment gateways (Razorpay, PayU, Paytm, Stripe), shipping APIs (Delhivery, Shiprocket), CRM systems, Google services, social media APIs, SMS/email services, analytics tools, and custom APIs. Integration complexity is assessed during planning and quoted accordingly."
    },
    {
      question: "What is your payment structure for development projects?",
      answer: "We typically follow milestone-based payments: 30% advance to start, 30% at mid-development milestone, 30% on completion before deployment, and 10% after successful launch. Large projects (₹5 lakh+) can have custom payment schedules. We accept bank transfer, UPI, and online payments."
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
        title="Web & App Development Company India | Custom Software Solutions"
        description="Custom website design, mobile app development & SaaS solutions for Indian businesses. MERN stack experts. Serving Mumbai, Delhi, Bangalore & all metros. Starting ₹12,000."
        keywords="web development India, app development India, software development India, website design India, mobile app development, custom software solutions, MERN stack development, e-commerce development India"
      />
      <Navbar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Code className="h-16 w-16 text-primary" />
              <span className="text-6xl">💻</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              Web Development & Software Solutions for Businesses Across India
            </h1>
            <p className="text-2xl font-semibold text-primary italic mt-6">
              "Your website is your brand's digital home — let's build it for success."
            </p>
            <h2 className="text-xl text-muted-foreground leading-relaxed mt-4">
              Custom Website Design, Mobile App Development & Enterprise Software Solutions India
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional web development, mobile applications, e-commerce platforms, SaaS products & custom software for Indian businesses. MERN stack, React, Node.js experts serving Mumbai, Delhi, Bangalore, Pune & nationwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient">
                  Build Your Solution <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919406556785?text=I'm interested in Web, App & Software Development services">
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
                      <Button className="w-full btn-gradient">Get Quote</Button>
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
          <h2 className="text-4xl font-bold gradient-text">Ready to Build Your Digital Solution?</h2>
          <p className="text-xl max-w-2xl mx-auto text-foreground/80">
            Enterprise-grade development services across India with modern technology stack
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-gradient">Discuss Your Project</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebAppSoftware;
