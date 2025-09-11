import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-gray-700/50 accelerated transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
              <img 
                src="/lovable-uploads/9cb8132b-0fe4-41b3-8fa6-f69172fc9ab2.png"
                alt="Flowzy Manager Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
              Flowzy Manager
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a 
              href="#problemas" 
              className="text-sm lg:text-base text-muted-foreground hover:text-neon transition-colors duration-300 relative group"
            >
              Problemas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#beneficios" 
              className="text-sm lg:text-base text-muted-foreground hover:text-neon transition-colors duration-300 relative group"
            >
              Benefícios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#como-funciona" 
              className="text-sm lg:text-base text-muted-foreground hover:text-neon transition-colors duration-300 relative group"
            >
              Como Funciona
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="neon" 
              size="sm"
              className="group text-xs lg:text-sm font-semibold"
              asChild
            >
              <a 
                href="https://form.respondi.app/GNMe66Jr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Lista de Espera
                <div className="w-2 h-2 bg-neon rounded-full group-hover:animate-pulse"></div>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-muted-foreground hover:text-neon transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-gray-700/50">
            <nav className="flex flex-col gap-4">
              <a 
                href="#problemas" 
                className="text-sm text-muted-foreground hover:text-neon transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Problemas
              </a>
              <a 
                href="#beneficios" 
                className="text-sm text-muted-foreground hover:text-neon transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#como-funciona" 
                className="text-sm text-muted-foreground hover:text-neon transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <Button 
                variant="neon" 
                size="sm"
                className="w-full mt-2 text-sm"
                asChild
              >
                <a 
                  href="https://form.respondi.app/GNMe66Jr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Lista de Espera
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;