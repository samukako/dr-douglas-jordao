import { motion } from "motion/react";
import { Target, Heart, Clock } from "lucide-react";

export function ExperienciaExclusiva() {
  const features = [
    {
      icon: Target,
      title: "TÉCNICA COM PROPÓSITO",
      description: "Cada procedimento é planejado estrategicamente para resultados harmoniosos e naturais, respeitando sua individualidade."
    },
    {
      icon: Heart,
      title: "ATENDIMENTO ACOLHEDOR",
      description: "Um ambiente pensado para seu conforto, com escuta ativa e cuidado humanizado em cada etapa do processo."
    },
    {
      icon: Clock,
      title: "RESULTADOS NATURAIS E DURADOUROS",
      description: "Protocolos exclusivos que garantem longevidade aos resultados, mantendo a naturalidade por mais tempo."
    }
  ];

  return (
    <section id="experiencia" className="py-16 md:py-32 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            O QUE TORNA ESSA EXPERIÊNCIA ÚNICA
          </h2>
          <p className="text-lg md:text-xl text-[#1E1E1E]/70 max-w-3xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Três pilares fundamentais que definem nossa abordagem premium
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-[#F5F5F3] p-8 md:p-12 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-500 h-full">
                <div className="mb-6 md:mb-8 flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#A89888] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl text-[#1E1E1E] mb-4 md:mb-6 text-center title-subtitle" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {feature.title}
                </h3>
                
                <p className="text-[#1E1E1E]/70 leading-relaxed text-center text-base md:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#A89888]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 md:mt-24"
        >
          <div className="bg-[#1E1E1E] text-white py-12 md:py-16 px-8 md:px-12 rounded-3xl max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 italic" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '500' }}>
              "A excelência está nos detalhes e no cuidado com cada paciente"
            </p>
            <p className="text-base md:text-lg opacity-80" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Dr. Douglas Jordão
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}