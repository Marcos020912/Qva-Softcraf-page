import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#3B9FFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://softcraft.cu"),
  title: {
    default: "Softcraft | Artesanía Digital - Software a Medida desde Cuba",
    template: "%s | Softcraft",
  },
  description:
    "Softcraft - Desarrollo de software profesional y soluciones tecnológicas a medida. Creamos herramientas innovadoras que impulsan tu negocio. Ventas Express: tu sistema de gestión comercial.",
  keywords: [
    "Softcraft",
    "desarrollo software",
    "Cuba",
    "software a medida",
    "Ventas Express",
    "gestión comercial",
    "artesanía digital",
    "aplicaciones móviles",
    "desarrollo web",
  ],
  authors: [{ name: "Softcraft", url: "https://softcraft.cu" }],
  creator: "Softcraft",
  publisher: "Softcraft",
  icons: {
    icon: "/softcraft-logo.png",
    apple: "/softcraft-logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Softcraft | Artesanía Digital",
    description:
      "Desarrollo de software profesional y soluciones tecnológicas a medida desde Cuba.",
    url: "https://softcraft.cu",
    siteName: "Softcraft",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/softcraft-logo.png",
        width: 512,
        height: 512,
        alt: "Softcraft Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softcraft | Artesanía Digital",
    description:
      "Desarrollo de software profesional y soluciones tecnológicas a medida desde Cuba.",
    },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://softcraft.cu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {/* JSON-LD Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Softcraft',
              alternateName: 'Softcraft Artesanía Digital',
              url: 'https://softcraft.cu',
              logo: 'https://softcraft.cu/softcraft-logo.png',
              description: 'Desarrollo de software profesional y soluciones tecnológicas a medida desde Cuba.',
              email: 'qbasoftcraft@gmail.com',
              telephone: '+535623390',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'La Habana',
                addressCountry: 'CU',
              },
              sameAs: ['https://wa.me/535623390'],
              foundingDate: '2024',
              knowsAbout: [
                'Desarrollo de Software',
                'Aplicaciones Web',
                'Aplicaciones Móviles',
                'Ventas Express',
                'Gestión Comercial',
              ],
            }),
          }}
        />
        {/* JSON-LD Structured Data: SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Ventas Express',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Android, Web',
              description: 'Sistema de gestión comercial integral. Controla ventas, inventario, clientes y facturación.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'CUP',
                description: 'Solicitar demo gratuita',
              },
              author: {
                '@type': 'Organization',
                name: 'Softcraft',
                url: 'https://softcraft.cu',
              },
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
