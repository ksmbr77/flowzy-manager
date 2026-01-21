import AnimatedSection from "@/components/AnimatedSection";
import { TrendingUp, Clock, Target, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "+250%",
    label: "em organização comercial",
    color: "text-neon"
  },
  {
    icon: Clock,
    value: "70%",
    label: "menos tempo em tarefas manuais",
    color: "text-primary"
  },
  {
    icon: Target,
    value: "4x",
    label: "mais conversões organizadas",
    color: "text-green-400"
  },
  {
    icon: Zap,
    value: "5x",
    label: "atendimento mais rápido",
    color: "text-yellow-400"
  }
];

const Results = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative bg-background-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Resultados que{" "}
            <span className="gradient-text">falam por si</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Métricas reais de empresas que usam Flowzy Manager
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <AnimatedSection
                key={index}
                delay={index * 100}
                animation="scale-in"
                className="tech-card p-6 sm:p-8 text-center group hover:border-neon/50 transition-all duration-300"
              >
                <div className="inline-block mb-4">
                  <div className="bg-background-light border border-gray-700 group-hover:border-neon p-3 rounded-xl transition-all duration-300">
                    <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                  </div>
                </div>
                
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
