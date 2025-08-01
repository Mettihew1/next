// app/products/page.tsx
import ProductList from './ProductList';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export default async function ProductsPage() {
  await dbConnect();
  const products = await Product.find().lean();

  return (
    <main className="max-w-7xl mx-auto px-1 py-3">
      <h1 className="text-3x1 font-bold mb-3">All Products</h1>
      <ProductList products={JSON.parse(JSON.stringify(products))} />
    </main>
  );
}
