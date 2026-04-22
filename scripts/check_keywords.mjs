import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { pgTable, uuid, text, boolean } from 'drizzle-orm/pg-core'
import { eq, isNull, or, ilike } from 'drizzle-orm'

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
const sql = neon(DATABASE_URL)
const db = drizzle(sql)

async function main() {
  console.log('--- 🛡️  Auditoría de Productos (Keywords) ---')

  const prods = await db.select().from(productos).where(eq(productos.activo, true))
  const keywords = ['humidificador', 'humidifier', 'bateria', 'battery']
  
  const matches = prods.filter(p => {
    const title = p.titulo.toLowerCase()
    return keywords.some(k => title.includes(k))
  })

  if (matches.length > 0) {
    console.log(`\n⚠️ Se encontraron ${matches.length} productos con keywords de categorías eliminadas:`)
    matches.forEach(p => console.log(` - ${p.asin}: ${p.titulo.substring(0, 80)}...`))
  } else {
    console.log('\n✅ No se encontraron productos con keywords de humidificadores o baterías.')
  }

  process.exit(0)
}

main().catch(console.error)
