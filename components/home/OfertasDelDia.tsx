'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/store'
import { useState } from 'react'

interface Product {
  id: string
  asin?: string | null
  titulo: string
  slug: string
  precio: number
  precioCompare?: number
  imagenes: string[]
  marca?: string
}

interface Props {
  productos: Product[]
}

function formatPrice(n: number) {
  return n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })
}

function HeroProduct({ producto }: { producto: Product }) {
  const { addItem, openCart } = useCartStore() as any
  const [added, setAdded] = useState(false)

  const imagenes = (producto.imagenes as string[]) ?? []
  const imagen = imagenes[0] ?? ''
  const precio = Number(producto.precio)
  const precioCompare = producto.precioCompare ? Number(producto.precioCompare) : null
  const descuento = precioCompare ? Math.round((1 - precio / precioCompare) * 100) : 0

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({ id: producto.id, asin: producto.asin, titulo: producto.titulo, precio, imagen })
    openCart()
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <Link href={`/producto/${producto.slug}`} className="group relative bg-white border border-outline-variant/20 rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col min-h-[340px] hover:shadow-xl hover:shadow-primary/5 hover:border-transparent transition-all duration-300">
      {/* Badge descuento */}
      {descuento > 5 && (
        <span className="absolute top-4 left-4 z-10 bg-error text-on-error text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide">
          -{descuento}% OFF
        </span>
      )}
      {/* Imagen */}
      <div className="relative flex-1 bg-surface-container-low min-h-[220px]">
        {imagen ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imagen}
            alt={producto.titulo}
            className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="eager"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-outline-variant">
            <span className="material-symbols-outlined text-[48px]">image</span>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-6 md:p-8 flex flex-col gap-3">
        {producto.marca && (
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant font-headline">{producto.marca}</span>
        )}
        <h3 className="font-bold text-on-surface font-headline text-lg md:text-xl leading-snug line-clamp-2">{producto.titulo}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl md:text-3xl font-extrabold font-headline tracking-tight text-primary">{formatPrice(precio)}</span>
          {precioCompare && precioCompare > precio && (
            <span className="text-sm font-medium text-outline line-through">{formatPrice(precioCompare)}</span>
          )}
        </div>
        <button
          onClick={handleAdd}
          className={`w-full py-4 rounded-xl font-bold font-body text-sm transition-all duration-300 flex items-center justify-center gap-2 mt-2
            ${added ? 'bg-secondary text-on-secondary' : 'bg-primary hover:bg-primary-container text-on-primary shadow-md hover:shadow-lg hover:-translate-y-0.5'}`}
        >
          <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
          {added ? 'Agregado a la bolsa ✓' : 'Agregar a la Bolsa'}
        </button>
      </div>
    </Link>
  )
}

function SmallProduct({ producto }: { producto: Product }) {
  const { addItem, openCart } = useCartStore() as any

  const imagenes = (producto.imagenes as string[]) ?? []
  const imagen = imagenes[0] ?? ''
  const precio = Number(producto.precio)
  const precioCompare = producto.precioCompare ? Number(producto.precioCompare) : null

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({ id: producto.id, asin: producto.asin, titulo: producto.titulo, precio, imagen })
    openCart()
  }

  return (
    <Link href={`/producto/${producto.slug}`} className="group bg-white border border-outline-variant/20 rounded-2xl overflow-hidden flex gap-4 p-4 hover:shadow-lg hover:shadow-primary/5 hover:border-transparent transition-all duration-300 items-center">
      {/* Thumbnail */}
      <div className="relative w-24 h-24 flex-shrink-0 rounded-xl bg-surface-container-low overflow-hidden">
        {imagen ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imagen}
            alt={producto.titulo}
            className="absolute inset-0 w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300 ease-out"
            loading="lazy"
          />
        ) : null}
      </div>
      {/* Info */}
      <div className="flex flex-col justify-center flex-1 min-w-0 pr-2">
        {producto.marca && (
          <span className="text-[10px] font-bold uppercase tracking-wider font-headline text-on-surface-variant truncate">{producto.marca}</span>
        )}
        <p className="text-sm md:text-base font-bold font-headline text-on-surface line-clamp-2 leading-snug mt-0.5">{producto.titulo}</p>
        <div className="flex items-center justify-between gap-2 mt-2">
          <div>
            <span className="font-extrabold font-headline tracking-tight text-primary text-base md:text-lg">{formatPrice(precio)}</span>
            {precioCompare && precioCompare > precio && (
              <span className="text-xs font-medium text-outline line-through ml-1.5">{formatPrice(precioCompare)}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="flex-shrink-0 bg-surface-container hover:bg-primary text-primary hover:text-on-primary px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200"
          >
            Agregar
          </button>
        </div>
      </div>
    </Link>
  )
}

export default function OfertasDelDia({ productos }: Props) {
  if (!productos || productos.length === 0) return null

  const [hero, ...rest] = productos
  const gridItems = rest.slice(0, 4)

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-headline font-bold text-on-surface">Ofertas Destacadas</h2>
          <p className="text-on-surface-variant mt-1 text-sm md:text-base">Precios exclusivos de importación directa en equipos premium.</p>
        </div>
        <Link href="/categorias" className="text-sm font-semibold text-primary hover:text-primary-container flex items-center gap-1 transition-colors hidden sm:flex">
          Ver todas las ofertas
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </Link>
      </div>

      {/* Editorial grid: hero left + stack right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Hero product */}
        <HeroProduct producto={hero} />

        {/* Small products stack */}
        {gridItems.length > 0 && (
          <div className="grid grid-cols-1 gap-4 content-start">
            {gridItems.map(p => (
              <SmallProduct key={p.id} producto={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
