"use client";

import Link from "next/link";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import Image from 'next/image';
import { useRef } from 'react';

export default function Cases() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  return (
    <>
      <Navbar />

      <div ref={sectionRefs[0]} className="section" style={{ height: '100vh', backgroundColor: '#FFDDC1', display: 'flex', alignItems: 'center', padding: '20px' }}>
        <div style={{ flex: 6, paddingRight: '20px' }}>
          <h1>Texto da Seção 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div style={{ flex: 4 }}>
          <Image src="/imagens/notebookmockup.png" alt="Imagem da Seção 1" width={600} height={400} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <div ref={sectionRefs[1]} className="section" style={{ height: '100vh', backgroundColor: '#C1E1FF', display: 'flex', alignItems: 'center', padding: '20px' }}>
        <div style={{ flex: 6, paddingRight: '20px' }}>
          <h1>Texto da Seção 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div style={{ flex: 4 }}>
          <Image src="/imagens/notebookmockup.png" alt="Imagem da Seção 2" width={600} height={400} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <div ref={sectionRefs[2]} className="section" style={{ height: '100vh', backgroundColor: '#D1FFC1', display: 'flex', alignItems: 'center', padding: '20px' }}>
        <div style={{ flex: 6, paddingRight: '20px' }}>
          <h1>Texto da Seção 3</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div style={{ flex: 4 }}>
          <Image src="/imagens/notebookmockup.png" alt="Imagem da Seção 3" width={600} height={400} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <Footer />
    </>
  );
}
