'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const stats = [
  { value: '10+', label: 'Años de experiencia', detail: 'Importando y distribuyendo equipos médicos desde 2015' },
  { value: '3', label: 'Plataformas', detail: 'Presencia activa en eBay, Mercado Libre y Amazon México' },
  { value: '100%', label: 'Importación legal', detail: 'Mercancía documentada con pedimento aduanal completo' },
  { value: 'McAllen TX', label: 'Bodega propia', detail: 'Inspeccionamos cada equipo antes de enviarlo a México' },
]

const ventajas = [
  {
    title: 'Especialistas en terapia respiratoria',
    body: 'Nos especializamos en CPAP, máscaras, filtros y accesorios de terapia respiratoria. No somos una tienda generalista — conocemos los productos que vendemos.',
  },
  {
    title: 'Bodega en McAllen, Texas',
    body: 'Recibimos, revisamos y despachamos desde nuestra bodega en McAllen. Eso nos permite garantizar que cada equipo llega en perfectas condiciones.',
  },
  {
    title: 'Importación 100% legal',
    body: 'Toda la mercancía cruza la frontera con documentación completa y pedimento aduanal. Equipos originales, sin riesgo de retención en aduana.',
  },
  {
    title: 'Empresa mexicana con respaldo local',
    body: 'Somos empresa mexicana. Te atendemos en español, emitimos factura CFDI y resolvemos cualquier problema con el respaldo de un negocio establecido.',
  },
]

export default function NosotrosPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(
          statsRef.current ? Array.from(statsRef.current.children) : [],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)' },
          '-=0.2'
        )
        .fromTo(bodyRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.1')
    })
  }, [])

  return (
    <main className="min-h-screen bg-surface font-body">

      {/* Hero */}
      <section className="bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 60%)' }} />
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
          <span className="text-[10px] font-headline font-bold uppercase tracking-[0.4em] text-white/60 mb-6">
            Quiénes somos
          </span>
          <h1
            ref={headingRef}
            className="text-5xl md:text-6xl font-headline font-extrabold leading-tight tracking-tight mb-6"
            style={{ opacity: 0 }}
          >
            10 años llevando terapia respiratoria de calidad a México
          </h1>
          <p
            ref={subtitleRef}
            className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ opacity: 0 }}
          >
            Somos una empresa mexicana con bodega en McAllen, Texas. Importamos equipos CPAP originales, los inspeccionamos y los enviamos directamente a ti.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 pb-16 relative z-20">
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest rounded-3xl p-7 shadow-sm border border-outline-variant/20 flex flex-col gap-2"
              style={{ opacity: 0 }}
            >
              <span className="text-4xl font-headline font-extrabold text-primary">{s.value}</span>
              <span className="text-sm font-headline font-semibold text-on-surface uppercase tracking-wide">{s.label}</span>
              <span className="text-xs text-on-surface-variant leading-relaxed">{s.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Historia + Ventajas */}
      <section
        ref={bodyRef}
        className="max-w-6xl mx-auto px-6 pb-24"
        style={{ opacity: 0 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Historia */}
          <div className="bg-surface-container rounded-3xl p-10 md:p-12 border border-outline-variant/20 flex flex-col gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">Nuestra historia</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Empezamos hace más de 10 años vendiendo en eBay y Mercado Libre, cuando el comercio electrónico en México todavía era territorio nuevo. Con el tiempo nos consolidamos en Amazon México y abrimos bodega propia en McAllen, Texas.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Hoy operamos cpap-mexico.com como canal directo especializado en terapia respiratoria — sin comisiones de marketplace, con atención personalizada y entrega garantizada a todo México.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Toda la mercancía cruza la frontera de forma legal, con pedimento aduanal completo. Vendemos solo equipos originales.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-headline font-bold uppercase tracking-widest pt-2">
              <Link href="/contacto" className="text-primary hover:underline underline-offset-4">Contáctanos</Link>
              <span className="text-outline-variant">•</span>
              <Link href="/guia-apnea-sueno" className="text-primary hover:underline underline-offset-4">Guía de apnea del sueño</Link>
            </div>
          </div>

          {/* Ventajas */}
          <div className="flex flex-col gap-5">
            {ventajas.map((v, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest rounded-2xl p-7 border border-outline-variant/20 flex gap-5 items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface mb-1">{v.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}
