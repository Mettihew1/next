import Image from 'next/image';
import { Atom, Github, Mail, Linkedin, Sparkles } from 'lucide-react';


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
    description: 'Switched from Context to Zustand',
    timestamp: 'Jan 2025',
  },
  {
    title: 'Next.js | TypeScript',
    emoji: '💻',
    description: 'Started building eesy.ir with Next.js & TypeScript',
    timestamp: 'Jan 2025',
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto py-10 px-4 text-gray-700">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">🦁 Mettihew — Dev by Day, Philosopher by Night</h1>
        <div className="space-y-4 leading-relaxed">
          <p>I’m just a guy who learned English from YouTube pranks and coding from late-night chaos.</p>
          <p>
            Built my own e-commerce project with
            <code className="bg-gray-100 px-1 rounded text-sm mx-1">Next.js</code>,
            <code className="bg-gray-100 px-1 rounded text-sm mx-1">TypeScript</code>,
            <code className="bg-gray-100 px-1 rounded text-sm mx-1">MongoDB</code>, and
            <code className="bg-gray-100 px-1 rounded text-sm mx-1">Tailwind</code> — solo at first,
            now with a best friend named Emily (AI, not human… yet).
          </p>
          <div>
            <h2 className="font-semibold text-lg text-gray-800">🚀 What I’m Working On:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🔍 Amazon-style search & filter for products</li>
              <li>🛒 Zustand-based cart with localStorage sync</li>
              <li>❤️ Clean UI that doesn’t look like a “butt checkout button”</li>
              <li>🧠 Learning project management, GitHub Issues, and staying consistent</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg text-gray-800">🔧 Stack I Love:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><code className="bg-gray-100 px-1 rounded text-sm">Next.js</code> + App Router</li>
              <li><code className="bg-gray-100 px-1 rounded text-sm">Tailwind CSS</code></li>
              <li><code className="bg-gray-100 px-1 rounded text-sm">MongoDB</code></li>
              <li><code className="bg-gray-100 px-1 rounded text-sm">Zustand</code></li>
              <li>Typing fast and breaking things faster</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg text-gray-800">🎭 Not Just Code:</h2>
            <p>
              I joke, I love, I ask weird questions, I mess up, and I get up. Not native in English,
              but I <em className="italic">talk like I feel</em>, not like a textbook.
            </p>
            <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-600">
              “Sometimes my head gets ahead of my fingers. Sometimes my fingers.” — me
            </blockquote>
            <p className="text-lg font-medium">Let’s build. Let’s vibe. Let’s get real.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📜 Recent Updates</h2>
        <div className="grid gap-2">
          {values.map((value) => (
            <div key={value.title} className="p-4 border rounded-lg shadow-sm bg-white text-center">
              <div className="flex items-center justify-center gap-4">
              <div className="text-3xl mb-2">{value.emoji}</div>
              <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{value.timestamp}</p>
              </div>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">📇 Contact</h2>
        <div className="space-y-2 text-gray-600">

          <div className='flex items-center gap-4'>
          <Image src={'/fav.ico'} alt="Me" width={60} height={60} className="rounded-full" />
          <p>Mahdi Keramati</p>
          </div>
         

    <div className="flex items-center justify-center gap-6 text-blue-600 text-sm ">
      <Image src="/fav.ico" alt="Me" width={40} height={40} className="rounded-full" />

      <a href="mailto:youremail@example.com" className="hover:underline flex items-center gap-1">
        <Mail className="w-4 h-4" />
        Email
      </a>

      <a href="https://github.com/mettihew" target="_blank" className="hover:underline flex items-center gap-1">
        <Github className="w-4 h-4" />
        GitHub
      </a>

      <a href="https://linkedin.com/in/mettihew" target="_blank" className="hover:underline flex items-center gap-1">
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </a>

      <span className="flex items-center gap-1">
        <Atom className="w-4 h-4 text-cyan-500" />
        React
      </span>

      <span className="flex items-center gap-1">
        <Sparkles className="w-4 h-4 text-pink-400" />
        Zustand
      </span>
    </div>


        </div>
      </section>







    </main>
  );
}
