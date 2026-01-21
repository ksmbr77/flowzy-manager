import { Headphones, Users, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const exclusiveBenefits = [
  {
    icon: Headphones,
    title: "Suporte Exclusivo",
    description: "Acesso direto à nossa equipe de especialistas para tirar dúvidas e otimizar seus resultados."
  },
  {
    icon: Users,
    title: "Grupo VIP",
    description: "Comunidade exclusiva de membros, networking, troca de experiências e conteúdos avançados."
  },
  {
    icon: Sparkles,
    title: "Atualizações Constantes",
    description: "Novos recursos toda semana baseados no feedback da comunidade. Sempre na frente."
  }
];

const ExclusiveBenefits = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative bg-background-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Benefícios{" "}
            <span className="gradient-text">exclusivos</span> inclusos
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais que uma ferramenta, uma parceria para o seu sucesso
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {exclusiveBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <AnimatedSection
                key={index}
                delay={index * 100}
                animation="scale-in"
                className="tech-card p-6 sm:p-8 text-center group hover:border-neon/50 transition-all duration-300"
              >
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-neon/20 rounded-xl blur-xl group-hover:bg-neon/30 transition-all duration-300"></div>
                  <div className="relative bg-gradient-neon p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-neon transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveBenefits;
