import Link from "next/link";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Image from 'next/image';

export default function Cases() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
        {/* Container centralizado para a imagem */}
        <div className="relative flex items-center justify-center w-full h-[65vh] max-w-screen-lg mx-auto mt-8 mb-8">
          {/* Imagem */}
          <div className="absolute inset-0">
            <Image
              src="/imagens/notebookmockup.png"
              alt="Descrição da Imagem"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Título sobre a imagem */}
          <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-center text-black bg-opacity-50 bg-white p-4">
            Título que Se Move
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
