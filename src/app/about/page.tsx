'use client';
import { useCounterStore } from '@/store/useCounterStore';

export default function AboutPage() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">🔥 Zustand Counter</h1>
      <p className="text-xl mt-4">Count: {count}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={increase} className="px-4 py-2 bg-green-500 text-white rounded">+ Increase</button>
        <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white rounded">– Decrease</button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
      </div>
    </main>
  );
}
