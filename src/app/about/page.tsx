// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - Mettihew',
  description: 'Get to know the dev behind eesy.ir – Mettihew’s journey, skills, and contact info.',
};

const values = [
  {
    title: 'Github Collaboration',
    emoji: '🤝',
    description: 'Ali24 updated the cart page',
    timestamp: 'Feb 2025',
  },
  {
    title: 'Zustand',
    emoji: '💻',
    description: 'I started to work with Zustand',
    timestamp: 'Jan 2025',
  },
  {
    title: 'Next.js | TypeScript',
    emoji: '💻',
    description: 'I started building eesy.ir with Next.js & TypeScript',
    timestamp: 'Jan 2025',
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hi</h1>
        <p>Hope you&apos;re having a good one 🔥</p>
        <p>My name is Mettihew.</p>
        <p>I code with React, Next.js, MongoDB, TypeScript — and friends. Building fast stuff for the web. 😉</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Journey</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              I started in 2022 with a small project. Step by step, I picked up HTML, CSS, JavaScript, React, Node.js,
              Express, MongoDB, Next.js, TypeScript, Redux, Zustand — you name it.
            </p>
            <p>
              My site <code>eesy.ir</code> is built with Next.js, TypeScript, and MongoDB. It&apos;s a modern version of my original
              app, which I first built using React and Node.js. (GitHub link coming soon!)
            </p>
            <p>
              I focus on quality over quantity — and I enjoy building real things that people actually use.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg h-64">
          {/* Placeholder for profile image or illustration */}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact</h2>
          <div className="grid space-y-4 text-gray-600">
            <p>You can reach out to me here:</p>
            <a href="#" className="text-blue-600 hover:underline">GitHub (coming soon)</a>
            <a href="#" className="text-blue-600 hover:underline">Email (coming soon)</a>
            <a href="#" className="text-blue-600 hover:underline">LinkedIn (coming soon)</a>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">My Works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {values.map((value) => (
            <div key={value.title} className="text-center bg-white rounded-lg shadow-sm p-4">
              <div className="text-3xl mb-2">{value.emoji}</div>
              <h3 className="text-xl font-medium mb-1">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
              <p className="text-gray-500 text-xs">{value.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
