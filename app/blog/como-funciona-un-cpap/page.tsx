import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cómo funciona un CPAP: guía clara y sin tecnicismos | Cpap-México',
  description: 'Te explicamos qué es un CPAP, cómo funciona, qué partes tiene y qué esperar las primeras noches de uso. Guía para pacientes nuevos.',
}

const WA_URL = 'https://wa.me/527774087291?text=Hola%2C%20necesito%20ayuda%20para%20elegir%20un%20CPAP'

const PARTES = [
  { nombre: 'La máquina', desc: 'Genera una corriente de aire a presión constante. Es pequeña, silenciosa y cabe en un buró.', icon: 'device_hub' },
  { nombre: 'La manguera', desc: 'Conecta la máquina con la mascarilla. Viene en versión calefactada para evitar condensación.', icon: 'air' },
  { nombre: 'La mascarilla', desc: 'Va sobre tu nariz, boca o ambas. Hay varios estilos — elegir la correcta es clave para la comodidad.', icon: 'face' },
  { nombre: 'El humidificador', desc: 'Opcional pero muy recomendable. Añade humedad al aire para evitar resequedad nasal.', icon: 'water_drop' },
]

export default function ArticuloCpapPage() {
  return (
    <main className="min-h-screen bg-surface font-body">
      <div className="max-w-3xl mx-auto px-4 md:px-8 pt-8">
        <nav className="flex items-center gap-2 text-xs text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span>Cómo funciona un CPAP</span>
        </nav>
      </div>

      <article className="max-w-3xl mx-auto px-4 md:px-8 py-10 pb-20">
        <div className="flex items-center gap-3 flex-wrap mb-6">
          <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">Cómo funciona</span>
          <span className="text-xs text-on-surface-variant">Mayo 2026 · 6 min de lectura</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface leading-tight mb-6">
          Cómo funciona un CPAP:{' '}
          <span className="text-primary">lo que nadie te explica claramente</span>
        </h1>

        <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-lg border border-outline-variant/10">
          <img 
            src="/images/blog-cpap.png" 
            alt="Equipo CPAP en un buró" 
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed mb-10 border-l-4 border-primary/30 pl-5 italic text-on-surface-variant">
          Tu médico te recetó un CPAP y saliste del consultorio con más dudas que respuestas. Normal. Aquí te lo explicamos desde cero.
        </p>

        <div className="space-y-10 text-on-surface">

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]">help</span>
              ¿Qué es un CPAP?
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
              CPAP son las siglas de <strong>Continuous Positive Airway Pressure</strong> — Presión Positiva Continua en las Vías Respiratorias. En palabras simples: es una máquina que sopla aire suave y constante para que tus vías respiratorias no se cierren mientras duermes.
            </p>
            <p className="text-base leading-relaxed text-on-surface-variant mt-4">
              Piénsalo como una almohada de aire que mantiene tu garganta abierta toda la noche. Sin cirugías, sin medicamentos, sin efectos secundarios graves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-5 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]">extension</span>
              Las partes del equipo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PARTES.map((p) => (
                <div key={p.nombre} className="flex gap-4 p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant/15">
                  <div className="w-11 h-11 rounded-xl bg-primary-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-on-primary-container text-[22px]">{p.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface text-sm mb-1">{p.nombre}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]">compare_arrows</span>
              CPAP vs APAP vs BiPAP
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant mb-4">
              Tu médico pudo haberte recetado uno de estos tres. La diferencia está en cómo manejan la presión:
            </p>
            <div className="space-y-3">
              {[
                { tipo: 'CPAP', desc: 'Presión fija. La misma toda la noche. El más común y accesible.', recomendado: true },
                { tipo: 'APAP (AutoCPAP)', desc: 'Se ajusta automáticamente según lo que detecta tu respiración. Mayor comodidad.', recomendado: false },
                { tipo: 'BiPAP', desc: 'Dos niveles de presión: uno para inhalar, otro para exhalar. Para casos más complejos.', recomendado: false },
              ].map((t) => (
                <div key={t.tipo} className={`flex items-start gap-4 p-4 rounded-xl border ${t.recomendado ? 'bg-primary/5 border-primary/20' : 'bg-surface-container-lowest border-outline-variant/15'}`}>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5 ${t.recomendado ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant'}`}>
                    {t.tipo}
                  </span>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]">nights_stay</span>
              Las primeras noches: qué esperar
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant mb-4">
              Es normal que las primeras noches se sientan raras. Usar algo en la cara mientras duermes es nuevo para tu cuerpo. Algunos consejos:
            </p>
            <ul className="space-y-3">
              {[
                'Ponte la mascarilla 20 minutos antes de dormir para acostumbrarte',
                'Ajusta los tirantes — no deben apretar, solo sellar suavemente',
                'Si sientes el aire como viento fuerte, usa el modo rampa (arranca suave)',
                'La mayoría de personas se adaptan completamente en 1 a 2 semanas',
                'Si la incomodidad persiste, es señal de que la mascarilla no es la correcta — escríbenos',
              ].map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 flex-shrink-0">tips_and_updates</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-14 p-8 bg-primary rounded-2xl text-white text-center">
          <h3 className="font-headline font-bold text-xl mb-2">¿No sabes cuál equipo es el correcto para ti?</h3>
          <p className="text-white/80 text-sm mb-5">Cuéntanos tu diagnóstico y te recomendamos el equipo ideal para tu caso y presupuesto.</p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary-container transition-colors text-sm"
          >
            Pedir asesoría gratuita
          </a>
        </div>
      </article>
    </main>
  )
}
