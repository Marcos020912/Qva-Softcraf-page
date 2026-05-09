'use client';

import { Search, Palette, Code2, Rocket } from 'lucide-react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Diagnóstico',
    description:
      'Analizamos tus necesidades, procesos actuales y objetivos para diseñar la solución perfecta.',
  },
  {
    num: '02',
    icon: Palette,
    title: 'Diseño',
    description:
      'Creamos prototipos visuales y definimos la experiencia de usuario antes de escribir una sola línea de código.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Desarrollo',
    description:
      'Construimos tu solución con las mejores prácticas, tecnología moderna y código limpio y documentado.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Entrega y Soporte',
    description:
      'Desplegamos tu producto y te acompañamos con soporte técnico continuo y actualizaciones.',
  },
];

export function Process() {
  return (
    <SectionWrapper id="proceso" backgroundVariant="alt">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-sc-orange" />
          <span className="text-sc-orange font-semibold text-sm uppercase tracking-wider">
            Cómo Trabajamos
          </span>
          <div className="h-px w-8 bg-sc-orange" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Nuestro{' '}
          <span className="gradient-text">Proceso</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Un enfoque probado en 4 fases para garantizar resultados excepcionales en cada proyecto.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Horizontal line */}
        <div className="hidden lg:block absolute top-7 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-sc-orange/20" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map(({ num, icon: Icon, title, description }) => (
            <div key={num} className="relative text-center group">
              {/* Circle */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-sc-blue text-sc-orange flex items-center justify-center mx-auto mb-6 text-lg font-extrabold group-hover:bg-sc-orange group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-soft">
                {num}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                <Icon className="h-6 w-6 text-sc-blue" />
              </div>

              <h4 className="text-lg font-bold text-foreground mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
