// route.ts for /api/products
import { NextResponse } from 'next/server';
import Product from '@/models/Product'
import dbConnect from '@/lib/mongodb';


// route.ts for /api/products/featured
export async function GET() {
  await dbConnect();
  const products = await Product.find({ featured: true });
  return NextResponse.json(products);
}
