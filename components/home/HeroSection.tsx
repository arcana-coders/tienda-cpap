import Link from 'next/link'

const WA_NUMBER = '527774087291'
const WA_MESSAGE = encodeURIComponent('Hola, necesito ayuda para elegir un CPAP')
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export default function HeroSection() {
  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-surface-container-low/50 hidden lg:block rounded-bl-[100px]" aria-hidden />
      {/* Soft gradient top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[520px]">
        {/* Left: Copy */}
        <div className="z-10 flex flex-col space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full w-fit">
            <span className="material-symbols-outlined text-primary text-[18px]">bedtime</span>
            <span className="font-label text-xs sm:text-sm text-on-surface-variant font-medium tracking-wide uppercase">
              Apnea del sueño · Soluciones reales
            </span>
          </div>

          {/* Headline principal */}
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.08]">
            ¿Cansado de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#1976d2]">
              dormir mal?
            </span>
            <br className="hidden sm:block" />
            <span className="text-on-surface"> Soluciones reales</span>
            <br className="hidden sm:block" />
            <span className="text-on-surface"> para apnea del sueño</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-base lg:text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Te ayudamos a elegir y usar tu CPAP correctamente, sin complicaciones.
            Asesoría personalizada, equipos originales, enviados a todo México.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {/* CTA principal — WhatsApp */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20c05c] text-white px-8 py-3.5 rounded-xl font-body font-bold hover:shadow-[0_4px_18px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all w-full sm:w-auto text-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Hablar por WhatsApp
            </a>
            {/* CTA secundario */}
            <Link
              href="/categorias"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3.5 rounded-xl font-body font-semibold border border-outline-variant/30 hover:bg-surface-container-low hover:border-primary/30 transition-all w-full sm:w-auto text-sm"
            >
              Ver soluciones
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          {/* Mini trust — debajo de los CTAs */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-on-surface-variant pt-2">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
              Equipos 100% originales
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
              Factura CFDI
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
              Envío a todo México
            </span>
          </div>
        </div>

        {/* Right: Image & Floating Card */}
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
          <img
            alt="Persona descansando bien gracias al CPAP"
            className="w-full h-full object-cover"
            src="/images/hero-family.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Floating Glass Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/75 backdrop-blur-xl rounded-xl p-5 border border-white/40 shadow-xl flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-label text-[11px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">
                Pacientes atendidos
              </p>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <p className="font-headline font-semibold text-on-surface text-sm sm:text-base">
                  +500 personas durmiendo mejor
                </p>
              </div>
            </div>
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-primary-container items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-primary-container text-[24px]">favorite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
