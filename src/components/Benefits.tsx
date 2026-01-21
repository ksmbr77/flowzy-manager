import { FolderKanban, TrendingUp, HeartHandshake, Bot, BarChart3, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const benefits = [
  {
    icon: FolderKanban,
    title: "Organização Total",
    description: "Todos os atendimentos, conversas e negócios perfeitamente organizados em um sistema intuitivo."
  },
  {
    icon: TrendingUp,
    title: "Vendas Estruturadas",
    description: "Pipeline visual, follow-ups automáticos e processo comercial que realmente funciona."
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Excelente",
    description: "Responda rápido, nunca perca mensagens e ofereça experiência premium aos seus clientes."
  },
  {
    icon: Bot,
    title: "Automação Inteligente",
    description: "Automatize tarefas repetitivas, respostas padrão e follow-ups sem perder o toque pessoal."
  },
  {
    icon: BarChart3,
    title: "Analytics Completo",
    description: "Dashboards em tempo real para acompanhar métricas, conversões e performance da equipe."
  },
  {
    icon: Users,
    title: "Gestão de Equipe",
    description: "Distribua conversas, monitore atendimentos e escale sua operação com facilidade."
  }
];

const Benefits = () => {
  return (
    <section id="recursos" className="py-16 sm:py-20 lg:py-24 xl:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Tudo que você precisa em{" "}
            <span className="gradient-text">um só lugar</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Organização, vendas e atendimento integrados no WhatsApp
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <AnimatedSection
                key={index}
                delay={index * 100}
                animation="scale-in"
                className="tech-card p-6 sm:p-8 group hover:border-neon/50 transition-all duration-300"
              >
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-neon/20 rounded-xl blur-xl group-hover:bg-neon/30 transition-all duration-300"></div>
                  <div className="relative bg-gradient-neon p-3 sm:p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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

export default Benefits;
