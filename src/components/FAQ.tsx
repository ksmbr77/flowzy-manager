import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  {
    question: "Como funciona o período de teste gratuito?",
    answer: "Os primeiros 8 usuários da lista de espera ganham 14 dias de acesso completo gratuito. Sem cartão de crédito, sem compromisso. Você só paga se decidir continuar após o teste."
  },
  {
    question: "Preciso de conhecimento técnico para usar?",
    answer: "Não! O Flowzy foi desenhado para ser extremamente simples. Nossa equipe faz toda a configuração inicial e você recebe treinamento completo. Em menos de 1 hora você já estará operando."
  },
  {
    question: "O Flowzy substitui minha equipe de vendas?",
    answer: "Não, ele potencializa! O Flowzy cuida de toda parte repetitiva (qualificação, follow-up, organização) para que sua equipe foque apenas em fechar negócios e construir relacionamentos."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim, 100%. Sem fidelidade, sem multas. Se não estiver satisfeito, cancele a qualquer momento. Oferecemos ainda garantia de 30 dias em todos os planos."
  },
  {
    question: "Como é a integração com meu WhatsApp atual?",
    answer: "Super simples e rápida. Você conecta seu número em menos de 5 minutos via QR Code. Suas conversas atuais são importadas automaticamente e você continua usando o WhatsApp normalmente."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Absolutamente. Usamos criptografia de ponta a ponta, servidores no Brasil e estamos em conformidade com a LGPD. Seus dados nunca são compartilhados com terceiros."
  },
];

const FAQ = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection animation="slide-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas antes de começar sua transformação
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={200} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="tech-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-neon transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
