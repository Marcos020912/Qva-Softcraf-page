'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 110, height = 38 }: LogoProps) {
  return (
    <div className={cn('flex items-center', className)}>
      <Image
        src="/softcraft-logo.png"
        alt="Softcraft Logo"
        width={width}
        height={height}
        className="h-auto object-contain drop-shadow-sm"
        priority
      />
    </div>
  );
}
