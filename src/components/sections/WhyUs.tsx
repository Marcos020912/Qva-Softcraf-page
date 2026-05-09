'use client';

import { MapPin, WifiOff, DollarSign, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

const reasons = [
  {
    num: '01',
    icon: MapPin,
    title: 'Contexto Local',
    description:
      'Entendemos la realidad cubana y diseñamos soluciones adaptadas a la conectividad, infraestructura y necesidades específicas del mercado.',
  },
  {
    num: '02',
    icon: WifiOff,
    title: 'Funciona Offline',
    description:
      'Nuestras aplicaciones están diseñadas para funcionar sin conexión a internet, sincronizando automáticamente cuando la red está disponible.',
  },
  {
    num: '03',
    icon: DollarSign,
    title: 'Precios Justos',
    description:
      'Ofrecemos precios adaptados a la realidad económica cubana, sin comprometer la calidad del software ni el soporte técnico.',
  },
  {
    num: '04',
    icon: Headphones,
    title: 'Soporte Real',
    description:
      'Atención personalizada y directa por WhatsApp, email o videollamada. Sin chatbots, sin esperas interminables. Personas reales.',
  },
];

export function WhyUs() {
  return (
    <SectionWrapper id="por-que-elegirnos">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-sc-orange" />
          <span className="text-sc-orange font-semibold text-sm uppercase tracking-wider">
            Nuestras Ventajas
          </span>
          <div className="h-px w-8 bg-sc-orange" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          ¿Por qué elegir{' '}
          <span className="gradient-text">Softcraft</span>?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Nos diferenciamos por nuestro compromiso con la calidad, la cercanía y la comprensión profunda de tu entorno.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map(({ num, icon: Icon, title, description }) => (
          <Card
            key={num}
            className="group text-center hover:border-sc-orange/30 hover:shadow-medium hover:-translate-y-1 transition-all duration-300 py-0 rounded-2xl"
          >
            <CardContent className="flex flex-col items-center p-8 gap-4">
              <span className="text-5xl font-extrabold text-sc-orange/20 group-hover:text-sc-orange/40 transition-colors">
                {num}
              </span>
              <div className="w-12 h-12 rounded-xl bg-sc-orange/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-sc-orange" />
              </div>
              <h4 className="text-lg font-bold text-foreground">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
