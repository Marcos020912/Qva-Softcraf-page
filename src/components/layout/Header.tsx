'use client';

import { useState, useEffect, useCallback } from 'react';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#vision', label: 'Visión' },
  { href: '#productos', label: 'Productos' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    navLinks.forEach(({ href }) => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const scrollToSection = useCallback((href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-soft border-b border-border'
          : 'bg-background/40 backdrop-blur-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}
            className="py-2"
          >
            <Logo width={110} height={38} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollToSection(href); }}
                className={cn(
                  'nav-link px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg',
                  activeSection === href.replace('#', '')
                      ? 'text-sc-blue'
                      : 'text-foreground hover:text-sc-blue'
                )}
              >
                {label}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#contacto')}
              className="ml-4 bg-sc-orange hover:bg-sc-orange-dark text-white font-semibold rounded-[10px] hover:shadow-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              Contáctanos
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileOpen}
            >
              <div className="relative w-6 h-5">
                <span
                  className={cn(
                    'absolute left-0 h-0.5 bg-current rounded-full transition-all duration-300',
                    isMobileOpen
                      ? 'top-1/2 -translate-y-1/2 w-6 rotate-45'
                      : 'top-0 w-5'
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-current rounded-full transition-all duration-300',
                    isMobileOpen ? 'opacity-0 scale-0' : 'opacity-100 w-4'
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 h-0.5 bg-current rounded-full transition-all duration-300',
                    isMobileOpen
                      ? 'top-1/2 -translate-y-1/2 w-6 -rotate-45'
                      : 'bottom-0 w-6'
                  )}
                />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-16 sm:top-20 bg-background/95 backdrop-blur-xl transition-all duration-300 z-40',
          isMobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center justify-center gap-6 h-full py-8">
          {navLinks.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); scrollToSection(href); }}
              className={cn(
                'text-xl font-semibold transition-colors duration-300',
                activeSection === href.replace('#', '')
                  ? 'text-sc-orange'
                  : 'text-foreground hover:text-sc-orange'
              )}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {label}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection('#contacto')}
            className="mt-4 bg-sc-orange hover:bg-sc-orange-dark text-white text-lg font-semibold rounded-[10px] hover:shadow-accent h-auto py-3 px-8"
          >
            Contáctanos
          </Button>
        </nav>
      </div>
    </header>
  );
}
