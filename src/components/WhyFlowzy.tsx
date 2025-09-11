import { Brain, Workflow, Users2 } from "lucide-react";

const differentials = [
  {
    icon: Brain,
    title: "Gestão Empresarial Inteligente",
    description: "IA avançada que integra WhatsApp, CRM, vendas e equipes em uma plataforma única e poderosa.",
    highlight: "Sistema de IA proprietário"
  },
  {
    icon: Workflow,
    title: "Automação prática",
    description: "Configurações simples para automações complexas. Sem programação, sem complicação.",
    highlight: "Sem código necessário"
  },
  {
    icon: Users2,
    title: "Performance da Equipe",
    description: "Acompanhe, otimize e cresça sua operação com dashboards em tempo real e métricas que importam.",
    highlight: "Gestão colaborativa"
  }
];

const WhyFlowzy = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Por que escolher o <span className="gradient-text">Flowzy</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
            Não somos apenas mais uma ferramenta de WhatsApp. Somos a revolução que sua empresa precisa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="tech-card p-4 sm:p-6 lg:p-8 h-full">
                  {/* Highlight Badge */}
                  <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4 lg:left-6">
                    <div className="bg-neon text-background text-xs lg:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
                      {item.highlight}
                    </div>
                  </div>

                  <div className="relative inline-block mb-3 sm:mb-4 lg:mb-6 mt-3 sm:mt-4">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/40 transition-all duration-500"></div>
                    <div className="relative bg-gradient-primary p-2 sm:p-3 lg:p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 group-hover:text-neon transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-neon/10 to-primary/10 rounded-full blur-xl group-hover:from-neon/20 group-hover:to-primary/20 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Value Props */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <div className="text-center p-3 sm:p-4 lg:p-6 tech-card">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-neon mb-1 sm:mb-2">+300%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Aumento em conversões</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 tech-card">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-neon mb-1 sm:mb-2">-70%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Tempo de resposta</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 tech-card">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-neon mb-1 sm:mb-2">24/7</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Automação funcionando</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 tech-card">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-neon mb-1 sm:mb-2">0</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Leads perdidos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFlowzy;