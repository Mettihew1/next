// app/products/page.tsx
import ProductList from './ProductList';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export default async function ProductsPage() {
  await dbConnect();
  const products = await Product.find().lean();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <ProductList products={JSON.parse(JSON.stringify(products))} />
    </main>
  );
}
