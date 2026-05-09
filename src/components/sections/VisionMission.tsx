'use client';

import { Eye, Target, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

const cards = [
  {
    icon: Eye,
    title: 'Visión',
    description:
      'Ser el referente de desarrollo de software en Cuba y la región, reconocidos por nuestra excelencia técnica, innovación constante y el impacto positivo en la transformación digital de nuestros clientes.',
    type: 'text' as const,
  },
  {
    icon: Target,
    title: 'Misión',
    description:
      'Desarrollar soluciones de software a medida que optimicen procesos, incrementen la productividad y potencien el crecimiento de nuestros clientes, combinando tecnología de vanguardia con un servicio personalizado y cercano.',
    type: 'text' as const,
  },
  {
    icon: CheckCircle2,
    title: 'Objetivos',
    items: [
      'Expandir nuestro portafolio de productos',
      'Fortalecer la presencia en el mercado cubano',
      'Fomentar la capacitación tecnológica local',
      'Mantener estándares de calidad internacionales',
    ],
    type: 'list' as const,
  },
];

export function VisionMission() {
  return (
    <SectionWrapper id="vision" backgroundVariant="alt">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-sc-orange" />
          <span className="text-sc-orange font-semibold text-sm uppercase tracking-wider">
            Nuestros Pilares
          </span>
          <div className="h-px w-8 bg-sc-orange" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Visión, Misión y{' '}
          <span className="gradient-text">Objetivos</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Los principios que guían cada decisión y cada línea de código que escribimos.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="group relative rounded-2xl shadow-soft hover:shadow-medium hover:-translate-y-1.5 transition-all duration-300 overflow-hidden py-0 border"
          >
            {/* Top border that expands on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-sc-orange to-sc-blue border-expand origin-left" />

            <CardHeader className="pb-2 pt-16 px-8">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-sc-blue to-sc-blue-dark flex items-center justify-center mb-5 shadow-soft">
                <card.icon className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-xl text-foreground">{card.title}</CardTitle>
            </CardHeader>

            <CardContent className="px-8 pb-8 pt-0">
              {card.type === 'text' ? (
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {card.description}
                </p>
              ) : (
                <ul className="space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-sc-orange shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
