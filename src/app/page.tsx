export const dynamic = 'force-dynamic';

import ProductCard from '@/components/ProductCard';

async function getProducts() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/products`, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </main>
  );
}
