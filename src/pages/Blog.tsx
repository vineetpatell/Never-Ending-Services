import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      slug: "digital-marketing-partner-india",
      title: "Finding a Trusted Digital Marketing Partner in India",
      description: "Complete guide to choosing the right digital marketing agency for your business in India. Learn key factors, red flags, and success strategies.",
      date: "2025-08-15",
      readTime: "12 min read",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "video-production-brand-storytelling",
      title: "How Professional Video Production Transforms Brand Storytelling",
      description: "Discover why cinematic video content is essential for modern brands. Learn production techniques, storytelling frameworks, and ROI insights.",
      date: "2025-08-10",
      readTime: "10 min read",
      category: "Video Production",
      image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "ecommerce-growth-strategies-india",
      title: "E-Commerce Growth Strategies for Indian Businesses in 2025",
      description: "Master the art of online selling with proven e-commerce strategies. From marketplace optimization to D2C success, unlock your growth potential.",
      date: "2025-08-05",
      readTime: "15 min read",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "website-design-trends-2024",
      title: "Top Website Design Trends That Will Dominate 2025",
      description: "Stay ahead of the curve with the latest web design trends. From AI-powered interfaces to immersive experiences, build websites that convert.",
      date: "2025-07-28",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "social-media-marketing-roi",
      title: "Maximizing Social Media Marketing ROI for Indian Brands",
      description: "Learn data-driven social media strategies that deliver real results. Platform-specific tactics, content calendars, and analytics mastery.",
      date: "2025-07-20",
      readTime: "11 min read",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Never Ending Services Blog",
    "description": "Expert insights on digital marketing, video production, web development, and business growth in India",
    "url": `${window.location.origin}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "Never Ending Services",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/logo.png`
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/30">
      <SEO
        title="Blog - Expert Digital Marketing & Business Insights India"
        description="Read expert insights on digital marketing, video production, web development, and business growth strategies for Indian businesses. Latest trends and proven tactics."
        keywords="digital marketing blog India, business growth tips, video production insights, web development guide, Indian business strategies"
        schema={schema}
      />
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Insights & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert advice on digital marketing, video production, and business growth across India
            </p>
          </header>

          {/* Featured Article */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Finding a Trusted Digital Marketing Partner in India
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Discover how to choose the perfect digital marketing agency for your business. Learn about essential factors, warning signs, and proven strategies for successful partnerships.
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>August 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>12 min read</span>
                  </div>
                </div>
                <Link to="/blog/digital-marketing-partner-india">
                  <Button size="lg" className="btn-gradient group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Digital marketing strategy and analytics in India"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </section>

          {/* All Articles */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={article.slug} className="group border-border bg-card hover:border-primary/50 transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02] animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(article.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/blog/${article.slug}`}>
                      <Button variant="ghost" className="w-full group/btn">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;