import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 sm:pt-20 lg:pt-16">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-primary/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA5OGZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection animation="slide-up" className="space-y-4 sm:space-y-6 text-left lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
                Transforme seu WhatsApp em uma{" "}
                <span className="gradient-text block mt-1">Máquina de Vendas que Funciona 24/7</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-lg text-muted-foreground max-w-2xl lg:mx-0 leading-relaxed mt-4">
                Pare de perder leads e dinheiro. Automatize vendas, qualifique clientes e feche mais negócios com IA real.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:justify-start pt-4">
              <Button 
                variant="neon" 
                size="xl"
                className="group text-sm sm:text-base lg:text-lg font-bold h-12 sm:h-14"
                asChild
              >
                <a 
                  href="#pricing"
                  className="flex items-center justify-center gap-3"
                >
                  Começar Teste Grátis
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="text-sm sm:text-base lg:text-lg font-semibold h-12 sm:h-14 border-2"
                asChild
              >
                <a href="#demo">
                  Ver Demo
                </a>
              </Button>
            </div>

            {/* Trust Indicators - Card Style */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 max-w-lg mx-auto lg:mx-0">
              <div className="tech-card p-3 sm:p-4 rounded-lg text-center">
                <div className="text-sm sm:text-base font-bold text-neon">Setup em 5 min</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Conecte e comece a vender hoje</div>
              </div>
              <div className="tech-card p-3 sm:p-4 rounded-lg text-center">
                <div className="text-sm sm:text-base font-bold text-neon">14 dias grátis</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Teste sem compromisso</div>
              </div>
              <div className="tech-card p-3 sm:p-4 rounded-lg text-center">  
                <div className="text-sm sm:text-base font-bold text-neon">Cancele quando quiser</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Sem fidelidade ou multas</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Content - Dashboard Mockup */}
          <AnimatedSection animation="scale-in" delay={200} className="relative mt-8 lg:mt-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative tech-card rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/4422e310-5c35-436b-b08d-c4d416e1b947.png"
                  alt="Flowzy Manager Dashboard - Interface completa de gestão centralizada do WhatsApp"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 tech-card rounded-xl p-2 sm:p-4 animate-pulse-neon">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="w-2 h-2 bg-neon rounded-full"></div>
                <span className="text-neon font-semibold">Online</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;