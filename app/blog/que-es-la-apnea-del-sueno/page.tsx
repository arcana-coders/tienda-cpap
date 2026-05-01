import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Qué es la apnea del sueño? Guía completa | Cpap-México',
  description: 'Aprende qué es la apnea del sueño, sus síntomas, tipos y por qué es importante tratarla. Guía clara para pacientes y familias.',
}

const WA_URL = 'https://wa.me/527774087291?text=Hola%2C%20necesito%20ayuda%20para%20elegir%20un%20CPAP'

export default function ArticuloApneaPage() {
  return (
    <main className="min-h-screen bg-surface font-body">
      <div className="max-w-3xl mx-auto px-4 md:px-8 pt-8">
        <nav className="flex items-center gap-2 text-xs text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span>Apnea del sueño</span>
        </nav>
      </div>

      <article className="max-w-3xl mx-auto px-4 md:px-8 py-10 pb-20">
        <div className="flex items-center gap-3 flex-wrap mb-6">
          <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Fundamentos</span>
          <span className="text-xs text-on-surface-variant">Mayo 2026 · 5 min de lectura</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface leading-tight mb-6">
          ¿Qué es la apnea del sueño?{' '}
          <span className="text-primary">Guía completa para entenderla</span>
        </h1>

        <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-lg border border-outline-variant/10">
          <img 
            src="/images/blog-apnea.png" 
            alt="Persona durmiendo plácidamente" 
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed mb-10 border-l-4 border-primary/30 pl-5 italic text-on-surface-variant">
          Si alguien te ha dicho que roncas muy fuerte, o si te despiertas cansado sin importar cuántas horas dormiste, este artículo es para ti.
        </p>

        <div className="space-y-10 text-on-surface">
          <section>
            <h2 className="text-2xl font-headline font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]">bedtime</span>
              ¿Qué es exactamente la apnea del sueño?
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
              La apnea del sueño es un trastorno en el que tu respiración se interrumpe repetidamente mientras duermes. Estas pausas pueden durar de unos segundos a más de un minuto, ocurriendo cientos de veces por noche.
            </p>
            <p className="text-base leading-relaxed text-on-surface-variant mt-4">
              Tu cuerpo detecta la falta de oxígeno y te despierta brevemente — aunque casi nunca lo recuerdes. Por eso muchas personas sienten que durmieron 8 horas pero amanecen agotadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]">warning</span>
              Síntomas que debes reconocer
            </h2>
            <ul className="space-y-3">
              {[
                'Ronquidos fuertes que despiertan a tu pareja',
                'Cansancio extremo durante el día aunque hayas dormido muchas horas',
                'Dolores de cabeza al despertar',
                'Dificultad para concentrarte o recordar cosas',
                'Irritabilidad sin razón aparente',
                'Despertar con sensación de ahogo o falta de aire',
              ].map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 flex-shrink-0">check_circle</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]">favorite</span>
              ¿Por qué es importante tratarla?
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant mb-4">
              La apnea no tratada aumenta el riesgo de hipertensión, enfermedades cardíacas, diabetes tipo 2, ACV y accidentes de tráfico por somnolencia. El tratamiento cambia vidas — y lo hemos visto en cientos de pacientes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]">air</span>
              El tratamiento: aquí entra el CPAP
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
              El tratamiento más efectivo para la apnea obstructiva es el CPAP — una máquina que genera un flujo de aire suave que mantiene tus vías respiratorias abiertas mientras duermes. Muchos pacientes notan la diferencia desde la primera noche.
            </p>
            <Link
              href="/blog/como-funciona-un-cpap"
              className="inline-flex items-center gap-2 mt-5 text-primary font-semibold text-sm border border-primary/30 px-5 py-2.5 rounded-xl hover:bg-primary/5 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">article</span>
              Leer: Cómo funciona un CPAP
            </Link>
          </section>
        </div>

        <div className="mt-14 p-8 bg-primary rounded-2xl text-white text-center">
          <h3 className="font-headline font-bold text-xl mb-2">¿Crees que podrías tener apnea?</h3>
          <p className="text-white/80 text-sm mb-5">Cuéntanos tu caso. Nuestros especialistas te orientan sin compromiso de compra.</p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary-container transition-colors text-sm"
          >
            Hablar con un especialista
          </a>
        </div>
      </article>
    </main>
  )
}
