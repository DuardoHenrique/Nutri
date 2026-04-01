"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  "Emagrecer com aderência e sem oscilações de humor",
  "Ganhar massa com planejamento inteligente",
  "Comer bem sem a sensação de sacrifício",
  "Ter mais energia e disposição no dia a dia",
  "Um plano adaptado à sua rotina, não o contrário",
  "Confiança para manter os resultados a longo prazo"
];

export function BenefitsSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section 
      className="w-full py-24 sm:py-80 px-6 lg:px-12 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background-beneficios.jpeg')" }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-green-950 mb-16 text-center text-balance">
          O que muda na sua vida com o plano certo
        </h2>
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {benefits.map((benefit, idx) => {
            const plateId = (idx % 6) + 1;
            return (
              <div key={idx} className="bg-green-100/40 backdrop-blur-xl flex flex-col gap-8 h-full items-center text-center sm:items-start sm:text-left overflow-hidden rounded-[2.5rem] p-10 shadow-lg border border-white/30 hover:bg-green-100/50 transition-colors group">
                <div className="relative w-32 h-32 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={`/assets/plate-${plateId}.png`}
                    alt="Nutrição"
                    className="w-full h-full object-contain animate-spin-slow drop-shadow-2xl"
                  />
                </div>
                <p className="text-green-950 font-bold leading-tight text-xl md:text-2xl">{benefit}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
