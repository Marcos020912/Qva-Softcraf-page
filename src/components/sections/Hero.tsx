'use client';

import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* ── Animated Background Shapes ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-sc-blue/12 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 -left-32 w-125 h-125 rounded-full bg-sc-orange/8 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-40 right-1/3 w-100 h-100 rounded-full bg-sc-blue/6 blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        {/* Grid dots */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] bg-size-[32px_32px] opacity-[0.12]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 lg:py-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          {/* ── Content (2 cols) ── */}
          <div className="lg:col-span-2 space-y-7 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sc-orange/10 border border-sc-orange/20 text-sm font-medium text-sc-orange animate-fade-in-down">
              <Sparkles className="h-4 w-4" />
              Innovación tecnológica desde Cuba
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-extrabold leading-[1.15] text-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Soluciones digitales que{' '}
              <span className="text-sc-blue-light">empoderan</span>{' '}
              tu negocio
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              En Softcraft transformamos ideas en software robusto y elegante. 
              Creamos herramientas que impulsan la eficiencia y el crecimiento 
              de empresas como la tuya.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-1 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('nosotros')}
                className="bg-sc-blue-light hover:bg-sc-blue text-white px-7 py-3.5 rounded-[10px] font-semibold hover:-translate-y-0.5 transition-all duration-300 h-auto"
              >
                Descubre Más
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('productos')}
                className="border-2 border-border text-foreground px-7 py-3.5 rounded-[10px] font-semibold hover:border-sc-blue-light hover:text-sc-blue-light h-auto"
              >
                Ver Productos
              </Button>
            </div>
          </div>

          {/* ── Image Composition (3 cols) ── */}
          <div className="lg:col-span-3 order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
                <Image
                  src="/hero-section-2.jpg"
                  alt="Soluciones tecnológicas Softcraft"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  quality={85}
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#0F172A] to-transparent" />
              </div>

              {/* Floating image 1 — bottom-left */}
              <div className="absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-6 w-28 sm:w-40 rounded-xl overflow-hidden shadow-xl animate-float hidden sm:block">
                <Image
                  src="/hero-float-1.png"
                  alt="Softcraft App"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover"
                  quality={80}
                />
              </div>

              {/* Floating image 2 — top-right */}
              <div className="absolute -top-4 -right-3 sm:-top-6 sm:-right-6 w-24 sm:w-36 rounded-xl overflow-hidden shadow-xl animate-float hidden sm:block" style={{ animationDelay: '1.5s' }}>
                <Image
                  src="/hero-float-2.png"
                  alt="Ventas Express"
                  width={180}
                  height={120}
                  className="w-full h-auto object-cover"
                  quality={80}
                />
              </div>

              {/* Accent glows */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-sc-orange/15 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 right-8 w-16 h-16 bg-sc-blue-light/15 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
