"use client";

import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";

export function SchedulingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [subject, setSubject] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    whatsapp: "",
    subject: "",
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-appointment", handleOpen);
    return () => window.removeEventListener("open-appointment", handleOpen);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Reset states after a short delay to allow closing animation
    setTimeout(() => {
      setIsSuccess(false);
      setName("");
      setWhatsapp("");
      setSubject("");
      setErrors({ name: "", whatsapp: "", subject: "" });
    }, 300);
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    v = v.slice(0, 11);
    setWhatsapp(v);
    if (errors.whatsapp) setErrors({ ...errors, whatsapp: "" });
  };

  const formatWhatsapp = (val: string) => {
    if (val.length > 7) {
      return `${val.slice(0, 7)}-${val.slice(7)}`;
    }
    return val;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { name: "", whatsapp: "", subject: "" };

    const nameParts = name.trim().split(/\s+/);
    if (nameParts.length < 2) {
      newErrors.name = "Por favor, insira nome e sobrenome.";
      hasError = true;
    }

    if (whatsapp.length !== 11) {
      newErrors.whatsapp = "O número precisa ter exatamente 11 dígitos.";
      hasError = true;
    }

    if (!subject) {
      newErrors.subject = "Por favor, selecione um tipo de consulta.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Success logic
    setIsSuccess(true);
    
    // Auto redirect to home after 3 seconds
    setTimeout(() => {
      closeModal();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-950/60 backdrop-blur-md transition-opacity duration-500" 
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className={cn(
        "relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in-95 duration-500",
        isSuccess ? "py-20" : "px-0"
      )}>
        <button 
          onClick={closeModal}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full transition-all hover:rotate-90"
        >
          <X size={24} />
        </button>

        {!isSuccess ? (
          <div className="px-8 sm:px-16 pb-12 pt-16">
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase mb-4">
                Inicie sua transformação
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">Agende sua Consulta</h2>
              <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">
                Preencha os dados e entraremos em contato para confirmar seu horário.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                {/* Nome */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-900 px-1">Nome Completo</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ex: Maria Oliveira"
                    className={cn(
                      "w-full px-6 py-4 bg-gray-50 border rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:bg-white transition-all",
                      errors.name ? "border-red-400 focus:ring-red-100" : "border-gray-100 focus:border-green-500 focus:ring-green-50"
                    )}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                  />
                  {errors.name && <p className="text-xs font-medium text-red-500 mt-1 ml-1">{errors.name}</p>}
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-sm font-bold text-gray-900 px-1">Número de WhatsApp</label>
                  <input
                    id="whatsapp"
                    type="text"
                    placeholder="4499999-9999"
                    className={cn(
                      "w-full px-6 py-4 bg-gray-50 border rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:bg-white transition-all",
                      errors.whatsapp ? "border-red-400 focus:ring-red-100" : "border-gray-100 focus:border-green-500 focus:ring-green-50"
                    )}
                    value={formatWhatsapp(whatsapp)}
                    onChange={handleWhatsappChange}
                  />
                  {errors.whatsapp && <p className="text-xs font-medium text-red-500 mt-1 ml-1">{errors.whatsapp}</p>}
                </div>

                {/* Tipo de Consulta */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-900 px-1">Objetivo da Consulta</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label 
                      className={cn(
                        "flex items-center justify-between px-6 py-5 border-2 rounded-2xl cursor-pointer transition-all",
                        subject === "ganhar massa muscular" 
                          ? "border-green-600 bg-green-50/50 shadow-inner shadow-green-100" 
                          : "border-gray-100 bg-gray-50/50 text-gray-500 hover:border-gray-200"
                      )}
                    >
                      <div className="flex flex-col text-left">
                        <span className={cn("text-base font-bold", subject === "ganhar massa muscular" ? "text-green-900" : "text-gray-900")}>Hipertrofia</span>
                        <span className="text-xs opacity-70">Ganhar massa muscular</span>
                      </div>
                      <input
                        type="radio"
                        name="subject"
                        value="ganhar massa muscular"
                        className="sr-only"
                        checked={subject === "ganhar massa muscular"}
                        onChange={(e) => {
                          setSubject(e.target.value);
                          if (errors.subject) setErrors({ ...errors, subject: "" });
                        }}
                      />
                      <div className={cn(
                        "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                        subject === "ganhar massa muscular" ? "border-green-600 bg-green-600" : "border-gray-300"
                      )}>
                        {subject === "ganhar massa muscular" && <Check size={12} className="text-white" />}
                      </div>
                    </label>
                    
                    <label 
                      className={cn(
                        "flex items-center justify-between px-6 py-5 border-2 rounded-2xl cursor-pointer transition-all",
                        subject === "perder peso" 
                          ? "border-green-600 bg-green-50/50 shadow-inner shadow-green-100" 
                          : "border-gray-100 bg-gray-50/50 text-gray-500 hover:border-gray-200"
                      )}
                    >
                      <div className="flex flex-col text-left">
                        <span className={cn("text-base font-bold", subject === "perder peso" ? "text-gray-900" : "text-gray-900")}>Emagrecimento</span>
                        <span className="text-xs opacity-70">Perder peso com saúde</span>
                      </div>
                      <input
                        type="radio"
                        name="subject"
                        value="perder peso"
                        className="sr-only"
                        checked={subject === "perder peso"}
                        onChange={(e) => {
                          setSubject(e.target.value);
                          if (errors.subject) setErrors({ ...errors, subject: "" });
                        }}
                      />
                      <div className={cn(
                        "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                        subject === "perder peso" ? "border-green-600 bg-green-600" : "border-gray-300"
                      )}>
                        {subject === "perder peso" && <Check size={12} className="text-white" />}
                      </div>
                    </label>
                  </div>
                  {errors.subject && <p className="text-xs font-medium text-red-500 mt-1 ml-1">{errors.subject}</p>}
                </div>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full py-5 text-lg font-bold shadow-xl shadow-green-900/10 hover:shadow-green-900/20 rounded-2xl"
              >
                Solicitar Agendamento
              </Button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
              <Check size={48} strokeWidth={3} />
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4 px-8">Solicitação Enviada!</h2>
            <p className="text-xl text-gray-600 max-w-md mx-auto px-8 leading-relaxed">
              Obrigado, <span className="text-green-700 font-bold">{name.split(' ')[0]}</span>! <br/>
              Em breve nossa equipe entrará em contato.
            </p>
            <div className="mt-12 text-sm text-gray-400 font-medium">
              Redirecionando para a home...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
