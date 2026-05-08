export default function Loading() {
  return (
    <main className="min-h-screen bg-[#fbf9f8] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-12 h-12 border-4 border-[#00386c] border-t-transparent rounded-full animate-spin mb-6" />
      <h2 className="text-xl font-bold text-[#1b1c1c] tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Cargando catálogo...
      </h2>
      <p className="text-[#74787e] mt-2 text-sm">
        Preparando los mejores productos para ti
      </p>
    </main>
  )
}
