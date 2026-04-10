'use client'

import { useCartStore } from '@/lib/store'
import { useState } from 'react'

interface Producto {
  id: string
  asin: string
  titulo: string
  precio: number | string
  precioCompare?: number | string | null
  imagenes: any
  marca?: string | null
  bullets?: any
}

// Costo adicional de envío por pieza extra (mismo paquete)
const ENVIO_PIEZA_EXTRA = 80

export default function ProductInfo({ producto }: { producto: Producto }) {
  const { addItem, openCart } = useCartStore() as any
  const [agregado, setAgregado] = useState(false)
  const [cantidad, setCantidad] = useState(1)

  const precio = Number(producto.precio)
  const precioCompare = producto.precioCompare ? Number(producto.precioCompare) : null
  const descuento = precioCompare && precioCompare > precio
    ? Math.round((1 - precio / precioCompare) * 100)
    : 0

  const imagenes = Array.isArray(producto.imagenes) ? producto.imagenes : []
  const bullets = Array.isArray(producto.bullets) ? producto.bullets : []

  const formatPrice = (n: number) =>
    n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })

  const precioTotal = cantidad === 1
    ? precio
    : precio * cantidad + (cantidad - 1) * ENVIO_PIEZA_EXTRA

  const handleAgregar = () => {
    for (let i = 0; i < cantidad; i++) {
      addItem({
        id: producto.id,
        asin: producto.asin,
        titulo: producto.titulo,
        precio,
        imagen: imagenes[0] ?? '',
      })
    }
    setAgregado(true)
    openCart()
    setTimeout(() => setAgregado(false), 2000)
  }

  return (
    <div className="flex flex-col gap-4">
      {producto.marca && (
        <span className="text-xs text-[#6B6B6B] uppercase tracking-widest font-medium">
          {producto.marca}
        </span>
      )}

      <h1 className="text-2xl font-bold text-[#1A1A1A] leading-snug">{producto.titulo}</h1>

      {/* Precio */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-[#1A1A1A]">{formatPrice(precio)}</span>
        {precioCompare && precioCompare > precio && (
          <>
            <span className="text-base text-[#6B6B6B] line-through">{formatPrice(precioCompare)}</span>
            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
              -{descuento}%
            </span>
          </>
        )}
      </div>

      {/* Envío y facturación */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-green-700 text-sm font-medium bg-green-50 border border-green-100 px-3 py-2 rounded-lg">
          <span>🚚</span>
          <span>Envío gratis a todo México</span>
          <span className="text-green-600/70 font-normal">· No incluye zonas extendidas</span>
        </div>
        <div className="flex items-center gap-2 text-[#1A1A1A] text-sm bg-[#F5F5F5] border border-[#E0E0E0] px-3 py-2 rounded-lg">
          <span>📄</span>
          <span className="font-medium">Facturamos</span>
          <span className="text-[#6B6B6B] font-normal">— Solicita tu factura al hacer el pedido</span>
        </div>
      </div>

      {/* Selector de cantidad */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-[#1A1A1A]">Cantidad:</span>
        <div className="flex items-center border border-[#E0E0E0] rounded-full overflow-hidden">
          <button
            onClick={() => setCantidad(c => Math.max(1, c - 1))}
            className="w-9 h-9 flex items-center justify-center text-lg hover:bg-[#F5F5F5] transition-colors"
          >−</button>
          <span className="w-8 text-center text-sm font-semibold">{cantidad}</span>
          <button
            onClick={() => setCantidad(c => c + 1)}
            className="w-9 h-9 flex items-center justify-center text-lg hover:bg-[#F5F5F5] transition-colors"
          >+</button>
        </div>
        {cantidad > 1 && (
          <div className="text-sm text-[#6B6B6B]">
            <span className="font-semibold text-[#1A1A1A]">{formatPrice(precioTotal)}</span>
            <span className="ml-1">(+{formatPrice(ENVIO_PIEZA_EXTRA)} envío por pieza extra)</span>
          </div>
        )}
      </div>

      {/* Bullets */}
      {bullets.length > 0 && (
        <ul className="space-y-2 mt-1">
          {bullets.map((b: string, i: number) => (
            <li key={i} className="flex gap-2 text-sm text-[#1A1A1A] leading-snug">
              <span className="text-[#C4813A] mt-0.5 flex-shrink-0">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <button
        onClick={handleAgregar}
        className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all ${
          agregado
            ? 'bg-green-500 text-white'
            : 'bg-[#C4813A] hover:bg-[#A36A28] text-white'
        }`}
      >
        {agregado
          ? '✓ Agregado al carrito'
          : cantidad > 1
            ? `Agregar ${cantidad} piezas — ${formatPrice(precioTotal)}`
            : 'Agregar al carrito'}
      </button>

      <p className="text-xs text-[#6B6B6B]">Ref: {producto.asin}</p>
    </div>
  )
}
