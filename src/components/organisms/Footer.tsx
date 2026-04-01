import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-green-950 text-green-100 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto border-t border-green-800/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand / Copy */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="text-2xl font-display font-medium text-white tracking-widest">
            NUTRI<span className="font-light">CIONISTA</span>
          </span>
          <p className="text-green-300/60 text-sm h-6">
            &copy; {currentYear} Dra. Nome. Todos os direitos reservados.
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center flex-wrap gap-8 text-sm text-green-200">
          <Link href="#metodo" className="hover:text-white transition-colors">Método</Link>
          <Link href="#autoridade" className="hover:text-white transition-colors">Sobre Mim</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="#contato" className="hover:text-white transition-colors">Contato</Link>
        </div>

        {/* Socials */}
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-800 transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-800 transition-colors" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-800 transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
