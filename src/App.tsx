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