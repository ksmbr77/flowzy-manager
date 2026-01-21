import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    quote: "Finalmente organizei meu comercial. Antes eram 500 mensagens no WhatsApp, agora tenho controle total de cada oportunidade.",
    name: "Maria Silva",
    role: "Diretora Comercial",
    company: "TechSolutions",
    metric: "+200% em vendas organizadas",
    avatar: "M"
  },
  {
    quote: "O pipeline visual mudou tudo. Minha equipe sabe exatamente o que fazer e quando fazer. Conversões dobraram em 2 meses.",
    name: "João Santos",
    role: "CEO",
    company: "StartupX",
    metric: "2x mais conversões",
    avatar: "J"
  },
  {
    quote: "Atendimento que era caótico agora é profissional. Clientes elogiam a rapidez e organização. Retenção subiu 40%.",
    name: "Ana Costa",
    role: "Gerente de Atendimento",
    company: "E-commerce Plus",
    metric: "+40% retenção",
    avatar: "A"
  },
  {
    quote: "A automação economiza 3 horas por dia da minha equipe. Tempo que agora usamos para vender mais e melhor.",
    name: "Carlos Oliveira",
    role: "Fundador",
    company: "AgênciaDigital",
    metric: "3h economizadas/dia",
    avatar: "C"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Veja o que dizem empresas que{" "}
            <span className="gradient-text">organizaram tudo</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de transformação
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              animation="slide-up"
              className="tech-card p-6 sm:p-8 flex flex-col group hover:border-neon/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-neon fill-neon" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              
              {/* Metric */}
              <div className="bg-neon/10 border border-neon/20 rounded-lg px-3 py-2 mb-4 text-center">
                <span className="text-sm font-semibold text-neon">{testimonial.metric}</span>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-neon rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
