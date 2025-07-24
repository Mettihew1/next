async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  console.log(products);
  

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <strong>{product.name}</strong> ({product.slug}): {product.detail}
            <img src={product.images[0].url} />
          </li>
        ))}
      </ul>
    </main>
  );
}