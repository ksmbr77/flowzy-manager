import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechVendas",
    content: "Flowzy transformou completamente nossa operação. Antes perdíamos leads todos os dias. Hoje convertemos 3x mais com metade do esforço.",
    rating: 5,
    image: "/lovable-uploads/02970895-9f26-4918-907d-1a149a0389b3.png"
  },
  {
    name: "Mariana Costa",
    role: "Gestora Comercial, AutoMax",
    content: "A IA do Flowzy não é só automação, é como ter um vendedor expert trabalhando 24/7. Nosso faturamento aumentou 180% em 3 meses.",
    rating: 5,
    image: "/lovable-uploads/7189467e-658d-4251-9a0e-1bdd4e79057e.png"
  },
  {
    name: "Roberto Mendes",
    role: "Diretor, ImobiPrime",
    content: "Antes do Flowzy, minha equipe desperdiçava 4 horas por dia só organizando conversas. Hoje focamos 100% em vender e fechar negócios.",
    rating: 5,
    image: "/lovable-uploads/9cb8132b-0fe4-41b3-8fa6-f69172fc9ab2.png"
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-background-card">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection animation="slide-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Amado por <span className="gradient-text">Empreendedores</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como empresas reais estão transformando suas vendas com Flowzy
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale-in" 
              delay={index * 100}
              className="h-full"
            >
              <div className="tech-card rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-neon text-neon" />
                  ))}
                </div>
                
                <p className="text-base sm:text-lg text-foreground mb-6 flex-1 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-neon overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
