import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';
import Image from 'next/image';
import Link from 'next/link';

interface SearchParams {
  searchParams?: {
    q?: string;
    brand?: string;
    min?: string;
    max?: string;
  };
}

export default async function SearchPage({ searchParams }: SearchParams) {
  await dbConnect();

  const query = searchParams?.q || '';
  const brand = searchParams?.brand || '';
  const min = Number(searchParams?.min || 0);
  const max = Number(searchParams?.max || Infinity);

  const filter: any = {
    isActive: true,
    name: { $regex: query, $options: 'i' }
  };

  if (brand) filter.brand = brand;
  if (!isNaN(min) && !isNaN(max)) {
    filter.price = { $gte: min, $lte: max };
  }

  const products = await Product.find(filter).lean();

  const uniqueBrands = await Product.distinct('brand', { isActive: true });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Filters */}
      <aside className="space-y-6">
        <form className="space-y-4" method="GET">
          <input
            name="q"
            placeholder="Search..."
            defaultValue={query}
            className="w-full px-3 py-2 border rounded"
          />

          <div>
            <label className="font-semibold block mb-1">Brand</label>
            <select name="brand" defaultValue={brand} className="w-full border px-2 py-1 rounded">
              <option value="">All</option>
              {uniqueBrands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-1">Price Range</label>
            <div className="flex gap-2">
              <input type="number" name="min" placeholder="Min" className="w-full px-2 py-1 border rounded" />
              <input type="number" name="max" placeholder="Max" className="w-full px-2 py-1 border rounded" />
            </div>
          </div>

          <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">
            Apply Filters
          </button>
        </form>
      </aside>

      {/* Results */}
      <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 && (
          <div className="col-span-full text-gray-500 text-center">No products found</div>
        )}
        {products.map((product: any) => (
          <div key={product._id} className="border rounded shadow hover:shadow-lg transition">
          <Link href={`/product/${product._id}`}>
            <Image
              src={product.images[0]?.url || '/placeholder.jpg'}
              alt={product.images[0]?.alt || product.name}
              width={300}
              height={200}
              className="object-cover w-full h-48 rounded-t"
              />
          </Link>
            <div className="p-4 space-y-1">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
