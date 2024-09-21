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

  return (
    <>
      <Navbar />

      {/* Setas de navegação */}
      <div style={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-between', transform: 'translateY(-50%)' }}>
        {/* Seta da esquerda (oculta se na primeira página) */}
        {currentPage > 1 && (
          <FaArrowLeft
            size={40}
            onClick={goToPreviousPage}
            style={{ cursor: 'pointer', marginLeft: '20px' }}
          />
        )}
        {/* Seta da direita (oculta se na última página) */}
        {currentPage < totalPages && (
          <FaArrowRight
            size={40}
            onClick={goToNextPage}
            style={{ cursor: 'pointer', marginRight: '20px' }}
          />
        )}
      </div>

      {/* Conteúdo da página */}
      {currentPage === 1 && (
        <div ref={sectionRefs[0]} className="section" style={{ height: '100vh', backgroundColor: '#58d68d', display: 'flex', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
          <div style={{ flex: 6, paddingRight: '20px', maxWidth: '100%', overflowWrap: 'break-word', width: '100%', boxSizing: 'border-box' }}>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px', maxWidth: '100%' }}>Sistema Financeiro</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '100%', overflowWrap: 'break-word' }}>Este projeto em React e TypeScript é uma aplicação de gestão financeira que permite adicionar despesas e receitas...</p>
            <Link href="https://github.com/GabrielVieira-Code/controlefinanceiro" target="_blank" style={{ display: 'inline-block', marginTop: '10px' }}>
              <FaGithub size={30} />
            </Link>
          </div>
          <div style={{ flex: 4 }}>
            <Link href="https://github.com/GabrielVieira-Code/controlefinanceiro" target="_blank">
              <Image src="/imagens/telaSistemaFinanceiros.png" alt="Imagem da Seção 1" width={600} height={400} style={{ maxWidth: '100%', height: 'auto' }} />
            </Link>
          </div>
        </div>
      )}

      {currentPage === 2 && (
        <div ref={sectionRefs[1]} className="section" style={{ height: '100vh', backgroundColor: '#C1E1FF', display: 'flex', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
          <div style={{ flex: 6, paddingRight: '20px', maxWidth: '100%', overflowWrap: 'break-word', width: '100%', boxSizing: 'border-box' }}>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px', maxWidth: '100%' }}>Envio de email marketing</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '100%', overflowWrap: 'break-word' }}>Este projeto, feito com HTML, CSS, JavaScript e Node.js, cria um sistema de inscrição por e-mail...</p>
            <Link href="https://github.com/GabrielVieira-Code/DesafioFrontEnd-NewsLetter" target="_blank" style={{ display: 'inline-block', marginTop: '10px' }}>
              <FaGithub size={30} />
            </Link>
          </div>
          <div style={{ flex: 4 }}>
            <Link href="https://github.com/GabrielVieira-Code/DesafioFrontEnd-NewsLetter" target="_blank">
              <Image src="/imagens/telasistemadeemails.png" alt="Imagem da Seção 2" width={600} height={400} style={{ maxWidth: '100%', height: 'auto' }} />
            </Link>
          </div>
        </div>
      )}

      {currentPage === 3 && (
        <div ref={sectionRefs[2]} className="section" style={{ height: '100vh', backgroundColor: '#f1c40f', display: 'flex', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
          <div style={{ flex: 6, paddingRight: '20px', maxWidth: '100%', overflowWrap: 'break-word', width: '100%', boxSizing: 'border-box' }}>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px', maxWidth: '100%' }}>Sistema que organiza tarefas</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '100%', overflowWrap: 'break-word' }}>Este projeto em React e TypeScript é uma aplicação de organização de tarefas que permite adicionar, editar, marcar como concluídas e remover tarefas...</p>
            <Link href="https://github.com/GabrielVieira-Code/CheckListProject" target="_blank" style={{ display: 'inline-block', marginTop: '10px' }}>
              <FaGithub size={30} />
            </Link>
          </div>
          <div style={{ flex: 4 }}>
            <Link href="https://github.com/GabrielVieira-Code/CheckListProject" target="_blank">
              <Image src="/imagens/telasistemadetarefass.png" alt="Imagem da Seção 3" width={600} height={400} style={{ maxWidth: '100%', height: 'auto' }} />
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
