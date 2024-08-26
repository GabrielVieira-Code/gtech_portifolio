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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                aria-describedby="helper-text-explanation"
                required
                placeholder="name@flowbite.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Leave a comment..."
                required
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
