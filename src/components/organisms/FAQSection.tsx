"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "Como funciona a consulta online vs presencial?",
    answer: "A consulta online tem exatamente a mesma duração e qualidade da presencial. As únicas diferenças são que você fará de onde estiver, e as medidas corporais serão orientadas para que você mesmo(a) tire em casa ou faremos por fotos de acompanhamento. Ambas garantem o mesmo resultado."
  },
  {
    question: "Vou precisar cortar doces e bebida alcoólica?",
    answer: "De forma alguma. O princípio do nosso método é a flexibilidade com inteligência. Você vai aprender como e quando incluir os alimentos que mais gosta na sua rotina, sem estragar os seus resultados."
  },
  {
    question: "Em quanto tempo vou começar a ver resultados?",
    answer: "Ista varia conforme o seu ponto de partida e engajamento. No entanto, é muito comum que nas primeiras 2 a 3 semanas nossos pacientes já relatem melhora significativa no sono, energia, inchaço e funcionamento do intestino, além das primeiras mudanças estéticas."
  },
  {
    question: "O plano alimentar é difícil de seguir?",
    answer: "Não! O plano é construído COM você, baseado na sua realidade financeira e rotina. Não prescrevo alimentos difíceis de encontrar ou refeições impossíveis para quem não tem tempo de cozinhar."
  },
  {
    question: "Como funciona o suporte pós-consulta?",
    answer: "Você terá acesso direto pelo WhatsApp para tirar dúvidas sobre o plano e orientações rápidas durante todo o período até o seu próximo retorno."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll('.faq-item');

    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="w-full bg-surface-alt py-24 sm:py-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold tracking-wide uppercase text-sm">Tire suas dúvidas</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mt-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={cn(
                  "faq-item bg-white border rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen ? "border-green-200 shadow-md" : "border-gray-200 hover:border-green-200/50"
                )}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg font-body font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                    isOpen ? "bg-green-100 text-green-700 rotate-180" : "bg-gray-100 text-gray-500"
                  )}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
