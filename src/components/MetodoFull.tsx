import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeAfter1 from "../assets/f827ec8b74a5e71203404bff7328635e97412b6f.png";
import beforeAfter2 from "../assets/6003a53fcd61ceb62833e842ec4f74755e82f078.png";
import beforeAfter3 from "../assets/e38ef933f3aa9c4cd749a58e39c863d7e2111555.png";
import beforeAfter4 from "../assets/d6c694f7614d9f01e1b60bf4cbdf9b94149d3963.png";
import beforeAfter5 from "../assets/b995e5c1a74d82f06d3ae8051e4aaca8c0c36af2.png";
import beforeAfter6 from "../assets/903317087c35d13a809873923e126207c52a9bfd.png";
import beforeAfter7 from "../assets/86e57d38c5e7377c3b16d15c6d58b26c8da2a185.png";
import beforeAfter8 from "../assets/fd167b97ce1d38d3d8556fe00e9e59d7a0bd7df5.png";
import beforeAfter9 from "../assets/de92a79f1fcac29dbd74d5a45df147a76d958457.png";
import metodoImage1 from "../assets/f00f93f0f600edf93132a55cd86061211ee0a27a.png";
import metodoImage2 from "../assets/02e9862ebd55d4c38d76c291c831160ffa356d10.png";

function useSlidesPerView() {
  const [spv, setSpv] = useState(3); // desktop padrão

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w < 768) setSpv(1);         // mobile
      else if (w < 1024) setSpv(2);   // tablet
      else setSpv(3);                 // desktop
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return spv;
}

function ResultadosReais({
  imagens,
}: {
  imagens: { src: string; alt: string }[];
}) {
  const visible = useSlidesPerView(); // 1 / 2 / 3
  const total = imagens.length;
  const [idx, setIdx] = useState(0);

  // viewport measurement (px) -> deslocamento preciso
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [vpWidth, setVpWidth] = useState(0);

  useEffect(() => {
    const update = () => setVpWidth(viewportRef.current?.clientWidth || 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // quantos "passos" cabem sem aparecer meia imagem
  const maxIndex = Math.max(0, total - visible);

  // zera o índice quando muda o número de visíveis
  useEffect(() => {
    if (idx > maxIndex) setIdx(0);
  }, [visible, total, maxIndex, idx]);

  // autoplay
  useEffect(() => {
    if (total <= visible) return;
    const t = setInterval(() => {
      setIdx((p) => (p >= maxIndex ? 0 : p + 1));
    }, 3500);
    return () => clearInterval(t);
  }, [total, visible, maxIndex]);

  // largura exata de um slide em px (viewport / visíveis)
  const slidePx = vpWidth / visible;
  const translate = idx * slidePx;

  const nextSlide = () => {
    setIdx((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIdx((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div ref={viewportRef} className="overflow-hidden rounded-2xl">
        <div
          className="flex flex-nowrap transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {imagens.map((img, i) => (
            <div
              key={i}
              className="flex-none box-border p-2" // padding interno não quebra o cálculo
              style={{ width: `${100 / visible}%` }}
            >
              <div className="w-full rounded-2xl shadow-lg overflow-hidden bg-white">
                {/* altura proporcional sem "arrancar" a imagem no mobile */}
                <div className="w-full aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain md:object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Setas de navegação - discretas e elegantes */}
      {total > visible && (
        <>
          <button
            onClick={prevSlide}
            className="
              absolute left-4 top-1/2 -translate-y-1/2 z-10
              bg-white/20 backdrop-blur-sm hover:bg-white/40
              w-10 h-10 rounded-full
              flex items-center justify-center
              transition-all duration-300 hover:scale-110
              text-white hover:text-white/90
              opacity-60 hover:opacity-100
            "
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="
              absolute right-4 top-1/2 -translate-y-1/2 z-10
              bg-white/20 backdrop-blur-sm hover:bg-white/40
              w-10 h-10 rounded-full
              flex items-center justify-center
              transition-all duration-300 hover:scale-110
              text-white hover:text-white/90
              opacity-60 hover:opacity-100
            "
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
}

export function MetodoFull() {
  const beforeAfterImages = [
    { src: beforeAfter1, alt: "Antes e depois 1" },
    { src: beforeAfter2, alt: "Antes e depois 2" },
    { src: beforeAfter3, alt: "Antes e depois 3" },
    { src: beforeAfter4, alt: "Antes e depois 4" },
    { src: beforeAfter5, alt: "Antes e depois 5" },
    { src: beforeAfter6, alt: "Antes e depois 6" },
    { src: beforeAfter7, alt: "Antes e depois 7" },
    { src: beforeAfter8, alt: "Antes e depois 8" },
    { src: beforeAfter9, alt: "Antes e depois 9" },
  ];

  return (
    <section
      id="metodo"
      className="py-16 md:py-32 px-4 md:px-6"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Cabeçalho principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className="tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] mb-8"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
            }}
          >
            MÉTODO FULL
          </h2>
        </motion.div>

        {/* Grid 2x2 - Desktop / Empilhamento vertical - Mobile */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          
          {/* Célula superior esquerda - Conteúdo "O que é?" + "É pra você?" */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3
                className="tracking-[0.12em] uppercase text-lg md:text-xl lg:text-2xl text-center mb-8"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                O QUE É?
              </h3>

              <p
                className="text-center text-lg mb-8"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 500,
                }}
              >
                Uma abordagem que combina técnica, sensibilidade e estratégia para transformar rostos com naturalidade.
              </p>
            </div>

            <div
              className="space-y-6 text-[#1E1E1E] text-lg leading-relaxed"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <p>
                Criado pelo Dr. Douglas Jordão, o Método Full é um protocolo exclusivo de harmonização facial, pensado para homens e mulheres a partir dos 40 anos que desejam rejuvenescer sem perder sua identidade.
              </p>

              <p>
                Ele trata os sinais do tempo, como a queda facial, o semblante cansado e a perda dos contornos — de forma estratégica, combinando sensibilidade estética com precisão técnica.
              </p>
            </div>

            <div className="bg-[#A89888] text-white p-4 md:p-6 lg:p-8 rounded-2xl">
              <h4
                className="text-xl mb-4 title-subtitle"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                É PRA VOCÊ?
              </h4>
              <p
                className="text-lg"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Se ao se olhar no espelho você sente que o tempo tirou parte da sua energia e leveza, o Método Full pode devolver o que foi perdido — com técnica, elegância e total respeito à sua essência.
              </p>
            </div>
          </motion.div>

          {/* Célula superior direita - Primeira imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl">
              <img
                src={metodoImage1}
                alt="Resultado do Método Full - Antes e depois"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Célula inferior esquerda - Vídeo YouTube */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center order-4 lg:order-3"
          >
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl bg-black pointer-events-none"
                 style={{ aspectRatio: '3/4' }}>
              <iframe
                src="https://www.youtube.com/embed/QwwhzdW-sx8?autoplay=1&mute=1&playsinline=1&loop=1&playlist=QwwhzdW-sx8&rel=0&modestbranding=1&controls=0&enablejsapi=1&showinfo=0&iv_load_policy=3"
                title="Método Full - Demonstração"
                className="w-full h-full pointer-events-none"
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                style={{ border: 'none', objectFit: 'cover', pointerEvents: 'none' }}
              />
            </div>
          </motion.div>

          {/* Célula inferior direita - Conteúdo "Como funciona?" */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col space-y-6 order-3 lg:order-4"
          >
            <div>
              <h3
                className="tracking-[0.12em] uppercase text-lg md:text-xl lg:text-2xl text-center mb-8"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                COMO FUNCIONA?
              </h3>

              <p
                className="text-center text-lg mb-8"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 500,
                }}
              >
                Uma abordagem integrada, segura e personalizada:
              </p>
            </div>

            <div className="space-y-4 flex-grow">
              {[
                {
                  title: "Fios de colágeno",
                  desc: "sustentam e reposicionam áreas que sofreram queda",
                },
                {
                  title: "Ácido hialurônico",
                  desc: "restaura o volume perdido com leveza",
                },
                {
                  title: "Bioestimuladores",
                  desc: "ativam a produção natural de colágeno",
                },
                {
                  title: "Botox",
                  desc: "suaviza rugas e relaxa pontos de tensão",
                },
                {
                  title: "Laser",
                  desc: "revitaliza a pele e aumenta o viço",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#EAE6E1] p-4 rounded-xl"
                >
                  <h5
                    className="font-semibold mb-2 title-subtitle"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.title}:
                  </h5>
                  <p
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Citação centralizada do Dr. Douglas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="bg-[#1E1E1E] text-white py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 rounded-3xl max-w-4xl mx-auto">
            <p
              className="text-2xl md:text-3xl mb-4 italic"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: "500",
              }}
            >
              "Rejuvenescer com naturalidade é uma questão de técnica."
            </p>
            <p
              className="text-lg opacity-80"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Dr. Douglas Jordão
            </p>
          </div>
        </motion.div>

        {/* Benefícios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <h3
            className="no-break break-keep hyphens-none whitespace-normal tracking-[0.12em] uppercase text-2xl md:text-3xl lg:text-4xl mb-8"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
            }}
          >
            O QUE O MÉTODO ENTREGA?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              'Contornos definidos – como o "V" da mandíbula',
              "Volume sutil e estratégico – sem exageros",
              "Pele firme, viçosa e com aspecto descansado",
              "Resultado natural – você, com sua melhor versão",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-center"
              >
                <span className="text-[#A89888] text-2xl mb-3 block">
                  ✔
                </span>
                <p
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Carrossel de Resultados Reais */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <h3
            className="text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 tracking-[0.12em] uppercase text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
            }}
          >
            RESULTADOS REAIS
          </h3>

          <ResultadosReais imagens={beforeAfterImages} />
        </motion.div>
      </div>
    </section>
  );
}