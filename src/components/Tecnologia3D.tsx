import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function Tecnologia3D() {
  const bgIframeRef = useRef<HTMLIFrameElement>(null);
  const mainIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const normalize = (el: HTMLIFrameElement | null) => {
      if (!el) return;
      try {
        const u = new URL(el.src, window.location.origin);
        const host = u.hostname.replace('www.', '');
        if (!((host.includes('youtube.com') || host.includes('youtube-nocookie.com')) && u.pathname.includes('/embed/'))) return;
        // Autoplay silencioso inline e UI limpa
        u.searchParams.set('autoplay', '1');
        u.searchParams.set('mute', '1');
        u.searchParams.set('playsinline', '1');
        u.searchParams.set('controls', '0');
        u.searchParams.set('modestbranding', '1');
        u.searchParams.set('rel', '0');
        u.searchParams.set('enablejsapi', '1');
        u.searchParams.set('showinfo', '0');
        u.searchParams.set('iv_load_policy', '3');
        // Loop real precisa do playlist com o próprio vídeo
        const segs = u.pathname.split('/');
        const vid = segs[segs.length - 1] || '';
        u.searchParams.set('loop', '1');
        if (vid) u.searchParams.set('playlist', vid);
        // Origin para a API do YT
        if (!u.searchParams.get('origin')) {
          u.searchParams.set('origin', window.location.origin);
        }
        const newSrc = u.toString();
        if (el.src !== newSrc) el.src = newSrc;
        el.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; fullscreen');
        el.setAttribute('playsinline', '1');
        el.setAttribute('allowfullscreen', 'true');
        if (!el.hasAttribute('loading')) el.setAttribute('loading', 'eager');
      } catch {}
    };

    const post = (el: HTMLIFrameElement | null, func: 'mute' | 'playVideo' | 'pauseVideo') => {
      if (!el) return;
      try {
        el.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func, args: [] }),
          '*'
        );
      } catch {}
    };

    const tryPlayAll = () => {
      post(bgIframeRef.current, 'mute');
      post(bgIframeRef.current, 'playVideo');
      post(mainIframeRef.current, 'mute');
      post(mainIframeRef.current, 'playVideo');
    };

    // Normaliza e tenta tocar
    normalize(bgIframeRef.current);
    normalize(mainIframeRef.current);
    tryPlayAll();
    const t = setTimeout(tryPlayAll, 800);

    // Reproduz quando o iframe principal entra no viewport; pausa quando sai
    let io: IntersectionObserver | null = null;
    if (mainIframeRef.current) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLIFrameElement;
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
              post(el, 'mute');
              post(el, 'playVideo');
            } else {
              post(el, 'pauseVideo');
            }
          });
        },
        { threshold: [0, 0.1, 0.25] }
      );
      io.observe(mainIframeRef.current);
    }

    // Fallback: primeira interação do usuário
    const onFirstInteraction = () => tryPlayAll();
    const winEvents: (keyof WindowEventMap)[] = ['touchstart', 'click', 'scroll', 'keydown'];
    const docEvents: (keyof DocumentEventMap)[] = ['visibilitychange'];
    winEvents.forEach((ev) => window.addEventListener(ev, onFirstInteraction, { once: true, passive: true } as any));
    docEvents.forEach((ev) => document.addEventListener(ev, onFirstInteraction, { once: true, passive: true } as any));

    return () => {
      clearTimeout(t);
      io?.disconnect();
      winEvents.forEach((ev) => window.removeEventListener(ev, onFirstInteraction));
      docEvents.forEach((ev) => document.removeEventListener(ev, onFirstInteraction));
    };
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* BG video cover, sem tarjas, centralizado */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          ref={bgIframeRef}
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
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="eager"
          allowFullScreen
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
                  ref={mainIframeRef}
                  src="https://www.youtube.com/embed/zU6q_a-cAjU?autoplay=1&mute=1&playsinline=1&loop=1&playlist=zU6q_a-cAjU&rel=0&modestbranding=1&controls=0&enablejsapi=1&showinfo=0&iv_load_policy=3"
                  title="Tecnologia 3D no atendimento"
                  className="w-full h-full pointer-events-none"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="eager"
                  allowFullScreen
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