import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { pgTable, text, boolean } from 'drizzle-orm/pg-core'
import { eq } from 'drizzle-orm'

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

const productos = pgTable('productos', {
  asin: text('asin').unique(),
  activo: boolean('activo').default(true),
})

const DATABASE_URL = process.env.DATABASE_URL
if (!DATABASE_URL) {
  console.error('❌ Error: DATABASE_URL no definida en .env.local')
  process.exit(1)
}

const sql = neon(DATABASE_URL)
const db = drizzle(sql)

async function main() {
  const targetAsin = process.argv[2]
  if (!targetAsin) {
    console.error('❌ Error: Debes proporcionar un ASIN como argumento.')
    process.exit(1)
  }
  console.log(`🚀 Desactivando producto ASIN: ${targetAsin}...`)

  try {
    const result = await db.update(productos)
      .set({ activo: false })
      .where(eq(productos.asin, targetAsin))
      .returning()

    if (result.length > 0) {
      console.log(`✅ Producto ${targetAsin} desactivado correctamente.`)
    } else {
      console.log(`⚠️  No se encontró el producto con ASIN ${targetAsin}`)
    }
  } catch (err) {
    console.error(`❌ Error al desactivar ${targetAsin}:`, err.message)
  }

  process.exit(0)
}

main()
