export const dynamic = 'force-dynamic';

import ProductCard from '@/components/ProductCard';

type ProductType = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image?: string;
};


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
    // <main className="container mx-auto">
      <main className="px-2 sm:px-4 md:px-8 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-3">Products</h1>

  <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
     {products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </main>
  );
}
