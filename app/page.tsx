"use client";
import Image from "next/image";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
      <SpeedInsights />
      <Navbar />
      <main className="min-h-[calc(100vh-64px)]"> {/* ajusta se navbar tiver outra altura */}
        <section className="flex h-screen">
          {/* Left column - hero text */}
          <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white relative flex items-center">
            <div className="max-w-3xl px-8 md:px-16 py-16 md:py-32">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                Transformamos
                <span className="block">suas ideias em</span>
                <span className="block">soluções digitais</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-blue-200 max-w-xl">
                Desenvolvimento de websites, aplicativos e sistemas customizados.
                Entregamos produtos com qualidade, performance e design centrado
                no usuário.
              </p>

              <div className="mt-8">
                <a
                  href="#contato"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-xl hover:translate-y-[-2px] transform transition"
                >
                  Solicite um Orçamento
                </a>
              </div>

              {/* Feature icons */}
              <div className="mt-12 flex gap-8 items-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center shadow-lg">
                    {/* Icon Web */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white/90">
                      <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 6h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                      <path d="M3 18h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-semibold text-white">Web</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-xl">
                    {/* Icon Mobile */}
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-white">
                      <rect x="7" y="3" width="10" height="18" rx="2" stroke="white" strokeWidth="1.5"/>
                      <path d="M12 18h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-semibold text-white">Mobile</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center shadow-lg">
                    {/* Icon Sistemas */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white/90">
                      <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="mt-3 text-sm font-semibold text-white">Sistemas</span>
                </div>
              </div>
            </div>

            {/* subtle bottom shadow like the mock */}
            <div className="absolute left-0 bottom-0 w-full h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Right column - illustration */}
          <div className="w-full md:w-1/2 relative min-h-[420px]">
            <div className="absolute inset-0">
              <Image
                // usando o arquivo que você enviou; se mover para public, mude para "/imagens/HomeIMG.png"
                src="/imagens/newHome.png"
  
                alt="Ilustração desenvolvimento"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Overlay dark stripe to replicate o corte vertical do mock (opcional) */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-blue-700/60 to-transparent pointer-events-none" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
