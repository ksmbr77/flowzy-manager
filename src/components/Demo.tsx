import AnimatedSection from "@/components/AnimatedSection";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Demo = () => {
  return (
    <section id="demo" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection animation="slide-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Veja o Flowzy <span className="gradient-text">em Ação</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            2 minutos que vão mudar a forma como você vende no WhatsApp
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale-in" delay={200} className="max-w-5xl mx-auto">
          <div className="relative aspect-video tech-card rounded-2xl overflow-hidden group cursor-pointer">
            {/* Thumbnail */}
            <img 
              src="/lovable-uploads/4422e310-5c35-436b-b08d-c4d416e1b947.png"
              alt="Flowzy Demo - Veja como funciona a automação completa"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-center justify-center group-hover:bg-background/70 transition-all duration-300">
              <Button 
                variant="neon" 
                size="xl"
                className="group/btn text-lg font-bold h-16 w-16 rounded-full p-0"
              >
                <Play className="w-8 h-8 group-hover/btn:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Info Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="tech-card p-4 backdrop-blur-sm bg-background/80">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-left">
                    <div className="font-semibold text-foreground mb-1">
                      Como configurar seu Flowzy em 5 minutos
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Demonstração completa do setup e primeiras automações
                    </div>
                  </div>
                  <div className="text-sm text-neon font-semibold whitespace-nowrap">
                    2:34 min
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Below Demo */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-neon mb-2">⚡</div>
              <div className="text-sm font-semibold mb-1">Setup Rápido</div>
              <div className="text-xs text-muted-foreground">Conecte em minutos</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-neon mb-2">🤖</div>
              <div className="text-sm font-semibold mb-1">IA Trabalhando</div>
              <div className="text-xs text-muted-foreground">Qualifica sozinha</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-neon mb-2">📈</div>
              <div className="text-sm font-semibold mb-1">Resultados Reais</div>
              <div className="text-xs text-muted-foreground">Dashboard ao vivo</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Demo;
