import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { pgTable, uuid, text, boolean } from 'drizzle-orm/pg-core'
import { eq, isNull } from 'drizzle-orm'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.join(__dirname, '../.env.local')

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    const [key, ...value] = line.split('=')
    if (key && value.length) {
      process.env[key.trim()] = value.join('=').trim().replace(/^["']|["']$/g, '')
    }
  })
}

const categorias = pgTable('categorias', {
  id: uuid('id').primaryKey(),
  nombre: text('nombre'),
  slug: text('slug'),
})

const productos = pgTable('productos', {
  id: uuid('id').primaryKey(),
  titulo: text('titulo'),
  asin: text('asin'),
  categoriaId: uuid('categoria_id'),
  activo: boolean('activo'),
})

const DATABASE_URL = process.env.DATABASE_URL
const sql = neon(DATABASE_URL)
const db = drizzle(sql)

async function main() {
  console.log('--- 🪄  Auto-Categorización de Productos (Refinado) ---')

  const allCats = await db.select().from(categorias)
  const catMap = {}
  allCats.forEach(c => catMap[c.slug] = c.id)

  const prodsNoCat = await db.select().from(productos).where(isNull(productos.categoriaId))
  const updates = []

  for (const p of prodsNoCat) {
    const title = p.titulo.toLowerCase()
    let targetSlug = null

    // Prioridad 1: Filtros
    if (title.includes('filtro') || title.includes('filter')) {
      targetSlug = 'filtros'
    } 
    // Prioridad 2: Tubos
    else if (title.includes('tubo') || title.includes('tubing') || title.includes('manguera') || title.includes('hose')) {
      targetSlug = 'tubos'
    }
    // Prioridad 3: Limpieza
    else if (title.includes('limpieza') || title.includes('cleaner') || title.includes('wipes')) {
      targetSlug = 'limpieza'
    }
    // Prioridad 4: Refacciones (Partes específicas)
    else if (title.includes('casco') || title.includes('headgear') || title.includes('strap') || title.includes('clip') || title.includes('frame') || title.includes('cojín') || title.includes('cushion') || title.includes('codo') || title.includes('elbow') || title.includes('repuesto') || title.includes('reemplazo') || title.includes('replacement') || title.includes('correa') || title.includes('almohadilla')) {
      targetSlug = 'refacciones'
    }
    // Prioridad 5: Máscaras (Solo si no es una parte/refacción)
    else if (title.includes('máscara') || title.includes('mascarilla') || title.includes('mask') || title.includes('airfit') || title.includes('airtouch')) {
      targetSlug = 'mascaras'
    }
    // Resto: Accesorios
    else {
      targetSlug = 'accesorios'
    }

    if (targetSlug && catMap[targetSlug]) {
      updates.push({ id: p.id, asin: p.asin, targetSlug, targetId: catMap[targetSlug], title: p.titulo })
    }
  }

  console.log(`\nPropuesta de actualización (${updates.length} productos):`)
  updates.forEach(u => {
    console.log(` - ${u.asin} -> ${u.targetSlug.padEnd(12)} | ${u.title.substring(0, 60)}...`)
  })

  if (process.argv[2] === '--apply') {
    console.log('\n🚀 Aplicando cambios...')
    for (const u of updates) {
      await db.update(productos).set({ categoriaId: u.targetId }).where(eq(productos.id, u.id))
    }
    console.log('✅ Categorización completada.')
  } else {
    console.log('\n💡 Ejecuta con --apply para aplicar los cambios.')
  }

  process.exit(0)
}

main().catch(console.error)
