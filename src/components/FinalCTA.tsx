import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Zap } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-primary/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-neon/20 rounded-full blur-3xl animate-pulse-neon"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-neon/20 text-neon px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 lg:mb-8">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            Lançamento em breve • Vagas limitadas
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 leading-tight">
            Seja um dos primeiros a testar o{" "}
            <span className="gradient-text">Flowzy</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            Entre na lista de espera e garanta acesso antecipado à revolução do atendimento via WhatsApp.
            <span className="block mt-2 sm:mt-3 lg:mt-4 text-neon font-semibold">
              Primeiros 8 usuários ganham 14 dias de teste grátis!
            </span>
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-6 sm:mb-8 lg:mb-12">
            <Button 
              variant="neon" 
              size="xl"
              className="group text-sm sm:text-base lg:text-lg font-bold w-full max-w-sm h-12 sm:h-14"
              asChild
            >
              <a 
                href="https://form.respondi.app/GNMe66Jr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                Entrar na lista de espera
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm lg:text-base">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-neon" />
              <span>Primeiros 8 usuários ganham 14 dias grátis</span>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 max-w-4xl mx-auto px-2 sm:px-4">
            <div className="flex items-center gap-2 sm:gap-3 tech-card p-3 sm:p-4">
              <div className="bg-neon/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-neon" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-xs sm:text-sm lg:text-base">Setup em 5 minutos</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Configuração rápida</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 tech-card p-3 sm:p-4">
              <div className="bg-neon/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-neon" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-xs sm:text-sm lg:text-base">Suporte dedicado</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Onboarding personalizado</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 tech-card p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
              <div className="bg-neon/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-neon" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-xs sm:text-sm lg:text-base">Garantia 30 dias</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Risco zero</div>
              </div>
            </div>
          </div>

          {/* Trust Signal */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 tech-card max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              "Estamos desenvolvendo a solução mais completa e intuitiva do mercado. 
              Seja parte dessa jornada desde o início."
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-neon rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                F
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm sm:text-base">Equipe Flowzy</div>
                <div className="text-xs sm:text-sm text-neon">Fundadores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;