import AnimatedSection from "@/components/AnimatedSection";
import { TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "3.2x",
    label: "Aumento médio em conversões",
    description: "nos primeiros 30 dias"
  },
  {
    icon: Users,
    value: "500+",
    label: "Empresas vendendo mais",
    description: "em todo Brasil"
  },
  {
    icon: Zap,
    value: "94%",
    label: "Taxa de satisfação",
    description: "dos nossos clientes"
  },
];

const SocialProof = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-background to-background-card">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection animation="fade-in" className="text-center mb-10">
          <p className="text-base sm:text-lg text-muted-foreground font-medium">
            Resultados reais de quem já está usando
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimatedSection 
                key={index} 
                animation="scale-in" 
                delay={index * 100}
              >
                <div className="tech-card rounded-xl p-6 sm:p-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon/20 to-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-neon" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
