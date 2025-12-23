import { Award, Users, Target, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const About = () => {
  const trustFactors = [
    { 
      icon: "🤝", 
      title: "Transparent Communication", 
      desc: "No hidden costs, no surprises. We keep you updated at every step with clear timelines, honest pricing, and open feedback channels."
    },
    { 
      icon: "✅", 
      title: "Commitment to Delivery", 
      desc: "We treat every deadline as a promise. Our team ensures on-time delivery without compromising quality, because your time matters."
    },
    { 
      icon: "🔒", 
      title: "100% Data Security", 
      desc: "Your business data, creative assets, and confidential information are handled with strict security protocols and NDAs."
    },
    { 
      icon: "💯", 
      title: "Quality Guarantee", 
      desc: "Not satisfied? We revise until you are. Our work comes with unlimited revisions during the project phase — your vision, our execution."
    },
    { 
      icon: "📞", 
      title: "Dedicated Support", 
      desc: "One point of contact, always available. From project kickoff to post-delivery support, we are just a call or message away."
    },
    { 
      icon: "🏆", 
      title: "Proven Track Record", 
      desc: "500+ successful projects, 50+ awards, and clients from startups to corporates — our results speak louder than words."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Never Ending Services | Digital Agency Serving All India"
        description="Leading creative & digital agency based in Mumbai, serving 500+ clients across 15+ Indian cities. Specializing in video production, digital marketing, web development & IT solutions since 2018."
        keywords="about Never Ending Services, digital agency India, creative agency Mumbai, video production company, digital marketing agency, web development company India"
      />
      <Navbar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <span className="text-6xl mb-4 block">🎬</span>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">Never Ending Films</h1>
            <p className="text-2xl font-semibold">Creativity Beyond Frames</p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A division of Never Ending Services
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold gradient-text text-center mb-12">Our Story</h2>
            <div className="prose prose-invert max-w-none text-foreground/80 space-y-6 leading-relaxed text-lg">
              <p>
                Never Ending Services is a full-scale creative and digital solutions company delivering end-to-end production, marketing, and technology services under one roof. We combine cinematic storytelling, digital innovation, and strategic branding to help businesses and creators stand out in an ever-evolving market.
              </p>
              <p>
                From film production and photography to website design, digital marketing, and e-commerce management — our approach is rooted in creativity, precision, and measurable impact. Every project we take on is treated as a partnership, where ideas are transformed into powerful visual and digital experiences.
              </p>
              <p>
                With a team of filmmakers, designers, marketers, and tech experts, Never Ending Services offers brands a one-stop destination to build, scale, and sustain their presence — online and beyond.
              </p>
              <div className="bg-card/50 p-8 rounded-lg border border-primary/20 mt-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Our Focus:</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Creative production</strong> that connects emotionally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Digital strategies</strong> that drive engagement and growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Technology solutions</strong> that empower businesses to scale</span>
                  </li>
                </ul>
              </div>
              <p className="text-xl font-semibold text-primary pt-6">
                At Never Ending Services, we don't just deliver projects — we build long-term relationships powered by innovation, integrity, and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold gradient-text text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Client-First", desc: "Your success is our mission" },
              { icon: Award, title: "Excellence", desc: "Premium quality in every project" },
              { icon: Users, title: "Collaboration", desc: "Teamwork with transparency" },
              { icon: Trophy, title: "Innovation", desc: "Cutting-edge solutions always" }
            ].map((value, i) => (
              <Card key={i} className="border-border bg-card hover:border-primary/50 transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]">
                <CardContent className="p-8 text-center space-y-4">
                  <value.icon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Why Clients Trust Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building lasting partnerships through transparency, reliability, and exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFactors.map((factor, i) => (
              <Card key={i} className="border-border bg-card hover:border-primary/50 transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]">
                <CardContent className="p-8 space-y-4">
                  <span className="text-4xl block">{factor.icon}</span>
                  <h3 className="text-xl font-semibold">{factor.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{factor.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Promise */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <Card className="border-primary/50 bg-gradient-to-br from-card to-primary/5 transition-all duration-300 ease-out hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-[1.02]">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold gradient-text">Our Promise to You</h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                "You believe in us. We believe in you. Together, we create magic."
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                When you choose Never Ending Services, you choose a partner who values your vision as much as you do. We commit to transparent pricing, timely delivery, and quality that exceeds expectations — every single time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
