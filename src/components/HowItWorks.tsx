import { Smartphone, Settings, Rocket } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: "1",
    icon: Smartphone,
    title: "Conecte seu WhatsApp",
    description: "Integração rápida e segura com seu WhatsApp Business em poucos cliques."
  },
  {
    number: "2", 
    icon: Settings,
    title: "Organize seu processo",
    description: "Configure seu pipeline de vendas e fluxos de atendimento personalizados."
  },
  {
    number: "3",
    icon: Rocket,
    title: "Venda mais e melhor",
    description: "Acompanhe tudo em tempo real e escale com organização total."
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-20 lg:py-24 xl:py-32 relative bg-background-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Comece a vender organizado em{" "}
            <span className="gradient-text">3 passos</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Setup simples, resultados imediatos
          </p>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-neon/50 via-neon to-neon/50"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <AnimatedSection
                  key={index}
                  delay={index * 200}
                  animation="slide-up"
                  className="relative text-center group"
                >
                  {/* Step Number */}
                  <div className="relative inline-block mb-6 sm:mb-8">
                    <div className="absolute inset-0 bg-neon/30 blur-2xl rounded-full"></div>
                    <div className="relative bg-gradient-neon text-white text-2xl sm:text-3xl font-bold w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-glow-neon group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>

                  <div className="tech-card p-6 sm:p-8 h-full">
                    <div className="relative inline-block mb-4 sm:mb-6">
                      <div className="bg-background-light border border-gray-700 group-hover:border-neon p-3 sm:p-4 rounded-xl transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-neon" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-neon transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={600} className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-muted-foreground">
            <span className="text-neon font-semibold">Teste grátis por 7 dias.</span> Suporte completo incluído.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowItWorks;
