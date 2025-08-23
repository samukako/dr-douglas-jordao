import { Instagram, Phone, Mail } from "lucide-react";
import monograma from "../assets/f2039f561624ab374594bc1881fa1d0bddda8abe.png";

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Logo e descrição */}
          <div className="space-y-6 text-center md:text-left">
            <div className="h-20 md:h-24 flex justify-center md:justify-start">
              <img 
                src={monograma} 
                alt="Dr. Douglas Jordão - Monograma" 
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-white/70 leading-relaxed text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Especialista em harmonização facial premium. Criador do exclusivo Método Full para rejuvenescimento natural.
            </p>
          </div>
          
          {/* Redes sociais */}
          <div className="space-y-6 text-center">
            <h4 className="text-xl title-subtitle" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              REDES SOCIAIS
            </h4>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://www.instagram.com/dr_douglas_jordao/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#A89888] rounded-full flex items-center justify-center hover:bg-[#8B7B6B] transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/5551996305040" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#A89888] rounded-full flex items-center justify-center hover:bg-[#8B7B6B] transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="mailto:contato@drdouglasjordao.com.br" 
                className="w-12 h-12 bg-[#A89888] rounded-full flex items-center justify-center hover:bg-[#8B7B6B] transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Contatos */}
          <div className="space-y-6 text-center md:text-right">
            <h4 className="text-xl title-subtitle" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              CONTATOS
            </h4>
            <div className="space-y-6 text-white/70" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <div>
                <p className="text-white font-medium mb-1">CANOAS - RS</p>
                <p>+55 51 99630-5040</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">BALNEÁRIO CAMBORIÚ - SC</p>
                <p>+55 47 99137-8070</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 md:mt-16 pt-6 md:pt-8 text-center text-white/50" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          <p>&copy; 2025 Dr. Douglas Jordão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}