import { motion } from "motion/react";

export function Tecnologia3D() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* BG video cover, sem tarjas, centralizado */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/zU6q_a-cAjU?autoplay=1&mute=1&playsinline=1&loop=1&playlist=zU6q_a-cAjU&rel=0&modestbranding=1&controls=0&enablejsapi=1&showinfo=0&iv_load_policy=3"
          title="Background Technology Video"
          className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              /* escala extremamente agressiva no MOBILE para eliminar faixas pretas */
              h-[400%] w-[500%]
              /* tablet */
              md:h-[250%] md:w-[350%]
              /* desktop */
              lg:h-[145%] lg:w-[200%]
              pointer-events-none
            "
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          style={{ border: 'none', pointerEvents: 'none' }}
        />
        {/* overlay atual */}
        <div className="absolute inset-0 bg-white/85 pointer-events-none"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              TECNOLOGIA A SERVIÇO DA SUA BELEZA
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Vídeo em destaque - embed corrigido */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full flex items-center"
            >
              <div className="w-full rounded-2xl overflow-hidden bg-black shadow-2xl pointer-events-none"
                   style={{ aspectRatio: '16/9' }}>
                <iframe
                  src="https://www.youtube.com/embed/zU6q_a-cAjU?autoplay=1&mute=1&playsinline=1&loop=1&playlist=zU6q_a-cAjU&rel=0&modestbranding=1&controls=0&enablejsapi=1&showinfo=0&iv_load_policy=3"
                  title="Tecnologia 3D no atendimento"
                  className="w-full h-full pointer-events-none"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  style={{ 
                    border: 'none',
                    objectFit: 'cover',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </motion.div>
            
            {/* Texto lateral com mesma altura */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 md:space-y-8 flex flex-col justify-center"
            >
              
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <blockquote className="text-lg md:text-xl text-[#1E1E1E] leading-relaxed italic border-l-4 border-[#A89888] pl-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Para um diagnóstico preciso e resultados personalizados, utilizamos tecnologia 3D no atendimento. Com ela, é possível visualizar o rosto em detalhes antes e depois da intervenção, proporcionando mais segurança, planejamento e previsibilidade para cada tratamento.
                </blockquote>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#A89888] text-white p-4 md:p-6 rounded-xl">
                  <h4 className="title-subtitle mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>DIAGNÓSTICO PRECISO</h4>
                  <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Análise detalhada em 3D para planejamento personalizado</p>
                </div>
                <div className="bg-[#EAE6E1] text-[#1E1E1E] p-4 md:p-6 rounded-xl">
                  <h4 className="title-subtitle mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PREVISIBILIDADE</h4>
                  <p style={{ fontFamily: 'DM Sans, sans-serif' }}>Visualize o resultado antes mesmo do procedimento</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}