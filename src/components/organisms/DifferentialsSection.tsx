"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Stethoscope, Brain, Utensils, HeartPulse } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const differentials = [
  {
    icon: <Stethoscope className="w-8 h-8 text-green-700" />,
    title: "Abordagem Baseada em Ciência",
    text: "Nada de achismos. Estratégias fundamentadas nos estudos mais recentes de nutrição e fisiologia.",
  },
  {
    icon: <Brain className="w-8 h-8 text-green-700" />,
    title: "Foco no Comportamento",
    text: "Não basta saber o que comer; é preciso entender por que comemos. Trabalhamos sua relação com a comida.",
  },
  {
    icon: <Utensils className="w-8 h-8 text-green-700" />,
    title: "Sem Restrições Absurdas",
    text: "O plano se adapta à sua vida social e preferências. Você não vai deixar de comer o que gosta.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-green-700" />,
    title: "Suporte Premium",
    text: "Acesso contínuo para tirar dúvidas e adaptar a estratégia ao longo do processo, sem esperar o próximo retorno.",
  },
];

export function DifferentialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll('.diff-item');

    gsap.fromTo(
      items,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full bg-white py-24 sm:py-80 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Video */}
        <div className="relative h-full min-h-[400px] lg:min-h-0 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
            src="/videos/background-diferencial.mp4"
          />
          {/* Subtle Overlay to match premium aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Floating badge for branding - minimal text as requested */}
          <div className="absolute bottom-6 left-6 flex flex-col items-start gap-1">
            <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">O Diferencial</span>
            <div className="h-0.5 w-12 bg-green-500 rounded-full" />
          </div>
        </div>

        {/* Right: Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {differentials.map((diff, idx) => (
            <div key={idx} className="diff-item flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-16 w-16 rounded-2xl bg-green-50 flex items-center justify-center mb-8 shadow-inner ring-1 ring-green-100">
                {diff.icon}
              </div>
              <h3 className="text-xl font-body font-bold text-gray-900 mb-4">{diff.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base font-medium opacity-90">{diff.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
