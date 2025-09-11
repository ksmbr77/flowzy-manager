import { Smartphone, Settings, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Conecte em minutos",
    description: "Conexão segura e imediata. Sem complicações técnicas."
  },
  {
    number: "02", 
    icon: Settings,
    title: "Configure sua operação",
    description: "Organize tudo automaticamente. Sua equipe pronta para vender mais."
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Veja os resultados",
    description: "Acompanhe o crescimento em tempo real. Resultados que você nunca viu."
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-12 sm:py-16 lg:py-20 xl:py-24 relative bg-background-light">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Como <span className="gradient-text">funciona</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            Em apenas 3 passos você descobrirá por que outras empresas estão vendendo 3x mais.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <AnimatedSection
                  key={index}
                  delay={index * 200}
                  animation="slide-up"
                  className="relative group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-neon text-white text-xs sm:text-sm font-bold w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-glow-neon group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>

                  <div className="tech-card p-3 sm:p-4 lg:p-6 xl:p-8 pt-6 sm:pt-8 lg:pt-12 text-center h-full">
                    <div className="relative inline-block mb-3 sm:mb-4 lg:mb-6">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-300"></div>
                      <div className="relative bg-background-card border border-gray-700 group-hover:border-neon p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-neon" />
                      </div>
                    </div>
                    
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 group-hover:text-neon transition-colors leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for large screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-neon/50 group-hover:text-neon transition-colors duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;