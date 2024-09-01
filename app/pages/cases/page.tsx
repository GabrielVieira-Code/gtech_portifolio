"use client";

import Link from "next/link";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Image from 'next/image';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';  // Importação do ícone do GitHub

export default function Cases() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  return (
    <>
      <Navbar />

      <div ref={sectionRefs[0]} className="section" style={{ height: '100vh', backgroundColor: '#58d68d', display: 'flex', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
        <div style={{ flex: 6, paddingRight: '20px', maxWidth: '100%', overflowWrap: 'break-word', width: '100%', boxSizing: 'border-box' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px', maxWidth: '100%' }}>Sistema Financeiro</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '100%', overflowWrap: 'break-word' }}>Este projeto em React e TypeScript é uma aplicação de gestão financeira que permite adicionar despesas e receitas, filtrar transações por mês e visualizar o balanço financeiro. Ele oferece uma interface intuitiva, utiliza componentes reutilizáveis e gerencia estados para um controle preciso das finanças e monitoramento do orçamento.</p>
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

      <div ref={sectionRefs[1]} className="section" style={{ height: '100vh', backgroundColor: '#C1E1FF', display: 'flex', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
        <div style={{ flex: 6, paddingRight: '20px', maxWidth: '100%', overflowWrap: 'break-word', width: '100%', boxSizing: 'border-box' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px', maxWidth: '100%' }}>Envio de email marketing</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '100%', overflowWrap: 'break-word' }}>Este projeto, feito com HTML, CSS, JavaScript e Node.js, cria um sistema de inscrição por e-mail. O usuário insere um e-mail, validado em tempo real via JavaScript, que é enviado a uma API em Node.js para processamento. A API, então, envia um e-mail de confirmação ao usuário. O projeto destaca a integração entre frontend e backend, com foco na validação e envio automatizado de e-mails. </p>
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

      <div ref={sectionRefs[2]} className="section" style={{ height: '100vh', backgroundColor: '#f1c40f', display: 'flex', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
        <div style={{ flex: 6, paddingRight: '20px', maxWidth: '100%', overflowWrap: 'break-word', width: '100%', boxSizing: 'border-box' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px', maxWidth: '100%' }}>Sistema que organiza tarefas</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '100%', overflowWrap: 'break-word' }}>Este projeto em React e TypeScript é uma aplicação de organização de tarefas que permite adicionar, editar, marcar como concluídas e remover tarefas de uma lista. Com uma interface simples e intuitiva, ele facilita a gestão de atividades diárias e garante maior segurança no código com TypeScript. O projeto pode incluir recursos como categorização de tarefas, definição de prazos e filtragem por status.</p>
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

      <Footer />
    </>
  );
}
