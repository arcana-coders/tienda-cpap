import type { Metadata } from 'next'
import DevolucionesPage from './DevolucionesPage'

export const metadata: Metadata = {
  title: 'Devoluciones y garantías — CPAP México',
  description: 'Política de devoluciones de CPAP México. Tienes 7 días para reportar cualquier problema con tu pedido.',
}

export default function Page() {
  return <DevolucionesPage />
}
