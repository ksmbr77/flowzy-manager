import AnimatedSection from "@/components/AnimatedSection";

const Partners = () => {
  return (
    <section className="py-12 sm:py-16 bg-background-card border-y border-gray-700/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Confiado por empresas que organizaram suas vendas
          </p>
          
          {/* Partner Logos Placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 opacity-50 grayscale">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div 
                key={index}
                className="w-20 h-8 sm:w-24 sm:h-10 lg:w-28 lg:h-12 bg-gray-600/30 rounded-lg flex items-center justify-center"
              >
                <div className="w-12 h-4 sm:w-16 sm:h-5 bg-gray-500/30 rounded"></div>
              </div>
            ))}
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8">
            <span className="text-neon font-semibold">Mais de 500 empresas</span> vendendo de forma organizada
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Partners;
