import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-beige flex">
        {/* Formulário */}
        <div className="w-3/5 p-8 bg-white flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4} // Corrigido para número
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        <div className="w-2/5 relative overflow-hidden bg-transparent">
          <Image
            src="/imagens/contactImage.png" // Caminho correto
            alt="Descrição da Imagem"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
