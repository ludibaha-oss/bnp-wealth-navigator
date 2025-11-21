import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, ArrowRight, Shield, TrendingUp, Users, CheckCircle2, BarChart3, FileText, Building2, Heart, Home, MessageCircle, Calendar, Play, Mic, Award, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bnpLogo from "@/assets/bnp-logo.png";

const Landing = () => {
  const navigate = useNavigate();
  const [showAIChat, setShowAIChat] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const testimonials = [
    {
      name: "Sophie Durand",
      role: "CEO, TechFlow (Série B)",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      comment: "BIVWAK+ a transformé ma gestion patrimoniale. L'optimisation fiscale sur ma sortie m'a fait économiser 250K€. Une expertise rare."
    },
    {
      name: "Marc Lefebvre",
      role: "Fondateur, GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      comment: "La simulation d'exit et le pacte Dutreil ont sécurisé ma transmission. BNP Entrepreneurs comprend vraiment les enjeux des dirigeants."
    },
    {
      name: "Amélie Chen",
      role: "Co-fondatrice, DataSync AI",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      comment: "Le diagnostic 360° a révélé une sur-exposition à mon entreprise. Aujourd'hui, mon patrimoine est diversifié et protégé."
    }
  ];

  const quizQuestions = [
    { q: "Quel est votre âge?", options: ["25-35 ans", "36-45 ans", "46-55 ans", "56+ ans"] },
    { q: "Votre entreprise est en:", options: ["Série A-B", "Série C+", "PME rentable", "Phase de transmission"] },
    { q: "Patrimoine personnel estimé:", options: ["< 500K€", "500K-2M€", "2M-5M€", "> 5M€"] },
    { q: "Votre rémunération actuelle:", options: ["Salaire uniquement", "Salaire + dividendes", "Dividendes uniquement", "Pas optimisée"] },
    { q: "Avez-vous une holding?", options: ["Oui", "Non", "En projet", "Ne sais pas"] },
    { q: "Protection du dirigeant:", options: ["Complète", "Partielle", "Minimale", "Aucune"] },
    { q: "Diversification patrimoniale:", options: ["< 20%", "20-40%", "40-60%", "> 60%"] },
    { q: "Horizon d'exit envisagé:", options: ["< 2 ans", "2-5 ans", "5-10 ans", "Pas prévu"] },
    { q: "Préoccupation principale:", options: ["Optimisation fiscale", "Protection famille", "Diversification", "Transmission"] },
    { q: "Accompagnement actuel:", options: ["Aucun", "Expert-comptable", "CGP", "Banque privée"] }
  ];

  const pillars = [
    {
      icon: BarChart3,
      title: "Diagnostic Patrimonial 360°",
      description: "Analyse complète de votre situation personnelle, professionnelle et holding",
      services: [
        "Cartographie complète des flux financiers",
        "Analyse risque/rendement par classe d'actifs",
        "Détection automatique des inefficiences",
        "Rapport PDF personnalisé"
      ]
    },
    {
      icon: Building2,
      title: "Structuration Juridique & Fiscale",
      description: "Optimisation de votre structure pour maximiser l'efficacité fiscale",
      services: [
        "Simulation holding animatrice vs passive",
        "Optimisation rémunération/dividendes",
        "Stratégie d'intégration fiscale",
        "Pacte Dutreil et transmission"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investissement & Diversification",
      description: "Construction d'un patrimoine résilient au-delà de votre entreprise",
      services: [
        "Allocation d'actifs sur-mesure",
        "Accès private equity & immobilier",
        "Stratégies fiscalement optimisées",
        "Suivi performance temps réel"
      ]
    },
    {
      icon: Shield,
      title: "Protection du Dirigeant",
      description: "Sécurisation de votre famille et de votre patrimoine",
      services: [
        "Audit couverture prévoyance/santé",
        "Protection juridique du patrimoine",
        "Assurance homme-clé",
        "Planification successorale"
      ]
    },
    {
      icon: Home,
      title: "Transmission & Exit",
      description: "Préparation et optimisation de votre sortie entrepreneuriale",
      services: [
        "Simulation de dilution (cap table)",
        "Modélisation d'exit (LBO, cession, IPO)",
        "Stratégie fiscale de sortie",
        "Accompagnement post-exit"
      ]
    },
    {
      icon: Users,
      title: "Communauté BNP Entrepreneurs",
      description: "Réseau exclusif d'entrepreneurs à succès",
      services: [
        "Événements mensuels (pitch, networking)",
        "Mentorat peer-to-peer",
        "Groupe Slack privé",
        "Accès deals early-stage"
      ]
    }
  ];

  const financialNews = [
    {
      title: "Loi de Finances 2025 : Nouvelles règles pour les holding",
      date: "15 Jan 2025",
      category: "Fiscalité",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
    },
    {
      title: "Private Equity : Rendements 2024 et perspectives",
      date: "10 Jan 2025",
      category: "Investissement",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Transmission d'entreprise : Le guide complet 2025",
      date: "5 Jan 2025",
      category: "Transmission",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
    }
  ];

  const legalPodcasts = [
    {
      title: "Pacte Dutreil : Évolutions et pièges à éviter",
      duration: "18 min",
      expert: "Me. Laurent Dubois",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop"
    },
    {
      title: "Holding animatrice : Critères 2025 de l'administration",
      duration: "22 min",
      expert: "Me. Caroline Martin",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop"
    },
    {
      title: "Optimisation fiscale : Conformité vs agressivité",
      duration: "15 min",
      expert: "Me. Thomas Renard",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
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
            Espace Client
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by BIVWAK+ AI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Optimisez, protégez et transmettez<br/>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                votre patrimoine entrepreneurial
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une approche 360°, sur-mesure et experte pour les entrepreneurs en Série A+ et dirigeants de PME en phase de transmission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg"
                onClick={() => {
                  const diagnosticSection = document.getElementById('diagnostic');
                  diagnosticSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-primary shadow-premium text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105"
              >
                Diagnostic 360° en 5 minutes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-gold text-gold hover:bg-gold hover:text-gold-foreground"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Prendre RDV avec un expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Video */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden shadow-premium border border-border animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="aspect-video bg-gradient-card flex items-center justify-center relative">
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-8 left-8 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Tableau de bord BIVWAK+</h3>
                <p className="text-white/90">Pilotez votre patrimoine en temps réel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Quiz Section */}
      <section id="diagnostic" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Diagnostic Patrimonial 360°
            </h2>
            <p className="text-xl text-muted-foreground">
              10 questions pour une analyse personnalisée de votre situation
            </p>
          </div>

          <Card className="p-8 bg-card border-border shadow-card">
            {quizStep < quizQuestions.length ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">Question {quizStep + 1}/{quizQuestions.length}</span>
                  <span className="text-sm font-medium text-primary">{Math.round((quizStep / quizQuestions.length) * 100)}% complété</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary transition-all duration-300" 
                    style={{ width: `${(quizStep / quizQuestions.length) * 100}%` }}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mt-8">{quizQuestions[quizStep].q}</h3>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {quizQuestions[quizStep].options.map((option, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="h-auto py-4 text-left justify-start hover:border-primary hover:bg-primary/5"
                      onClick={() => {
                        setQuizAnswers({ ...quizAnswers, [quizStep]: option });
                        setQuizStep(quizStep + 1);
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Analyse en cours...</h3>
                <p className="text-muted-foreground">Notre IA BIVWAK+ génère votre rapport personnalisé</p>
                <div className="bg-secondary/50 p-6 rounded-lg text-left space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-sm">Analyse de votre profil patrimonial...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.3s" }}></div>
                    <span className="text-sm">Calcul des optimisations possibles...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                    <span className="text-sm">Génération de recommandations personnalisées...</span>
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="bg-gradient-primary shadow-premium"
                  onClick={() => navigate("/login")}
                >
                  Recevoir mon diagnostic PDF
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* 7 Pillars with Tabs */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              7 Piliers pour Maîtriser votre Patrimoine
            </h2>
            <p className="text-xl text-muted-foreground">
              Une approche globale et intégrée pour les entrepreneurs ambitieux
            </p>
          </div>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-secondary/50 p-2 mb-8">
              {pillars.map((pillar, idx) => (
                <TabsTrigger 
                  key={idx} 
                  value={idx.toString()}
                  className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <pillar.icon className="h-5 w-5" />
                  <span className="text-xs text-center hidden lg:block">{pillar.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {pillars.map((pillar, idx) => (
              <TabsContent key={idx} value={idx.toString()} className="space-y-6">
                <Card className="p-8 bg-gradient-card border-border shadow-card">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-primary/10">
                      <pillar.icon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-foreground mb-3">{pillar.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">{pillar.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {pillar.services.map((service, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Interactive Simulator */}
                <Card className="p-8 bg-card border-gold shadow-gold">
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="h-6 w-6 text-gold" />
                    <h4 className="text-xl font-semibold text-foreground">Simulateur Interactif</h4>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {idx === 0 && "Estimez votre potentiel d'optimisation patrimoniale"}
                    {idx === 1 && "Comparez holding animatrice vs passive pour votre situation"}
                    {idx === 2 && "Simulez votre allocation d'actifs optimale"}
                    {idx === 3 && "Calculez votre taux de dépendance à votre entreprise"}
                    {idx === 4 && "Modélisez différents scénarios d'exit (LBO, cession, IPO)"}
                    {idx === 5 && "Découvrez les avantages de la communauté"}
                  </p>
                  <Button 
                    className="bg-gradient-accent text-accent-foreground hover:opacity-90"
                    onClick={() => navigate("/login")}
                  >
                    Lancer la simulation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ils Ont Transformé leur Patrimoine
            </h2>
            <p className="text-xl text-muted-foreground">
              Rejoignez des centaines d'entrepreneurs qui nous font confiance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card 
                key={idx}
                className="p-8 bg-card border-border animate-fade-in hover:shadow-premium transition-all"
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
                    <CheckCircle2 key={i} className="h-4 w-4 text-gold fill-gold" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Tab */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Communauté BNP Entrepreneurs
            </h2>
            <p className="text-xl text-muted-foreground">
              Un réseau exclusif pour accélérer ensemble
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-card border-border shadow-card">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">Événements Mensuels</h3>
              <p className="text-muted-foreground mb-4">Pitch sessions, networking premium et masterclasses avec des entrepreneurs à succès</p>
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" 
                alt="Events" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </Card>

            <Card className="p-8 bg-gradient-card border-border shadow-card">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">Mentorat & Slack Privé</h3>
              <p className="text-muted-foreground mb-4">Échangez avec vos pairs, partagez vos deals et accédez à des opportunités early-stage</p>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                alt="Mentoring" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="bg-gradient-primary shadow-premium text-lg px-8 py-6"
              onClick={() => navigate("/login")}
            >
              Rejoindre la Communauté
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Financial News */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Actualités Financières
            </h2>
            <p className="text-xl text-muted-foreground">
              Restez informé des dernières évolutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {financialNews.map((news, idx) => (
              <Card 
                key={idx}
                className="overflow-hidden bg-card border-border hover:shadow-premium transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-muted-foreground">{news.date}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <Button variant="link" className="px-0 mt-4 text-primary">
                    Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Podcasts */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Podcasts Juridiques
            </h2>
            <p className="text-xl text-muted-foreground">
              L'expertise juridique en format audio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {legalPodcasts.map((podcast, idx) => (
              <Card 
                key={idx}
                className="overflow-hidden bg-card border-border hover:shadow-premium transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={podcast.image} 
                    alt={podcast.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                    <Button 
                      size="icon" 
                      className="bg-primary hover:bg-primary/90 rounded-full h-14 w-14 shadow-premium"
                    >
                      <Play className="h-6 w-6 text-primary-foreground" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{podcast.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {podcast.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">par {podcast.expert}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-gradient-primary border-0 text-center animate-fade-in shadow-premium">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Prêt à Optimiser votre Patrimoine?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Rejoignez la plateforme la plus avancée pour les entrepreneurs
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/login")}
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 shadow-gold hover:scale-105 transition-all"
            >
              Commencer Maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={bnpLogo} alt="BNP Paribas" className="h-8" />
              </div>
              <p className="text-sm text-muted-foreground">
                BNP Paribas Entrepreneurs - L'excellence patrimoniale pour dirigeants ambitieux
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Diagnostic 360°</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Structuration</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Investissement</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Protection</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Actualités</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Podcasts</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Communauté</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Prendre RDV</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Confidentialité (RGPD)</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nous contacter</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 BNP Paribas Entrepreneurs. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* AI Chat Bubble */}
      {showAIChat && (
        <div className="fixed bottom-24 right-8 w-96 animate-scale-in z-50">
          <Card className="bg-card border-border shadow-premium">
            <div className="p-4 border-b border-border flex items-center justify-between bg-gradient-primary">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
                <span className="font-semibold text-primary-foreground">BIVWAK+ Assistant</span>
              </div>
              <Button 
                size="icon" 
                variant="ghost"
                onClick={() => setShowAIChat(false)}
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              >
                ×
              </Button>
            </div>
            <div className="p-4 space-y-4 h-80 overflow-y-auto bg-secondary/10">
              <div className="bg-card rounded-lg p-3 shadow-sm">
                <p className="text-sm text-foreground">
                  Bonjour! Je suis BIVWAK+, votre assistant IA. Comment puis-je vous aider aujourd'hui?
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground">
                  C'est quoi le diagnostic 360°?
                </Button>
                <Button size="sm" variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground">
                  Tarifs et formules
                </Button>
                <Button size="sm" variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground">
                  Sécurité des données
                </Button>
                <Button size="sm" variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground">
                  Qui peut en bénéficier?
                </Button>
              </div>
            </div>
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Posez votre question..."
                  className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="icon" className="bg-gradient-primary shadow-premium">
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
