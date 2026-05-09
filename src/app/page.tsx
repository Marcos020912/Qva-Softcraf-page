import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { VisionMission } from '@/components/sections/VisionMission';
import { Products } from '@/components/sections/Products';
import { WhyUs } from '@/components/sections/WhyUs';
import { Process } from '@/components/sections/Process';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to content link for accessibility */}
      <a href="#inicio" className="skip-to-content">
        Saltar al contenido principal
      </a>

      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <VisionMission />
        <Products />
        <WhyUs />
        <Process />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
