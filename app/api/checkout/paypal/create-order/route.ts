import { NextResponse } from 'next/server';
import { createPayPalOrder } from '@/lib/paypal';
import { db } from '@/lib/db';
import { productos } from '@/lib/schema';
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
      .select({ asin: productos.asin, precio: productos.precio })
      .from(productos)
      .where(and(inArray(productos.asin, asins), eq(productos.activo, true)));

    if (dbProducts.length !== asins.length) {
      return NextResponse.json({ error: 'Producto no disponible' }, { status: 400 });
    }

    let subtotal = 0;
    for (const dbProduct of dbProducts) {
      subtotal += Number(dbProduct.precio) * (quantities.get(dbProduct.asin ?? '') ?? 0);
    }

    if (subtotal <= 0) {
      return NextResponse.json({ error: 'Total inválido' }, { status: 400 });
    }

    const order = await createPayPalOrder([], subtotal, clienteData);

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error creando orden de PayPal:', error);
    return NextResponse.json({ error: 'Fallo al crear la orden' }, { status: 500 });
  }
}
