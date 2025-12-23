import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, CheckCircle2, BarChart3, Users, Target, TrendingUp, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SocialMediaMarketingROI = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Maximizing Social Media Marketing ROI for Indian Brands",
    "description": "Learn data-driven social media strategies that deliver real results. Platform-specific tactics, content calendars, and analytics mastery.",
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    "author": {
      "@type": "Organization",
      "name": "Never Ending Services"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Never Ending Services",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/logo.png`
      }
    },
    "datePublished": "2025-07-20",
    "dateModified": "2025-07-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${window.location.origin}/blog/social-media-marketing-roi`
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/30">
      <SEO
        title="Maximizing Social Media Marketing ROI for Indian Brands | Never Ending Services"
        description="Learn data-driven social media strategies that deliver real results. Platform-specific tactics, content calendars, and analytics mastery for Indian brands."
        keywords="social media marketing India, social media ROI, Instagram marketing, Facebook ads India, social media strategy, content marketing"
        schema={schema}
      />
      <Navbar />
      
      <article className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-12 animate-fade-up">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full font-medium">
                Social Media
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime="2025-07-20">July 20, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>11 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Maximizing Social Media Marketing ROI for Indian Brands
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your social media from a cost center to a revenue driver with data-backed strategies, platform mastery, and measurable results.
            </p>
          </header>

          <div className="mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80"
              alt="Social media marketing analytics dashboard showing engagement metrics and ROI"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Social Media Landscape in India</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                India is the world's largest market for social media platforms. With over 450 million active social media users, the opportunity for brands is massive—but so is the noise. Standing out requires more than just posting content; it demands a strategic approach focused on measurable returns.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The challenge? Most brands treat social media as a vanity metrics game—chasing likes and followers without connecting them to business outcomes. In this guide, we'll show you how to flip the script and build a social media engine that drives real revenue.
              </p>

              <div className="grid md:grid-cols-4 gap-4 my-8">
                <Card className="p-4 bg-card/50 text-center">
                  <Users className="h-10 w-10 text-pink-400 mx-auto mb-2" />
                  <h4 className="text-xl font-bold text-foreground">450M+</h4>
                  <p className="text-muted-foreground text-xs">Active Users</p>
                </Card>
                <Card className="p-4 bg-card/50 text-center">
                  <Heart className="h-10 w-10 text-pink-400 mx-auto mb-2" />
                  <h4 className="text-xl font-bold text-foreground">2.5hrs</h4>
                  <p className="text-muted-foreground text-xs">Daily Usage</p>
                </Card>
                <Card className="p-4 bg-card/50 text-center">
                  <Target className="h-10 w-10 text-pink-400 mx-auto mb-2" />
                  <h4 className="text-xl font-bold text-foreground">70%</h4>
                  <p className="text-muted-foreground text-xs">Discover Brands</p>
                </Card>
                <Card className="p-4 bg-card/50 text-center">
                  <TrendingUp className="h-10 w-10 text-pink-400 mx-auto mb-2" />
                  <h4 className="text-xl font-bold text-foreground">4.5X</h4>
                  <p className="text-muted-foreground text-xs">Engagement Growth</p>
                </Card>
              </div>
            </section>

            <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Platform-Specific Strategies for India</h2>
              
              <Card className="p-6 mb-6 bg-card/50">
                <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">IG</span>
                  </div>
                  Instagram: The Visual Powerhouse
                </h4>
                <p className="text-muted-foreground mb-4">
                  India's #1 platform for brand discovery. 230M+ users, predominantly 18-34 age group.
                </p>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• <strong>Reels First:</strong> 90% more reach than static posts. Create 15-30 second engaging content</li>
                  <li>• <strong>Stories:</strong> 500M daily users globally. Use for behind-the-scenes, polls, Q&A</li>
                  <li>• <strong>Shopping:</strong> Tag products directly in posts and Reels for seamless purchasing</li>
                  <li>• <strong>Collabs:</strong> Partner posts that appear on both profiles, doubling reach</li>
                </ul>
              </Card>

              <Card className="p-6 mb-6 bg-card/50">
                <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">FB</span>
                  </div>
                  Facebook: The Community Builder
                </h4>
                <p className="text-muted-foreground mb-4">
                  Still India's largest platform with 350M+ users. Strongest in Tier 2/3 cities and 35+ demographics.
                </p>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• <strong>Groups:</strong> Build communities around your niche. Higher engagement than pages</li>
                  <li>• <strong>Marketplace:</strong> Direct selling for local businesses and products</li>
                  <li>• <strong>Video:</strong> Facebook Watch and Live for long-form engagement</li>
                  <li>• <strong>Ads:</strong> Most sophisticated targeting options for paid campaigns</li>
                </ul>
              </Card>

              <Card className="p-6 mb-6 bg-card/50">
                <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">YT</span>
                  </div>
                  YouTube: The Content King
                </h4>
                <p className="text-muted-foreground mb-4">
                  India's #1 video platform with 467M+ users. Essential for long-form content and SEO.
                </p>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• <strong>Shorts:</strong> Compete with TikTok/Reels with vertical short-form content</li>
                  <li>• <strong>SEO:</strong> Second largest search engine. Optimize titles, descriptions, tags</li>
                  <li>• <strong>Community:</strong> Posts, polls, and updates to engage subscribers</li>
                  <li>• <strong>Regional:</strong> Hindi and regional language content sees 3x engagement</li>
                </ul>
              </Card>

              <Card className="p-6 mb-6 bg-card/50">
                <h4 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">in</span>
                  </div>
                  LinkedIn: The B2B Goldmine
                </h4>
                <p className="text-muted-foreground mb-4">
                  85M+ Indian professionals. Essential for B2B brands and thought leadership.
                </p>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li>• <strong>Personal Branding:</strong> Founders and employees as brand ambassadors</li>
                  <li>• <strong>Newsletters:</strong> Direct subscriber relationships with long-form content</li>
                  <li>• <strong>Document Posts:</strong> PDF carousels get 3x more engagement</li>
                  <li>• <strong>Sales Navigator:</strong> Advanced prospecting for lead generation</li>
                </ul>
              </Card>
            </section>

            <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Content Strategy That Converts</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">The 4E Content Framework</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every piece of content should fit into one of these categories:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6 bg-pink-500/5 border-pink-500/20">
                  <h4 className="font-semibold mb-2 text-foreground">Educate</h4>
                  <p className="text-muted-foreground text-sm">
                    How-to guides, tutorials, industry insights. Position yourself as the expert.
                  </p>
                </Card>
                <Card className="p-6 bg-pink-500/5 border-pink-500/20">
                  <h4 className="font-semibold mb-2 text-foreground">Entertain</h4>
                  <p className="text-muted-foreground text-sm">
                    Trends, memes, humor. Connect emotionally and increase shareability.
                  </p>
                </Card>
                <Card className="p-6 bg-pink-500/5 border-pink-500/20">
                  <h4 className="font-semibold mb-2 text-foreground">Engage</h4>
                  <p className="text-muted-foreground text-sm">
                    Questions, polls, UGC prompts. Build community and conversations.
                  </p>
                </Card>
                <Card className="p-6 bg-pink-500/5 border-pink-500/20">
                  <h4 className="font-semibold mb-2 text-foreground">Empower</h4>
                  <p className="text-muted-foreground text-sm">
                    Success stories, testimonials, case studies. Inspire action and trust.
                  </p>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Content Calendar Best Practices</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Consistency:</strong> Post at least 5-7 times per week on Instagram, 3-5 on LinkedIn, 2-3 on YouTube</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Timing:</strong> Indian peak hours: 7-9 AM, 12-2 PM, 7-10 PM. Test and optimize for your audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Mix:</strong> 40% educate, 30% engage, 20% entertain, 10% promote</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Batching:</strong> Create content in batches for efficiency. Plan 2-4 weeks ahead</span>
                </li>
              </ul>
            </section>

            <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Measuring Social Media ROI</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Move beyond vanity metrics. Track these KPIs that connect to business outcomes:
              </p>

              <Card className="p-6 mb-6 bg-muted/50">
                <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-pink-400" />
                  Essential Metrics Dashboard
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Awareness Metrics</h5>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Reach and impressions</li>
                      <li>• Follower growth rate</li>
                      <li>• Share of voice</li>
                      <li>• Brand mention volume</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Engagement Metrics</h5>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Engagement rate (ER%)</li>
                      <li>• Comments and saves</li>
                      <li>• Story completion rate</li>
                      <li>• Video watch time</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Conversion Metrics</h5>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Click-through rate (CTR)</li>
                      <li>• Website traffic from social</li>
                      <li>• Lead form submissions</li>
                      <li>• Conversion rate</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Revenue Metrics</h5>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Cost per acquisition (CPA)</li>
                      <li>• Return on ad spend (ROAS)</li>
                      <li>• Customer lifetime value (CLV)</li>
                      <li>• Revenue attributed to social</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Setting Up Attribution</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>UTM Parameters:</strong> Track every link with source, medium, campaign tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Pixel Tracking:</strong> Install Meta Pixel, LinkedIn Insight Tag, and Google Analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>CRM Integration:</strong> Connect social leads to your sales pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Custom Dashboards:</strong> Build unified reporting across platforms</span>
                </li>
              </ul>
            </section>

            <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Paid Social Advertising That Works</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Organic reach is declining. Strategic paid advertising amplifies your best content:
              </p>

              <Card className="p-6 mb-6 bg-pink-500/5 border-pink-500/20">
                <h4 className="font-semibold mb-4 text-foreground">Campaign Structure Best Practices</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Awareness:</strong> Broad targeting, video views, reach optimization. Budget: 30%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Consideration:</strong> Interest targeting, engagement, traffic objectives. Budget: 30%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Conversion:</strong> Retargeting, lookalikes, conversion optimization. Budget: 40%</span>
                  </li>
                </ul>
              </Card>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Budget Allocation Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6 bg-muted/50">
                  <h4 className="font-semibold mb-3 text-foreground">Small Brands (₹50K-2L/month)</h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Focus on 1-2 platforms only</li>
                    <li>• 60% Instagram/Facebook, 40% YouTube</li>
                    <li>• Prioritize retargeting and lookalikes</li>
                    <li>• Test creatives with small budgets first</li>
                  </ul>
                </Card>
                <Card className="p-6 bg-muted/50">
                  <h4 className="font-semibold mb-3 text-foreground">Growing Brands (₹2L-10L/month)</h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Multi-platform presence</li>
                    <li>• Invest in influencer partnerships</li>
                    <li>• Build robust retargeting funnels</li>
                    <li>• A/B test everything systematically</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12 animate-fade-up" style={{ animationDelay: "0.7s" }}>
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-8 rounded-2xl border border-pink-500/20">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Maximize Your Social Media ROI?</h2>
                <p className="text-muted-foreground mb-6">
                  Never Ending Services has helped Indian brands across industries transform their social media presence into revenue-generating machines. From strategy to execution to analytics—we've got you covered.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
                    Get Your Social Media Audit
                  </Button>
                </Link>
              </div>
            </section>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-border mt-12">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Articles
            </Link>
            <Button variant="outline" size="sm" onClick={() => navigator.share?.({ url: window.location.href, title: document.title })}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default SocialMediaMarketingROI;
