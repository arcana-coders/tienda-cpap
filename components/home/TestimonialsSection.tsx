const TESTIMONIOS = [
  {
    nombre: 'Roberto M.',
    ciudad: 'Guadalajara, Jalisco',
    estrellas: 5,
    texto:
      'Llevaba años sin dormir bien, mi esposa no aguantaba los ronquidos. Llegué aquí sin saber nada de CPAP y me explicaron todo con paciencia. El equipo llegó en 3 días, primera noche que lo usé dormí de corrido. Increíble.',
    avatar: 'R',
    producto: 'ResMed AirSense 10',
  },
  {
    nombre: 'Claudia V.',
    ciudad: 'Ciudad de México',
    estrellas: 5,
    texto:
      'Tenía miedo de que la máscara fuera incómoda o ruidosa. Me ayudaron a elegir la mascarilla correcta para mi tipo de cara. Ya llevo 4 meses usándola y no puedo dormir sin ella — en el buen sentido.',
    avatar: 'C',
    producto: 'Máscara ResMed AirFit F20',
  },
  {
    nombre: 'Ernesto L.',
    ciudad: 'Monterrey, Nuevo León',
    estrellas: 5,
    texto:
      'Mi médico me recetó CPAP pero no me explicó bien qué comprar. En CPAP-México me orientaron por WhatsApp, compararon modelos según mi diagnóstico y el precio fue mucho mejor que en la farmacia.',
    avatar: 'E',
    producto: 'Philips DreamStation',
  },
  {
    nombre: 'Margarita S.',
    ciudad: 'Querétaro',
    estrellas: 5,
    texto:
      'Compré los filtros de repuesto y llegaron rapidísimo. Además pregunté cómo lavarlos correctamente y me explicaron paso a paso. Atención de primera, como si conocieran el tema de verdad.',
    avatar: 'M',
    producto: 'Filtros ResMed AirSense',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            <span className="material-symbols-outlined text-[14px]">star</span>
            Personas como tú
          </span>
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface leading-tight mb-3">
            Ya están durmiendo mejor
          </h2>
          <p className="text-on-surface-variant text-base">
            Cada uno llegó con dudas. Todos se fueron con soluciones.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIOS.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-outline-variant/15 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Estrellas */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.estrellas }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p className="text-on-surface text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.texto}&rdquo;
              </p>

              {/* Producto */}
              <span className="text-xs text-primary font-semibold bg-primary/8 px-2 py-1 rounded-full w-fit">
                {t.producto}
              </span>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-1 border-t border-outline-variant/10 mt-1">
                <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center font-headline font-bold text-on-primary-container text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-on-surface">{t.nombre}</span>
                  <span className="text-xs text-on-surface-variant">{t.ciudad}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
