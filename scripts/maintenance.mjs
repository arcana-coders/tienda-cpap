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
  activa: boolean('activa'),
})

const productos = pgTable('productos', {
  id: uuid('id').primaryKey(),
  titulo: text('titulo'),
  asin: text('asin'),
  categoriaId: uuid('categoria_id'),
  activo: boolean('activo'),
})

const DATABASE_URL = process.env.DATABASE_URL
if (!DATABASE_URL) {
  console.error('❌ Error: DATABASE_URL no definida en .env.local')
  process.exit(1)
}

const sql = neon(DATABASE_URL)
const db = drizzle(sql)

async function main() {
  console.log('--- 🛡️  Mantenimiento Tienda CPAP ---')

  // 1. Listar todas las categorías activas
  console.log('\n📂 Categorías actuales:')
  const allCats = await db.select().from(categorias)
  allCats.forEach(c => {
    console.log(` - [${c.activa ? 'ACT' : 'DES'}] ${c.nombre} (${c.slug})`)
  })

  // 2. Desactivar categorías solicitadas
  const catsToDeactivate = ['humidificadores', 'baterias']
  for (const slug of catsToDeactivate) {
    const found = allCats.find(c => c.slug === slug)
    if (found && found.activa) {
      await db.update(categorias).set({ activa: false }).where(eq(categorias.slug, slug))
      console.log(`✅ Categoría "${slug}" desactivada.`)
    } else if (found) {
      console.log(`ℹ️ Categoría "${slug}" ya estaba desactivada.`)
    } else {
      console.log(`⚠️ Categoría "${slug}" no encontrada.`)
    }
  }

  // 3. Auditoría de productos
  console.log('\n🔍 Auditoría de productos:')
  const allProds = await db.select().from(productos).where(eq(productos.activo, true))
  console.log(`Total productos activos: ${allProds.length}`)

  const prodsNoCat = allProds.filter(p => !p.categoriaId)
  if (prodsNoCat.length > 0) {
    console.log(`❌ ALERTA: ${prodsNoCat.length} productos NO tienen categoría asignada:`)
    prodsNoCat.forEach(p => console.log(`   - ${p.asin}: ${p.titulo}`))
  } else {
    console.log('✅ Todos los productos tienen categoría asignada.')
  }

  // 4. Productos en categorías desactivadas
  const deactivatedCatIds = allCats.filter(c => catsToDeactivate.includes(c.slug) || !c.activa).map(c => c.id)
  const prodsInDeactivated = allProds.filter(p => p.categoriaId && deactivatedCatIds.includes(p.categoriaId))
  if (prodsInDeactivated.length > 0) {
    console.log(`⚠️  ADVERTENCIA: ${prodsInDeactivated.length} productos están en categorías desactivadas:`)
    prodsInDeactivated.forEach(p => console.log(`   - ${p.asin}: ${p.titulo}`))
  }

  process.exit(0)
}

main().catch(err => {
  console.error('❌ Error fatal:', err)
  process.exit(1)
})
