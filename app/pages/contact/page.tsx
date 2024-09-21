"use client"; // Adicione esta linha no topo do arquivo

import { useState } from 'react';
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Image from 'next/image';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  // Função para abrir o modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const data = await response.json();
      console.log(data.message); // Mensagem de sucesso

      // Fechar o modal após sucesso
      handleOpenModal();

    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-beige flex flex-col lg:flex-row">
        {/* Formulário */}
        <div className="w-full lg:w-3/5 p-8 bg-[rgb(206,230,246)] flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Deixe seu comentário..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar Email
            </button>
          </form>
        </div>

        {/* Container para a imagem */}
        <div className="w-full lg:w-2/5 relative overflow-hidden bg-transparent hidden lg:block">
          <Image
            src="/imagens/contactImage.png"
            alt="Descrição da Imagem"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleCloseModal}>
          <div className="bg-white rounded-lg p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleCloseModal}>
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-4">Funcionalidade não Ativa</h3>
            <p>Esta funcionalidade não está ativa. Por favor, utilize o email para entrar em contato.</p>
          </div>
        </div>
      )}
    </>
  );
}
