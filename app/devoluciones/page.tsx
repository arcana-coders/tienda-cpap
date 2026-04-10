import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Devoluciones — Capalsa Store',
  description: 'Política de devoluciones y garantías de Capalsa Store.',
}

export default function DevolucionesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">Devoluciones y garantías</h1>
      <p className="text-[#6B6B6B] mb-10">Tu satisfacción es nuestra prioridad. Lee nuestra política antes de solicitar una devolución.</p>

      <div className="space-y-6">
        <section className="border border-[#E0E0E0] rounded-xl overflow-hidden">
          <div className="bg-[#1A1A1A] px-5 py-3">
            <h2 className="text-white font-semibold text-sm">✅ ¿Cuándo aplica una devolución?</h2>
          </div>
          <div className="p-5 text-sm text-[#1A1A1A] space-y-3">
            <p>Aceptamos devoluciones en los siguientes casos:</p>
            <ul className="space-y-2 text-[#6B6B6B]">
              <li className="flex gap-2"><span className="text-[#C4813A]">•</span> El producto llegó dañado o defectuoso.</li>
              <li className="flex gap-2"><span className="text-[#C4813A]">•</span> El producto recibido no coincide con la descripción del pedido.</li>
              <li className="flex gap-2"><span className="text-[#C4813A]">•</span> El producto no llegó en el tiempo estimado (más de 25 días hábiles).</li>
            </ul>
          </div>
        </section>

        <section className="border border-[#E0E0E0] rounded-xl overflow-hidden">
          <div className="bg-[#1A1A1A] px-5 py-3">
            <h2 className="text-white font-semibold text-sm">⏳ Plazo para reportar</h2>
          </div>
          <div className="p-5 text-sm text-[#6B6B6B] space-y-2">
            <p>Tienes <strong className="text-[#1A1A1A]">7 días naturales</strong> después de recibir tu pedido para reportar cualquier problema.</p>
            <p>Pasado ese plazo, no podemos garantizar una solución, aunque evaluamos cada caso individualmente.</p>
          </div>
        </section>

        <section className="border border-[#E0E0E0] rounded-xl overflow-hidden">
          <div className="bg-[#1A1A1A] px-5 py-3">
            <h2 className="text-white font-semibold text-sm">📋 ¿Cómo iniciar una devolución?</h2>
          </div>
          <div className="p-5 space-y-4 text-sm text-[#1A1A1A]">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C4813A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              <div>Escríbenos a <a href="mailto:ventas@capalsa.com" className="text-[#C4813A] hover:underline">ventas@capalsa.com</a> con tu número de orden y una foto del problema.</div>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C4813A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              <div>Nuestro equipo revisará tu caso en un plazo de <strong>1–2 días hábiles</strong>.</div>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C4813A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
              <div>Si procede, coordinamos el reembolso o reposición del producto.</div>
            </div>
          </div>
        </section>

        <section className="border border-[#E0E0E0] rounded-xl overflow-hidden">
          <div className="bg-[#1A1A1A] px-5 py-3">
            <h2 className="text-white font-semibold text-sm">❌ ¿Qué no aplica para devolución?</h2>
          </div>
          <div className="p-5 text-sm text-[#6B6B6B] space-y-2">
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-red-400">•</span> Productos usados o con daños causados por el cliente.</li>
              <li className="flex gap-2"><span className="text-red-400">•</span> Arrepentimiento de compra (el producto es el correcto y llegó bien).</li>
              <li className="flex gap-2"><span className="text-red-400">•</span> Productos con empaques abiertos sin defecto reportado.</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-8 text-sm text-[#6B6B6B]">
        ¿Necesitas ayuda con tu pedido?{' '}
        <Link href="/contacto" className="text-[#C4813A] hover:underline">Contáctanos directamente</Link>.
      </div>
    </main>
  )
}
