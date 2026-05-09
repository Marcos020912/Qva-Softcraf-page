'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative cta-gradient overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-sc-orange/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-sc-blue/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          ¿Listo para transformar{' '}
          <span className="text-sc-orange">tu negocio</span>?
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Cuéntanos tu idea y te mostraremos cómo podemos hacerla realidad. 
          La primera consulta es completamente gratis.
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-sc-orange hover:bg-sc-orange-dark text-white text-lg font-bold rounded-[12px] hover:shadow-accent hover:-translate-y-1 transition-all duration-300 h-auto py-4 px-8"
        >
          Empecemos Ahora
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
