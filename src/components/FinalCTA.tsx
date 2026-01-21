import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-primary/5 to-background">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-neon/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-primary/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Organize suas vendas e{" "}
            <span className="gradient-text">atendimento hoje</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Junte-se às primeiras empresas pioneiras que estão transformando caos em resultados previsíveis
          </p>

          <Button 
            variant="neon" 
            size="xl"
            className="group text-base sm:text-lg font-bold h-14 sm:h-16 px-8 sm:px-12"
            asChild
          >
            <a 
              href="#precos"
              className="flex items-center justify-center gap-3"
            >
              Assinar Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </Button>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-10">
            {[
              "7 dias grátis (primeiras 8 empresas)",
              "Suporte via WhatsApp",
              "Acesso ao grupo VIP"
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-neon" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTA;
