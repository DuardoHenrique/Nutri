"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";

import ctaBgImage from "@/assets/cta-final.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTASection() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ctaRef.current) return;
    
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-green-950 py-24 sm:py-32 min-h-[700px] flex items-center">
      {/* Background Image */}
      <Image
        src={ctaBgImage}
        alt="Consulta nutricional com a Nutricionista"
        fill
        sizes="100vw"
        className="object-cover object-[70%_center] md:object-right z-0"
        placeholder="blur"
        quality={100}
      />
      
      {/* Gradient Overlay - Optimized for left readability and crisp right side */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b md:bg-gradient-to-r from-green-950 via-green-950/90 md:via-green-950/80 to-transparent from-20% md:from-0% via-60% md:via-40% md:to-65% opacity-90 md:opacity-100" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-20 flex">
        <div 
          ref={ctaRef}
          className="max-w-xl text-left flex flex-col items-start"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6 sm:mb-8">
            Vagas limitadas por semana
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-display font-bold mb-6 text-white text-balance leading-tight">
            Sua saúde merece um cuidado de verdade.
          </h2>
          
          <p className="text-green-50 text-base sm:text-lg mb-8 max-w-md leading-relaxed opacity-90">
            Avaliação detalhada, plano alimentar planejado para sua rotina real 
            e condução com acolhimento e suporte contínuo.
          </p>

          <ul className="flex flex-col gap-3.5 mb-10 text-sm sm:text-base text-green-100">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
              <span>Atendimento focado na sua qualidade de vida</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
              <span>Rotina alimentar estratégica sem cortes drásticos</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
              <span>Resultados construídos com naturalidade e segurança</span>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              variant="primary" 
              className="bg-orange-500 text-white hover:bg-orange-600 text-base sm:text-lg px-8 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all hover:scale-105 flex items-center justify-center gap-2 group border-none"
              onClick={() => window.dispatchEvent(new CustomEvent('open-appointment'))}
            >
              Agendar avaliação
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <a 
              href="#whatsapp" 
              className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg text-white border border-white/20 hover:bg-white/10 rounded-full font-medium transition-all gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>

          <p className="text-xs text-white/40 mt-6 md:mt-10 font-medium">
            Atendimento presencial focado em resultados reais para sua rotina.
          </p>
        </div>
      </div>
    </section>
  );
}
