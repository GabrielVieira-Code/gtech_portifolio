import Image from 'next/image';
import Navbar from "./components/nav";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="w-2/5 p-4 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">Título Aqui</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Nulla facilisi. Nullam egestas ligula in ex hendrerit, nec consequat lorem sodales.
          </p>
        </div>
        <div className="w-3/5 relative">
        <Image
  src="/imagens/HomeIMG.png" // Caminho correto
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
