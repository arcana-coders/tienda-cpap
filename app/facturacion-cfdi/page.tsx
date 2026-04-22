import React from 'react'

export const metadata = {
  title: 'Facturación CFDI | The Respiratory Atelier',
  description: 'Solicita tu factura CFDI de manera sencilla para tus compras de equipos CPAP.',
}

export default function FacturacionPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-headline font-bold text-on-surface mb-8">Facturación CFDI</h1>
      
      <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/10 shadow-sm space-y-10">
        <div className="space-y-4">
          <p className="text-xl text-on-surface font-headline font-medium">
            ¡Gracias por tu compra! En The Respiratory Atelier facilitamos tu proceso de facturación.
          </p>
          <p className="text-on-surface-variant font-body leading-relaxed">
            Para que podamos emitir su factura CFDI (Versión 4.0), requerimos que nos proporcione sus datos fiscales completos y vigentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-surface-container-low p-6 rounded-2xl space-y-4">
            <h2 className="text-lg font-headline font-bold text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">1</span>
              Datos Requeridos
            </h2>
            <ul className="space-y-3 text-on-surface-variant font-body text-sm">
              <li className="flex justify-between border-b border-outline-variant/20 pb-1"><span>RFC</span> <span className="font-bold text-on-surface">Indispensable</span></li>
              <li className="flex justify-between border-b border-outline-variant/20 pb-1"><span>Razón Social</span> <span className="font-bold text-on-surface">Tal cual Constancia</span></li>
              <li className="flex justify-between border-b border-outline-variant/20 pb-1"><span>Régimen Fiscal</span> <span className="font-bold text-on-surface">Vigente</span></li>
              <li className="flex justify-between border-b border-outline-variant/20 pb-1"><span>Código Postal</span> <span className="font-bold text-on-surface">Domicilio Fiscal</span></li>
              <li className="flex justify-between border-b border-outline-variant/20 pb-1"><span>Uso de CFDI</span> <span className="font-bold text-on-surface">G03, S01, etc.</span></li>
            </ul>
          </section>

          <section className="bg-surface-container-low p-6 rounded-2xl space-y-4">
            <h2 className="text-lg font-headline font-bold text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">2</span>
              Medio de Envío
            </h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed">
              Envíe su información o su <strong>Constancia de Situación Fiscal</strong> actualizada al correo:
            </p>
            <div className="bg-surface-container-highest p-4 rounded-xl text-center">
              <a href="mailto:hola@cpap-mexico.com" className="text-primary font-bold text-lg hover:underline decoration-2">
                hola@cpap-mexico.com
              </a>
            </div>
            <p className="text-[10px] text-on-surface-variant/60 font-body italic">
              * Favor de incluir su número de orden en el asunto del correo.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-outline-variant/20 text-center">
          <p className="text-sm text-on-surface-variant font-body">
            El tiempo estimado de entrega de su factura es de <strong>24 a 48 horas hábiles</strong> después de recibir sus datos.
          </p>
        </div>
      </div>
    </main>
  )
}
