// export const dynamic = 'force-dynamic';

// import ProductList from './products/ProductList';

// type ProductType = {
//   _id: string;
//   name: string;
//   slug: string;
//   price: number;
//   category: string;
//   image?: string;
//   featured: boolean;
// };

// async function getProducts(): Promise<ProductType[]> {
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

//   const res = await fetch(`${baseUrl}/api/products/featured`, {
//     method: 'GET',
//     cache: 'no-store',
//   });

//   console.log('Fetch status:', res.status);

//   if (!res.ok) {
//     console.error('Failed to fetch products:', res.statusText);
//     throw new Error('Failed to fetch products');
//   }

//   const data = await res.json();
//   console.log('Fetched products:', data);
//   return data;
// }

// export default async function Home() {
//   try {
//     const products = await getProducts();

//     return (
//       <main className="container mx-auto">
//         <h1 className="text-2xl font-bold mb-3">Featured Products</h1>
//         <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
//           <ProductList products={JSON.parse(JSON.stringify(products))} />
//         </ul>
//       </main>
//     );
//   } catch (error) {
//     console.error('Error loading products:', error);
//     return (
//       <main className="container mx-auto">
//         <h1 className="text-2xl font-bold mb-3 text-red-500">
//           Failed to load featured products.
//         </h1>
//       </main>
//     );
//   }
// }


export const dynamic = 'force-dynamic';

import Image from "next/image";
import Link from "next/link";

type ProductType = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  images: { url: string; alt?: string }[];
};

async function getProducts(): Promise<ProductType[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/products/featured`, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch products');

  return res.json();
}

export default async function HomePage() {
  let products: ProductType[] = [];

  try {
    products = await getProducts();
  } catch (error) {
    console.error('Fetch error:', error);
  }

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Featured Products</h1>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/products/${encodeURIComponent(product.name)}/${product._id}?source=featured`}
            className="block border p-4 rounded shadow hover:shadow-md transition"
          >
            <Image
              src={product.images?.[0]?.url || "/placeholder.jpg"}
              alt={product.images?.[0]?.alt || product.name}
              width={200}
              height={200}
              className="w-full object-cover max-w-[140px]"
            />
            <p className="mt-2 font-medium">{product.name}</p>
            <p className="text-sm text-gray-600">${product.price}</p>
          </Link>
        ))}
      </div>



<div className="flex border">
  <div>
<h1 className="text-[30px]">There&apos;s a deal for you, too</h1>
<p >Don&apos;t miss a chance to save on items you&apos;ve been looking for.</p>
  </div>
<button className="border  rounded ">Explore now</button>
</div>


<div className="flex items-center justify-between">

<h1 className="text-[30px]">Score these trending kicks</h1>
<Link href={'#'}>see all</Link>
</div>

    <div className="overflow-x-auto flex gap-2 mb-4">
  {Array(5).fill(0).map((_, i) => (
    <Image
      key={i}
      src="/images/shoes/shoe1.jpg" // use your actual image path
      alt={`Shoe ${i + 1}`}
      width={100}
      height={100}
    />
  ))}
</div>
      <Image
        src="https://m.media-amazon.com/images/I/51t1G+upZML._AC_UL480_QL65_.jpg"
        alt="Promo"
        width={300}
        height={300}
        className="mx-auto"
      />
    </main>
  );
}
