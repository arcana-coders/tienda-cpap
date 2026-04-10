'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/lib/store'

interface Product {
  id: string
  asin: string
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
  }

  const imagenes = (producto.imagenes as any) ?? []
  const imagen = Array.isArray(imagenes) ? imagenes[0] : ''
  const precio = Number(producto.precio)
  const precioCompare = producto.precioCompare ? Number(producto.precioCompare) : null
  const descuento = precioCompare ? Math.round((1 - precio / precioCompare) * 100) : 0

  return (
    <Link
      href={`/producto/${producto.slug}`}
      className="group flex flex-col bg-[#F5F5F5] rounded-xl border border-[#E0E0E0] hover:shadow-md transition-shadow overflow-hidden"
    >
      {/* Imagen — fondo blanco para que haga match con el producto */}
      <div className="relative aspect-square bg-white">
        {imagen ? (
          <Image
            src={imagen}
            alt={producto.titulo}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-[#E0E0E0]">
            📦
          </div>
        )}
        {descuento > 5 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            -{descuento}%
          </span>
        )}
      </div>

      {/* Info — sobre fondo gris suave */}
      <div className="flex flex-col flex-1 p-3">
        {producto.marca && (
          <span className="text-[11px] text-[#6B6B6B] uppercase tracking-wide mb-1">
            {producto.marca}
          </span>
        )}
        <p className="text-sm text-[#1A1A1A] line-clamp-2 leading-snug flex-1">
          {producto.titulo}
        </p>
        <div className="mt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-[#1A1A1A]">
              {formatPrice(precio)}
            </span>
            {precioCompare && precioCompare > precio && (
              <span className="text-xs text-[#6B6B6B] line-through">
                {formatPrice(precioCompare)}
              </span>
            )}
          </div>
          <p className="text-[11px] text-green-600 font-medium mt-0.5">
            🚚 Envío gratis · Facturamos
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full py-2 bg-[#C4813A] hover:bg-[#A36A28] text-white text-sm font-semibold rounded-full transition-colors"
        >
          Agregar al carrito
        </button>
      </div>
    </Link>
  )
}
