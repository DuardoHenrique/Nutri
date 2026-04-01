"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="contato" className="w-full bg-surface-alt py-24 sm:py-80 px-6 lg:px-12">
      <div ref={sectionRef} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col space-y-10">
          <div>
            <span className="text-green-700 font-semibold tracking-wide uppercase text-sm">Onde me encontrar</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-4">
              Atendimento Presencial e Online
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
              Atendo de forma presencial em minha clínica ou no conforto da sua casa através de consultas online para todo o mundo.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-green-700">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Endereço</h4>
                <p className="text-gray-600 mt-1">Av. Paulista, 1578 - Bela Vista<br />São Paulo, SP - 01310-200</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-green-700">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                <p className="text-gray-600 mt-1">+55 (11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-green-700">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">E-mail</h4>
                <p className="text-gray-600 mt-1">contato@nutricionista.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-green-700">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Horário de Atendimento</h4>
                <p className="text-gray-600 mt-1">Segunda a Sexta: 08h às 19h<br />Sábados: 09h às 13h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Map Iframe */}
        <div className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-200">
           {/* Iframe do MASP, Av. Paulista, São Paulo (Substitua se necessário pela clínica real) */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197321597841!2d-46.66100192383893!3d-23.561343761592652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            title="Localização do Consultório"
            className="w-full h-full grayscale opacity-90 contrast-125"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
