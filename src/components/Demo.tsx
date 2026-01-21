import AnimatedSection from "@/components/AnimatedSection";

const Demo = () => {
  return (
    <section id="demo" className="py-16 sm:py-20 lg:py-24 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Veja o Flowzy Manager{" "}
            <span className="gradient-text">em ação</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como organizar suas vendas e atendimento em minutos
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100} animation="scale-in" className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-neon opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-3xl"></div>
            
            {/* Video Container */}
            <div className="relative glass-card rounded-2xl overflow-hidden border border-neon/20 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/IFyahHu37VQ"
                title="Flowzy Manager - Demonstração"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Demo;
