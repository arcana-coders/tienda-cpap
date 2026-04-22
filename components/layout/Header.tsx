'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/store'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import CartDrawer from './CartDrawer'

// Fallback categories for initial load/SSR
const INITIAL_CATEGORIES = [
  { nombre: 'Máscaras CPAP', slug: 'mascaras' },
  { nombre: 'Filtros',       slug: 'filtros' },
  { nombre: 'Tubos',         slug: 'tubos' },
  { nombre: 'Refacciones',   slug: 'refacciones' },
  { nombre: 'Limpieza',      slug: 'limpieza' },
  { nombre: 'Accesorios',    slug: 'accesorios' },
]

/* ── Desktop SearchBar ── */
function DesktopSearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    if (q) router.push(`/buscar?q=${encodeURIComponent(q)}`)
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-1 max-w-sm ml-4 items-center gap-2">
      <div className="relative w-full">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">search</span>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Buscar productos..."
          className="w-full h-10 pl-10 pr-4 text-sm bg-surface text-on-surface border border-outline-variant/30 rounded-full outline-none focus:border-primary focus:bg-white transition-all font-body placeholder:text-outline-variant/70"
        />
      </div>
    </form>
  )
}

/* ── Mobile SearchBar ── */
function MobileSearchBar({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    if (q) { router.push(`/buscar?q=${encodeURIComponent(q)}`); onClose() }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full px-4 py-3 bg-surface border-t border-outline-variant/10">
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Buscar..."
        className="flex-1 h-10 px-4 text-sm bg-white border border-outline-variant/30 rounded-full outline-none focus:border-primary transition-all font-body"
      />
      <button type="submit" className="flex-shrink-0 h-10 w-10 bg-primary hover:bg-primary-container text-on-primary rounded-full flex items-center justify-center transition-colors">
        <span className="material-symbols-outlined text-[20px]">search</span>
      </button>
      <button type="button" onClick={onClose} className="flex-shrink-0 text-on-surface-variant hover:text-on-surface transition-colors">
         <span className="material-symbols-outlined">close</span>
      </button>
    </form>
  )
}

/* ── Main Header ── */
export default function Header({ initialCategories = [] }: { initialCategories?: { nombre: string, slug: string }[] }) {
  const { count, toggleCart } = useCartStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [categorias, setCategorias] = useState(initialCategories.length > 0 ? initialCategories : INITIAL_CATEGORIES)

  useEffect(() => {
    if (initialCategories.length > 0) {
      setCategorias(initialCategories)
    }
  }, [initialCategories])

  useEffect(() => {
    const handle = () => { if (window.innerWidth >= 1024) { setMenuOpen(false); setSearchOpen(false) } }
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <CartDrawer />
      <header className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-md shadow-sm shadow-primary/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden flex-shrink-0 text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => { setMenuOpen(o => !o); setSearchOpen(false) }}
              aria-label="Menú"
            >
               <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
            </button>

            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-on-surface font-headline">
              Cpap-Mexico
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex gap-6 items-center font-headline tracking-tight text-sm">
              <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Inicio</Link>
              <Link href="/categorias" className="text-primary font-semibold border-b-[1.5px] border-primary pb-0.5">Catálogo</Link>
              <Link href="/contacto" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Contacto</Link>
            </nav>
            <DesktopSearchBar />
          </div>

          <div className="flex items-center gap-6">
            <button
              className="lg:hidden flex-shrink-0 text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => { setSearchOpen(o => !o); setMenuOpen(false) }}
              aria-label="Buscar"
            >
               <span className="material-symbols-outlined">search</span>
            </button>

            <button
              onClick={toggleCart}
              className="relative text-on-surface-variant hover:text-primary transition-colors duration-300 scale-95 duration-200 ease-in-out"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>shopping_bag</span>
              {count > 0 && (
                <span className="absolute -top-1 -right-2 bg-error text-on-error text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="lg:hidden">
            <MobileSearchBar onClose={() => setSearchOpen(false)} />
          </div>
        )}

        {/* Categories Bar (Desktop) */}
        <div className="hidden lg:block border-t border-outline-variant/10 bg-surface/50">
          <nav className="max-w-7xl mx-auto px-8 flex items-center gap-6 overflow-x-auto py-2.5">
            {categorias.slice(0, 8).map(cat => (
              <Link
                key={cat.slug}
                href={`/categoria/${cat.slug}`}
                className="text-on-surface-variant hover:text-primary text-xs font-semibold font-body tracking-wide uppercase transition-colors"
              >
                {cat.nombre}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile side menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-[80%] max-w-sm bg-surface flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/10 bg-white">
              <span className="font-headline font-bold text-on-surface text-lg">Menú</span>
              <button onClick={() => setMenuOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto bg-white">
              <div className="px-6 py-4 font-headline text-xs font-bold text-outline uppercase tracking-wider">Categorías</div>
              <Link href="/categorias" onClick={() => setMenuOpen(false)} className="flex items-center px-6 py-3 text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors">
                Todos los Productos
              </Link>
              {categorias.map(cat => (
                <Link key={cat.slug} href={`/categoria/${cat.slug}`} onClick={() => setMenuOpen(false)} className="flex items-center px-6 py-3 text-sm font-body text-on-surface hover:bg-surface-container-low transition-colors">
                  {cat.nombre}
                </Link>
              ))}
            </nav>
            <div className="px-6 py-6 border-t border-outline-variant/10 bg-surface-container-low flex flex-col gap-4 text-sm font-body text-on-surface-variant font-medium">
              <Link href="/contacto" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">support_agent</span> Soporte Técnico</Link>
              <Link href="/envios" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">local_shipping</span> Información de Envío</Link>
              <Link href="/devoluciones" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">assignment_return</span> Devoluciones</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
