'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const serviceOptions = [
  { value: 'ventas-express-web', label: 'Ventas Express Web' },
  { value: 'ventas-express-android', label: 'Ventas Express Android' },
  { value: 'desarrollo-a-medida', label: 'Desarrollo a Medida' },
  { value: 'consultoria', label: 'Consultoría' },
  { value: 'otro', label: 'Otro' },
];

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!form.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!form.message.trim()) newErrors.message = 'El mensaje es obligatorio';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const msg = encodeURIComponent(
        `Hola Softcraft! 🚀\n\n` +
        `*Nombre:* ${form.name}\n` +
        (form.company ? `*Empresa:* ${form.company}\n` : '') +
        `*Email:* ${form.email}\n` +
        (form.phone ? `*Teléfono:* ${form.phone}\n` : '') +
        (form.service ? `*Servicio de interés:* ${form.service}\n` : '') +
        `\n*Mensaje:*\n${form.message}`
      );

      window.open(`https://wa.me/535623390?text=${msg}`, '_blank');

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      toast.success('¡Mensaje enviado!', {
        description: 'Te redirigimos a WhatsApp. Te responderemos pronto.',
      });

      setForm(initialForm);
    } catch {
      toast.error('Error al enviar', {
        description: 'Intenta nuevamente o escríbenos directamente por WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contacto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-sc-orange" />
          <span className="text-sc-orange font-semibold text-sm uppercase tracking-wider">
            Contacto
          </span>
          <div className="h-px w-8 bg-sc-orange" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Hablemos de tu{' '}
          <span className="gradient-text">proyecto</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Estamos listos para escucharte. Cuéntanos sobre tu idea y te 
          ayudaremos a hacerla realidad.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto">
        <Card className="rounded-2xl shadow-soft border-border py-0">
          <CardContent className="p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Row 1: Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">
                    Nombre <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={cn(errors.name && 'border-destructive')}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    type="text"

                    value={form.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Tu empresa (opcional)"
                  />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={cn(errors.email && 'border-destructive')}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+53 5XXXXXXX"
                  />
                </div>
              </div>

              {/* Service select */}
              <div className="space-y-1.5">
                <Label htmlFor="service">Servicio de interés</Label>
                <Select value={form.service} onValueChange={(v) => handleChange('service', v)}>
                  <SelectTrigger className="w-full [&&]:h-10 [&>span]:h-10" id="service">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label htmlFor="message">
                  Mensaje <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={cn(errors.message && 'border-destructive', 'resize-none')}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sc-blue hover:bg-sc-blue-dark text-white font-semibold rounded-[10px] hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300 h-auto py-3.5"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
