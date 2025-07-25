// src/app/product/[id]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

type Product = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  discount?: number;
  category: string;
  subCategory: string;
  brand: string;
  description: string;
  specifications: Record<string, string | string[]>;
  images: { url: string; alt: string }[];
  rating: number;
  numReviews: number;
  stock: number;
  sold: number;
};

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${baseUrl}/api/products/${id}`, {
    cache: 'no-store',
    next: { tags: [`product-${id}`] },
  });

  if (!res.ok) return null;
  return res.json();
}

type PageProps = {
  params: { id: string };
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  if (!id || typeof id !== 'string') {
    return notFound();
  }

  const product = await getProduct(id);

  if (!product) {
    return notFound();
  }

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : null;

  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">½</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
      </div>
    );
  };

  return (
    <main className="py-8 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt}
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
              unoptimized={!product.images[0].url.startsWith('http')}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <div className="mb-4">
            <span className="text-sm text-gray-500">{product.brand}</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              {renderRating(product.rating)}
              <span className="ml-2 text-sm text-gray-600">
                {product.rating.toFixed(1)} ({product.numReviews} reviews)
              </span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm text-gray-600">{product.sold} sold</span>
            </div>

            {product.stock > 0 ? (
              <span className="text-sm text-green-600">In Stock ({product.stock} available)</span>
            ) : (
              <span className="text-sm text-red-600">Out of Stock</span>
            )}
          </div>

          <div className="mb-6">
            {discountedPrice ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900 mr-3">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Specifications</h2>
            <div className="space-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex">
                  <span className="w-1/3 text-gray-600">{key}:</span>
                  <span className="w-2/3 text-gray-800">
                    {Array.isArray(value) ? value.join(', ') : value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Add to Cart
            </button>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <div className="text-4xl font-bold mr-4">{product.rating.toFixed(1)}</div>
            <div>
              {renderRating(product.rating)}
              <p className="text-sm text-gray-600 mt-1">
                Based on {product.numReviews} reviews
              </p>
            </div>
          </div>
          <div className="text-center py-8">
            <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Write a Review
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}