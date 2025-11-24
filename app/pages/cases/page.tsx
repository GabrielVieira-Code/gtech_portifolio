"use client";

import Link from "next/link";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Cases() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Slides data to make rendering cleaner
  const slides = [
    {
      title: 'Sistema Financeiro',
      description: 'Gestão completa de finanças corporativas com relatórios em tempo real. Projeto em React/TS para controle de despesas e receitas.',
      image: '/imagens/telaSistemaFinanceiros.png',
      repo: 'https://github.com/GabrielVieira-Code/controlefinanceiro'
    },
    {
      title: 'Envio de email marketing',
      description: 'Sistema de inscrição por e-mail com backend em Node.js — HTML/CSS/JS na interface.',
      image: '/imagens/telasistemadeemails.png',
      repo: 'https://github.com/GabrielVieira-Code/DesafioFrontEnd-NewsLetter'
    },
    {
      title: 'Sistema que organiza tarefas',
      description: 'Aplicação de organização de tarefas em React/TS — adicionar, editar, concluir e remover tarefas.',
      image: '/imagens/telasistemadetarefass.png',
      repo: 'https://github.com/GabrielVieira-Code/CheckListProject'
    }
  ];

  const active = slides[currentPage - 1];

  return (
    <>
      <Navbar />

      <main className="h-screen flex items-center bg-white">
        <div className="relative w-full">
          {/* Arrows */}
          {currentPage > 1 && (
            <button
              aria-label="Previous"
              onClick={goToPreviousPage}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-700 rounded-full p-3 shadow-md ml-2 z-20"
            >
              <FaArrowLeft />
            </button>
          )}

          {currentPage < totalPages && (
            <button
              aria-label="Next"
              onClick={goToNextPage}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-700 rounded-full p-3 shadow-md mr-2 z-20"
            >
              <FaArrowRight />
            </button>
          )}

          {/* Card */}
          <section className="w-full h-screen relative bg-gradient-to-r from-blue-400 to-blue-600 rounded-none shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center h-full">
              {/* Left content */}
              <div className="md:col-span-6 p-10 md:p-24 text-white h-full flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{active.title}</h1>
                <p className="text-lg md:text-xl opacity-90 mb-6">{active.description}</p>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">⚙️</span>
                    <span className="font-medium">Automatize processos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">⏱️</span>
                    <span className="font-medium">Aumente eficiência</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">🔒</span>
                    <span className="font-medium">Controle total</span>
                  </li>
                </ul>

                <div className="flex items-center gap-4">
                  <Link href={active.repo} target="_blank" className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-3 rounded-lg font-semibold shadow-md hover:opacity-95">
                    <FaGithub />
                    Repositório
                  </Link>

                  <Link href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white px-5 py-3 rounded-lg font-semibold shadow-lg hover:from-purple-600">
                    Saiba Mais ↗
                  </Link>
                </div>
              </div>

              {/* Right image */}
              <div className="md:col-span-6 relative p-6 md:p-8 bg-white/0 flex items-center justify-center h-full">
                <Link href={active.repo} target="_blank" className="block rounded-lg overflow-hidden shadow-2xl max-w-full">
                  <Image src={active.image} alt={active.title} width={2000} height={1250} className="w-full max-w-[1200px] lg:max-w-[1400px] h-auto object-contain hidden md:block" />
                  {/* show larger image on mobile */}
                  <Image src={active.image} alt={active.title} width={1200} height={800} className="w-11/12 h-auto object-contain md:hidden" />
                </Link>
              </div>
            </div>
            {/* Dots (positioned inside the section so they don't add height) */}
            <div className="absolute left-0 right-0 bottom-6 flex justify-center items-center gap-3">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full ${currentPage === idx + 1 ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
