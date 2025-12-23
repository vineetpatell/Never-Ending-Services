import { ShoppingCart, Package, Camera, BarChart, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  const features = [
    { icon: ShoppingCart, title: "Store Setup", desc: "Complete online store" },
    { icon: Package, title: "Product Upload", desc: "Catalog management" },
    { icon: Camera, title: "Photography", desc: "Product photo shoots" },
    { icon: BarChart, title: "Analytics", desc: "Sales tracking" },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "₹5,000/month",
      features: ["Basic Store Setup", "Up to 50 Products", "Monthly Reports", "Email Support"],
    },
    {
      name: "Professional",
      price: "₹15,000 - ₹40,000/month",
      features: ["Advanced Store", "Unlimited Products", "Product Photography", "Account Management", "Weekly Analytics", "Marketing Support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹1,20,000/month",
      features: ["Multi-Channel", "Premium Photography", "Dedicated Manager", "24/7 Support", "Custom Integration", "Full Marketing Suite"],
    },
  ];

  const photographyPricing = [
    { name: "Basic Session", price: "₹2,000", desc: "10-15 products, white background" },
    { name: "Professional", price: "₹5,000 - ₹12,000", desc: "25-50 products, lifestyle shots" },
    { name: "Premium", price: "₹15,000+", desc: "Full catalog, creative shoots" },
  ];

  const faqItems = [
    {
      question: "How quickly can you set up my e-commerce store across Indian platforms?",
      answer: "Basic store setup on Shopify or custom platforms takes 1-2 weeks. Marketplace onboarding (Amazon, Flipkart, Meesho) takes 3-7 days after documentation is ready. Full catalog upload and optimization for 100+ products typically requires 2-3 weeks. We expedite launches for urgent requirements across India."
    },
    {
      question: "Do you manage e-commerce stores for businesses across all Indian cities?",
      answer: "Yes! We provide complete e-commerce management remotely for businesses anywhere in India - from metros like Mumbai, Delhi, Bangalore to tier-2 and tier-3 cities. Product photography can be arranged locally in major cities or you can ship products to our studios for shooting."
    },
    {
      question: "What's included in your monthly e-commerce management packages?",
      answer: "Monthly packages include product listing & optimization, inventory management, pricing updates, order processing support, customer query handling, basic marketing (social posts), analytics reports, and platform account management. Professional plans add product photography, ad campaigns, and dedicated account managers."
    },
    {
      question: "Can you help sell on both marketplaces and own website?",
      answer: "Absolutely! We recommend an omnichannel approach - selling on Amazon, Flipkart, your Shopify store, and social commerce simultaneously. We manage inventory sync, unified pricing strategies, and coordinate campaigns across platforms to maximize reach in Indian markets without overselling."
    },
    {
      question: "What does product photography service include?",
      answer: "Product photography includes professional shooting with multiple angles, white background images for marketplaces, lifestyle shots for social media, basic editing & retouching, and delivery in required formats. Sessions can be done in our studios or at your location in major Indian cities."
    },
    {
      question: "How do you optimize product listings for better sales?",
      answer: "We optimize titles with relevant keywords, write compelling descriptions highlighting benefits, use high-quality images, set competitive pricing based on market research, add proper categories and attributes, collect reviews, and implement SEO best practices for Indian search behavior and regional preferences."
    },
    {
      question: "Do you handle customer service and order management?",
      answer: "Professional and Enterprise plans include customer query handling via platform messaging, email, and WhatsApp. We manage order processing, coordinate with logistics, handle returns/refunds as per platform policies, and maintain customer satisfaction metrics across all Indian marketplaces."
    },
    {
      question: "What is the cancellation policy for monthly management plans?",
      answer: "We offer flexible month-to-month plans with 30-day notice for cancellation. No long-term lock-ins. If you're unsatisfied in the first month, we offer a 50% refund after deducting actual work done. All product data, photos, and accounts remain your property."
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
        title="E-Commerce Management Services India | Store Setup & Product Photography"
        description="Complete e-commerce solutions - store setup, catalog management, product photography & optimization for Indian online businesses. Shopify, Amazon, Flipkart experts. Starting ₹5,000/month."
        keywords="e-commerce management India, online store setup India, product photography India, e-commerce solutions, Shopify management, Amazon store management, catalog management, e-commerce photography"
      />
      <Navbar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-4">
              <ShoppingCart className="h-16 w-16 text-primary" />
              <span className="text-6xl">🛒</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              E-Commerce Solutions & Management Services India
            </h1>
            <p className="text-2xl font-semibold text-primary italic mt-6">
              "Winning in e-commerce is about more than sales — it's about seamless experience, everywhere."
            </p>
            <h2 className="text-xl text-muted-foreground leading-relaxed mt-4">
              Complete Online Store Setup, Catalog Management & Product Photography for Indian Sellers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              End-to-end e-commerce management including store setup on Shopify, Amazon, Flipkart; product listing & photography; catalog creation & analytics. Helping Indian businesses succeed online from Mumbai to metros nationwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="btn-gradient">
                  Launch Your Store <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/919406556785?text=I'm interested in E-Commerce Management services">
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

      {/* Monthly Management Pricing */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Monthly Management Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
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
                    <Button className="w-full btn-gradient">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Add-on */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Product Photography Add-on</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {photographyPricing.map((item, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center space-y-3">
                  <Camera className="h-10 w-10 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
          <h2 className="text-4xl font-bold gradient-text">Ready to Sell Online?</h2>
          <p className="text-xl max-w-2xl mx-auto text-foreground/80">
            Complete e-commerce management services across all platforms in India
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-gradient">Get Started Today</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;
