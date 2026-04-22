import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import { db, schema } from '@/lib/db'
import { eq, and, isNull } from 'drizzle-orm'

async function getCategorias() {
  try {
    return await db.select({ nombre: schema.categorias.nombre, slug: schema.categorias.slug })
      .from(schema.categorias)
      .where(eq(schema.categorias.activa, true))
      .orderBy(schema.categorias.orden)
  } catch (error) {
    console.error('Error fetching categories in layout:', error)
    return []
  }
}

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-headline',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const revalidate = 600 // Revalidar cada 10 minutos

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cpap-Mexico',
  url: 'https://www.cpap-mexico.com',
  logo: 'https://www.cpap-mexico.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-777-408-7291',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
  sameAs: ['https://wa.me/527774087291'],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cpap-mexico.com'),
  title: {
    default: 'Cpap-Mexico — Cuidado Respiratorio Preciso',
    template: '%s | Cpap-Mexico',
  },
  description:
    'Cuidado respiratorio premium, importado directamente con total transparencia logística. Excelencia clínica con dispositivos CPAP de primer nivel.',
  keywords: ['Cpap-Mexico', 'CPAP México', 'máscaras CPAP', 'filtros CPAP', 'equipo apnea del sueño', 'Airsense', 'ResMed'],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.cpap-mexico.com',
    siteName: 'Cpap-Mexico',
    title: 'Cpap-Mexico — Cuidado Respiratorio Preciso',
    description: 'Cuidado respiratorio premium, importado directamente con total transparencia logística.',
    images: [{ url: '/logo.png', width: 1536, height: 485, alt: 'Cpap-Mexico' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cpap-Mexico — Cuidado Respiratorio Preciso',
    description: 'Cuidado respiratorio premium, importado directamente con total transparencia logística.',
  },
  robots: { index: true, follow: true },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const categorias = await getCategorias()

  return (
    <html lang="es" suppressHydrationWarning className={`h-full antialiased ${manrope.variable} ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
        <AnnouncementBar />
        <Header initialCategories={categorias} />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
