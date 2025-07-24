type Props = {
  params: { slug: string };
};

// ✅ Make the function async, even if you don’t use await
export default async function NewsPage({ params }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        This is the slug: <span className="text-blue-600">{params.slug}</span>
      </h1>
    </div>
  );
}
