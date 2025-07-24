import Image from 'next/image';

type Product = {
  _id: string;
  name: string;
  slug?: string;
  detail?: string;
  images?: {
    url: string;
    alt?: string;
  }[];
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function Home() {
  let products: Product[] = [];

  try {
    products = await getProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product._id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="mb-4">
              {product.images?.[0]?.url && (
                <div className="relative aspect-square">
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt || product.name || 'Product image'}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              )}
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.slug}</p>
            <p className="text-gray-800">{product.detail}</p>
          </li>
        ))}
      </ul>

      {products.length === 0 && (
        <p className="text-center text-gray-500">No products found</p>
      )}
    </main>
  );
}
