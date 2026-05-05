const FAQS = [
  {
    question: '¿Qué es la apnea del sueño y cómo sé si la tengo?',
    answer: 'La apnea del sueño es un trastorno en el que la respiración se detiene repetidamente durante el sueño. Los síntomas más comunes son ronquidos fuertes, cansancio durante el día y despertares frecuentes. El diagnóstico definitivo requiere un estudio del sueño (polisomnografía) indicado por tu médico.',
  },
  {
    question: '¿Cómo sé qué equipo CPAP necesito?',
    answer: 'Tu médico o especialista en sueño te indicará el tipo de equipo (CPAP, APAP o BiPAP) y la presión requerida. Si ya tienes tu prescripción, nuestro equipo te ayuda a elegir el modelo correcto por WhatsApp sin costo adicional.',
  },
  {
    question: '¿Los productos son 100% originales?',
    answer: 'Sí. Todos nuestros equipos, máscaras y accesorios son 100% originales, importados directamente desde EE. UU. Llegan en caja sellada de fábrica con garantías del fabricante y sin ningún tipo de modificación.',
  },
  {
    question: '¿Hacen factura (CFDI)?',
    answer: 'Sí, emitimos factura electrónica (CFDI) con todos los datos fiscales. Puedes solicitarla al momento del pedido. Es deducible de impuestos para gastos médicos.',
  },
  {
    question: '¿Cuánto tarda el envío?',
    answer: 'El tiempo de entrega estándar es de 7 a 10 días hábiles a cualquier parte de México. Todos los pedidos incluyen número de rastreo para seguimiento en tiempo real.',
  },
  {
    question: '¿Puedo devolver un equipo si no me adapto?',
    answer: 'Sí. Contamos con política de devoluciones de 30 días en equipos sin uso. Si el equipo ya fue usado y tienes dificultades para adaptarte, te orientamos sobre cómo ajustar la configuración o explorar alternativas de mascarilla.',
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title & CTA */}
          <div>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 border border-white/20 text-primary-container text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
              <span className="material-symbols-outlined text-[14px]">help</span>
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-extrabold leading-tight mb-6">
              ¿Tienes dudas sobre <br />la terapia CPAP?
            </h2>
            <p className="text-on-primary/70 leading-relaxed mb-8 text-sm lg:text-base max-w-sm font-body">
              Nuestro equipo de especialistas en terapia respiratoria está disponible por WhatsApp para orientarte sin costo.
            </p>
            <a
              href="https://wa.me/521XXXXXXXXXX"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl text-sm hover:bg-surface-container-low transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablar con un especialista
            </a>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details key={i} className="group border-b pb-4 cursor-pointer border-white/20">
                <summary className="flex justify-between items-center font-semibold text-sm list-none [&::-webkit-details-marker]:hidden py-1">
                  {faq.question}
                  <span className="material-symbols-outlined text-[20px] group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4">expand_more</span>
                </summary>
                <div className="pt-3 text-on-primary/70 text-sm leading-relaxed font-body">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
