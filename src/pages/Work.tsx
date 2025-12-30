import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Tech Startup Brand Film",
      category: "video",
      client: "Mumbai Tech Co.",
      description: "Cinematic brand film showcasing innovation and growth story",
      city: "Mumbai",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop"
    },
    {
      title: "E-Commerce Product Shoot",
      category: "photography",
      client: "Fashion Brand",
      description: "Premium product photography for online store",
      city: "Delhi",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
    },
    {
      title: "Restaurant Social Campaign",
      category: "social",
      client: "Fine Dining Restaurant",
      description: "3-month social media campaign with 200% engagement growth",
      city: "Bangalore",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
    },
    {
      title: "SaaS Platform Development",
      category: "web",
      client: "B2B Startup",
      description: "Full-stack SaaS platform with dashboard and analytics",
      city: "Mumbai",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "Corporate Documentary",
      category: "video",
      client: "Manufacturing Company",
      description: "20-minute documentary on sustainable manufacturing",
      city: "Pune",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop"
    },
    {
      title: "Wedding Photography",
      category: "photography",
      client: "Private Client",
      description: "3-day wedding coverage with cinematic storytelling",
      city: "Jaipur",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop"
    },
    {
      title: "E-Commerce Platform",
      category: "web",
      client: "Fashion Retailer",
      description: "Custom e-commerce platform with 10,000+ products",
      city: "Mumbai",
      thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
    },
    {
      title: "Instagram Reels Campaign",
      category: "social",
      client: "Fitness Brand",
      description: "30 reels campaign reaching 5M+ views",
      city: "Delhi",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
    }
  ];

  const filterProjects = (category: string) => {
    if (category === "all") return projects;
    return projects.filter(p => p.category === category);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">Our Work</h1>
            <p className="text-xl text-muted-foreground">
              Showcase of projects delivered across India for 300+ satisfied clients
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12 bg-card">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
              <TabsTrigger value="photography">Photos</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
            </TabsList>

            {["all", "video", "photography", "web", "social"].map(category => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filterProjects(category).map((project, index) => (
                    <Card
                      key={index}
                      className="group border-border overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedProject(index)}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                        <div className="absolute top-4 right-4 z-10">
                          <span className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full">
                            {project.city}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-3">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-primary">{project.client}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold gradient-text">150+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold gradient-text">300+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold gradient-text">7+</div>
              <p className="text-muted-foreground">Cities Covered</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold gradient-text">50+</div>
              <p className="text-muted-foreground">Running Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold gradient-text">Ready to Start Your Project?</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-gradient text-lg px-8 py-6">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
