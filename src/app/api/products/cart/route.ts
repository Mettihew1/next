import { NextResponse } from 'next/server';
import { getProductsByIds } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const ids: string[] = body.ids;

    console.log('[API] ✅ Received product ID strings:', ids);

    const products = await getProductsByIds(ids);
    return NextResponse.json(products);
  } catch (error) {
    console.error('[API] ❌ Error in /api/products/cart:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
