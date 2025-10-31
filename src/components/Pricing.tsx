import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "297",
    period: "/mês",
    description: "Ideal para começar a automatizar",
    features: [
      "Até 500 conversas/mês",
      "1 número WhatsApp",
      "CRM integrado",
      "Respostas automáticas",
      "Suporte por email",
      "Dashboard básico",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "697",
    period: "/mês",
    description: "Para empresas em crescimento",
    features: [
      "Até 2.000 conversas/mês",
      "3 números WhatsApp",
      "CRM completo + automações",
      "IA personalizada",
      "Suporte prioritário",
      "Dashboard avançado",
      "Integrações ilimitadas",
      "Treinamento da equipe",
    ],
    highlighted: true,
    badge: "Mais Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Solução personalizada",
    features: [
      "Conversas ilimitadas",
      "Números ilimitados",
      "CRM + IA customizada",
      "Gerente de conta dedicado",
      "Suporte 24/7",
      "API personalizada",
      "White label disponível",
      "Onboarding completo",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection animation="slide-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Planos que <span className="gradient-text">Crescem com Você</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos com 14 dias de garantia.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale-in" 
              delay={index * 100}
              className="h-full"
            >
              <div 
                className={`tech-card rounded-2xl p-6 sm:p-8 h-full flex flex-col relative ${
                  plan.highlighted 
                    ? "border-2 border-neon shadow-glow-neon" 
                    : "border border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-neon text-background text-xs font-bold px-4 py-1.5 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    {plan.price !== "Custom" && (
                      <span className="text-lg text-muted-foreground">R$</span>
                    )}
                    <span className="text-4xl sm:text-5xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground mb-2">{plan.period}</span>
                  </div>
                </div>

                <Button 
                  variant={plan.highlighted ? "neon" : "outline"}
                  size="lg"
                  className="w-full mb-6"
                  asChild
                >
                  <a 
                    href="https://form.respondi.app/GNMe66Jr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.price === "Custom" ? "Falar com Vendas" : "Começar Agora"}
                  </a>
                </Button>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-neon flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in" delay={400} className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            🔒 Todos os planos incluem 14 dias de garantia • Cancele quando quiser
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
