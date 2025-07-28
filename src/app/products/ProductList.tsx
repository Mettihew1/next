'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  images: { url: string; alt?: string }[];
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded p-4 shadow bg-white">
          <Link href={`/products/${product.slug}/${product._id}`}>
            <Image
              src={product.images[0]?.url || '/placeholder.png'}
              alt={product.images[0]?.alt || product.name}
              width={400}
              height={400}
              className="w-full h-40 object-contain"
            />
          </Link>
          <h2 className="mt-2 font-bold text-sm truncate">{product.name}</h2>
          <p className="text-blue-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
