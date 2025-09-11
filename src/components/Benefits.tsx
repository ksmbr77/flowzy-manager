import { MessageSquare, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Nunca mais perca uma conversa",
    description: "Imagine ter controle total sobre cada cliente que te procura. Zero leads perdidos."
  },
  {
    icon: Users,
    title: "Sua equipe sempre organizada", 
    description: "Organização no fluxo de leads, acompanhamento em tempo real e gestão de performance que realmente funciona."
  },
  {
    icon: Zap,
    title: "Automação Empresarial Completa",
    description: "Da captação ao pós-venda, tudo automatizado. Sua empresa cresce enquanto você foca no estratégico."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-12 sm:py-16 lg:py-20 xl:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            O que empresas de{" "}
            <span className="gradient-text">sucesso</span> fazem diferente
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
            Gestão de equipe que média e pequenas empresas usam para triplicar vendas no whatsapp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="tech-card p-4 sm:p-6 lg:p-8 text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-block mb-3 sm:mb-4 lg:mb-6">
                  <div className="absolute inset-0 bg-neon/20 rounded-full blur-xl group-hover:bg-neon/30 transition-all duration-300"></div>
                  <div className="relative bg-gradient-neon p-2 sm:p-3 lg:p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 group-hover:text-neon transition-colors leading-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;