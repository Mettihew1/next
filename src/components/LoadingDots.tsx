'use client';

export default function LoadingDots() {
  return (
    <div className="flex space-x-2 justify-center items-center h-16">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" />
    </div>
  );
}
