import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Organização que Transforma Caos em Controle",
    description: "Visualize todos os seus atendimentos, filtre por status, priorize o que importa. Nunca mais perca o controle.",
    benefits: [
      "Dashboard centralizado",
      "Filtros inteligentes",
      "Priorização automática",
      "Histórico completo"
    ],
    image: "/lovable-uploads/4422e310-5c35-436b-b08d-c4d416e1b947.png",
    imageAlt: "Dashboard organizado do Flowzy Manager"
  },
  {
    title: "Pipeline de Vendas Profissional",
    description: "Acompanhe cada negócio do primeiro contato ao fechamento. Saiba exatamente onde está cada oportunidade.",
    benefits: [
      "Kanban visual de vendas",
      "Etapas personalizáveis",
      "Métricas de conversão",
      "Follow-ups automáticos"
    ],
    image: "/lovable-uploads/7189467e-658d-4251-9a0e-1bdd4e79057e.png",
    imageAlt: "Pipeline de vendas visual"
  },
  {
    title: "Atendimento que Encanta Clientes",
    description: "Histórico completo, respostas rápidas, tags inteligentes. Ofereça atendimento de primeira classe.",
    benefits: [
      "Histórico de conversas",
      "Respostas rápidas",
      "Tags e categorias",
      "Perfil completo do cliente"
    ],
    image: "/lovable-uploads/b361adb1-65fe-48f6-877e-d39372482c41.png",
    imageAlt: "Interface de atendimento ao cliente"
  },
  {
    title: "Automação Inteligente",
    description: "Automatize tarefas repetitivas, respostas padrão e follow-ups. Foque no que importa: vender.",
    benefits: [
      "Fluxos automatizados",
      "Gatilhos personalizados",
      "Mensagens programadas",
      "Integrações nativas"
    ],
    image: "/lovable-uploads/afa68d87-a5a7-4760-9240-37d25ef672d0.png",
    imageAlt: "Painel de automações"
  }
];

const Features = () => {
  return (
    <section id="beneficios" className="py-16 sm:py-20 lg:py-24 xl:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Recursos que{" "}
            <span className="gradient-text">transformam resultados</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ferramentas profissionais para empresas que levam vendas a sério
          </p>
        </AnimatedSection>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              animation="slide-up"
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-neon flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="absolute -inset-4 bg-gradient-neon opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative tech-card rounded-2xl overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
