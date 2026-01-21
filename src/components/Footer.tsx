import { Instagram, Mail, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 lg:py-20 bg-background border-t border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/9cb8132b-0fe4-41b3-8fa6-f69172fc9ab2.png"
                alt="Flowzy Manager Logo"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold gradient-text">Flowzy Manager</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Organização + Vendas + Atendimento integrados no WhatsApp para empresas modernas.
            </p>
            
            {/* Social */}
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/flowzymanager"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background-card rounded-lg hover:bg-neon/20 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-neon" />
              </a>
              <a 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background-card rounded-lg hover:bg-neon/20 transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-neon" />
              </a>
              <a 
                href="mailto:flowzymanager@gmail.com"
                className="p-2 bg-background-card rounded-lg hover:bg-neon/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-neon" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Produto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#recursos" className="hover:text-neon transition-colors">Recursos</a></li>
              <li><a href="#beneficios" className="hover:text-neon transition-colors">Organização</a></li>
              <li><a href="#beneficios" className="hover:text-neon transition-colors">Vendas</a></li>
              <li><a href="#beneficios" className="hover:text-neon transition-colors">Atendimento</a></li>
              <li><a href="#precos" className="hover:text-neon transition-colors">Preços</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-neon transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Casos de Sucesso</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Comunidade</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Suporte</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-neon transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Grupo VIP</a></li>
              <li><a href="#" className="hover:text-neon transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © 2025 Flowzy Manager. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <a href="#" className="hover:text-neon transition-colors">Privacidade</a>
            <a href="#" className="hover:text-neon transition-colors">Termos</a>
            <a href="#" className="hover:text-neon transition-colors">Segurança</a>
            <a href="#" className="hover:text-neon transition-colors">Stripe</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
