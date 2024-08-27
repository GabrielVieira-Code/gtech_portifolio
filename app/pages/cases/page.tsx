"use client";

import Link from "next/link";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Image from 'next/image';
import { useRef } from 'react';

export default function Cases() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  return (
    <>
      <Navbar />

      <div ref={sectionRefs[0]} className="section" style={{ height: '100vh', backgroundColor: '#58d68d', display: 'flex', alignItems: 'center', padding: '20px' }}>
        <div style={{ flex: 6, paddingRight: '20px' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px' }}>Sistema Financeiro</h1>
          <p style={{ fontSize: '1.2rem' }}>Este projeto de estudo, desenvolvido com React e TypeScript, é uma aplicação de gestão financeira que permite aos usuários adicionar despesas e receitas, construir um balanço financeiro e filtrar as transações por mês. O projeto visa fornecer uma interface intuitiva para a entrada de dados financeiros e visualização do saldo, categorizando as transações por período. A aplicação também utiliza componentes reutilizáveis e estados gerenciados para manter o controle preciso das finanças, facilitando a análise e monitoramento do orçamento ao longo do tempo.</p>
        </div>
        <div style={{ flex: 4 }}>
          <Image src="/imagens/telaSistemaFinanceiros.png" alt="Imagem da Seção 1" width={600} height={400} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <div ref={sectionRefs[1]} className="section" style={{ height: '100vh', backgroundColor: '#C1E1FF', display: 'flex', alignItems: 'center', padding: '20px' }}>
        <div style={{ flex: 6, paddingRight: '20px' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px' }}>Envio de email marketing</h1>
          <p style={{ fontSize: '1.2rem' }}>Este projeto de estudo, construído com HTML, CSS, JavaScript e Node.js, tem como objetivo criar um sistema de inscrição por e-mail. O usuário insere seu e-mail em um formulário na interface web, que é validado em tempo real usando JavaScript. Após a validação, o e-mail é enviado para uma API desenvolvida em Node.js, que processa a inscrição. A API, por sua vez, envia um e-mail de confirmação de inscrição de volta ao usuário, garantindo que o processo seja concluído com sucesso. O projeto demonstra a integração entre frontend e backend, focando na validação e envio automatizado de e-mails.</p>
        </div>
        <div style={{ flex: 4 }}>
          <Image src="/imagens/telasistemadeemails.png" alt="Imagem da Seção 2" width={600} height={400} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <div ref={sectionRefs[2]} className="section" style={{ height: '100vh', backgroundColor: '#f1c40f', display: 'flex', alignItems: 'center', padding: '20px' }}>
        <div style={{ flex: 6, paddingRight: '20px' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '20px' }}>Sistema que organiza tarefas</h1>
          <p style={{ fontSize: '1.2rem' }}>
          Este projeto de estudo, desenvolvido com React e TypeScript, é uma aplicação de organização de tarefas. Ele permite que os usuários adicionem, editem, marquem como concluídas e removam tarefas de uma lista. A interface é simples e intuitiva, facilitando a gestão de atividades diárias. O uso de TypeScript garante maior segurança no código, reduzindo erros e melhorando a manutenção. O projeto também pode incluir funcionalidades como categorização de tarefas, definição de prazos e filtragem por status, ajudando os usuários a manterem-se organizados e produtivos.</p>
        </div>
        <div style={{ flex: 4 }}>
          <Image src="/imagens/telasistemadetarefass.png" alt="Imagem da Seção 3" width={600} height={400} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <Footer />
    </>
  );
}
