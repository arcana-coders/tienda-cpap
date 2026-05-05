'use client'

import Link from 'next/link'
import Image from 'next/image'

const WA_NUMBER = '527774087291'
const WA_MESSAGE = encodeURIComponent('Hola, me interesa un equipo de Cpap-Mexico.')

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-surface-container-lowest font-body text-sm py-12 md:py-16 px-4 md:px-8 border-t border-outline-variant/10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-start">
          <span className="text-xl font-headline font-bold text-primary mb-4">
            Cpap-Mexico
          </span>
          <p className="text-on-surface-variant mb-6 max-w-sm leading-relaxed">
            Te ayudamos a elegir y usar tu CPAP correctamente. Equipos originales, asesoría personalizada y envíos a todo México.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-on-surface hover:text-[#25D366] font-medium transition-colors mb-4"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Contáctenos vía WhatsApp
          </a>
          <a
            href="mailto:contacto@cpap-mexico.com"
            className="flex items-center gap-2 text-on-surface hover:text-primary font-medium transition-colors mb-4"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            contacto@cpap-mexico.com
          </a>
          <a
            href="https://www.facebook.com/cpapmex"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-on-surface hover:text-[#1877F2] font-medium transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Síguenos en Facebook
          </a>
          <a
            href="https://www.instagram.com/cpap.mexico/"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-on-surface hover:text-[#E4405F] font-medium transition-colors mt-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Síguenos en Instagram
          </a>
        </div>

        {/* Catalog Links */}
        <div className="col-span-1">
          <h4 className="font-headline font-semibold text-on-surface mb-4">Equipos y Cuidados</h4>
          <ul className="space-y-3">
            <li><Link href="/categorias" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Todos los Equipos</Link></li>
            <li><Link href="/categoria/mascaras" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Mascarillas</Link></li>
            <li><Link href="/categoria/filtros" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Filtros Clínicos</Link></li>
            <li><Link href="/categoria/limpieza" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Limpieza e Higiene</Link></li>
          </ul>
        </div>

        {/* Support & Legal */}
        <div className="col-span-1">
          <h4 className="font-headline font-semibold text-on-surface mb-4">Soporte</h4>
          <ul className="space-y-3">
            <li><Link href="/nosotros" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Quiénes somos</Link></li>
            <li><Link href="/guia-apnea-sueno" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Guía: Apnea del Sueño</Link></li>
            <li><Link href="/blog" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Blog educativo</Link></li>
            <li><Link href="/envios" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Envíos y Logística</Link></li>
            <li><Link href="/devoluciones" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Política de Devoluciones</Link></li>
            <li><Link href="/facturacion-cfdi" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Facturación CFDI</Link></li>
            <li><Link href="/aviso-de-privacidad" className="text-on-surface-variant hover:text-primary transition-all opacity-90 hover:opacity-100">Aviso de Privacidad</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-1">
          <h4 className="font-headline font-semibold text-on-surface mb-4">Suscríbete</h4>
          <p className="text-on-surface-variant mb-4 leading-relaxed">Recibe actualizaciones de nuevos equipos medicos y cupones exclusivos.</p>
          <form 
            onSubmit={async (e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const input = form.querySelector('input') as HTMLInputElement
              const email = input.value
              
              const btn = form.querySelector('button') as HTMLButtonElement
              const originalText = btn.innerText
              btn.disabled = true
              btn.innerText = '...'
              
              try {
                const res = await fetch('/api/newsletter', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email })
                })
                const result = await res.json()
                if (result.success) {
                  btn.innerText = 'SUSCRITO'
                  btn.style.backgroundColor = '#005dac'
                  input.value = ''
                  setTimeout(() => {
                    btn.disabled = false
                    btn.innerText = originalText
                    btn.style.backgroundColor = ''
                  }, 5000)
                } else {
                  btn.innerText = 'ERROR'
                  setTimeout(() => {
                    btn.disabled = false
                    btn.innerText = originalText
                  }, 3000)
                }
              } catch (err) {
                btn.innerText = 'ERROR'
                setTimeout(() => {
                  btn.disabled = false
                  btn.innerText = originalText
                }, 3000)
              }
            }} 
            className="flex flex-col gap-2"
          >
            <input
              type="email"
              required
              placeholder="Tu correo electrónico"
              className="w-full bg-white border border-outline-variant/30 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-container disabled:opacity-50 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
        <p>© {year} Cpap-Mexico. Cuidado respiratorio. CFDI disponible.</p>
        <p>Generado con ❤️ por <a href="https://tecnomata.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">Tecnómata</a></p>
      </div>
    </footer>
  )
}
