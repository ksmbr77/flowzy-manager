import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#recursos", label: "Recursos" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#precos", label: "Preços" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-neon/10 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-neon opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500 rounded-lg"></div>
              <img 
                src="/lovable-uploads/flowzy-logo.png"
                alt="Flowzy Manager Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
              Flowzy Manager
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm text-muted-foreground hover:text-neon transition-colors duration-300 relative group font-medium"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="neon" 
              size="default"
              className="group font-semibold px-6"
              asChild
            >
              <a 
                href="#precos"
                className="flex items-center gap-2"
              >
                Começar Agora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-muted-foreground hover:text-neon transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-gray-700/50">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-sm text-muted-foreground hover:text-neon transition-colors py-3 px-2 rounded-lg hover:bg-neon/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="neon" 
                size="default"
                className="w-full mt-4 font-semibold"
                asChild
              >
                <a 
                  href="#precos"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Começar Agora
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
