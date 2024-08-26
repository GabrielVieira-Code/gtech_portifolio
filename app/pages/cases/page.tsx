"use client";

import Link from "next/link";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Cases() {
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Refs for the sections
  const section2Ref = useRef<HTMLDivElement>(null);

  // Parallax effect for section 1
  const parallaxStyle1 = useSpring({
    transform: `translateY(${scrollY * 0.5}px)`,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  // Parallax effect for section 2
  const parallaxStyle2 = useSpring({
    transform: `translateY(${scrollY * 0.5}px)`,
    config: { mass: 1, tension: 120, friction: 14 },
    opacity: isInView ? 1 : 0, // Section 2 only visible when in view
  });

  // Handle scroll and update scrollY
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Observe visibility of section 2
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => {
      if (section2Ref.current) {
        observer.unobserve(section2Ref.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <div id="section1" className="flex flex-col items-center justify-center min-h-screen bg-blue-200 py-8 px-4">
          <animated.div style={parallaxStyle1} className="flex w-full max-w-screen-lg">
            {/* Texto ao lado da imagem */}
            <div className="flex-1 min-w-[300px] px-4">
              <h1 className="text-4xl font-bold text-black mb-4">
                Texto Descritivo
              </h1>
              <p className="text-lg text-gray-700">
                Este é um texto descritivo ao lado das imagens com efeito parallax. Você pode ajustar o conteúdo e o estilo conforme necessário.
              </p>
            </div>

            {/* Imagem */}
            <div className="flex-1 min-w-[300px] relative">
              <Image
                src="/imagens/notebookmockup.png"
                alt="Notebook"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </animated.div>
        </div>
        <div id="section2" ref={section2Ref} className="flex flex-col items-center justify-center min-h-screen bg-blue-200 py-8 px-4">
          <animated.div style={parallaxStyle2} className="flex w-full max-w-screen-lg">
            {/* Texto ao lado da imagem */}
            <div className="flex-1 min-w-[300px] px-4">
              <h1 className="text-4xl font-bold text-black mb-4">
                Texto Descritivo
              </h1>
              <p className="text-lg text-gray-700">
                Este é um texto descritivo ao lado das imagens com efeito parallax. Você pode ajustar o conteúdo e o estilo conforme necessário.
              </p>
            </div>

            {/* Imagem */}
            <div className="flex-1 min-w-[300px] relative">
              <Image
                src="/imagens/notebookmockup.png"
                alt="Notebook"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </animated.div>
        </div>
        <div id="section3" ref={section2Ref} className="flex flex-col items-center justify-center min-h-screen bg-blue-200 py-8 px-4">
          <animated.div style={parallaxStyle2} className="flex w-full max-w-screen-lg">
            {/* Texto ao lado da imagem */}
            <div className="flex-1 min-w-[300px] px-4">
              <h1 className="text-4xl font-bold text-black mb-4">
                Texto Descritivo
              </h1>
              <p className="text-lg text-gray-700">
                Este é um texto descritivo ao lado das imagens com efeito parallax. Você pode ajustar o conteúdo e o estilo conforme necessário.
              </p>
            </div>

            {/* Imagem */}
            <div className="flex-1 min-w-[300px] relative">
              <Image
                src="/imagens/notebookmockup.png"
                alt="Notebook"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </animated.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
