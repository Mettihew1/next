
export const dynamic = 'force-dynamic';

import FeaturedProducts from "@/components/FeaturedProducts";
import Image from "next/image";
import Link from "next/link";



// async function getProducts(): Promise<ProductType[]> {
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
//   const res = await fetch(`${baseUrl}/api/products/featured`, {
//     method: 'GET',
//     cache: 'no-store',
//   });

//   if (!res.ok) throw new Error('Failed to fetch products');

//   return res.json();
// }

export default async function HomePage() {
  // let products: ProductType[] = [];

  // try {
  //   products = await getProducts();
  // } catch (error) {
  //   console.error('Fetch error:', error);
  // }

  return (
    <main className="container mx-auto px-4 py-6">

      <FeaturedProducts />

      <div className="flex border">
        <div className="space-y-4">
          <div>

            <div className="flex items-center justify-between">

              <h1 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
                Theres a deal for you, too
              </h1>

              <button className="mt-4 border rounded px-4 py-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                Explore now
              </button>
            </div>

            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
              Dont miss a chance to save on items youve been looking for.
            </p>

          </div>

          <div className="flex items-center justify-between">
            <h1 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
              Score these trending kicks
            </h1>
            <Link href="#" className="text-blue-500 underline text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
              See all
            </Link>
          </div>
        </div>
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
