import Image from 'next/image';

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <strong>{product.name}</strong> ({product.slug}): {product.detail}
            {product.images?.[0]?.url && (
              <Image src={product.images[0].url} alt={product.images[0].alt || product.name || "Product image"} width={200} height={200}/>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
