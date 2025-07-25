'use client'; // Mark as Client Component

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Eesy
            </Link>
          </div>

<input placeholder='search' className='bg-black '/>


          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-blue-600">
              About
            </Link>
            <Link href="/products" className="text-gray-900 hover:text-blue-600">
              Products
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-900 hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600">
                About
              </Link>
              <Link href="/products" className="text-gray-900 hover:text-blue-600">
                Products
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}