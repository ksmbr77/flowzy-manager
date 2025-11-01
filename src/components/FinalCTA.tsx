import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Headphones, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const FinalCTA = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-hero">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-neon/30 to-primary/30 animate-pulse-neon"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="scale-in" className="text-center space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-neon text-background text-xs sm:text-sm font-bold px-4 py-2 rounded-full">
                  ⚡ Oferta por Tempo Limitado
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Comece a Vender Mais{" "}
                <span className="gradient-text block mt-2">Ainda Hoje</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Configure em 5 minutos. Veja resultados em 24 horas. Sem cartão de crédito necessário.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                variant="neon" 
                size="xl"
                className="group text-base sm:text-lg lg:text-xl font-bold h-14 sm:h-16 px-8 sm:px-12"
                asChild
              >
                <a 
                  href="#pricing"
                  className="flex items-center gap-3"
                >
                  Começar Meus 14 Dias Grátis
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              🎁 Bônus exclusivo: Treinamento completo da equipe (valor R$ 997) grátis
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 max-w-3xl mx-auto">
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon/20 to-primary/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-neon" />
                  </div>
                  <div className="text-sm font-semibold">Setup Instantâneo</div>
                  <div className="text-xs text-muted-foreground">Pronto em 5 minutos</div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={300}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon/20 to-primary/20 flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-neon" />
                  </div>
                  <div className="text-sm font-semibold">Suporte Dedicado</div>
                  <div className="text-xs text-muted-foreground">Time disponível 24/7</div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={400}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon/20 to-primary/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-neon" />
                  </div>
                  <div className="text-sm font-semibold">Garantia 30 Dias</div>
                  <div className="text-xs text-muted-foreground">100% do dinheiro de volta</div>
                </div>
              </AnimatedSection>
            </div>

            {/* Social Proof */}
            <AnimatedSection animation="fade-in" delay={500}>
              <div className="tech-card rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-neon flex-shrink-0"></div>
                  <div className="text-left">
                    <p className="text-base sm:text-lg italic text-foreground mb-3">
                      "Testamos o Flowzy sem expectativa. Em 2 semanas fechamos 40% mais negócios com a mesma equipe. Hoje não vivemos sem."
                    </p>
                    <div className="text-sm font-semibold text-neon">André Martins</div>
                    <div className="text-xs text-muted-foreground">CEO, VendasPro - 47 funcionários</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Final Urgency */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                ⏰ Mais de 200 empresas já automatizaram suas vendas este mês
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
