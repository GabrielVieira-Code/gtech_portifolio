
import Navbar from "./components/nav";

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
          <img
            src="/path-to-your-image.jpg" // Substitua pelo caminho real da sua imagem
            alt="Descrição da Imagem"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
