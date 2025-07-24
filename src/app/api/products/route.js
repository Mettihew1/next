import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

// Handle GET (fetch all products) and POST (create a product)
export async function GET() {
  await dbConnect();
  const products = await Product.find();
  console.log(products, '-------------------------------------------------------------------');
  
  return Response.json(products);
}

export async function POST(request) {
  await dbConnect();
  const { id, name, slug, detail } = await request.json();
  const product = await Product.create({ id, name, slug, detail });
  return Response.json(product, { status: 201 });
}