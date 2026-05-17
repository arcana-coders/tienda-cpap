import { NextResponse } from 'next/server';
import { createPayPalOrder } from '@/lib/paypal';
import { db } from '@/lib/db';
import { productos } from '@/lib/schema';
import { nanoid } from 'nanoid';
import { and, eq, inArray } from 'drizzle-orm';

type CartItem = {
  asin?: string;
  cantidad?: number;
};

function normalizeCart(items: CartItem[]) {
  const quantities = new Map<string, number>();

  for (const item of items) {
    if (!item.asin || typeof item.asin !== 'string') {
      throw new Error('Producto inválido en carrito');
    }

    const quantity = Number(item.cantidad);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      throw new Error('Cantidad inválida en carrito');
    }

    quantities.set(item.asin, (quantities.get(item.asin) ?? 0) + quantity);
  }

  return quantities;
}

export async function POST(request: Request) {
  try {
    const { items, clienteData } = await request.json();

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Carrito vacío' }, { status: 400 });
    }

    const quantities = normalizeCart(items);
    const asins = Array.from(quantities.keys());
    const dbProducts = await db
      .select({
        id: productos.id,
        asin: productos.asin,
        titulo: productos.titulo,
        precio: productos.precio,
      })
      .from(productos)
      .where(and(inArray(productos.asin, asins), eq(productos.activo, true)));

    if (dbProducts.length !== asins.length) {
      return NextResponse.json({ error: 'Producto no disponible' }, { status: 400 });
    }

    const secureItems = dbProducts.map((product) => ({
      productoId: product.id,
      asin: product.asin,
      titulo: product.titulo,
      precio: Number(product.precio),
      cantidad: quantities.get(product.asin ?? '') ?? 0,
    }));

    const subtotal = secureItems.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    if (subtotal <= 0) {
      return NextResponse.json({ error: 'Total inválido' }, { status: 400 });
    }

    const orderNumber = `CPAP-${nanoid(8).toUpperCase()}`;
    const order = await createPayPalOrder(secureItems, subtotal, clienteData, {
      storeName: 'CPAP Mexico',
      orderNumber,
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error creando orden de PayPal:', error);
    return NextResponse.json({ error: 'Fallo al crear la orden' }, { status: 500 });
  }
}
