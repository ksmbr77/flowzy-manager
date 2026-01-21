import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "127",
    description: "Para pequenas empresas começando",
    features: [
      "Até 1.000 contatos",
      "3 usuários",
      "Organização completa",
      "Pipeline de vendas",
      "Atendimento profissional",
      "Suporte via email"
    ],
    cta: "Testar 7 Dias Grátis",
    highlighted: false
  },
  {
    name: "Professional",
    price: "297",
    description: "Para empresas em crescimento",
    features: [
      "Até 5.000 contatos",
      "10 usuários",
      "Tudo do Starter +",
      "Automações avançadas",
      "Analytics e relatórios",
      "Suporte exclusivo",
      "Grupo exclusivo VIP",
      "Integrações premium"
    ],
    cta: "Testar 7 Dias Grátis",
    highlighted: true,
    badge: "Mais Popular"
  },
  {
    name: "Enterprise",
    price: "597",
    description: "Para operações em escala",
    features: [
      "Contatos ilimitados",
      "Usuários ilimitados",
      "Tudo do Professional +",
      "API personalizada",
      "Gerente de sucesso dedicado",
      "Suporte prioritário 24/7",
      "Grupo VIP + Treinamentos",
      "Onboarding personalizado"
    ],
    cta: "Falar com Especialista",
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="precos" className="py-16 sm:py-20 lg:py-24 xl:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Escolha o plano ideal para{" "}
            <span className="gradient-text">sua empresa</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Teste qualquer plano grátis por 7 dias. Pagamento seguro via Stripe.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              animation="scale-in"
              className={`relative ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-neon text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className={`tech-card p-6 sm:p-8 h-full flex flex-col ${
                plan.highlighted 
                  ? 'border-neon shadow-glow-neon' 
                  : 'hover:border-neon/50'
              } transition-all duration-300`}>
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-muted-foreground text-lg">R$</span>
                    <span className="text-4xl sm:text-5xl font-bold text-neon">{plan.price}</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-neon flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.highlighted ? "neon" : "outline"}
                  size="lg"
                  className={`w-full font-semibold ${
                    !plan.highlighted ? 'border-neon/50 text-neon hover:bg-neon/10' : ''
                  }`}
                  asChild
                >
                  <a href={plan.name === "Enterprise" ? "https://wa.me/5511999999999" : "#"}>
                    {plan.cta}
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Badges */}
        <AnimatedSection delay={400} className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 sm:mt-16">
          {[
            "7 dias grátis para testar",
            "Pagamento seguro via Stripe",
            "Cancele quando quiser"
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-neon" />
              <span>{badge}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
