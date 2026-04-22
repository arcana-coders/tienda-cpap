import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-surface-container-low/50 hidden lg:block rounded-bl-[100px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px]">
        {/* Left: Copy */}
        <div className="z-10 flex flex-col space-y-8">
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full w-fit">
            <span className="material-symbols-outlined text-primary text-[18px]">flight_takeoff</span>
            <span className="font-label text-xs sm:text-sm text-on-surface-variant font-medium tracking-wide uppercase">Importaciones Directas de EE. UU. a México</span>
          </div>
          
          <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.05]">
            Respiración <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#1976d2]">
              Precisa.
            </span>
          </h1>
          
          <p className="font-body text-base lg:text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Cuidado respiratorio premium, entregado sin problemas. Experimenta la excelencia clínica con dispositivos CPAP de primer nivel, importados directamente con total transparencia logística.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/categorias"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-[#1976d2] text-white px-8 py-3.5 rounded-xl font-body font-semibold hover:shadow-[0_4px_14px_rgba(0,93,172,0.3)] hover:-translate-y-0.5 transition-all w-full sm:w-auto text-sm"
            >
              Explorar Equipos
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3.5 rounded-xl font-body font-semibold border border-outline-variant/30 hover:bg-surface-container-low hover:border-outline-variant/60 transition-all w-full sm:w-auto text-sm"
            >
              Consultar a un Experto
            </Link>
          </div>
        </div>

        {/* Right: Image & Floating Card */}
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
          <img 
            alt="Familia sana y feliz" 
            className="w-full h-full object-cover" 
            src="/images/hero-family.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Floating Glass Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/70 backdrop-blur-xl rounded-xl p-5 border border-white/40 shadow-xl flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-label text-[11px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">Estado Logístico</p>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                </span>
                <p className="font-headline font-semibold text-on-surface text-sm sm:text-base">En Tránsito Aduanal - CDMX</p>
              </div>
            </div>
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-primary-container items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-primary-container text-[24px]">local_shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
