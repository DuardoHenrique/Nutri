"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  { text: "Perdi 8kg sem tirar o que gosto.", author: "Carolina M." },
  { text: "Finalmente um plano que consigo seguir.", author: "Rodrigo T." },
  { text: "Mais energia e disposição o dia inteiro.", author: "Fernanda L." },
  { text: "Resultados reais em 3 meses de acompanhamento.", author: "Marcus S." },
  { text: "O melhor investimento que já fiz em mim.", author: "Juliana R." },
];

export function SocialProofSection() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tickerRef.current) return;

    const animation = gsap.to(tickerRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 40,
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  // Double the array to allow seamless scrolling
  const items = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-white py-8 border-y border-gray-100 overflow-hidden relative">
      <div 
        className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
      />
      <div className="flex w-max" ref={tickerRef}>
        {items.map((t, idx) => (
          <div key={idx} className="flex items-center gap-4 px-12">
            <p className="text-gray-900 font-medium whitespace-nowrap">"{t.text}"</p>
            <span className="text-gray-400 font-light text-sm">— {t.author}</span>
            <div className="w-2 h-2 rounded-full bg-green-300 ml-8" />
          </div>
        ))}
      </div>
      <div 
        className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
      />
    </section>
  );
}
