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
    description: 'Swtich to stroe from Context to Zustand',
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
    <main className="max-w-7xl mx-auto sm:px-6 lg:px-12 py-4">


      <div className="grid md:grid-cols-2 gap-16 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact</h2>
          <div className="grid space-y-2 text-gray-600">
            <p>Mahdi Keramati</p>
            <div className='flex gap-4'>
            <a href="#" className="text-blue-600 hover:underline">Email</a>
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:underline">0921</a>
            </div>
          </div>
        </div>
      </div>

         <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Updates</h2>
        <div className="grid sm:grid-cols-3 gap-2">
          {values.map((value) => (
            <div key={value.title} className="text-center bg-white rounded-lg shadow-sm p-1">
              <div className="text-2xl">{value.emoji}</div>
              <h3 className="text-xl font-medium mb-1">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
              <p className="text-gray-500 text-xs">{value.timestamp}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="grid md:grid-cols-2 gap-16 mb-10">
        {/* <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Languages</h2>
          <div className="space-y-1 text-gray-600">
            <p className='text-red-800'>Next.js, TypeScript</p>
             <p> React, Node.js, MongoDB, Express </p>
             <p> HTML, CSS, JavaScript, Redux, Zustand</p>
          </div>
        </div> */}


<p>
  🛠️ <strong>Tech Stack</strong>
  <br /><br />
  <strong>Frontend:</strong>
  <br />
  HTML, CSS, JavaScript
  <br /><br />
  <strong>Frameworks & Libraries:</strong>
  <br />
  React, Next.js, Zustand, Redux
  <br /><br />
  <strong>Backend:</strong>
  <br />
  Node.js, Express
  <br /><br />
  <strong>Database:</strong>
  <br />
  MongoDB
  <br /><br />
  <strong>Other Tools & Skills:</strong>
  <br />
  TypeScript, REST APIs, Responsive Design, Git, Zustand (state management)
</p>



      </div>

   
    </main>
  );
}
