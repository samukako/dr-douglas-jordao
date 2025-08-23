import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";

export function Localizacao() {
  const clinicas = [
    {
      nome: "Canoas",
      endereco: "Rua General Salustiano, 40",
      bairro: "Marechal Rondon, Canoas - RS",
      cep: "CEP 92340-210",
      whatsapp: "+55 51 99630-5040",
      embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.307265855881!2d-51.17958782450552!3d-29.920689526861902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951972d2c91d0a6b%3A0x9bdf7b6b4ef7a6d4!2sR.%20Gen.%20Salustiano%2C%2040%20-%20Marechal%20Rondon%2C%20Canoas%20-%20RS%2C%2092340-210!5e0!3m2!1spt-BR!2sbr!4v1691180123456!5m2!1spt-BR!2sbr"
    },
    {
      nome: "Balneário Camboriú",
      endereco: "Rua Miguel Matte, 687, Sala 1605 – Ed. Evolution Corporate",
      bairro: "Pioneiros, Balneário Camboriú - SC",
      cep: "CEP 88339-234",
      whatsapp: "+55 47 99137-8070",
      embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.1431870139054!2d-48.63406342386361!3d-27.00074597763507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b71056bc7e61%3A0x5e0e7e60cfc94245!2sR.%20Miguel%20Matte%2C%20687%20-%20Pioneiros%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088393-234!5e0!3m2!1spt-BR!2sbr!4v1691180223456!5m2!1spt-BR!2sbr"
    }
  ];

  return (
    <section id="contato" className="py-16 md:py-20 px-4 md:px-6 bg-[#F5F5F3]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            LOCALIZAÇÃO DAS CLÍNICAS
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {clinicas.map((clinica, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  src={clinica.embedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg text-[#1E1E1E] mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '600', letterSpacing: '0.05em' }}>
                  📍 {clinica.nome}
                </h3>
                
                <div className="space-y-3 text-[#1E1E1E]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#A89888] mt-0.5" />
                    <div>
                      <p>{clinica.endereco}</p>
                      <p>{clinica.bairro}</p>
                      <p>{clinica.cep}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#A89888]" />
                    <a 
                      href={`https://wa.me/${clinica.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A89888] hover:text-[#8B7B6B] transition-colors"
                    >
                      WhatsApp: {clinica.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}