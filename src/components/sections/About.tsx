'use client';

import Image from 'next/image';
import { Shield, WifiOff, Zap, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

const features = [
  { icon: Zap, title: 'Soluciones eficientes', desc: 'Optimizamos cada proceso' },
  { icon: Shield, title: 'Software seguro', desc: 'Protección de datos garantizada' },
  { icon: WifiOff, title: 'Compatible offline', desc: 'Funciona sin conexión' },
  { icon: DollarSign, title: 'Precios accesibles', desc: 'Adaptados a tu presupuesto' },
];

export function About() {
  return (
    <SectionWrapper id="nosotros">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-sc-orange/5 rounded-3xl blur-xl" />
          <Image
            src="/about-team.jpg"
            alt="Equipo Softcraft colaborando"
            width={600}
            height={400}
            className="relative rounded-2xl shadow-large w-full h-auto object-cover"
            quality={80}
          />
          <div className="absolute -bottom-3 -right-3 bg-sc-orange text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-accent">
            🇨🇺 Hecho en Cuba
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-sc-orange" />
            <span className="text-sc-orange font-semibold text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">
           :{' '}
            <span className="gradient-text">Software con Alma</span>
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            En <strong className="text-foreground">Softcraft</strong>, cada línea de código 
            es una obra de artesanía. Somos un equipo de desarrolladores apasionados 
            por crear soluciones de software que realmente resuelven problemas. Desde 
            nuestra base en La Habana, Cuba, llevamos innovación tecnológica a 
            empresas de todos los tamaños.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Nuestra filosofía combina la precisión técnica con la creatividad, 
            produciendo herramientas que no solo funcionan de manera impecable, 
            sino que también ofrecen una experiencia de usuario excepcional.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-0 bg-muted/50 hover:bg-muted transition-colors duration-300 rounded-xl py-0 gap-0 shadow-none">
                <CardContent className="flex items-start gap-3 p-4">
                  <div className="w-10 h-10 rounded-lg bg-sc-orange/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-sc-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
