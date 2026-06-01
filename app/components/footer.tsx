'use client'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-800 to-blue-950 text-white">

      {/* Corpo principal */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Coluna 1 — Marca */}
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-extrabold tracking-wide">GTECH</span>
          <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
            Soluções digitais sob medida para o seu negócio — do design ao deploy.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/GabrielVieira-Code" target="_blank" rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/gabrielvieirasantos/" target="_blank" rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition-colors" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Coluna 2 — Navegação */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-1">
            Navegação
          </h3>
          <Link href="/" className="text-blue-100 hover:text-white text-sm transition-colors">
            Home
          </Link>
          <Link href="/pages/cases" className="text-blue-100 hover:text-white text-sm transition-colors">
            Soluções
          </Link>
          <Link href="/pages/contact" className="text-blue-100 hover:text-white text-sm transition-colors">
            Contato
          </Link>
        </div>

        {/* Coluna 3 — CTA */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-1">
            Vamos conversar?
          </h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            Tem um projeto em mente? Entre em contato e transforme sua ideia em realidade.
          </p>
          <Link
            href="/pages/contact"
            className="self-start bg-white text-blue-800 text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-100 transition-colors"
          >
            Falar com a GTECH
          </Link>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-blue-400 text-xs">
          <span>© {year} GTECH. Todos os direitos reservados.</span>
          <span>Desenvolvido com Next.js + AWS</span>
        </div>
      </div>

    </footer>
  );
}
