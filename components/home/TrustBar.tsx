const TRUST_ITEMS = [
  {
    label: 'Grado Médico y Original',
    icon: 'verified_user',
  },
  {
    label: 'Importaciones de EE. UU.',
    icon: 'flight_takeoff',
  },
  {
    label: 'Pago Seguro con PayPal',
    icon: 'payments',
  },
  {
    label: 'Facturación CFDI Disponible',
    icon: 'receipt_long',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-surface-container-lowest max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8 lg:py-12">
      <div className="bg-surface-container-low rounded-xl border border-outline-variant/10 p-6 md:p-8 flex flex-wrap justify-center gap-6 lg:gap-16 opacity-90">
        {TRUST_ITEMS.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm shadow-primary/20">
              <span className="material-symbols-outlined text-white text-[20px] md:text-[24px]">{item.icon}</span>
            </div>
            <span className="font-label text-xs sm:text-sm font-medium text-on-surface-variant tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
