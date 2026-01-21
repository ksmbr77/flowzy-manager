import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  {
    question: "Como funciona o teste grátis de 7 dias?",
    answer: "As primeiras 8 empresas têm acesso completo a todas as funcionalidades do plano escolhido por 7 dias. Sem compromisso, sem pegadinhas. Se não gostar, é só cancelar antes do prazo."
  },
  {
    question: "Preciso cadastrar cartão de crédito para testar?",
    answer: "Não! Você pode iniciar o teste grátis sem precisar cadastrar nenhum dado de pagamento. Só cobramos quando você decidir continuar após os 7 dias."
  },
  {
    question: "Como funciona o suporte via WhatsApp?",
    answer: "Nossa equipe de especialistas está disponível para tirar dúvidas, ajudar na configuração e otimizar seus resultados. Atendimento humanizado via WhatsApp."
  },
  {
    question: "O que é o grupo exclusivo VIP?",
    answer: "É nossa comunidade privada onde você conecta com outros empresários, recebe dicas exclusivas, participa de lives e tem acesso antecipado a novos recursos."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim! Sem multas, sem fidelidade. Você pode cancelar quando quiser diretamente no painel ou entrando em contato com nosso suporte."
  },
  {
    question: "Como funciona a integração com WhatsApp?",
    answer: "A integração é simples e segura. Você conecta seu WhatsApp Business em poucos cliques e começa a usar imediatamente. Não precisa de conhecimento técnico."
  },
  {
    question: "Vocês oferecem treinamento?",
    answer: "Sim! Temos tutoriais em vídeo, documentação completa e, nos planos Professional e Enterprise, treinamentos ao vivo com nossa equipe."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Absolutamente! Usamos Stripe, a plataforma de pagamentos mais segura do mundo, usada por empresas como Shopify, Amazon e Google."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 xl:py-32 relative bg-background-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Perguntas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas antes de começar
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={100} animation="slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="tech-card px-4 sm:px-6 border-gray-700/50 data-[state=open]:border-neon/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-neon transition-colors py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
