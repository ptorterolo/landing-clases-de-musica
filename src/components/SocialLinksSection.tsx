import React from 'react';
import { Instagram, Facebook, MessageCircle, ExternalLink, Music, Users, Radio } from 'lucide-react';
import { INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/musicData';

export const SocialLinksSection: React.FC = () => {
  return (
    <section id="redes" className="py-16 sm:py-20 bg-[#0A0B10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">
            <Radio className="w-4 h-4 text-amber-400" />
            <span>Comunidad & Contenido</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Seguime en Redes Sociales
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Tutoriales rápidos, solos de guitarra en vivo, covers de alumnos y novedades de fechas y talleres.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Instagram Card */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1A111E] via-[#16121E] to-[#12131C] border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-pink-400 group-hover:text-pink-300">
                  <span>Abrir Perfil</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

              <span className="text-xs uppercase tracking-wider text-pink-400/90 font-bold block mb-1">
                Instagram Oficial
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                @pablotorterologtr
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Videos tocando en vivo, tips de técnica, licks para improvisar y fragmentos de las clases en el estudio.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
              <Users className="w-4 h-4 text-pink-400" />
              <span>Sumate a la comunidad de músicos y guitarristas</span>
            </div>
          </a>

          {/* Facebook Card */}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0F1424] via-[#121626] to-[#10121C] border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <Facebook className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                  <span>Visitar Página</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

              <span className="text-xs uppercase tracking-wider text-blue-400/90 font-bold block mb-1">
                Página de Facebook
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                PDT Clases de Guitarra
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Artículos, tablatura recomendada, novedades pedagógicas y contacto directo para clases en Buenos Aires.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
              <Music className="w-4 h-4 text-blue-400" />
              <span>Espacio dedicado para alumnos y entusiastas de la guitarra</span>
            </div>
          </a>
        </div>

        {/* WhatsApp Banner */}
        <div className="mt-8 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#141A16] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageCircle className="w-5 h-5 fill-emerald-400/20" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                ¿Preferís chatear directamente?
              </h4>
              <p className="text-xs text-slate-300">
                Escribime al WhatsApp <span className="font-semibold text-emerald-400">{WHATSAPP_DISPLAY}</span> para consultar disponibilidad y aranceles.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Pablo!%20Te%20escribo%20desde%20tu%20sitio%20web%20para%20consultar%20por%20las%20clases%20de%20m%C3%BAsica`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 shrink-0 transition-transform active:scale-95"
          >
            <span>Enviar WhatsApp Directo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
