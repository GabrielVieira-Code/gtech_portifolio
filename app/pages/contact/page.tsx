"use client";

import { useState } from 'react';
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Image from 'next/image';
import { FaUser, FaEnvelope, FaRegCommentDots, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) throw new Error('Failed to send email');

      // show confirmation modal
      handleOpenModal();
      // reset form
      setName(''); setEmail(''); setSubject(''); setMessage('');
    } catch (err) {
      console.error(err);
      // Could show an error modal/message here
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 flex items-center">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Blue card with inner white form */}
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl shadow-xl p-8 lg:p-12">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Entre em Contato</h1>

                <div className="bg-white rounded-xl p-6 shadow-inner">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <label className="sr-only">Nome</label>
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600"><FaUser /></span>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu Nome"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-400 outline-none text-gray-900"
                      />
                    </div>

                    <div className="relative">
                      <label className="sr-only">Email</label>
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600"><FaEnvelope /></span>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Seu Email"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-400 outline-none text-gray-900"
                      />
                    </div>

                    <div className="relative">
                      <label className="sr-only">Assunto</label>
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600"><FaRegCommentDots /></span>
                      <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Assunto"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-400 outline-none text-gray-900"
                      />
                    </div>

                    <div className="relative">
                    <a href="https://www.youtube.com/">testejhgjhghjgjhgjhghjghj teste</a>
                      <label className="sr-only">Mensagem</label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Deixe sua mensagem aqui..."
                        className="w-full pl-4 pr-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-400 outline-none resize-none text-gray-900"
                      />
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-violet-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:opacity-95">
                      Enviar Mensagem
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <div className="flex justify-center gap-6 text-blue-700">
                      <a href="#" aria-label="Facebook"><FaFacebookF size={20} /></a>
                      <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
                      <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
                      <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Illustration card */}
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full h-full max-w-2xl">
                  <div className="relative w-full h-96 lg:h-[36rem]">
                    <Image src="/imagens/new-img-contact.png" alt="Contact illustration" fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleCloseModal}>
          <div className="bg-white rounded-lg p-6 relative max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleCloseModal}>
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-4">Mensagem enviada</h3>
            <p>Obrigado! Sua mensagem foi enviada com sucesso.</p>
          </div>
        </div>
      )}
    </>
  );
}
