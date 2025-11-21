import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, ArrowRight, Shield, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bnpLogo from "@/assets/bnp-logo.png";

const Landing = () => {
  const navigate = useNavigate();
  const [showAIChat, setShowAIChat] = useState(false);

  const testimonials = [
    {
      name: "Sophie Durand",
      role: "CEO, TechFlow (Series B)",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      comment: "BIVWAK+ m'a permis d'optimiser ma fiscalité et de préparer sereinement ma levée en Série C. Un outil indispensable pour tout entrepreneur."
    },
    {
      name: "Marc Lefebvre",
      role: "Founder, GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      comment: "La simulation d'exit m'a aidé à négocier ma sortie avec une vision claire. J'ai optimisé ma plus-value de 28%. Exceptionnel."
    },
    {
      name: "Amélie Chen",
      role: "Co-founder, DataSync AI",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      comment: "L'analyse patrimoniale IA a détecté des risques que je n'avais pas vus. BNP Entrepreneurs comprend vraiment les scale-ups."
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Diagnostic 360°",
      description: "Analyse complète de votre patrimoine personnel, professionnel et holding en temps réel"
    },
    {
      icon: Shield,
      title: "Structuration Optimale",
      description: "Optimisation juridique et fiscale pilotée par l'IA pour maximiser votre efficacité"
    },
    {
      icon: Users,
      title: "Exit & Transmission",
      description: "Simulation d'exit, cap table et stratégies de transmission sur mesure"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={bnpLogo} alt="BNP Paribas" className="h-10" />
            <div className="h-8 w-px bg-border"></div>
            <span className="text-xl font-semibold text-foreground">Entrepreneurs</span>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/login")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Client Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by BIVWAK+ AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Master Your Wealth<br/>
              <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">
                Like Never Before
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A single intelligent platform that gives entrepreneurs a complete, AI-driven mastery of their personal, business, and holding wealth; from diagnostic to structuration, investment, protection, and exit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg"
                onClick={() => navigate("/login")}
                className="bg-gradient-primary shadow-premium text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105"
              >
                Start Managing Your Wealth
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Video */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-premium border border-border animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="aspect-video bg-gradient-card flex items-center justify-center">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-businessman-analyzing-data-on-a-screen-42513-large.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive wealth management for ambitious entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card 
                key={idx}
                className="p-8 bg-gradient-card border-border hover:shadow-premium transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trusted by Leading Entrepreneurs
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of successful founders managing their wealth with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card 
                key={idx}
                className="p-8 bg-gradient-card border-border animate-fade-in hover:shadow-premium transition-all"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.comment}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-gradient-primary border-0 text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Wealth Management?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join the most advanced platform for entrepreneur wealth optimization
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/login")}
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 shadow-premium hover:scale-105 transition-all"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={bnpLogo} alt="BNP Paribas" className="h-8" />
              <span className="text-muted-foreground">© 2025 BNP Paribas Entrepreneurs</span>
            </div>
            <div className="flex gap-8 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chat Bubble */}
      {showAIChat && (
        <div className="fixed bottom-24 right-8 w-96 animate-scale-in z-50">
          <Card className="bg-gradient-card border-border shadow-premium">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">BIVWAK+ Assistant</span>
              </div>
              <Button 
                size="icon" 
                variant="ghost"
                onClick={() => setShowAIChat(false)}
                className="h-8 w-8"
              >
                ×
              </Button>
            </div>
            <div className="p-4 space-y-4 h-80 overflow-y-auto">
              <div className="bg-secondary/50 rounded-lg p-3">
                <p className="text-sm text-foreground">
                  Bonjour! Je suis BIVWAK+, votre assistant IA. Comment puis-je vous aider aujourd'hui?
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="outline" className="text-xs">
                  Comment ça marche?
                </Button>
                <Button size="sm" variant="outline" className="text-xs">
                  Tarifs et plans
                </Button>
                <Button size="sm" variant="outline" className="text-xs">
                  Sécurité des données
                </Button>
              </div>
            </div>
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Posez votre question..."
                  className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="icon" className="bg-gradient-primary">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Floating AI Button */}
      <Button
        size="icon"
        onClick={() => setShowAIChat(!showAIChat)}
        className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-gradient-primary shadow-premium hover:scale-110 transition-all z-50 animate-fade-in"
        style={{ animationDelay: "500ms" }}
      >
        <Sparkles className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Landing;
