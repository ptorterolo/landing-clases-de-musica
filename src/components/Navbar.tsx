import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Music2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/musicData';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Clases', href: '#clases' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Discografía', href: '#discografia' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Redes', href: '#redes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0B10]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-gradient-to-b from-[#0A0B10]/90 via-[#0A0B10]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white font-extrabold tracking-tight group shrink-0"
          >
            <span className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-md shadow-amber-400/20 group-hover:scale-105 transition-transform">
              <Music2 className="w-4 h-4" />
            </span>
            <span className="text-base sm:text-lg tracking-wider font-extrabold uppercase text-white">
              PABLO <span className="text-amber-400">TORTEROLO</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md shadow-amber-400/20 active:scale-95 transition-all whitespace-nowrap cursor-pointer min-h-[40px]"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950/20" />
              <span>Reservar Clase</span>
            </button>

            {/* Quick Mobile WhatsApp Trigger */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Pablo!%20Vi%20tu%20web%20y%20quiero%20consultar%20por%20clases%20de%20m%C3%BAsica`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="sm:hidden min-h-[44px] min-w-[44px] p-2 flex items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 active:scale-95 transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-slate-200 hover:text-white rounded-lg hover:bg-white/5 active:scale-95 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1017]/98 border-b border-white/10 px-4 pt-3 pb-6 mt-2 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-400/20 active:scale-98 transition-transform min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Reservar Clase Personalizada</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
