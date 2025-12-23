import { Headphones, Server, Network, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";

const ITSupport = () => {
  const features = [
    { icon: Wrench, title: "AMC Services", desc: "Annual maintenance contracts" },
    { icon: Network, title: "Network Setup", desc: "Complete network solutions" },
    { icon: Server, title: "Server Management", desc: "Server setup and maintenance" },
    { icon: Headphones, title: "IT Consulting", desc: "Expert technology advice" },
  ];

  const amcPricing = [
    {
      name: "Basic AMC",
      price: "₹3,000/year",
      features: ["Quarterly Visits", "Basic Support", "Email Support", "Software Updates"],
    },
    {
      name: "Professional AMC",
      price: "₹9,000 - ₹30,000/year",
      features: ["Monthly Visits", "Priority Support", "Phone + Email", "Hardware Check", "Network Monitoring", "Backup Management"],
      popular: true,
    },
    {
      name: "Enterprise AMC",
      price: "₹1,00,000+/year",
      features: ["Weekly Visits", "24/7 Support", "Dedicated Team", "Server Management", "Security Audits", "On-Site Engineer"],
    },
  ];

  const servicePricing = [
    { name: "Network Setup", price: "₹10,000 - ₹50,000", desc: "Complete office network" },
    { name: "Server Setup", price: "₹30,000 - ₹1,50,000", desc: "Server installation and config" },
    { name: "Troubleshooting", price: "₹1,000 - ₹5,000", desc: "Per incident support" },
  ];

  const faqItems = [
    {
      question: "What is the response time for IT support across India?",
      answer: "Basic AMC: 24-48 hour response. Professional AMC: 6-12 hour response with phone support. Enterprise AMC: 1-2 hour response with 24/7 availability and on-site engineers in major metros. Remote support is typically instant during business hours. Emergency support available for critical issues."
    },
    {
      question: "Do you provide IT support services in all Indian cities?",
      answer: "Yes! We offer IT support pan-India. In metro cities (Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai), we provide on-site support. In tier-2 cities, we partner with local technicians for on-ground support. Remote support (troubleshooting, software issues) is available everywhere in India via phone, email, and remote desktop."
    },
    {
      question: "What's covered in annual maintenance contracts (AMC)?",
      answer: "AMC covers regular preventive maintenance, software updates, security patches, hardware diagnostics, data backup verification, network health checks, virus/malware protection, and troubleshooting support. Hardware replacement parts, new software licenses, and major upgrades are typically quoted separately based on requirements."
    },
    {
      question: "Can you handle IT support for businesses with multiple office locations?",
      answer: "Absolutely! We manage multi-location IT infrastructure across India with centralized monitoring, standardized configurations, remote management tools, and local support coordination. Enterprise AMCs include dedicated account managers, unified helpdesk, and consolidated reporting for all locations nationwide."
    },
    {
      question: "Do you provide server setup and cloud migration services?",
      answer: "Yes, we handle complete server setup (physical and cloud), data center migrations, cloud adoption (AWS, Azure, Google Cloud), email server configuration, backup solutions, and disaster recovery planning. We assess your needs, recommend suitable infrastructure, execute migration with minimal downtime."
    },
    {
      question: "How do you ensure data security and backup?",
      answer: "We implement multi-layered security: firewalls, antivirus software, regular security audits, access controls, and encryption. Automated backups run daily/weekly with cloud and local storage redundancy. Enterprise plans include disaster recovery testing, compliance audits, and incident response protocols."
    },
    {
      question: "Can you work with our existing IT vendors and equipment?",
      answer: "Yes! We collaborate with your existing vendors and support any standard hardware/software. If you have existing AMC contracts ending, we provide smooth transition with documentation, knowledge transfer, and system audits. We're vendor-agnostic and prioritize your business continuity."
    },
    {
      question: "What are the payment terms for IT support and AMC services?",
      answer: "AMC contracts are typically annual with quarterly or semi-annual payment options. One-time services require 50% advance and 50% on completion. Enterprise AMCs can have custom payment schedules. We accept bank transfer, cheques, and online payments. GST invoices provided for all services."
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
        title="IT Support & Technical Services India | AMC & Network Solutions"
        description="Professional IT support, annual maintenance contracts, network setup & troubleshooting for businesses across India. 24/7 support available. Serving Mumbai, Delhi, Bangalore & all metros. Starting ₹3,000/year."
        keywords="IT support India, IT AMC services India, technical support India, network setup India, server management, IT consulting India, computer support, IT maintenance India"
      />
      <Navbar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Headphones className="h-16 w-16 text-primary" />
              <span className="text-6xl">🔧</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              IT Support & Technical Services Across India
            </h1>
            <p className="text-2xl font-semibold text-primary italic mt-6">
              "Peace of mind for your business — reliability, security, and support that never sleeps."
            </p>
            <h2 className="text-xl text-muted-foreground leading-relaxed mt-4">
              Professional IT AMC, Network Setup, Server Management & 24/7 Technical Support
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete IT support services including annual maintenance contracts (AMC), network & server setup, security audits, troubleshooting & 24/7 helpdesk. Reliable IT solutions for Indian businesses in Mumbai, Delhi, Bangalore, Pune & nationwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient">
                  Get Support <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919406556785?text=I'm interested in IT Support services">
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

      {/* AMC Pricing */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Annual Maintenance Contracts</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {amcPricing.map((tier, index) => (
              <Card key={index} className={`border-border ${tier.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                <CardContent className="p-8 space-y-6">
                  {tier.popular && (
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-3xl font-bold text-primary">{tier.price}</p>
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full btn-gradient">Subscribe Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">One-Time Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {servicePricing.map((item, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <Link to="/contact">
                    <Button className="w-full btn-gradient mt-4">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} schema={faqSchema} />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold gradient-text">Need Reliable IT Support?</h2>
          <p className="text-xl max-w-2xl mx-auto text-foreground/80">
            Professional IT support and consulting services across all metro cities in India
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-gradient">Contact Our Team</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITSupport;
