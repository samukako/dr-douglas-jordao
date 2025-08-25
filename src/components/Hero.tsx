import { motion } from "motion/react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

export function Hero() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5551996305040", "_blank");
  };

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;

    // Garante 'origin' na URL (alguns contextos exigem para a API do YouTube)
    try {
      const url = new URL(el.src, window.location.origin);
      if (!url.searchParams.get('origin')) {
        url.searchParams.set('origin', window.location.origin);
        el.src = url.toString();
      }
    } catch {}

    const post = (func: 'mute' | 'playVideo') => {
      el.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func, args: [] }),
        '*'
      );
    };

    const tryPlay = () => {
      post('mute');
      post('playVideo');
    };

    // Tenta imediatamente e após um pequeno atraso (alguns iOS precisam)
    tryPlay();
    const t = setTimeout(tryPlay, 800);

    // Fallback: primeira interação do usuário (quando Low Power Mode bloqueia autoplay)
    const onFirstInteraction = () => {
      tryPlay();
    };

    // Eventos de janela e documento (visibilitychange é do document)
    const winEvents: (keyof WindowEventMap)[] = ['touchstart', 'click', 'scroll', 'keydown'];
    const docEvents: (keyof DocumentEventMap)[] = ['visibilitychange'];

    winEvents.forEach((ev) =>
      window.addEventListener(ev, onFirstInteraction, { once: true, passive: true } as any)
    );
    docEvents.forEach((ev) =>
      document.addEventListener(ev, onFirstInteraction, { once: true, passive: true } as any)
    );

    return () => {
      clearTimeout(t);
      winEvents.forEach((ev) => window.removeEventListener(ev, onFirstInteraction));
      docEvents.forEach((ev) => document.removeEventListener(ev, onFirstInteraction));
    };
  }, []);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* BG video cover, sem tarjas, centralizado */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile: iframe replacing video */}
        <div className="absolute inset-0 md:hidden overflow-hidden">
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/-EoVYv8d4p8?autoplay=1&mute=1&playsinline=1&loop=1&playlist=-EoVYv8d4p8&rel=0&modestbranding=1&controls=0&enablejsapi=1&showinfo=0&iv_load_policy=3"
            title="Background Video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full pointer-events-none md:hidden"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            loading="eager"
            style={{ border: 'none', pointerEvents: 'none' }}
          />
        </div>
        <div className="hidden md:block absolute inset-0 overflow-hidden">
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/-EoVYv8d4p8?autoplay=1&mute=1&playsinline=1&loop=1&playlist=-EoVYv8d4p8&rel=0&modestbranding=1&controls=0&enablejsapi=1&showinfo=0&iv_load_policy=3"
            title="Background Video"
            className="
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  md:h-[250%] md:w-[350%]
                  lg:h-[145%] lg:w-[200%]
                  pointer-events-none
                "
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            loading="eager"
            style={{ border: 'none', pointerEvents: 'none' }}
          />
        </div>
        {/* overlay mais claro para deixar o fundo menos escuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40 pointer-events-none"></div>
      </div>
      
      {/* Conteúdo reposicionado com título com quebras diferentes para mobile/desktop */}
      <div className="relative z-10 h-full flex items-center px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center md:text-left text-white">
            {/* Título mobile - uma formatação */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="md:hidden tracking-[0.12em] uppercase text-[20px] leading-tight mb-2 max-w-[90%] mx-auto break-normal"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                hyphens: 'none',
                WebkitHyphens: 'none',
                MozHyphens: 'none',
                wordBreak: 'keep-all',
                overflowWrap: 'normal'
              }}
            >
              CUIDADO E EXCELÊNCIA EM CADA TRANSFORMAÇÃO
            </motion.h1>

            {/* Título desktop - duas linhas específicas */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block tracking-[0.12em] uppercase text-[28px] md:leading-[1.15] lg:text-[32px] lg:leading-[1.15] xl:text-[36px] xl:leading-[1.10] mb-3 max-w-[420px] lg:max-w-[460px] break-normal"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                hyphens: 'none',
                WebkitHyphens: 'none',
                MozHyphens: 'none',
                wordBreak: 'keep-all',
                overflowWrap: 'normal'
              }}
            >
              CUIDADO E EXCELÊNCIA EM CADA TRANSFORMAÇÃO
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sm md:text-base lg:text-lg mb-4 md:mb-5 lg:mb-6 opacity-90 md:max-w-xl leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: '400' }}
            >
              Conheça o Método Full, criado pelo Dr. Douglas Jordão para revelar o melhor da sua essência
            </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Button
              onClick={handleWhatsApp}
              className="bg-[#A89888] hover:bg-[#8B7B6B] text-white px-4 md:px-5 lg:px-6 py-2.5 md:py-3 lg:py-4 text-sm md:text-sm lg:text-base rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 border-2 border-white/20"
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              AGENDE SUA AVALIAÇÃO
            </Button>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}