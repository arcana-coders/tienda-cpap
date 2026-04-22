export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { db, schema } from '@/lib/db'
import { eq, and, ne } from 'drizzle-orm'
import { notFound } from 'next/navigation'
import ProductImages from '@/components/product/ProductImages'
import ProductInfo from '@/components/product/ProductInfo'
import ProductCard from '@/components/catalog/ProductCard'
import Link from 'next/link'
import { cleanText } from '@/lib/strings'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const [p] = await db.select({
    titulo: schema.productos.titulo,
    descripcion: schema.productos.descripcion,
    bullets: schema.productos.bullets,
    imagenes: schema.productos.imagenes,
    precio: schema.productos.precio,
    marca: schema.productos.marca,
  }).from(schema.productos)
    .where(and(eq(schema.productos.slug, slug), eq(schema.productos.activo, true)))
    .limit(1)

  if (!p) return {}

  const bullets = (p.bullets as string[]) ?? []
  const productTitle = cleanText(p.titulo)
  const desc = bullets[0]
    ? `${cleanText(bullets[0]).slice(0, 145)}. Envío a todo México.`
    : `Compra ${productTitle} en CPAP México. Producto de terapia respiratoria con envío garantizado a todo México.`

  const imagen = (p.imagenes as string[])?.[0]

  return {
    title: `${productTitle} | Cpap-Mexico`,
    description: desc,
    openGraph: {
      title: productTitle,
      description: desc,
      images: imagen ? [{ url: imagen, alt: productTitle }] : [],
      type: 'website',
    },
  }
}

/**
 * Limpia el campo descripcion de Amazon:
 * - Elimina etiquetas HTML
 * - Decodifica entidades HTML básicas
 * - Colapsa espacios/saltos múltiples
 */
function cleanDescription(raw: string | null | undefined): string | null {
  if (!raw) return null
  const clean = raw
    .replace(/<[^>]*>/g, ' ')          
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+/g, ' ')           
    .replace(/\n{3,}/g, '\n\n')        
    .trim()
  return clean.length > 10 ? clean : null
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params

  const [producto] = await db.select().from(schema.productos)
    .where(and(eq(schema.productos.slug, slug), eq(schema.productos.activo, true)))
    .limit(1)

  if (!producto) notFound()

  // Categoría
  let categoria = null
  if (producto.categoriaId) {
    const [cat] = await db.select().from(schema.categorias)
      .where(eq(schema.categorias.id, producto.categoriaId)).limit(1)
    categoria = cat ?? null
  }

  // Relacionados
  const relacionados = producto.categoriaId
    ? await db.select().from(schema.productos)
        .where(and(
          eq(schema.productos.activo, true),
          eq(schema.productos.categoriaId, producto.categoriaId),
          ne(schema.productos.id, producto.id)
        ))
        .limit(4)
    : []

  const reviews = Array.isArray(producto.reviews) ? (producto.reviews as any[]) : []
  const BASE = 'https://www.cpap-mexico.com'

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: producto.titulo,
    image: (producto.imagenes as string[]) ?? [],
    description: cleanDescription(producto.descripcion) ?? producto.titulo,
    ...(producto.marca ? { brand: { '@type': 'Brand', name: producto.marca } } : {}),
    offers: {
      '@type': 'Offer',
      price: Number(producto.precio).toFixed(2),
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      url: `${BASE}/producto/${producto.slug}`,
      seller: { '@type': 'Organization', name: 'Cpap-Mexico' },
    },
    ...(reviews.length > 0 ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: String(reviews.length),
      },
    } : {}),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE },
      ...(categoria ? [{ '@type': 'ListItem', position: 2, name: categoria.nombre, item: `${BASE}/categoria/${categoria.slug}` }] : []),
      { '@type': 'ListItem', position: categoria ? 3 : 2, name: producto.titulo, item: `${BASE}/producto/${producto.slug}` },
    ],
  }

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 pt-[110px] lg:pt-[155px] pb-8 md:pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <nav className="text-xs text-on-surface-variant mb-8 flex items-center gap-2 font-medium bg-surface-container-low w-fit px-4 py-2 rounded-full">
        <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
        </Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        {categoria && (
          <>
            <Link href={`/categoria/${categoria.slug}`} className="hover:text-primary transition-colors">{categoria.nombre}</Link>
             <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </>
        )}
        <span className="text-on-surface line-clamp-1 max-w-[200px] sm:max-w-xs">{cleanText(producto.titulo)}</span>
      </nav>

      {/* Producto principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <ProductImages imagenes={(producto.imagenes as string[]) ?? []} titulo={producto.titulo} />
        <ProductInfo producto={producto as any} />
      </div>

      {/* Descripción Expandida*/}
      {cleanDescription(producto.descripcion) && (
        <div className="mt-20 border-t border-outline-variant/20 pt-16">
          <h2 className="text-3xl font-extrabold text-on-surface font-headline mb-8 border-l-4 border-primary pl-4">Acerca de este equipo</h2>
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/10 shadow-sm max-w-4xl">
            <p className="text-base md:text-lg text-on-surface-variant font-body leading-relaxed whitespace-pre-line tracking-wide">
                {cleanText(cleanDescription(producto.descripcion))}
            </p>
          </div>
        </div>
      )}

      {/* Reviews */}
      {Array.isArray(producto.reviews) && (producto.reviews as any[]).length > 0 && (
        <div className="mt-20 pt-16">
          <h2 className="text-3xl font-extrabold text-on-surface font-headline mb-8 border-l-4 border-primary pl-4">Reseñas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(producto.reviews as { autor: string; titulo: string; texto: string; fecha: string }[]).slice(0,6).map((r, i) => (
              <div key={i} className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 flex flex-col h-full hover:shadow-lg transition-shadow">
                {/* Estrellas */}
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="material-symbols-outlined text-secondary text-[20px]" style={{fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                {/* Título */}
                {r.titulo && (
                  <p className="text-lg font-bold text-on-surface font-headline mb-2 leading-snug">{r.titulo}</p>
                )}
                {/* Texto */}
                <p className="text-sm text-on-surface-variant font-body leading-relaxed flex-1 italic">"{r.texto}"</p>
                {/* Autor + fecha */}
                <div className="mt-6 pt-4 border-t border-outline-variant/10">
                    <p className="text-xs font-bold text-on-surface tracking-wider uppercase">
                    {r.autor} <span className="font-normal text-on-surface-variant normal-case">{r.fecha ? `· ${r.fecha}` : ''}</span>
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Relacionados */}
      {relacionados.length > 0 && (
        <div className="mt-24 pt-16 border-t border-outline-variant/20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-on-surface font-headline border-l-4 border-primary pl-4">También te podría interesar</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relacionados.map((p: any) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
