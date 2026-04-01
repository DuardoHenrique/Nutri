"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import nutriImg from "@/assets/nutri.jpeg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AuthoritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" }
    ).fromTo(
      textRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <section id="autoridade" ref={sectionRef} className="w-full bg-surface-alt py-24 sm:py-80 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Image Side */}
        <div ref={imageRef} className="w-full lg:w-1/2 relative group">
          {/* 3D Offset Background Element */}
          <div className="absolute -left-3 -bottom-3 w-full h-full bg-green-500 rounded-3xl -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
          
          <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl bg-green-50 z-10">
            <Image 
              src={nutriImg} 
              alt="Dra. Leticia"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            /> 
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-green-600/10 rounded-full blur-3xl -z-20" />
        </div>

        {/* Text Side */}
        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col space-y-6">
          <span className="text-green-700 font-semibold tracking-wide uppercase text-sm">Quem sou eu</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
            Prazer, Dra. Leticia
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Sou nutricionista clínica e esportiva, apaixonada por transformar vidas através da alimentação real.
            </p>
            <p>
              Com mais de <strong>7 anos de experiência</strong> clínica e <strong>milhares de pacientes</strong> atendidos, 
              desenvolvi uma metodologia que une ciência, comportamento e resultados visíveis.
            </p>
            <p>
              Minha missão não é te entregar um papel com restrições, mas sim te ensinar a ter autonomia alimentar, 
              fazendo com que o seu corpo trabalhe a seu favor — seja para o emagrecimento ou para a hipertrofia.
            </p>
          </div>
          
          <div className="pt-6">
            <Button 
              className="w-full sm:w-auto shadow-xl shadow-green-900/10 hover:shadow-green-900/20"
              onClick={() => window.dispatchEvent(new CustomEvent('open-appointment'))}
            >
              Quero agendar minha consulta
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
