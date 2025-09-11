import { Instagram, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 lg:py-12 bg-background-card border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Logo and Brand */}
          <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
            <img 
              src="/lovable-uploads/02970895-9f26-4918-907d-1a149a0389b3.png"
              alt="Flowzy Manager Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text">Flowzy Manager</span>
          </div>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground max-w-xs mx-auto sm:mx-0 leading-relaxed">
              A revolução do atendimento via WhatsApp para empresas modernas.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 order-3 sm:order-2 sm:col-span-2 lg:col-span-1">
            <a 
              href="https://www.instagram.com/flowzymanager"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors group"
            >
              <div className="p-1.5 sm:p-2 bg-background-light rounded-lg group-hover:bg-neon/20 transition-colors">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </div>
              <span className="hidden md:inline text-xs lg:text-sm">@flowzymanager</span>
            </a>

            <a 
              href="mailto:flowzymanager@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors group"
            >
              <div className="p-1.5 sm:p-2 bg-background-light rounded-lg group-hover:bg-neon/20 transition-colors">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </div>
              <span className="hidden md:inline text-xs lg:text-sm">flowzymanager@gmail.com</span>
            </a>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-right text-xs lg:text-sm text-muted-foreground order-2 sm:order-3 sm:col-span-2 lg:col-span-1">
            <p className="mb-1 sm:mb-2">
              © 2025 Flowzy Manager. Todos os direitos reservados.
            </p>
            <div className="flex justify-center sm:justify-end gap-3 sm:gap-4">
              <a href="#privacy" className="hover:text-neon transition-colors">
                Privacidade
              </a>
              <a href="#terms" className="hover:text-neon transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
        </AnimatedSection>

        {/* Bottom Border */}
        <div className="mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-700/50 text-center">
          <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
            Desenvolvido com Flowzy Manager para revolucionar o time de vendas da sua Empresa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;