import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET() {
  await dbConnect();

  const products = await Product.find({ featured: true }).lean();

  if (!products) {
    return new NextResponse('No featured products found', { status: 404 });
  }

  return NextResponse.json(products);
}
