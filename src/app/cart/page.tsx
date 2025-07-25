// src/app/cart/page.tsx
'use client'; // Required for interactivity

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '688164360274cedd08ffafeb',
      name: 'SoundCore by Anker Liberty Air 2 Pro',
      price: 129.99,
      quantity: 1,
      image: 'https://m.media-amazon.com/images/I/817nTPMcOsL._AC_UL480_QL65_.jpg'
    },
    {
      id: '788164360274cedd08ffafec',
      name: 'Wireless Charging Pad',
      price: 24.99,
      quantity: 2,
      image: 'https://m.media-amazon.com/images/I/817nTPMcOsL._AC_UL480_QL65_.jpg'
    }
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const shipping = 5.99;
  const total = subtotal + tax + shipping;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
          <Link 
            href="/products" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="hidden md:flex border-b border-gray-200 pb-4 mb-4">
              <div className="w-2/5 font-medium text-gray-900">Product</div>
              <div className="w-1/5 font-medium text-gray-900 text-center">Price</div>
              <div className="w-1/5 font-medium text-gray-900 text-center">Quantity</div>
              <div className="w-1/5 font-medium text-gray-900 text-right">Total</div>
            </div>

            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="py-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col sm:flex-row">
                      <div className="flex-1 md:w-2/5">
                        <h3 className="text-lg font-medium text-gray-900">
                          <Link href={`/product/${item.id}`}>{item.name}</Link>
                        </h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="mt-2 text-sm text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-4 md:mt-0 md:w-1/5 flex md:block items-center justify-center">
                        <span className="md:hidden mr-2 text-gray-500">Price:</span>
                        <span className="text-gray-900">${item.price.toFixed(2)}</span>
                      </div>

                      <div className="mt-4 md:mt-0 md:w-1/5 flex md:block items-center justify-center">
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Decrease quantity</span>
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Increase quantity</span>
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-0 md:w-1/5 flex md:block items-center justify-end">
                        <span className="md:hidden mr-2 text-gray-500">Total:</span>
                        <span className="text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-medium text-gray-900">Total</span>
                  <span className="text-lg font-medium text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700">
                Checkout
              </button>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                  or{' '}
                  <Link href="/products" className="text-blue-600 hover:text-blue-800">
                    Continue Shopping
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}