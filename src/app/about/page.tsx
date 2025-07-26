// app/about/page.tsx (or wherever you place your route)
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Your Company Name',
  description: 'Learn about our mission, values, and the team behind our success',
};

const values = [
  {
    title: 'Innovation',
    emoji: '💡',
    description: 'We constantly push boundaries to deliver cutting-edge solutions',
  },
  {
    title: 'Integrity',
    emoji: '🤝',
    description: 'Honest and transparent in all our dealings',
  },
  {
    title: 'Excellence',
    emoji: '🏆',
    description: 'Committed to the highest standards in everything we do',
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Company</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Were dedicated to creating innovative solutions that make a difference
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Journey</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Starting from a small garage in 2015, wee grown into a team of 50+ professionals
              serving clients across 15 countries.
            </p>
            <p>
              Our focus has yes always been on quality over quantity, building lasting relationships
              with our clients.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg h-64">
          {/* Placeholder for company image */}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Core Values</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">{value.emoji}</div>
              <h3 className="text-xl font-medium mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
