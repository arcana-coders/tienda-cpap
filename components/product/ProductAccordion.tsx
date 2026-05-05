'use client'

import { useState } from 'react'
import { cleanText } from '@/lib/strings'

interface AccordionItemProps {
  title: string
  isOpen?: boolean
  children: React.ReactNode
}

function AccordionItem({ title, isOpen = false, children }: AccordionItemProps) {
  const [open, setOpen] = useState(isOpen)

  return (
    <div className="border-b border-outline-variant/20">
      <button
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-on-surface text-sm font-body">{title}</span>
        <span
          className={`material-symbols-outlined text-on-surface-variant text-[20px] transition-transform duration-300 flex-shrink-0 ml-2 ${open ? 'rotate-180' : ''}`}
        >
          expand_more
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[800px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-sm text-on-surface-variant leading-relaxed font-body">
          {children}
        </div>
      </div>
    </div>
  )
}

interface ProductAccordionProps {
  descripcion?: string | null
  bullets?: string[] | null
}

export default function ProductAccordion({ descripcion, bullets }: ProductAccordionProps) {
  const hasBullets = Array.isArray(bullets) && bullets.length > 0
  const cleanedDesc = descripcion ? cleanText(descripcion) : null
  const hasDesc = cleanedDesc && cleanedDesc.trim().length > 10

  if (!hasDesc && !hasBullets) return null

  return (
    <div className="mt-6">
      <div className="border-t border-outline-variant/20">
        {hasDesc && (
          <AccordionItem title="Descripción del producto" isOpen={true}>
            <p className="whitespace-pre-line">{cleanedDesc}</p>
          </AccordionItem>
        )}

        {hasBullets && (
          <AccordionItem title="Características" isOpen={!hasDesc}>
            <ul className="space-y-2">
              {bullets!.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="material-symbols-outlined text-primary text-[16px] flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span>{cleanText(b)}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>
        )}
      </div>
    </div>
  )
}
