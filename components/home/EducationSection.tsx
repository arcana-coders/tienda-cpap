import Link from 'next/link'

const BLOQUES = [
  {
    icon: 'bedtime',
    titulo: '¿Qué es la apnea del sueño?',
    descripcion:
      'Es cuando tu respiración se detiene repetidamente mientras duermes — a veces cientos de veces por noche. Tu cuerpo se despierta brevemente cada vez para volver a respirar, aunque tú no lo recuerdes.',
    color: 'bg-blue-50',
    iconColor: 'text-primary',
  },
  {
    icon: 'warning',
    titulo: 'Señales de alerta',
    descripcion:
      'Ronquidos fuertes, cansancio aunque hayas dormido 8 horas, dolores de cabeza al despertar, dificultad para concentrarte, irritabilidad sin razón aparente. ¿Te suena familiar?',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: 'favorite',
    titulo: 'Por qué tratarla importa',
    descripcion:
      'La apnea no tratada aumenta el riesgo de hipertensión, enfermedades cardíacas, diabetes tipo 2 y accidentes de tráfico por somnolencia. El tratamiento cambia vidas — y lo hemos visto.',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: 'air',
    titulo: 'Cómo ayuda el CPAP',
    descripcion:
      'El CPAP envía una corriente suave y constante de aire que mantiene tus vías respiratorias abiertas mientras duermes. Sin cirugías, sin medicamentos. Primera noche con él y muchos pacientes ya notan la diferencia.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
]

const WA_NUMBER = '527774087291'
const WA_MESSAGE = encodeURIComponent('Hola, necesito ayuda para elegir un CPAP')
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export default function EducationSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
          <span className="material-symbols-outlined text-[14px]">school</span>
          Entiende tu condición
        </span>
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface leading-tight mb-4">
          ¿Qué es la apnea del sueño <br className="hidden sm:block" />
          y cómo te ayudamos?
        </h2>
        <p className="text-on-surface-variant text-base leading-relaxed">
          No necesitas ser médico para entender lo que te pasa. Aquí te lo explicamos sin tecnicismos.
        </p>
      </div>

      {/* Grid de bloques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BLOQUES.map((bloque, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-6 rounded-2xl border border-outline-variant/15 bg-surface-container-lowest hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl ${bloque.color} flex items-center justify-center flex-shrink-0`}>
              <span className={`material-symbols-outlined text-[28px] ${bloque.iconColor}`}>
                {bloque.icon}
              </span>
            </div>
            <h3 className="font-headline font-bold text-on-surface text-base leading-snug">
              {bloque.titulo}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
              {bloque.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* CTA inferior */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/guia-apnea-sueno"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm border border-primary/30 px-6 py-3 rounded-xl hover:bg-primary/5 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">menu_book</span>
          Leer la guía completa
        </Link>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#20c05c] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
          Pregunta a un experto
        </a>
      </div>
    </section>
  )
}
