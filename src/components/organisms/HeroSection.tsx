"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/atoms/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const pinnedContent = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoMobileRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    if (!container.current || !pinnedContent.current) return;

    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isMobile } = context.conditions!;
      
      // Initialize ScrollTrigger immediately to reserve page space (pin-spacer)
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const video = isMobile ? videoMobileRef.current : videoRef.current;
          if (video && video.duration) {
            video.currentTime = self.progress * video.duration;
          }
        },
      });
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full h-screen h-[100dvh] flex items-center justify-center bg-off-white"
    >
      {/* Pinned Content Wrapper */}
      <div ref={pinnedContent} className="relative w-full h-full flex items-center justify-center">
        
        {/* Background Video Area */}
        <div className="absolute inset-0 z-0 bg-off-white overflow-hidden">
          {/* Desktop Video */}
          <video
            ref={videoRef}
            src="/videos/hero.mp4"
            className="hidden md:block w-full h-full object-cover object-center"
            playsInline
            muted
            preload="auto"
          />
          {/* Mobile Video */}
          <video
            ref={videoMobileRef}
            src="/videos/hero-mobile.mp4"
            className="block md:hidden w-full h-full object-cover object-center"
            playsInline
            muted
            preload="auto"
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent hidden md:block w-[0%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-transparent md:hidden" />
        </div>

        <div className="relative z-10 w-full h-full max-w-screen-2xl mx-auto px-6 lg:px-16 flex flex-col justify-start md:justify-center items-center md:items-start pt-10 md:pt-0">
          
          {/* Focus Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl mt-8 sm:mt-12 md:mt-0">
            <h1 className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight mb-4">
              Emagreça com método, <span className="text-green-600">sem passar fome.</span>
            </h1>
            <p className="text-base md:text-xl font-body text-gray-800 font-medium mb-6 leading-relaxed max-w-[90%] md:max-w-none">
              Acompanhamento profissional personalizado para emagrecimento e hipertrofia, adaptado à sua realidade.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button onClick={() => window.dispatchEvent(new CustomEvent('open-appointment'))}>
                Agendar Consulta
              </Button>
              <div className="hidden md:flex items-center gap-2 sm:pl-4 mt-4 sm:mt-0">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/40?img=${i + 10}`} alt="Paciente" className="w-10 h-10 rounded-full border-2 border-white shadow-sm hover:-translate-y-1 transition-transform" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-800 ml-2">500+ atendimentos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

}
