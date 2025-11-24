'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[110px] h-10">
              {/* Ajuste o src conforme seu fluxo:
                  - se for usar o arquivo que enviou direto, deixe "/mnt/data/nav.png"
                  - se mover para public/imagens use "/imagens/logoteste.png" */}
              <Image
                src="/imagens/logoteste.png"
                alt="Gtech - Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-white text-sm md:text-base font-medium hover:text-gray-200">
              Home
            </Link>
            <Link href="/pages/cases" className="text-white text-sm md:text-base font-medium hover:text-gray-200">
              Soluções
            </Link>
            <Link href="/pages/contact" className="text-white text-sm md:text-base font-medium hover:text-gray-200">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
