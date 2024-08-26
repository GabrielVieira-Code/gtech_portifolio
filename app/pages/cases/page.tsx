"use client";

import Link from "next/link";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Cases() {
  const [scrollY, setScrollY] = useState(0);

  const parallaxStyle = useSpring({
    transform: `translateY(${scrollY * 0.5}px)`,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 py-8 px-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Texto ao lado da imagem */}
          <div className="flex-1 min-w-[300px]">
            <h1 className="text-4xl font-bold text-center text-black mb-4">
              Texto Descritivo
            </h1>
            <p className="text-lg text-center text-gray-700">
              Este é um texto descritivo ao lado das imagens com efeito parallax. Você pode ajustar o conteúdo e o estilo conforme necessário.
            </p>
          </div>

          {/* Imagens com efeito parallax */}
          <div className="flex-1 min-w-[300px]">
            <animated.div style={parallaxStyle} className="relative mb-8">
              <Image
                src="/imagens/notebookmockup.png"
                alt="Carro"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </animated.div>
            <animated.div style={parallaxStyle}>
              <Image
                src="/images/scale/motorcycle.png"
                alt="Motocicleta"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </animated.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
