// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import RouterSpinnerLink from "@/components/RouterSpinnerLink";

// // Optional spinner, you can replace this with shadcn loader later
// function Spinner() {
//   return (
//     <div className="text-center py-10 text-gray-500">
//       <svg className="animate-spin mx-auto w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24">
//         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//         <path
//           className="opacity-75"
//           fill="currentColor"
//           d="M4 12a8 8 0 018-8v8H4z"
//         />
//       </svg>
//       <p>Loading featured products...</p>
//     </div>
//   );
// }

// type ProductType = {
//   _id: string;
//   name: string;
//   slug: string;
//   price: number;
//   images: { url: string; alt?: string }[];
// };

// export default function FeaturedProducts() {
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function load() {
//       // const res = await fetch("/api/products/featured");
//       const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
// const res = await fetch(`${baseUrl}/api/products/featured`, {
//   method: 'GET',
//   cache: 'no-store',
// });
//       const json = await res.json();
//       setProducts(json);
//       setLoading(false);
//     }
//     load();
//   }, []);

//   if (loading) return <Spinner />;

//   return (
//     <>
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold">Featured Products</h2>
//         <RouterSpinnerLink href="/products">
//           <Button variant="default">Explore All</Button>
//         </RouterSpinnerLink>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
//         {products.map((product) => (
//           <Link
//             key={product._id}
//             href={`/products/${encodeURIComponent(product.name)}/${product._id}?source=featured`}
//             className="block border rounded p-4 hover:shadow-md transition"
//           >
//             <Image
//               src={product.images?.[0]?.url || "/placeholder.jpg"}
//               alt={product.images?.[0]?.alt || product.name}
//               width={200}
//               height={200}
//               className="w-full object-cover max-w-[140px] mx-auto"
//             />
//             <p className="mt-2 font-medium text-center">{product.name}</p>
//             <p className="text-sm text-gray-600 text-center">${product.price}</p>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import RouterSpinnerLink from "@/components/RouterSpinnerLink";

function Spinner() {
  return (
    <div className="text-center py-10 text-gray-500">
      <svg className="animate-spin mx-auto w-6 h-6" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      <p className="mt-2">Loading featured products...</p>
    </div>
  );
}

type ProductType = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  images: { url: string; alt?: string }[];
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/products/featured`, {
          method: 'GET',
          cache: 'no-store',
        });

        if (!res.ok) throw new Error("Failed to fetch products");

        const json = await res.json();
        setProducts(json);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold">Featured Products</h2>
        <RouterSpinnerLink href="/products">
          <Button variant="default">Explore All</Button>
        </RouterSpinnerLink>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 mb-8">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/products/${encodeURIComponent(product.name)}/${product._id}?source=featured`}
            className="block border rounded p-2 hover:shadow-md transition"
          >
            <Image
              src={product.images?.[0]?.url || "/placeholder.jpg"}
              alt={product.images?.[0]?.alt || product.name}
              width={200}
              height={0}
              className="w-full max-w-[120px] mx-auto "
            />
            <p className="mt-2 font-medium text-center truncate w-48">{product.name}</p>
            <p className="text-sm text-gray-600 text-center">${product.price}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
