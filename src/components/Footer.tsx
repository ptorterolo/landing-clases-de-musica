import React from 'react';
import { Music2, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';
import { INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/musicData';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="bg-[#07080D] border-t border-white/10 text-slate-400 text-xs sm:text-sm py-12 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-white font-extrabold tracking-tight">
              <span className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs shadow-md">
                <Music2 className="w-3.5 h-3.5" />
              </span>
              <span className="text-base tracking-wider uppercase">
                PABLO <span className="text-amber-400">TORTEROLO</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              Clases particulares y personalizadas de guitarra, piano, bajo y producción musical. Tocá, creá y grabá tu propia música.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-400/90 pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Buenos Aires (CABA) · Online para todo el mundo</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-1">
              Navegación
            </h4>
            <a href="#clases" className="hover:text-amber-400 transition-colors py-0.5">Clases & Modalidades</a>
            <a href="#metodologia" className="hover:text-amber-400 transition-colors py-0.5">Metodología</a>
            <a href="#discografia" className="hover:text-amber-400 transition-colors py-0.5">Discografía & Spotify</a>
            <a href="#sobre-mi" className="hover:text-amber-400 transition-colors py-0.5">Sobre Pablo Torterolo</a>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-1">
              Contacto Directo
            </h4>
            <p className="text-xs text-slate-300">
              Coordiná una clase o consulta disponibilidad horaria:
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={onOpenInquiry}
              className="text-left text-xs font-semibold text-amber-400 hover:underline pt-1 cursor-pointer"
            >
              Completar formulario de consulta ({WHATSAPP_DISPLAY})
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Pablo Torterolo. Todos los derechos reservados.</p>
          <p>Online · Presencial en Estudio · A Domicilio en CABA</p>
        </div>
      </div>
    </footer>
  );
};
