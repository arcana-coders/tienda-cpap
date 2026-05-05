export const revalidate = 600 // Revalidar cada 10 minutos

import React from 'react'
import Link from 'next/link'
import { db, schema } from '@/lib/db'
import { eq, isNull, and, sql } from 'drizzle-orm'
import ProductCard from '@/components/catalog/ProductCard'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import OfertasDelDia from '@/components/home/OfertasDelDia'
import EducationSection from '@/components/home/EducationSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FAQSection from '@/components/home/FAQSection'

async function getDestacados() {
  try {
    const rows = await db.select({
      id: schema.productos.id,
      titulo: schema.productos.titulo,
      slug: schema.productos.slug,
      precio: schema.productos.precio,
      precioCompare: schema.productos.precioCompare,
      imagenes: schema.productos.imagenes,
      marca: schema.productos.marca,
      asin: schema.productos.asin,
      categoriaId: schema.productos.categoriaId,
    })
      .from(schema.productos)
      .where(and(eq(schema.productos.activo, true), eq(schema.productos.destacado, true)))
      .orderBy(sql`RANDOM()`)
      .limit(12)

    return rows.map(p => ({
      ...p,
      precio: Number(p.precio),
      precioCompare: p.precioCompare ? Number(p.precioCompare) : undefined,
      imagenes: (p.imagenes as string[]) ?? [],
      marca: p.marca ?? undefined,
      asin: p.asin ?? undefined,
      categoriaId: p.categoriaId ?? undefined,
    }))
  } catch (error) {
    console.error('Error fetching featured products:', error)
    return []
  }
}

async function getCategorias() {
  try {
    return await db.select({
      id: schema.categorias.id,
      nombre: schema.categorias.nombre,
      slug: schema.categorias.slug
    })
      .from(schema.categorias)
      .where(and(eq(schema.categorias.activa, true), isNull(schema.categorias.padreId)))
      .orderBy(schema.categorias.orden)
      .limit(8)
  } catch (error) {
    console.error('Error fetching categories for homepage:', error)
    return []
  }
}

// SVG icons para categorías (Fallback visual)
const CatIcons: Record<string, string> = {
  mascaras: 'masks',
  filtros: 'air_purifier_gen',
  tubos: 'air',
  refacciones: 'settings_suggest',
  limpieza: 'cleaning_services',
  accesorios: 'medical_services',
  humidificadores: 'water_drop',
  baterias: 'battery_charging_full',
}

const CATEGORIAS_FALLBACK = [
  { id: '1', nombre: 'Máscaras CPAP', slug: 'mascaras',    href: '/categorias' },
  { id: '2', nombre: 'Filtros',       slug: 'filtros',     href: '/categorias' },
  { id: '3', nombre: 'Tubos',         slug: 'tubos',       href: '/categorias' },
  { id: '4', nombre: 'Refacciones',   slug: 'refacciones', href: '/categorias' },
  { id: '5', nombre: 'Limpieza',      slug: 'limpieza',    href: '/categorias' },
  { id: '6', nombre: 'Accesorios',    slug: 'accesorios',  href: '/categorias' },
  { id: '7', nombre: 'Humidificadores', slug: 'humidificadores', href: '/categorias' },
  { id: '8', nombre: 'Baterías',      slug: 'baterias',    href: '/categorias' },
]

export default async function HomePage() {
  const [destacados, categorias] = await Promise.all([getDestacados(), getCategorias()])
  const cats = categorias.length > 0 ? categorias : CATEGORIAS_FALLBACK

  // Primeros 5 productos para "Ofertas del día", el resto para "Más vendidos"
  const ofertasProductos = destacados.slice(0, 5)
  const masVendidos = destacados.slice(5)

  return (
    <main className="bg-surface font-body min-h-screen">
      {/* 1. Hero asimétrico */}
      <HeroSection />

      {/* 2. Trust bar */}
      <TrustBar />

      {/* 3. Sección educativa — apnea del sueño */}
      <EducationSection />

      {/* 4. Ofertas del día — layout editorial */}
      {ofertasProductos.length > 0 && (
        <OfertasDelDia productos={ofertasProductos} />
      )}

      {/* 4. Comprar por categoría */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface">Categorías</h2>
            <p className="text-on-surface-variant mt-1 text-sm md:text-base">Encuentra exactamente lo que necesitas para tu terapia CPAP.</p>
          </div>
          <Link href="/categorias" className="text-sm font-semibold text-primary hover:text-primary-container transition-colors hidden sm:flex items-center gap-1">
            Ver Todo <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {cats.map((cat: any) => {
            const iconName = CatIcons[cat.slug] ?? 'category'
            const href = cat.href ?? `/categoria/${cat.slug}`
            return (
              <Link
                key={cat.id}
                href={href}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-surface-container-lowest hover:bg-primary hover:text-on-primary group transition-all duration-300 text-center border border-outline-variant/20 hover:border-transparent hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="w-12 h-12 rounded-full bg-primary-container group-hover:bg-on-primary/10 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-on-primary-container group-hover:text-on-primary text-[24px] selection:bg-transparent">
                    {iconName}
                  </span>
                </div>
                <span className="text-sm font-semibold text-on-surface group-hover:text-on-primary leading-tight transition-colors duration-200">
                  {cat.nombre}
                </span>
              </Link>
            )
          })}
        </div>
        <div className="mt-6 flex justify-center sm:hidden">
          <Link href="/categorias" className="text-sm font-semibold text-primary border border-primary/20 px-6 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors flex items-center gap-2">
            Ver Todas las Categorías <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* 5. Más vendidos — scroll horizontal */}
      {masVendidos.length > 0 ? (
        <section className="py-16 bg-surface-container-lowest border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-headline font-bold text-on-surface">Equipos Seleccionados</h2>
                <p className="text-on-surface-variant mt-1 text-sm md:text-base">La cúspide de la tecnología en terapia del sueño, los más elegidos por nuestros pacientes.</p>
              </div>
              <Link href="/categorias" className="text-sm font-semibold text-primary hover:text-primary-container transition-colors hidden sm:flex items-center gap-1">
                Ver Catálogo <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Horizontal scroll */}
          <div className="pl-4 md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-none" style={{ scrollSnapType: 'x mandatory' }}>
              {masVendidos.map((p: any) => (
                <div key={p.id} className="flex-shrink-0 w-[260px] sm:w-[280px]" style={{ scrollSnapAlign: 'start' }}>
                  <ProductCard producto={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : destacados.length === 0 ? (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-12 shadow-sm">
            <span className="material-symbols-outlined text-[48px] text-primary/40 mb-4">inventory_2</span>
            <h2 className="text-2xl font-headline font-bold mb-2 text-on-surface">Inicializando Catálogo</h2>
            <p className="text-on-surface-variant">Estamos sincronizando nuestro inventario premium desde EE. UU. Por favor, regresa pronto.</p>
          </div>
        </section>
      ) : null}

      {/* 6. Testimonios — personas reales */}
      <TestimonialsSection />

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. Banner Editorial — Diferencial CPAP */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 scroll-mt-20">
        <div className="bg-primary rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Texto y CTA */}
            <div className="p-10 lg:p-16 flex flex-col justify-center space-y-8 bg-surface-container-lowest lg:bg-transparent lg:order-1 order-2">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container/50 lg:bg-white/10 text-primary lg:text-primary-container border border-primary/10 lg:border-white/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full w-fit">
                  <span className="material-symbols-outlined text-[14px]">health_and_safety</span>
                  Excelencia Clínica
                </span>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-on-surface lg:text-white leading-[1.15]">
                  Importaciones premium, <br className="hidden md:block" />
                  <span className="text-primary lg:text-primary-container">puerta a puerta.</span>
                </h2>
                
                <p className="text-on-surface-variant lg:text-white/80 leading-relaxed text-sm sm:text-base max-w-lg font-body">
                  Cerramos la brecha entre los estándares clínicos de EE. UU. y la logística en México. Cada equipo y máscara CPAP es 100% original, en caja sellada y respaldado por garantías del fabricante con facturación CFDI.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
                {[
                  { t: '100% Auténtico', d: 'Sellado en caja directamente de EE. UU.', i: 'verified' },
                  { t: 'Facturación CFDI', d: 'Totalmente deducible en México.', i: 'receipt' },
                  { t: 'Entregas Rápidas', d: 'Tránsito fronterizo y envíos rápidos.', i: 'local_shipping' },
                  { t: 'Soporte Especializado', d: 'Asesoramiento para elegir el equipo correcto.', i: 'support_agent' },
                ].map((item) => (
                  <li key={item.t} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 lg:bg-white/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary lg:text-primary-container text-[20px]">{item.i}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-xs sm:text-sm font-bold text-on-surface lg:text-white tracking-wide">{item.t}</h4>
                      <p className="text-[11px] sm:text-xs text-on-surface-variant lg:text-white/60 leading-tight mt-0.5">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link
                  href="/categorias"
                  className="inline-flex items-center gap-2 bg-primary lg:bg-white hover:bg-primary-container lg:hover:bg-surface-container-low text-on-primary lg:text-primary font-bold px-8 py-4 rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-fit justify-center"
                >
                  Explorar Catálogo EE. UU.
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Imagen/Ilustración Premium */}
            <div className="relative min-h-[300px] lg:min-h-full bg-surface p-0 flex items-center justify-center overflow-hidden lg:order-2 order-1">
              <img 
                src="/images/medical-precision.webp" 
                alt="Precisión Clínica y Tecnología Médica"
                className="w-full h-full object-cover lg:rounded-none rounded-t-[2rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-primary" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
