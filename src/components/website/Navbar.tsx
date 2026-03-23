'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">CarePlus Hospital</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Dashboard
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            <Link href="/dashboard" className="block px-3 py-2 bg-blue-600 text-white rounded-lg">Dashboard</Link>
          </div>
        </div>
      )}
    </nav>
  );
}