import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guía completa: Apnea del sueño y tratamiento CPAP | Cpap-México',
  description:
    'Todo lo que necesitas saber sobre la apnea del sueño: qué es, síntomas, consecuencias y cómo funciona el CPAP. Explicado de forma clara para pacientes.',
}

const WA_URL = 'https://wa.me/527774087291?text=Hola%2C%20necesito%20ayuda%20para%20elegir%20un%20CPAP'

const SECCIONES = [
  {
    id: 'que-es',
    icono: 'bedtime',
    titulo: '¿Qué es la apnea del sueño?',
    color: 'bg-blue-50 text-blue-600',
    contenido: [
      'Es cuando tu respiración se detiene repetidamente mientras duermes — a veces cientos de veces por noche. Tu cuerpo detecta la falta de oxígeno y te "despierta" brevemente para que vuelvas a respirar, aunque casi nunca lo recuerdes.',
      'El resultado: duermes ocho horas y amaneces como si no hubieras dormido nada. No es flojera ni estrés — es tu cuerpo luchando toda la noche.',
    ],
  },
  {
    id: 'sintomas',
    icono: 'warning',
    titulo: 'Síntomas comunes',
    color: 'bg-amber-50 text-amber-600',
    lista: [
      'Ronquidos fuertes que despiertan a quienes duermen contigo',
      'Cansancio extremo durante el día aunque hayas dormido muchas horas',
      'Dolores de cabeza al despertar',
      'Dificultad para concentrarte o recordar cosas',
      'Irritabilidad sin razón aparente',
      'Despertar con sensación de ahogo o falta de aire',
      'Necesidad frecuente de levantarte al baño por la noche',
    ],
  },
  {
    id: 'consecuencias',
    icono: 'favorite',
    titulo: 'Consecuencias si no se trata',
    color: 'bg-red-50 text-red-600',
    contenido: [
      'La apnea no es solo un problema de sueño — es un factor de riesgo cardiovascular real. Cada pausa respiratoria baja tus niveles de oxígeno y estresa tu corazón.',
      'Con el tiempo puede derivar en hipertensión, problemas cardíacos, diabetes tipo 2, ACV y mayor riesgo de accidentes de tráfico por somnolencia.',
    ],
  },
  {
    id: 'cpap',
    icono: 'air',
    titulo: 'Cómo funciona el CPAP',
    color: 'bg-green-50 text-green-600',
    contenido: [
      'El CPAP (Presión Positiva Continua) es una máquina pequeña y silenciosa que genera un flujo de aire suave para mantener tus vías respiratorias abiertas mientras duermes. Sin cirugías, sin medicamentos.',
      'Te pones una mascarilla al dormir, conectada por una manguera a la máquina. La presión se ajusta según tu diagnóstico. Muchos pacientes notan la diferencia desde la primera noche.',
    ],
  },
]

export default function GuiaApneaPage() {
  return (
    <main className="min-h-screen bg-surface font-body">
      {/* Hero */}
      <section className="bg-surface-container-lowest border-b border-outline-variant/10 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span>Guía Apnea del Sueño</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-5">
            <span className="material-symbols-outlined text-[14px]">menu_book</span>
            Guía educativa
          </span>
          <h1 className="text-4xl sm:text-5xl font-headline font-extrabold text-on-surface leading-tight mb-5">
            Todo lo que necesitas saber sobre{' '}
            <span className="text-primary">la apnea del sueño</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mb-8">
            Sin tecnicismos. Sin términos médicos difíciles. Solo información clara para que entiendas qué te pasa y cómo podemos ayudarte.
          </p>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl border border-outline-variant/10 max-w-3xl">
            <img 
              src="/images/guia-apnea.png" 
              alt="Ilustración educativa de apnea del sueño" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Índice rápido */}
          <div className="flex flex-wrap gap-3">
            {SECCIONES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm font-medium text-primary border border-primary/25 px-4 py-2 rounded-full hover:bg-primary/5 transition-colors"
              >
                {s.titulo}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Secciones educativas */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="space-y-12">
          {SECCIONES.map((sec, i) => (
            <div key={sec.id} id={sec.id} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${sec.color.split(' ')[0]} flex items-center justify-center flex-shrink-0`}>
                  <span className={`material-symbols-outlined text-[30px] ${sec.color.split(' ')[1]}`}>{sec.icono}</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Sección {i + 1}</span>
                  <h2 className="text-2xl font-headline font-bold text-on-surface">{sec.titulo}</h2>
                </div>
              </div>
              <div className="pl-0 sm:pl-[4.5rem] space-y-4">
                {sec.contenido?.map((p, j) => (
                  <p key={j} className="text-base text-on-surface-variant leading-relaxed">{p}</p>
                ))}
                {sec.lista && (
                  <ul className="space-y-3 mt-2">
                    {sec.lista.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 flex-shrink-0">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {i < SECCIONES.length - 1 && (
                <hr className="mt-12 border-outline-variant/15" />
              )}
            </div>
          ))}
        </div>

        {/* CTA final doble */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-7 bg-primary rounded-2xl text-white flex flex-col gap-4">
            <span className="material-symbols-outlined text-[32px] text-white/80">support_agent</span>
            <h3 className="font-headline font-bold text-lg">Habla con un especialista</h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Cuéntanos tu caso y te ayudamos a elegir el equipo correcto para ti, sin tecnicismos.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 bg-white text-primary font-bold px-5 py-2.5 rounded-xl hover:bg-primary-container transition-colors text-sm w-fit"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <div className="p-7 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl flex flex-col gap-4">
            <span className="material-symbols-outlined text-[32px] text-primary/70">shopping_bag</span>
            <h3 className="font-headline font-bold text-lg text-on-surface">Ver equipos disponibles</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Equipos CPAP 100% originales, con garantía del fabricante y factura CFDI.
            </p>
            <Link
              href="/categorias"
              className="mt-auto inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-2.5 rounded-xl hover:bg-primary-container transition-colors text-sm w-fit"
            >
              Ver soluciones
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Link al blog */}
        <div className="mt-10 text-center">
          <Link href="/blog" className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">article</span>
            Ver más artículos en el blog
          </Link>
        </div>
      </section>
    </main>
  )
}
