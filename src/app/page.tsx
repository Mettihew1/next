export const dynamic = 'force-dynamic';

import ProductList from './products/ProductList';

type ProductType = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image?: string;
  featured: boolean;
};

async function getProducts(): Promise<ProductType[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/products/featured`, {
    method: 'GET',
    cache: 'no-store',
  });

  console.log('Fetch status:', res.status);

  if (!res.ok) {
    console.error('Failed to fetch products:', res.statusText);
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();
  console.log('Fetched products:', data);
  return data;
}

export default async function Home() {
  try {
    const products = await getProducts();

    return (
      <main className="container mx-auto">
        <h1 className="text-2xl font-bold mb-3">Featured Products</h1>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <ProductList products={JSON.parse(JSON.stringify(products))} />
        </ul>
      </main>
    );
  } catch (error) {
    console.error('Error loading products:', error);
    return (
      <main className="container mx-auto">
        <h1 className="text-2xl font-bold mb-3 text-red-500">
          Failed to load featured products.
        </h1>
      </main>
    );
  }
}
