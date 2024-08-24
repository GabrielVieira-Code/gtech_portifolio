'use client'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/pages/cases">Losssgo</Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300">Sobre</Link>
          <Link href="/services" className="text-white hover:text-gray-300">Serviços</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Contato</Link>
        </div>

        {/* Botão do menu móvel */}
        <button className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Menu móvel */}
      <div className="md:hidden">
        <div className="p-4">
          <Link href="/" className="block text-gray-800 hover:text-blue-600">Home</Link>
          <Link href="/about" className="block text-gray-800 hover:text-blue-600">Sobre</Link>
          <Link href="/services" className="block text-gray-800 hover:text-blue-600">Serviços</Link>
          <Link href="/contact" className="block text-gray-800 hover:text-blue-600">Contato</Link>
        </div>
      </div>
    </nav>
  );
}
