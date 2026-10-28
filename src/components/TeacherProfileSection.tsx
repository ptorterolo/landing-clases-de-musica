import React, { useState } from 'react';
import { Award, Guitar, ShieldCheck, MapPin, Laptop, Home, MessageSquare, Maximize2, X } from 'lucide-react';
import { MODALITIES, WHATSAPP_DISPLAY, resolveAssetUrl } from '../data/musicData';

interface TeacherProfileSectionProps {
  onOpenInquiry: () => void;
}

export const TeacherProfileSection: React.FC<TeacherProfileSectionProps> = ({ onOpenInquiry }) => {
  const [showPosterZoom, setShowPosterZoom] = useState(false);

  const testimonials = [
    {
      name: 'Matías R.',
      role: 'Alumno de Guitarra Eléctrica (Palermo)',
      comment: 'Arranqué de cero a los 32 años pensando que era tarde. En dos meses ya estaba tocando temas de Red Hot Chili Peppers y Pearl Jam completos. El método es súper claro.',
      rating: '5/5'
    },
    {
      name: 'Lucía V.',
      role: 'Alumna de Piano & Producción (Online)',
      comment: 'Tomo las clases desde Córdoba por videollamada. El audio se escucha perfecto como si estuviéramos en la misma sala y aprendí a grabar mis temas en Pro Tools.',
      rating: '5/5'
    },
    {
      name: 'Diego M.',
      role: 'Alumno de Bajo & Armonía (Belgrano)',
      comment: 'Pablo no solo te enseña la técnica sino a entender qué estás haciendo y por qué suena bien. Grabamos un cover en su estudio y la calidad fue demoledora.',
      rating: '5/5'
    }
  ];

  return (
    <section id="sobre-mi" className="py-16 sm:py-24 bg-[#0D0E15] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-10">
          {/* Left Column: Official Live Concert Poster Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-amber-400/30 shadow-2xl shadow-amber-500/10 group">
              <img
                src={resolveAssetUrl('/assets/aistudio/PabloClasesMusica_b3a22499.png')}
                alt="Pablo Torterolo en vivo tocando guitarra"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              
              {/* Zoom Trigger Button */}
              <button
                onClick={() => setShowPosterZoom(true)}
                aria-label="Ver afiche completo en alta resolución"
                className="absolute bottom-4 right-4 z-20 min-h-[44px] px-3.5 py-2 rounded-xl bg-black/75 hover:bg-amber-400 hover:text-slate-950 text-white backdrop-blur-md border border-white/15 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-lg"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Ver Afiche</span>
              </button>

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                  Docente & Músico
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Sobre Pablo Torterolo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
                Músico en Vivo, Productor y Docente
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-4">
                Con más de 15 años de trayectoria activa sobre escenarios de rock y salas de grabación, me dedico a formar músicos que disfruten del instrumento desde su primera sesión.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
                Mi propuesta se aleja de las clases rígidas tradicionales: nos enfocamos en el repertorio que a vos te mueve, desarrollando técnica, comprensión armónica y confianza escénica o de estudio.
              </p>
            </div>

            {/* Credential Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#141620] border border-white/5 flex items-start gap-3">
                <Guitar className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Versatilidad de Géneros</h4>
                  <p className="text-xs text-slate-400">Rock clásico, Hard Rock, Metal, Blues, Pop, Funk y Baladas acústicas.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141620] border border-white/5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Metodología Comprobada</h4>
                  <p className="text-xs text-slate-400">Alumnos desde 8 años hasta adultos sin límite de edad.</p>
                </div>
              </div>
            </div>

            {/* Modalities Box */}
            <div id="clases" className="pt-4">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <span>Modalidades Disponibles</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {MODALITIES.map((mod) => (
                  <div key={mod.id} className="p-4 rounded-xl bg-[#161824] border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-amber-400">{mod.title}</span>
                        {mod.id === 'online' && <Laptop className="w-3.5 h-3.5 text-amber-400" />}
                        {mod.id === 'studio' && <MapPin className="w-3.5 h-3.5 text-amber-400" />}
                        {mod.id === 'domicilio' && <Home className="w-3.5 h-3.5 text-amber-400" />}
                      </div>
                      <p className="text-xs text-slate-300 leading-snug">{mod.details}</p>
                    </div>
                    <span className="mt-3 text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {mod.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Centered WhatsApp CTA Below Bio Grid */}
        <div className="flex justify-center mb-16">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Coordinar Horario por WhatsApp ({WHATSAPP_DISPLAY})</span>
          </button>
        </div>

        {/* Student Testimonials */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Experiencias de Alumnos
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Personas reales que aprendieron a tocar y grabar su música
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#13151F] border border-white/5 flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-slate-300 italic mb-4 leading-relaxed font-light">
                  "{t.comment}"
                </p>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-amber-400/90">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Poster Zoom Modal */}
      {showPosterZoom && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowPosterZoom(false)}
        >
          <button
            onClick={() => setShowPosterZoom(false)}
            aria-label="Cerrar vista de afiche"
            className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-2xl max-h-[90vh] overflow-auto rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={resolveAssetUrl('/assets/aistudio/PabloClasesMusica_b3a22499.png')}
              alt="Afiche oficial Pablo Torterolo"
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
