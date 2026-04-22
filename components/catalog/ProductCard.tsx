'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/store'
import { useState } from 'react'
import { cleanText } from '@/lib/strings'

interface Product {
  id: string
  asin?: string | null
  titulo: string
  slug: string
  precio: number
  precioCompare?: number
  imagenes: string[]
  marca?: string
  destacado?: boolean
}

interface Props {
  producto: Product
}

export default function ProductCard({ producto }: Props) {
  const { addItem, openCart } = useCartStore() as any
  const [added, setAdded] = useState(false)

  const formatPrice = (n: number) =>
    n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: producto.id,
      asin: producto.asin,
      titulo: producto.titulo,
      precio: Number(producto.precio),
      imagen: (producto.imagenes as any)?.[0] ?? '',
    })
    openCart()
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const imagenes = (producto.imagenes as any) ?? []
  const imagen = Array.isArray(imagenes) ? imagenes[0] : ''
  const precio = Number(producto.precio)
  const precioCompare = producto.precioCompare ? Number(producto.precioCompare) : null
  const descuento = precioCompare ? Math.round((1 - precio / precioCompare) * 100) : 0

  return (
    <Link
      href={`/producto/${producto.slug}`}
      className="group flex flex-col bg-white rounded-2xl md:rounded-3xl border border-outline-variant/20 overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-transparent transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square bg-surface-container-lowest overflow-hidden">
        {imagen ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imagen}
            alt={cleanText(producto.titulo)}
            className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-outline-variant">
            <span className="material-symbols-outlined text-[48px]">inventory_2</span>
          </div>
        )}
        {descuento > 5 && (
          <span className="absolute top-3 left-3 bg-error text-on-error text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
            -{descuento}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5 md:p-6 bg-surface-container-lowest">
        {producto.marca && (
          <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em] font-headline mb-1">
            {producto.marca}
          </span>
        )}
        <p className="text-sm md:text-base text-on-surface font-headline font-bold line-clamp-2 leading-snug flex-1">
          {cleanText(producto.titulo)}
        </p>

        <div className="mt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg md:text-xl font-extrabold font-headline tracking-tight text-primary">
              {formatPrice(precio)}
            </span>
            {precioCompare && precioCompare > precio && (
              <span className="text-xs font-medium text-outline line-through">
                {formatPrice(precioCompare)}
              </span>
            )}
          </div>
          <p className="flex items-center gap-1.5 text-[11px] text-secondary font-semibold font-body mt-1">
            <span className="material-symbols-outlined text-[14px]">local_shipping</span>
            <span>Envío Gratis · 7–9 días</span>
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleAddToCart}
          className={`
            mt-4 w-full py-3 text-sm font-bold font-body rounded-xl transition-all duration-300 flex items-center justify-center gap-2
            ${added
              ? 'bg-secondary text-on-secondary shadow-md'
              : 'bg-surface-container text-primary hover:bg-primary hover:text-on-primary hover:shadow-lg hover:-translate-y-0.5'
            }
          `}
        >
          {added ? (
            <><span className="material-symbols-outlined text-[18px]">check_circle</span><span>Agregado al Carrito</span></>
          ) : (
            <><span className="material-symbols-outlined text-[18px]">shopping_cart</span><span>Agregar al Carrito</span></>
          )}
        </button>
      </div>
    </Link>
  )
}
