import { AlertCircle, MessageSquareX, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Problems = () => {
  return (
    <section id="problemas" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-background-card">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Por que empresas estão{" "}
            <span className="gradient-text">perdendo clientes</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
            Descubra os 3 erros fatais que fazem você perder vendas no WhatsApp todos os dias
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: AlertCircle,
              title: "Demora para Responder",
              description: "Clientes aguardam horas por uma resposta. Resultado: compram da concorrência.",
              color: "red"
            },
            {
              icon: MessageSquareX,
              title: "Conversas Perdidas", 
              description: "Mensagens importantes se perdem. Oportunidades escapam todos os dias.",
              color: "yellow"
            },
            {
              icon: Users,
              title: "Atendimento Inconsistente",
              description: "Cada vendedor responde diferente. Cliente perde a confiança na empresa.",
              color: "orange"
            }
          ].map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <AnimatedSection
                key={index}
                delay={index * 150}
                animation="slide-up"
                className={`tech-card p-4 sm:p-6 lg:p-8 text-center group accelerated ${
                  index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className={`bg-${problem.color}-500/20 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-${problem.color}-400`} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">{problem.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;