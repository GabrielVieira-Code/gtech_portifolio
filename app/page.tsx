import Image from 'next/image';
import Navbar from "./components/nav";
import Footer from "./components/footer";
import './globals.css';


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        {/* Contêiner para o texto */}
        <div className="w-full md:w-2/5 flex flex-col justify-center relative p10 md:pt-25 md:pb-20 md:px-8 min-h-screen">
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl font-bold mb-4">Seja bem-vindo ao Portfólio Gtech</h1>
            <p className="text-lg">
              Sou analista e desenvolvedor de sistemas, graduado em análise e desenvolvimento de sistemas pela UNIP. Iniciei minha carreira como suporte técnico e posteriormente atuei como desenvolvedor.
              Tenho conhecimentos em Node, React, HTML, CSS, Java, AWS.
            </p>
          </div>
        </div>
        {/* Contêiner para a imagem */}
        <div className="w-full md:w-3/5 relative flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/imagens/HomeIMG.png"
              alt="Descrição da Imagem"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
