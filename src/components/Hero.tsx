import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20 sm:pt-24 lg:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-neon/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-neon/10 rounded-full blur-2xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA5OGZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection animation="slide-up" className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                Organize, Venda e Atenda Melhor com{" "}
                <span className="gradient-text">WhatsApp Profissional</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A plataforma completa para transformar seu atendimento em vendas organizadas e previsíveis.
                <span className="text-neon font-medium"> 7 dias grátis para as primeiras 8 empresas.</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="neon" 
                size="xl"
                className="group text-base font-bold h-14 px-8"
                asChild
              >
                <a 
                  href="#precos"
                  className="flex items-center justify-center gap-3"
                >
                  Assinar Plano
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="group text-base font-semibold h-14 px-8 border-neon/50 text-neon hover:bg-neon/10"
                asChild
              >
                <a 
                  href="#demo"
                  className="flex items-center justify-center gap-3"
                >
                  <Play className="w-5 h-5" />
                  Ver Demonstração
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
              {[
                "7 dias grátis (primeiras 8 empresas)",
                "Suporte via WhatsApp",
                "Grupo VIP incluso"
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-neon" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Content - Dashboard Mockup */}
          <AnimatedSection animation="scale-in" delay={200} className="relative mt-8 lg:mt-0">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-neon opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Main Dashboard */}
              <div className="relative glass-card rounded-2xl overflow-hidden border border-neon/20">
                <img 
                  src="/lovable-uploads/4422e310-5c35-436b-b08d-c4d416e1b947.png"
                  alt="Flowzy Manager Dashboard - Interface completa de gestão"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass-card rounded-xl p-3 sm:p-4 animate-pulse-neon border border-neon/30">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  <span className="text-neon font-semibold">Organização Total</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass-card rounded-xl p-3 sm:p-4 border border-neon/30">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-semibold">Vendas em Ordem</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 glass-card rounded-xl p-3 sm:p-4 hidden lg:block border border-neon/30">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary font-semibold">Atendimento 10x</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
