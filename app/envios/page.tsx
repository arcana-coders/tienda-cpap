import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Envíos y entregas — Capalsa Store',
  description: 'Información sobre tiempos de entrega, cobertura y costos de envío a todo México.',
}

export default function EnviosPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">Envíos y entregas</h1>
      <p className="text-[#6B6B6B] mb-10">Todo lo que necesitas saber antes de hacer tu pedido.</p>

      <div className="space-y-6">
        <section className="border border-[#E0E0E0] rounded-xl overflow-hidden">
          <div className="bg-[#1A1A1A] px-5 py-3">
            <h2 className="text-white font-semibold text-sm">🚚 Envío gratis a todo México</h2>
          </div>
          <div className="p-5 space-y-3 text-sm text-[#1A1A1A]">
            <p>Todos nuestros productos incluyen <strong>envío sin costo</strong> a las principales ciudades de México.</p>
            <p className="text-[#6B6B6B]">
              <strong>Zonas extendidas</strong> (municipios rurales, áreas remotas y algunas zonas de difícil acceso) pueden tener costo adicional o tiempo de entrega mayor. Si tienes duda sobre tu zona, escríbenos antes de ordenar.
            </p>
          </div>
        </section>

        <section className="border border-[#E0E0E0] rounded-xl overflow-hidden">
          <div className="bg-[#1A1A1A] px-5 py-3">
            <h2 className="text-white font-semibold text-sm">⏱️ Tiempos de entrega</h2>
          </div>
          <div className="p-5 text-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E0E0E0]">
                  <th className="text-left py-2 font-semibold text-[#1A1A1A]">Zona</th>
                  <th className="text-left py-2 font-semibold text-[#1A1A1A]">Tiempo estimado</th>
                </tr>
              </thead>
              <tbody className="text-[#6B6B6B]">
                <tr className="border-b border-[#F5F5F5]">
                  <td className="py-2">Ciudad de México y área metropolitana</td>
                  <td className="py-2">5–8 días hábiles</td>
                </tr>
                <tr className="border-b border-[#F5F5F5]">
                  <td className="py-2">Monterrey, Guadalajara, principales ciudades</td>
                  <td className="py-2">7–12 días hábiles</td>
                </tr>
                <tr className="border-b border-[#F5F5F5]">
                  <td className="py-2">Resto de la república</td>
                  <td className="py-2">10–15 días hábiles</td>
                </tr>
                <tr>
                  <td className="py-2">Zonas extendidas</td>
                  <td className="py-2">15–20 días hábiles</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-[#6B6B6B] mt-3">Los tiempos inician a partir de la confirmación de pago.</p>
          </div>
        </section>

        <section className="border border-[#E0E0E0] rounded-xl overflow-hidden">
          <div className="bg-[#1A1A1A] px-5 py-3">
            <h2 className="text-white font-semibold text-sm">📦 ¿Cómo funciona el proceso?</h2>
          </div>
          <div className="p-5 space-y-4 text-sm text-[#1A1A1A]">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C4813A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              <div><strong>Realizas tu pedido</strong> — confirmas tu dirección y método de pago.</div>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C4813A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              <div><strong>Procesamos la compra</strong> — adquirimos el producto en Estados Unidos y lo enviamos a nuestra bodega de cruce en McAllen, TX.</div>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C4813A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
              <div><strong>Cruce a México</strong> — el producto cruza la frontera con documentación oficial de importación.</div>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C4813A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
              <div><strong>Entrega en tu domicilio</strong> — te notificamos con guía de rastreo.</div>
            </div>
          </div>
        </section>

        <section className="bg-green-50 border border-green-200 rounded-xl p-5 text-sm text-green-800">
          <strong>¿Múltiples piezas?</strong> Si ordenas más de una pieza del mismo producto, se envían juntas. El costo de envío adicional por pieza extra ya está incluido en el precio que ves en cada producto.
        </section>
      </div>

      <div className="mt-8 text-sm text-[#6B6B6B]">
        ¿Tienes alguna duda?{' '}
        <Link href="/contacto" className="text-[#C4813A] hover:underline">Contáctanos</Link>.
      </div>
    </main>
  )
}
