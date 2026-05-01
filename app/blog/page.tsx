import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog sobre Apnea del Sueño y CPAP | Cpap-México',
  description:
    'Artículos claros y sin tecnicismos sobre apnea del sueño, terapia CPAP, consejos de uso y cómo dormir mejor. Escrito para pacientes y familias.',
}

const ARTICULOS = [
  {
    slug: 'que-es-la-apnea-del-sueno',
    titulo: '¿Qué es la apnea del sueño? Guía completa para entenderla',
    resumen:
      'La apnea del sueño es más común de lo que crees — y más peligrosa. Aquí te explicamos qué pasa en tu cuerpo mientras duermes, cuáles son los síntomas y por qué vale la pena tratarla.',
    tiempo: '5 min de lectura',
    fecha: 'Mayo 2026',
    icon: 'bedtime',
    color: 'bg-blue-50 text-blue-600',
    badge: 'Fundamentos',
  },
  {
    slug: 'como-funciona-un-cpap',
    titulo: 'Cómo funciona un CPAP: lo que nadie te explica claramente',
    resumen:
      'CPAP, APAP, BiPAP — los nombres son confusos. Te explicamos en palabras simples cómo funciona cada equipo, qué partes tiene y qué esperar las primeras noches de uso.',
    tiempo: '6 min de lectura',
    fecha: 'Mayo 2026',
    icon: 'air',
    color: 'bg-green-50 text-green-600',
    badge: 'Cómo funciona',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-surface font-body">
      {/* Header */}
      <section className="bg-surface-container-lowest border-b border-outline-variant/10 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-5">
            <span className="material-symbols-outlined text-[14px]">article</span>
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-headline font-extrabold text-on-surface leading-tight mb-5">
            Aprende sobre apnea del sueño
            <br className="hidden sm:block" />
            <span className="text-primary"> sin complicaciones</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
            Artículos escritos en lenguaje claro para que entiendas tu condición, conozcas tus opciones y puedas tomar decisiones con confianza.
          </p>
        </div>
      </section>

      {/* Artículos */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col gap-8">
          {ARTICULOS.map((art) => (
            <Link
              key={art.slug}
              href={`/blog/${art.slug}`}
              className="group flex flex-col sm:flex-row gap-6 p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/15 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Ícono */}
              <div className={`w-16 h-16 rounded-2xl ${art.color.split(' ')[0]} flex items-center justify-center flex-shrink-0`}>
                <span className={`material-symbols-outlined text-[36px] ${art.color.split(' ')[1]}`}>
                  {art.icon}
                </span>
              </div>

              {/* Contenido */}
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {art.badge}
                  </span>
                  <span className="text-xs text-on-surface-variant">{art.fecha}</span>
                  <span className="text-xs text-on-surface-variant">· {art.tiempo}</span>
                </div>
                <h2 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                  {art.titulo}
                </h2>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {art.resumen}
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mt-1">
                  Leer artículo
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA footer */}
        <div className="mt-12 text-center p-8 bg-primary/5 rounded-2xl border border-primary/15">
          <p className="text-on-surface font-semibold mb-2">¿Tienes una pregunta específica?</p>
          <p className="text-on-surface-variant text-sm mb-5">
            No esperes el próximo artículo. Escríbenos y te respondemos hoy.
          </p>
          <a
            href="https://wa.me/527774087291?text=Hola%2C%20necesito%20ayuda%20para%20elegir%20un%20CPAP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#20c05c] transition-colors text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Preguntar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
