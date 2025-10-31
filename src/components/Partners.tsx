import AnimatedSection from "@/components/AnimatedSection";
import { Building2, Store, Headphones, ShoppingBag, Car, Home } from "lucide-react";

const partners = [
  { name: "E-commerce", icon: ShoppingBag },
  { name: "Imobiliárias", icon: Home },
  { name: "Automotivo", icon: Car },
  { name: "Varejo", icon: Store },
  { name: "Suporte", icon: Headphones },
  { name: "Empresas", icon: Building2 },
];

const Partners = () => {
  return (
    <section className="py-12 sm:py-16 bg-background-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection animation="fade-in" className="text-center mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            Confiado por empresas de diversos segmentos
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center max-w-4xl mx-auto">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-neon/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-neon/20 transition-all">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{partner.name}</span>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Partners;
