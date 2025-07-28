'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';

interface Suggestion {
  name: string;
  slug: string;
  _id: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
const cartCount = cart.reduce((total, item) => total + item.quantity, 0);


  // Debounced fetch
  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (searchQuery.trim().length >= 2) {
        const res = await fetch(`/api/products/suggestions?query=${searchQuery}`);
        const data = await res.json();
        setSuggestions(data);
        setShowDropdown(true);
      } else {
        setSuggestions([]);
        setShowDropdown(false);
      }
    }, 250);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (slug: string, id: string) => {
    router.push(`/products/${slug}/${id}`);
    setSearchQuery('');
    setShowDropdown(false);
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

          {/* Search Box */}
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

            {/* 🔍 Autocomplete Dropdown */}
            {showDropdown && suggestions.length > 0 && (
              <ul className="absolute z-20 bg-white border border-gray-200 w-full mt-1 rounded shadow">
                {suggestions.map((s) => (
                  <li
                    key={s._id}
                    onClick={() => handleSuggestionClick(s.slug, s._id)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {s.name}
                  </li>
                ))}
              </ul>
            )}
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {['/', '/products', '/about', '/login', '/cart'].map((path) => (
              <Link 
                key={path} 
                href={path} 
                className="text-gray-900 hover:text-blue-600 capitalize relative"
              >
                {path === '/' ? 'Home' : path.slice(1)}
                {path === '/cart' && cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
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
          <div className="md:hidden bg-white p-4 flex gap-4 border-t">
            {['/', '/products', '/about', '/login',  '/cart'].map((path) => (
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
