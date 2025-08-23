import { motion } from "motion/react";
import drDouglasPhoto from "../assets/d448299fdc103ec37e3a6678f16a9a4a6cb4b32f.png";

export function SobreDrDouglas() {
  return (
    <section id="sobre" className="py-32 px-6 bg-[#EAE6E1]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#D6CFC5] rounded-3xl p-12 flex justify-center relative overflow-hidden">
              <div className="relative z-10">
                <img
                  src={drDouglasPhoto}
                  alt="Dr. Douglas Jordão"
                  className="w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl"
                />
              </div>
              {/* Elemento decorativo */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-[#A89888]/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-[#A89888]/30 rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              DR. DOUGLAS JORDÃO
            </h2>
            
            <div className="space-y-6 text-[#1E1E1E] leading-relaxed text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Farmacêutico esteta formado em 2019, Dr. Douglas Jordão é especialista em harmonização facial e referência em rejuvenescimento natural. Ao longo dos anos, desenvolveu o exclusivo Método Full, uma abordagem que une ciência, sensibilidade e estratégia para resultados completos, naturais e personalizados.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Mais do que dominar técnicas, Douglas acredita que cada rosto carrega uma história — e é com ética, empatia e um olhar atento à identidade individual que ele conduz cada atendimento.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Com precisão e escuta ativa, transforma não apenas rostos, mas também a relação que cada paciente tem com sua própria imagem. O cuidado é profundo, respeitoso e centrado em realçar o melhor de cada essência.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-[#1E1E1E] text-white p-8 rounded-2xl"
            >
              <p className="text-xl italic" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '500' }}>
                "Cada rosto carrega uma história única, e meu papel é realçar sua beleza natural com técnica e sensibilidade."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}