import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, ArrowRight, Shield, TrendingUp, Users, CheckCircle2, BarChart3, FileText, Building2, Heart, Home, MessageCircle, Calendar, Play, Mic, Award, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bnpLogo from "@/assets/bnp-logo.png";

type Language = 'fr' | 'en';

const Landing = () => {
  const navigate = useNavigate();
  const [showAIChat, setShowAIChat] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [language, setLanguage] = useState<Language>('en');

  const t = {
    fr: {
      clientLogin: "Espace Client",
      hero: {
        badge: "Powered by BIVWAK+ AI",
        title: "Optimisez, protégez et transmettez",
        titleGradient: "votre patrimoine entrepreneurial",
        subtitle: "Une approche 360°, sur-mesure et experte pour les entrepreneurs en Série A+ et dirigeants de PME en phase de transmission.",
        cta: "Diagnostic 360° en 5 minutes",
        ctaSecondary: "Prendre RDV avec un expert"
      },
      dashboard: {
        title: "Tableau de bord BIVWAK+",
        subtitle: "Pilotez votre patrimoine en temps réel"
      },
      diagnostic: {
        title: "Diagnostic Patrimonial 360°",
        subtitle: "10 questions pour une analyse personnalisée de votre situation",
        question: "Question",
        completed: "complété",
        analyzing: "Analyse en cours...",
        aiGenerating: "Notre IA BIVWAK+ génère votre rapport personnalisé",
        analyzing1: "Analyse de votre profil patrimonial...",
        analyzing2: "Calcul des optimisations possibles...",
        analyzing3: "Génération de recommandations personnalisées...",
        receivePdf: "Recevoir mon diagnostic PDF"
      },
      pillars: {
        title: "7 Piliers pour Maîtriser votre Patrimoine",
        subtitle: "Une approche globale et intégrée pour les entrepreneurs ambitieux",
        simulator: "Simulateur Interactif",
        launchSimulation: "Lancer la simulation"
      },
      testimonials: {
        title: "Ils Ont Transformé leur Patrimoine",
        subtitle: "Rejoignez des centaines d'entrepreneurs qui nous font confiance"
      },
      community: {
        title: "Communauté BNP Entrepreneurs",
        subtitle: "Un réseau exclusif pour accélérer ensemble",
        events: "Événements Mensuels",
        eventsDesc: "Pitch sessions, networking premium et masterclasses avec des entrepreneurs à succès",
        mentoring: "Mentorat & Slack Privé",
        mentoringDesc: "Échangez avec vos pairs, partagez vos deals et accédez à des opportunités early-stage",
        join: "Rejoindre la Communauté"
      },
      news: {
        title: "Actualités Financières",
        subtitle: "Restez informé des dernières évolutions",
        readArticle: "Lire l'article"
      },
      podcasts: {
        title: "Podcasts Juridiques",
        subtitle: "L'expertise juridique en format audio"
      },
      cta: {
        title: "Prêt à Optimiser votre Patrimoine?",
        subtitle: "Rejoignez la plateforme la plus avancée pour les entrepreneurs",
        button: "Commencer Maintenant"
      },
      footer: {
        tagline: "BNP Paribas Entrepreneurs - L'excellence patrimoniale pour dirigeants ambitieux",
        services: "Services",
        resources: "Ressources",
        contact: "Contact",
        copyright: "© 2025 BNP Paribas Entrepreneurs. Tous droits réservés."
      },
      ai: {
        title: "BIVWAK+ Assistant",
        greeting: "Bonjour! Je suis BIVWAK+, votre assistant IA. Comment puis-je vous aider aujourd'hui?",
        placeholder: "Posez votre question..."
      }
    },
    en: {
      clientLogin: "Client Login",
      hero: {
        badge: "Powered by BIVWAK+ AI",
        title: "Optimize, protect and transmit",
        titleGradient: "your entrepreneurial wealth",
        subtitle: "A 360°, tailor-made and expert approach for Series A+ entrepreneurs and SME leaders in transition phase.",
        cta: "360° Diagnostic in 5 minutes",
        ctaSecondary: "Book an appointment with an expert"
      },
      dashboard: {
        title: "BIVWAK+ Dashboard",
        subtitle: "Manage your wealth in real-time"
      },
      diagnostic: {
        title: "360° Wealth Diagnostic",
        subtitle: "10 questions for a personalized analysis of your situation",
        question: "Question",
        completed: "completed",
        analyzing: "Analyzing...",
        aiGenerating: "Our BIVWAK+ AI is generating your personalized report",
        analyzing1: "Analyzing your wealth profile...",
        analyzing2: "Calculating possible optimizations...",
        analyzing3: "Generating personalized recommendations...",
        receivePdf: "Receive my diagnostic PDF"
      },
      pillars: {
        title: "7 Pillars to Master Your Wealth",
        subtitle: "A comprehensive and integrated approach for ambitious entrepreneurs",
        simulator: "Interactive Simulator",
        launchSimulation: "Launch simulation"
      },
      testimonials: {
        title: "They Transformed Their Wealth",
        subtitle: "Join hundreds of entrepreneurs who trust us"
      },
      community: {
        title: "BNP Entrepreneurs Community",
        subtitle: "An exclusive network to accelerate together",
        events: "Monthly Events",
        eventsDesc: "Pitch sessions, premium networking and masterclasses with successful entrepreneurs",
        mentoring: "Mentoring & Private Slack",
        mentoringDesc: "Exchange with your peers, share your deals and access early-stage opportunities",
        join: "Join the Community"
      },
      news: {
        title: "Financial News",
        subtitle: "Stay informed about the latest developments",
        readArticle: "Read article"
      },
      podcasts: {
        title: "Legal Podcasts",
        subtitle: "Legal expertise in audio format"
      },
      cta: {
        title: "Ready to Optimize Your Wealth?",
        subtitle: "Join the most advanced platform for entrepreneurs",
        button: "Start Now"
      },
      footer: {
        tagline: "BNP Paribas Entrepreneurs - Wealth excellence for ambitious leaders",
        services: "Services",
        resources: "Resources",
        contact: "Contact",
        copyright: "© 2025 BNP Paribas Entrepreneurs. All rights reserved."
      },
      ai: {
        title: "BIVWAK+ Assistant",
        greeting: "Hello! I'm BIVWAK+, your AI assistant. How can I help you today?",
        placeholder: "Ask your question..."
      }
    }
  };

  const testimonials = [
    {
      name: "Sophie Durand",
      role: language === 'fr' ? "CEO, TechFlow (Série B)" : "CEO, TechFlow (Series B)",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      comment: language === 'fr' 
        ? "BIVWAK+ a transformé ma gestion patrimoniale. L'optimisation fiscale sur ma sortie m'a fait économiser 250K€. Une expertise rare."
        : "BIVWAK+ transformed my wealth management. Tax optimization on my exit saved me 250K€. Rare expertise."
    },
    {
      name: "Marc Lefebvre",
      role: language === 'fr' ? "Fondateur, GreenTech Solutions" : "Founder, GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      comment: language === 'fr'
        ? "La simulation d'exit et le pacte Dutreil ont sécurisé ma transmission. BNP Entrepreneurs comprend vraiment les enjeux des dirigeants."
        : "Exit simulation and Dutreil pact secured my succession. BNP Entrepreneurs truly understands leadership challenges."
    },
    {
      name: "Amélie Chen",
      role: language === 'fr' ? "Co-fondatrice, DataSync AI" : "Co-founder, DataSync AI",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      comment: language === 'fr'
        ? "Le diagnostic 360° a révélé une sur-exposition à mon entreprise. Aujourd'hui, mon patrimoine est diversifié et protégé."
        : "The 360° diagnostic revealed over-exposure to my company. Today, my wealth is diversified and protected."
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
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'fr' ? 'EN' : 'FR'}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate("/login")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {t[language].clientLogin}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t[language].hero.badge}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              {t[language].hero.title}<br/>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t[language].hero.titleGradient}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t[language].hero.subtitle}
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
                {t[language].hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-gold text-gold hover:bg-gold hover:text-gold-foreground"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                {t[language].hero.ctaSecondary}
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
                <h3 className="text-2xl font-bold text-white mb-2">{t[language].dashboard.title}</h3>
                <p className="text-white/90">{t[language].dashboard.subtitle}</p>
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
              {t[language].diagnostic.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t[language].diagnostic.subtitle}
            </p>
          </div>

          <Card className="p-8 bg-card border-border shadow-card">
            {quizStep < quizQuestions.length ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">{t[language].diagnostic.question} {quizStep + 1}/{quizQuestions.length}</span>
                  <span className="text-sm font-medium text-primary">{Math.round((quizStep / quizQuestions.length) * 100)}% {t[language].diagnostic.completed}</span>
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
                <h3 className="text-2xl font-bold text-foreground">{t[language].diagnostic.analyzing}</h3>
                <p className="text-muted-foreground">{t[language].diagnostic.aiGenerating}</p>
                <div className="bg-secondary/50 p-6 rounded-lg text-left space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-sm">{t[language].diagnostic.analyzing1}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.3s" }}></div>
                    <span className="text-sm">{t[language].diagnostic.analyzing2}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                    <span className="text-sm">{t[language].diagnostic.analyzing3}</span>
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="bg-gradient-primary shadow-premium"
                  onClick={() => navigate("/login")}
                >
                  {t[language].diagnostic.receivePdf}
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
              {t[language].pillars.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t[language].pillars.subtitle}
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
                    <h4 className="text-xl font-semibold text-foreground">{t[language].pillars.simulator}</h4>
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
                    {t[language].pillars.launchSimulation}
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
              {t[language].testimonials.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t[language].testimonials.subtitle}
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
              {t[language].community.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t[language].community.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-card border-border shadow-card">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">{t[language].community.events}</h3>
              <p className="text-muted-foreground mb-4">{t[language].community.eventsDesc}</p>
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" 
                alt="Events" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </Card>

            <Card className="p-8 bg-gradient-card border-border shadow-card">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">{t[language].community.mentoring}</h3>
              <p className="text-muted-foreground mb-4">{t[language].community.mentoringDesc}</p>
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
              {t[language].community.join}
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
              {t[language].news.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t[language].news.subtitle}
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
                    {t[language].news.readArticle} <ArrowRight className="ml-2 h-4 w-4" />
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
              {t[language].podcasts.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t[language].podcasts.subtitle}
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
              {t[language].cta.title}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              {t[language].cta.subtitle}
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/login")}
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 shadow-gold hover:scale-105 transition-all"
            >
              {t[language].cta.button}
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
                {t[language].footer.tagline}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t[language].footer.services}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Diagnostic 360°</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Structuration</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Investissement</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Protection</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t[language].footer.resources}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Actualités</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Podcasts</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Communauté</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t[language].footer.contact}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Prendre RDV</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Confidentialité (RGPD)</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nous contacter</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>{t[language].footer.copyright}</p>
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
                <span className="font-semibold text-primary-foreground">{t[language].ai.title}</span>
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
                  {t[language].ai.greeting}
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
                  placeholder={t[language].ai.placeholder}
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
