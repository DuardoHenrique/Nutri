"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { XCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pains = [
  "Dietas que prometem tudo e não sustentam nada além de frustração",
  "Passar fome o dia inteiro só para comer tudo no final do dia",
  "Regimes que funcionam por 2 semanas e somem depois",
  "A sensação de que seu corpo não responde igual ao dos outros",
  "O cansaço de começar do zero toda segunda-feira",
];

export function PainSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current || !cardsRef.current) return;

    const cards = Array.from(cardsRef.current.children);
    
    // Total scroll duration context
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: containerRef.current,
        anticipatePin: 1,
      },
    });

    // Initial state setup
    gsap.set(cards, { opacity: 0, y: 50, visibility: "hidden" });
    gsap.set(title2Ref.current, { opacity: 0, y: 20, visibility: "hidden" });

    // 1. Cards sequence
    cards.forEach((card, index) => {
      // In
      tl.to(card, {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 1,
        ease: "power2.out",
      });
      
      // Stay
      tl.to({}, { duration: 1.5 }); // pause
      
      // Out (unless it's the last one? actually user said "afterwards disappears to give place to next")
      if (index < cards.length - 1) {
        tl.to(card, {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power2.in",
          onComplete: () => { gsap.set(card, { visibility: "hidden" }); },
        });
      } else {
        // Last card stays or fades with the title
        tl.to(card, {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power2.in",
          delay: 0.5,
          onComplete: () => { gsap.set(card, { visibility: "hidden" }); },
        });
      }
    });

    // 2. Final transition
    tl.to(title1Ref.current, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power2.inOut",
    }, ">-0.5");

    tl.to(title2Ref.current, {
      opacity: 1,
      y: 0,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    }, ">");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[500vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/back-plano.png')" }}
    >
      {/* Overlay to ensure legibility and create contrast for the glass effect */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      <div ref={containerRef} className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden relative z-10">
        <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center min-h-[600px] relative">
          
          {/* Main Title Wrapper */}
          <div className="absolute top-[15%] w-full">
            <h2 
              ref={title1Ref} 
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-green-950 text-center text-balance px-4"
            >
              Você já tentou de tudo e <i className="font-serif">nada funcionou</i> de verdade?
            </h2>
          </div>

          {/* Cards Stack */}
          <div ref={cardsRef} className="relative w-full max-w-2xl h-48 flex items-center justify-center mt-20">
            {pains.map((pain, idx) => (
              <div 
                key={idx} 
                className="absolute w-full glass-premium flex items-start gap-4 p-8 rounded-2xl"
              >
                <XCircle className="text-green-700 mt-1 flex-shrink-0" size={28} />
                <p className="text-xl sm:text-2xl text-green-950 font-body font-medium leading-relaxed">
                  {pain}
                </p>
              </div>
            ))}
          </div>

          {/* Solution Message */}
          <div className="absolute bottom-[20%] w-full flex justify-center">
            <h3 
              ref={title2Ref}
              className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-green-800 text-center px-4 max-w-3xl leading-tight text-balance"
            >
              O problema nunca foi você. <br />
              <span className="text-green-950 font-medium text-lg sm:text-2xl mt-4 block">Foi a falta da estratégia certa.</span>
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
