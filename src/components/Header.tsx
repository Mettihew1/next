'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Updated import

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white shadow-sm top-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 mx-1">
              Eesy
            </Link>
          </div>

          {/* Search Form */}
          <div className="relative flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch}>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-20 py-2 border border-black rounded-full"
                placeholder="Search..."
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none">
                <option>All</option>
              </select>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['/', '/about', '/products', '/contact', '/cart'].map((path) => (
              <Link 
                key={path} 
                href={path} 
                className="text-gray-900 hover:text-blue-600 capitalize"
              >
                {path === '/' ? 'Home' : path.slice(1)}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 px-1">
              <Menu className="h-6 w-6 mt-[8px]" /> 
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white p-4 flex  gap-4 border-t">
            {['/', '/about', '/products', '/contact', '/cart'].map((path) => (
              <Link 
                key={path} 
                href={path} 
                className="text-gray-900 hover:text-blue-600 capitalize"
                onClick={() => setIsOpen(false)}
              >
                {path === '/' ? 'Home' : path.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}