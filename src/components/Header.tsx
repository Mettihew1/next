'use client'; // Mark as Client Component

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from "lucide-react";

import { Search } from 'lucide-react';

const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
  ev.preventDefault()
  alert('yeay')
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm top-0 z-10">
      <nav className="max-w-7xl mx-auto px- sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 mx-1">
              Eesy
            </Link>
          </div>

<div className="relative">
  <form onSubmit={(ev) => handleSubmit(ev)}>

  <input type="text" className="pl-10 border border-black rounded-full"/>

  <div className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-400">
    <Search className="w-5 h-5" color='black'/>
  </div>

  <select className="absolute right-1 top-1/8"><option>All</option></select>

  </form>
</div>

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
            <Link href="/cart" className="text-gray-900 hover:text-blue-600">
              cart
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 px-1"
            >
            <Menu className="h-6 w-6 mt-[8px]"  /> 
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
        <header className="bg-yellow p-4 flex gap-6"> 
          <Link href="/" className="text-white-600 font-bold hover:underline">Home</Link> 
          <Link href="/about" className="text-yellow-600 font-bold hover:underline">About</Link> 
        </header> 
        )}
      </nav>
    </header>
  );
}