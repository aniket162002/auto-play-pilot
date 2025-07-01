import { Button } from "@/components/ui/button";
import { ArrowDown, Upload, Check } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 success-gradient rounded-2xl opacity-20 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-warning/20 rounded-lg animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-slide-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>Zero-Touch Publishing Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Publish to{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
              Google Play
            </span>{" "}
            in One Click
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Drag & drop your AAB, hit publish, and let our AI handle everything—uploads, QA, policy checks, fixes, and notifications. 
            <span className="text-primary font-semibold"> Zero manual work required.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="hero-gradient text-white font-semibold px-8 py-4 text-lg shadow-glow hover:shadow-glow transition-smooth">
              <Upload className="w-5 h-5 mr-2" />
              Start Publishing Now
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary/5 transition-smooth">
              Watch Demo
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {[
              {
                icon: Upload,
                title: "One-Click Upload",
                description: "Drag & drop AAB + assets, auto-populate metadata"
              },
              {
                icon: Check,
                title: "Automated QA",
                description: "Policy lint, ProGuard checks, auto-fix common issues"
              },
              {
                icon: ArrowDown,
                title: "Smart Notifications",
                description: "Real-time status updates via email, Slack, webhooks"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="card-gradient p-6 rounded-xl shadow-soft hover:shadow-glow transition-smooth border border-border/50"
              >
                <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;