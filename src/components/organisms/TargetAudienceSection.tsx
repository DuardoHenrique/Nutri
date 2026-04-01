"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const forWhom = [
  "Pessoas que já tentaram várias dietas sem sucesso duradouro",
  "Profissionais com rotinas corridas que precisam de praticidade",
  "Homens e mulheres buscando hipertrofia comendo comida de verdade",
  "Quem deseja melhorar a saúde e curar a relação com a comida",
];

const notForWhom = [
  { 
    title: "Não é para quem", 
    items: ["Quem busca fórmulas mágicas ou resultados da noite para o dia", "Quem procura apenas uma 'receita pronta' sem acompanhamento"],
    rotation: "md:-rotate-[3deg] -rotate-[1deg]",
    position: "md:top-12 md:left-4 lg:left-12",
  },
  { 
    title: "Não é para quem", 
    items: ["Pessoas que não estão dispostas a mudar pequenos hábitos"],
    rotation: "md:-rotate-[4deg] rotate-[1deg]",
    position: "md:bottom-16 md:left-8 lg:left-20",
  },
  { 
    title: "Não é para quem", 
    items: ["Adeptos de dietas extremamente restritivas e insustentáveis"],
    rotation: "md:rotate-[4deg] -rotate-[1deg]",
    position: "md:top-24 md:right-4 lg:right-12",
  },
  { 
    title: "Não é para quem", 
    items: ["Pessoas que buscam dietas restritivas e noite para o dia"],
    rotation: "md:rotate-[3deg] rotate-[1deg]",
    position: "md:bottom-20 md:right-8 lg:right-20",
  },
];

export function TargetAudienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const mainCard = sectionRef.current.querySelector('.main-card');
    const bgCards = sectionRef.current.querySelectorAll('.bg-card');

    // Fade in do título
    gsap.fromTo(
      sectionRef.current.querySelector('.header-text'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animação dos cards de fundo (dispersão)
    gsap.fromTo(
      bgCards,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 0.6,
        scale: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );

    // Animação do card principal (foco)
    gsap.fromTo(
      mainCard,
      { opacity: 0, scale: 0.9, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );

    // Efeito de flutuação suave no card principal
    if (window.innerWidth >= 768) {
      gsap.to(mainCard, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#FCFCFA] py-24 sm:py-32 px-6 lg:px-12 overflow-hidden relative">
      {/* Background Decorative Gradients */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--color-green-100)_0%,_transparent_70%)] blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(90,158,82,0.05)_0%,_transparent_70%)] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="text-center mb-12 header-text">
          <span className="text-green-700 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">Para Quem É</span>
          <h2 className="text-4xl sm:text-5xl font-display font-medium text-gray-900 leading-tight">
            Este acompanhamento é para você?
          </h2>
        </div>

        {/* Cards Container */}
        <div ref={containerRef} className="relative w-full max-w-5xl mt-8 md:h-[650px] flex flex-col md:block items-center justify-center gap-6">
          
          {/* Background Selection Cards (Scattered) */}
          {notForWhom.map((card, idx) => (
            <div 
              key={idx}
              className={`bg-card bg-gray-50/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-lg md:absolute z-0 w-full md:max-w-xs transition-all duration-500 hover:z-40 hover:opacity-100 overflow-hidden group ${card.position} ${card.rotation}`}
            >
              {/* Large Watermark X */}
              <div className="absolute -top-4 -right-4 opacity-[0.05] text-gray-900 transition-transform duration-700 group-hover:scale-110 pointer-events-none">
                <X size={140} strokeWidth={1} />
              </div>

              <h3 className="text-lg font-display font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="bg-gray-200/50 text-gray-500 rounded-full p-1"><X size={14} /></span>
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <X className="text-gray-300 shrink-0 mt-1" size={16} />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Central Success Card */}
          <div className="main-card bg-white rounded-[2.5rem] p-8 sm:p-12 border border-green-100 shadow-[0_20px_60px_-15px_rgba(60,80,55,0.15)] relative z-20 w-full md:max-w-xl md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-[linear-gradient(135deg,_#fff_0%,_#f1f9f2_100%)] overflow-hidden">
            
            {/* Lindo selo de Check no fundo */}
            <div className="absolute top-10 right-10 opacity-[0.04] text-green-600 pointer-events-none">
              <Check size={280} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-green-900 mb-10 flex items-center gap-4">
                <span className="bg-green-100 text-green-600 rounded-full p-2"><Check size={28} /></span>
                É para quem
              </h3>
              <ul className="space-y-6">
                {forWhom.map((item, idx) => (
                  <li key={idx} className="flex gap-5 group/item">
                    <div className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center transition-colors duration-300 group-hover/item:bg-green-100">
                      <Check className="text-green-600" size={14} />
                    </div>
                    <span className="text-green-950 font-medium text-base sm:text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle glow border effect */}
            <div className="absolute inset-0 border-[3px] border-transparent bg-gradient-to-br from-green-200/20 via-transparent to-green-100/10 rounded-[2.5rem] pointer-events-none" />
          </div>

        </div>

        {/* Requisito Mobile: Dica Visual de Scroll */}
        <div className="mt-16 text-center md:hidden">
          <p className="text-gray-400 text-sm italic">Todos os detalhes acima são fundamentais para seu sucesso.</p>
        </div>
      </div>
    </section>
  );
}
