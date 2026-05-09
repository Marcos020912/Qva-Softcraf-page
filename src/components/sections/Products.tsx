"use client";

import Image from "next/image";
import {
  CheckCircle2,
  ShoppingCart,
  BarChart3,
  Users,
  FileText,
  Receipt,
  Smartphone,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "../ui/button";

const features = [
  { icon: ShoppingCart, text: "Gestión de ventas" },
  { icon: BarChart3, text: "Reportes en tiempo real" },
  { icon: Users, text: "Control de clientes" },
  { icon: FileText, text: "Facturación electrónica" },
  { icon: Receipt, text: "Inventario integrado" },
  { icon: Smartphone, text: "Multiplataforma" },
];

export function Products() {
  const waMessage = encodeURIComponent(
    "¡Hola Softcraft! 👋\n\nEstoy interesado/a en Ventas Express. ¿Cómo es?\n\nMe gustaría conocer más detalles sobre el sistema.",
  );

  return (
    <SectionWrapper id="productos">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-sc-orange" />
          <span className="text-sc-orange font-semibold text-sm uppercase tracking-wider">
            Nuestros Productos
          </span>
          <div className="h-px w-8 bg-sc-orange" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Herramientas que <span className="gradient-text">Transforman</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Software profesional diseñado para resolver problemas reales de
          negocio con eficiencia y elegancia.
        </p>
      </div>

      {/* Product Card */}
      <Card className="relative rounded-3xl shadow-large overflow-hidden border-border py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-70 lg:min-h-145 bg-linear-to-br from-muted/40 to-muted/10">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-sc-orange/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sc-orange/10 rounded-full blur-3xl" />
            </div>

            {/* Image Container */}
            <div className="relative w-full max-w-2xl aspect-16/10 group">
              <div className="absolute inset-0 bg-linear-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-900/40 rounded-2xl backdrop-blur-sm border border-border/50 shadow-large transition-transform duration-500 group-hover:scale-[1.02]" />

              <Image
                src="/dashboard-ventas-express.png"
                alt="Dashboard Ventas Express"
                fill
                className="object-contain p-2 sm:p-4"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Optional: Preview badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4">
                <Badge
                  variant="secondary"
                  className="bg-white/90 dark:bg-gray-800/90 text-foreground text-xs font-semibold shadow-md border border-border/50"
                >
                  Vista previa
                </Badge>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <CardContent className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
            {/* Badge */}
            <Badge className="self-start px-4 py-1.5 bg-linear-to-r from-sc-orange to-sc-orange-light text-white text-xs font-bold uppercase tracking-wider border-0 rounded-full hover:from-sc-orange hover:to-sc-orange-light">
              Producto Destacado
            </Badge>

            {/* Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Ventas Express
              </h3>
              <span className="text-sm text-muted-foreground font-medium mt-1 block">
                v2.0 — Sistema de Gestión Comercial
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Ventas Express es tu aliado integral para la gestión comercial.
              Controla ventas, inventario, clientes y facturación desde una
              interfaz intuitiva que funciona tanto en Android como en web.
              Diseñado específicamente para el contexto cubano, con soporte
              offline y sincronización automática.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map(({ text }) => (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-sc-orange/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-sc-orange" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <Separator />

            <Button
              size="lg"
              onClick={() =>
                window.open(
                  `https://wa.me/535623390?text=${waMessage}`,
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="group bg-sc-orange hover:bg-sc-orange-dark text-white text-lg font-bold rounded-[12px] hover:shadow-accent hover:-translate-y-1 transition-all duration-300 h-auto py-4 px-8"
            >
              <PhoneCall className="h-5 w-5" />
              <span>Solicitar demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </SectionWrapper>
  );
}
