'use client'

import { useState } from 'react'
import { useCartStore } from '@/lib/store'
import { cleanText } from '@/lib/strings'

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

  const precioTotal = precio * cantidad

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

  // Mapeo de iconos para los bullets en base a palabras clave (heurística básica)
  const getIconForBullet = (text: string) => {
    const lText = text.toLowerCase()
    if (lText.includes('presión') || lText.includes('pressure') || lText.includes('aire')) return 'air'
    if (lText.includes('ruido') || lText.includes('silencioso') || lText.includes('quiet')) return 'volume_off'
    if (lText.includes('mascarilla') || lText.includes('tubo') || lText.includes('mask')) return 'medical_mask'
    if (lText.includes('agua') || lText.includes('humidificador')) return 'humidity_low'
    if (lText.includes('batería') || lText.includes('energía') || lText.includes('voltaje')) return 'battery_charging_full'
    if (lText.includes('peso') || lText.includes('ligero') || lText.includes('viaje')) return 'flight_takeoff'
    if (lText.includes('garantía')) return 'verified_user'
    return 'info'
  }

  return (
    <div className="flex flex-col gap-10">
      
      {/* Header Info */}
      <div className="flex flex-col gap-4">
        {producto.marca && (
          <span className="text-xs text-on-surface-variant font-bold uppercase tracking-[0.2em] font-headline">
            {producto.marca}
          </span>
        )}
        <h1 className="font-headline text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface leading-tight">
          {cleanText(producto.titulo)}
        </h1>
        <p className="text-on-surface-variant font-medium tracking-tight">Ref: {producto.asin}</p>
      </div>

      {/* Buy Box */}
      <div className="bg-surface-container-lowest p-6 md:p-8 rounded-[2rem] flex flex-col gap-6 shadow-[0_4px_40px_rgba(25,28,29,0.04)] border border-outline-variant/10">
        
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-on-surface-variant mb-1 font-medium font-body tracking-wide">Precio en MXN</p>
            <div className="flex items-baseline gap-3">
              <p className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tight">{formatPrice(precio)}</p>
              {precioCompare && precioCompare > precio && (
                <span className="text-lg text-outline line-through">{formatPrice(precioCompare)}</span>
              )}
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <p className="text-sm text-on-surface-variant font-body">Impuestos Incluidos</p>
            {descuento > 0 && (
              <span className="mt-1 bg-error/10 text-error text-xs font-bold px-2 py-1 rounded-md tracking-wider uppercase">
                Ahorras {descuento}%
              </span>
            )}
          </div>
        </div>

        {/* Cantidad */}
        <div className="flex items-center gap-4 py-2 border-y border-outline-variant/10">
          <span className="text-sm font-bold text-on-surface font-body">Cantidad:</span>
          <div className="flex items-center bg-surface-container-low rounded-xl p-1 border border-outline-variant/20">
            <button
              onClick={() => setCantidad(c => Math.max(1, c - 1))}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-xl font-medium transition-all text-on-surface-variant"
            >−</button>
            <span className="w-12 text-center text-sm font-bold text-on-surface font-headline">{cantidad}</span>
            <button
              onClick={() => setCantidad(c => c + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-xl font-medium transition-all text-on-surface-variant"
            >+</button>
          </div>
        </div>

        <button
          onClick={handleAgregar}
          className={`
            w-full py-4 rounded-xl font-bold font-body text-lg flex items-center justify-center gap-3 transition-all duration-300
            ${agregado 
              ? 'bg-secondary text-on-secondary shadow-md scale-[0.99] cursor-default'
              : 'bg-primary text-on-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5'
            }
          `}
        >
          {agregado ? (
            <><span className="material-symbols-outlined fill-current">check_circle</span><span>Agregado a tu Bolsa</span></>
          ) : (
            <><span className="material-symbols-outlined">shopping_bag</span><span>Comprar — {formatPrice(precioTotal)}</span></>
          )}
        </button>

        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-4 bg-surface-container-low p-4 rounded-xl">
            <span className="material-symbols-outlined text-primary mt-0.5">local_shipping</span>
            <div>
              <p className="font-bold text-on-surface text-sm font-body">Importación y Envío Nacional Gratis</p>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Directo a tu domicilio en 7-9 días hábiles.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 bg-surface-container-low p-4 rounded-xl">
            <span className="material-symbols-outlined text-primary mt-0.5">receipt_long</span>
            <div>
              <p className="font-bold text-on-surface text-sm font-body">Facturación CFDI</p>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Facturamos todos tus pedidos de forma electrónica según regulaciones del SAT.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Specifications Bento (Mapeo de Bullets) */}
      {bullets.length > 0 && (
        <>
          <h2 className="text-xl font-bold text-on-surface font-headline border-b border-outline-variant/10 pb-2">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bullets.slice(0, 4).map((b: string, i: number) => {
              const text = cleanText(b);
              // Intentar dividir en título y descripción si tiene un patrón común
              let title = `Característica ${i + 1}`;
              let desc = text;
              
              if (text.includes(':')) {
                const parts = text.split(':');
                title = parts[0].trim();
                desc = parts.slice(1).join(':').trim();
              } else if (text.includes('-')) {
                const parts = text.split('-');
                if(parts[0].length < 40) {
                     title = parts[0].trim();
                     desc = parts.slice(1).join('-').trim();
                }
              }

              // Limitar un poco el texto si es muy largo
              if(title.length > 50) title = title.substring(0, 50) + '...';

              return (
                <div key={i} className={`bg-surface-container-low p-5 md:p-6 rounded-2xl flex flex-col gap-2 border border-outline-variant/5 ${i === 2 && bullets.length === 3 ? 'md:col-span-2' : ''} ${i === 3 ? 'md:col-span-2' : ''}`}>
                  <span className="material-symbols-outlined text-primary mb-1 text-[28px] opacity-80">{getIconForBullet(title)}</span>
                  <p className="text-sm font-bold text-on-surface font-body">{title}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-4">{desc}</p>
                </div>
              )
            })}
            
            {/* Adicionales si hay mas de 4 bullets */}
            {bullets.length > 4 && (
              <div className="bg-surface-container-low p-5 md:p-6 rounded-2xl flex flex-col gap-2 border border-outline-variant/5 col-span-1 md:col-span-2">
                 <span className="material-symbols-outlined text-primary mb-1 text-[28px] opacity-80">more_horiz</span>
                 <p className="text-sm font-bold text-on-surface font-body">Especificaciones adicionales</p>
                 <ul className="list-disc pl-4 mt-2 space-y-1">
                    {bullets.slice(4, 7).map((b: string, j: number) => (
                        <li key={j} className="text-sm text-on-surface-variant leading-relaxed">{cleanText(b)}</li>
                    ))}
                 </ul>
              </div>
            )}
          </div>
        </>
      )}

    </div>
  )
}
