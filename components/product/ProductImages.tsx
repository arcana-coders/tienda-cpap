'use client'

import { useState } from 'react'

interface Props {
  imagenes: string[]
  titulo: string
}

export default function ProductImages({ imagenes, titulo }: Props) {
  const [activa, setActiva] = useState(0)

  if (!imagenes || imagenes.length === 0) {
    return (
      <div className="flex flex-col gap-6 lg:sticky lg:top-32">
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden aspect-square flex items-center justify-center p-8 relative">
          <span className="material-symbols-outlined text-[48px] text-outline-variant">inventory_2</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-32">
      {/* Main image */}
      <div className="bg-surface-container-lowest rounded-xl lg:rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center p-8 relative border border-outline-variant/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={activa}
          src={imagenes[activa]}
          alt={titulo}
          className="w-full h-full object-contain drop-shadow-xl"
          loading="eager"
          decoding="sync"
        />
        {/*
        <div className="absolute top-6 left-6 bg-surface-container-high px-4 py-1.5 rounded-full text-sm font-medium text-on-surface">
            Cpap-Mexico
        </div>
        */}
      </div>

      {/* Thumbnails */}
      {imagenes.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-3 lg:gap-4">
          {imagenes.slice(0, 5).map((img, i) => (
            <button
              key={i}
              onClick={() => setActiva(i)}
              className={`bg-surface-container-lowest rounded-xl aspect-square overflow-hidden cursor-pointer p-2 lg:p-4 transition-all duration-200 flex items-center justify-center ${
                activa === i
                  ? 'border-2 border-primary ring-2 ring-primary/20 scale-[0.98]'
                  : 'border border-outline-variant/20 hover:border-primary/50'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${titulo} ${i + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
