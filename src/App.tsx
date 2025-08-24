import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { MetodoFull } from "./components/MetodoFull";
import { ExperienciaExclusiva } from "./components/ExperienciaExclusiva";
import { Tecnologia3D } from "./components/Tecnologia3D";
import { SobreDrDouglas } from "./components/SobreDrDouglas";
import { FAQ } from "./components/FAQ";
import { Localizacao } from "./components/Localizacao";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  useEffect(() => {
    const normalizeYouTubeIframe = (el: HTMLIFrameElement) => {
      try {
        const url = new URL(el.src, window.location.origin);
        // parâmetros essenciais de autoplay e UX limpa
        url.searchParams.set("autoplay", "1");
        url.searchParams.set("mute", "1");
        url.searchParams.set("playsinline", "1");
        url.searchParams.set("controls", "0");
        url.searchParams.set("modestbranding", "1");
        url.searchParams.set("rel", "0");
        url.searchParams.set("enablejsapi", "1");
        url.searchParams.set("showinfo", "0");
        url.searchParams.set("iv_load_policy", "3");
        // loop confiável precisa do playlist com o próprio vídeo
        const parts = url.pathname.split("/");
        const vid = parts[parts.length - 1] || "";
        url.searchParams.set("loop", "1");
        if (vid) url.searchParams.set("playlist", vid);
        // exige origin em alguns contextos para API do YouTube
        if (!url.searchParams.get("origin")) {
          url.searchParams.set("origin", window.location.origin);
        }
        const newSrc = url.toString();
        if (el.src !== newSrc) el.src = newSrc;
        el.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture; fullscreen");
        el.setAttribute("playsinline", "1");
        el.setAttribute("allowfullscreen", "true");
        // Evitar atrasos no hero
        if (!el.hasAttribute("loading")) el.setAttribute("loading", "eager");
      } catch {}
    };

    const playAll = () => {
      const yts = Array.from(document.querySelectorAll('iframe[src*="youtube.com/embed/"]')) as HTMLIFrameElement[];
      yts.forEach((el) => {
        try {
          el.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "mute", args: [] }),
            "*"
          );
          el.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "playVideo", args: [] }),
            "*"
          );
        } catch {}
      });
      const vids = Array.from(document.querySelectorAll("video[data-autoplay], video.autoplay-bg")) as HTMLVideoElement[];
      vids.forEach((v) => {
        try {
          v.muted = true;
          // @ts-ignore
          v.playsInline = true;
          v.play().catch(() => {});
        } catch {}
      });
    };

    // Normaliza iframes existentes e tenta tocar
    const initialIframes = Array.from(document.querySelectorAll('iframe[src*="youtube.com/embed/"]')) as HTMLIFrameElement[];
    initialIframes.forEach(normalizeYouTubeIframe);
    playAll();

    // Observa inserção dinâmica de iframes (ou troca de seções) e reaplica
    const obs = new MutationObserver(() => {
      const newIframes = Array.from(document.querySelectorAll('iframe[src*="youtube.com/embed/"]')) as HTMLIFrameElement[];
      newIframes.forEach(normalizeYouTubeIframe);
      playAll();
    });
    obs.observe(document.body, { childList: true, subtree: true });

    // Segunda tentativa pós-mount (alguns iOS precisam)
    const t = setTimeout(playAll, 800);

    // Fallback: primeira interação do usuário (iOS Low Power Mode, etc.)
    const onFirstInteraction = () => playAll();
    const winEvents: (keyof WindowEventMap)[] = ["touchstart", "click", "scroll", "keydown"]; 
    const docEvents: (keyof DocumentEventMap)[] = ["visibilitychange"];
    winEvents.forEach((ev) => window.addEventListener(ev, onFirstInteraction, { once: true, passive: true } as any));
    docEvents.forEach((ev) => document.addEventListener(ev, onFirstInteraction, { once: true, passive: true } as any));

    return () => {
      clearTimeout(t);
      obs.disconnect();
      winEvents.forEach((ev) => window.removeEventListener(ev, onFirstInteraction));
      docEvents.forEach((ev) => document.removeEventListener(ev, onFirstInteraction));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F3]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <Navigation />
      <Hero />
      <MetodoFull />
      <ExperienciaExclusiva />
      <Tecnologia3D />
      <SobreDrDouglas />
      <FAQ />
      <Localizacao />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}