import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import monograma from "../assets/f2039f561624ab374594bc1881fa1d0bddda8abe.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isMobileMenuOpen) {
      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      root.style.overflow = "";
      body.style.overflow = "";
    }
    return () => {
      root.style.overflow = "";
      body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Fechar menu ao clicar em um link
  };

  const menuItems = [
    { name: "INÍCIO", id: "inicio" },
    { name: "MÉTODO FULL", id: "metodo" },
    { name: "EXPERIÊNCIA", id: "experiencia" },
    { name: "DR. DOUGLAS", id: "sobre" },
    { name: "FAQ", id: "faq" },
    { name: "CONTATO", id: "contato" }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/5551996305040", "_blank");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-black/95 backdrop-blur-md shadow-xl" 
            : "bg-gradient-to-b from-black/55 via-black/40 to-transparent"
        }`}
        style={{ height: '90px' }}
      >
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="h-16 w-16 flex-shrink-0">
              <img 
                src={monograma} 
                alt="Dr. Douglas Jordão - Monograma" 
                className="h-full w-full object-contain"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="transition-colors duration-300 text-sm font-medium title-subtitle text-white/90 hover:text-white"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={handleWhatsApp}
                className="
                  bg-[#A89888] text-white px-6 py-3 rounded-full
                  transition-all duration-300
                  hover:bg-[#8B7B6B] hover:shadow-lg hover:scale-105
                  text-sm font-medium
                "
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                AGENDE SUA AVALIAÇÃO
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md md:hidden"
          >
            <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 pt-[calc(env(safe-area-inset-top)+24px)] pb-[calc(env(safe-area-inset-bottom)+24px)]">
              <nav className="flex w-full max-w-sm flex-col items-center gap-8 text-center">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: menuItems.indexOf(item) * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white text-xl font-medium"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  {item.name}
                </motion.button>
              ))}
              </nav>
              
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
                onClick={handleWhatsApp}
                className="
                  bg-[#A89888] text-white px-8 py-4 rounded-full
                  transition-all duration-300 mt-10
                  hover:bg-[#8B7B6B] hover:shadow-lg
                  text-sm font-medium
                "
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                AGENDE SUA AVALIAÇÃO
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}