import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto — Capalsa Store',
  description: 'Contáctanos para dudas sobre pedidos, productos o envíos. Respondemos en menos de 24 horas.',
}

export default function ContactoPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">Contacto</h1>
      <p className="text-[#6B6B6B] mb-10">¿Tienes alguna pregunta? Escríbenos, respondemos en menos de 24 horas hábiles.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl p-6 space-y-1">
          <div className="text-2xl mb-2">📧</div>
          <h2 className="font-semibold text-[#1A1A1A]">Correo electrónico</h2>
          <p className="text-sm text-[#6B6B6B]">Para pedidos, dudas y facturación</p>
          <a href="mailto:ventas@capalsa.com" className="text-[#C4813A] font-medium text-sm hover:underline">
            ventas@capalsa.com
          </a>
        </div>

        <div className="bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl p-6 space-y-1">
          <div className="text-2xl mb-2">💬</div>
          <h2 className="font-semibold text-[#1A1A1A]">WhatsApp</h2>
          <p className="text-sm text-[#6B6B6B]">Atención rápida de lunes a viernes</p>
          <a
            href="https://wa.me/528180000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C4813A] font-medium text-sm hover:underline"
          >
            Enviar mensaje
          </a>
        </div>

        <div className="bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl p-6 space-y-1">
          <div className="text-2xl mb-2">🕐</div>
          <h2 className="font-semibold text-[#1A1A1A]">Horario de atención</h2>
          <p className="text-sm text-[#6B6B6B]">Lunes a viernes</p>
          <p className="text-sm font-medium text-[#1A1A1A]">9:00 AM – 6:00 PM (Hora Ciudad de México)</p>
        </div>

        <div className="bg-[#F5F5F5] border border-[#E0E0E0] rounded-xl p-6 space-y-1">
          <div className="text-2xl mb-2">📄</div>
          <h2 className="font-semibold text-[#1A1A1A]">Facturación</h2>
          <p className="text-sm text-[#6B6B6B]">Emitimos facturas a personas físicas y morales</p>
          <p className="text-sm font-medium text-[#1A1A1A]">Solicita la tuya al hacer tu pedido</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800">
        <strong>¿Tu pedido tiene algún problema?</strong> Incluye tu número de orden en el mensaje para que podamos atenderte más rápido.
      </div>

      <div className="mt-8 text-sm text-[#6B6B6B]">
        También puedes revisar nuestras políticas de{' '}
        <Link href="/envios" className="text-[#C4813A] hover:underline">envíos</Link>{' '}
        y{' '}
        <Link href="/devoluciones" className="text-[#C4813A] hover:underline">devoluciones</Link>.
      </div>
    </main>
  )
}
