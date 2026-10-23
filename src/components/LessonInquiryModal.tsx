import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, Music2, MapPin, User, Clock, Copy, Check } from 'lucide-react';
import { WHATSAPP_NUMBER, INSTRUMENTS_LIST, LEVELS_LIST, MODALITIES } from '../data/musicData';

interface LessonInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LessonInquiryModal: React.FC<LessonInquiryModalProps> = ({ isOpen, onClose }) => {
  const [selectedInstrument, setSelectedInstrument] = useState<string>('Guitarra Eléctrica');
  const [selectedLevel, setSelectedLevel] = useState<string>('Principiante total (Empiezo de cero)');
  const [selectedModality, setSelectedModality] = useState<string>('Presencial en Estudio');
  const [favoriteArtists, setFavoriteArtists] = useState<string>('');
  const [studentName, setStudentName] = useState<string>('');
  const [preferredSchedule, setPreferredSchedule] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    let msg = `¡Hola Pablo! Vi tu página web y quiero consultar por clases de música.\n\n`;
    msg += `🎸 Instrumento: ${selectedInstrument}\n`;
    msg += `🎯 Nivel: ${selectedLevel}\n`;
    msg += `📍 Modalidad: ${selectedModality}\n`;
    if (favoriteArtists.trim()) {
      msg += `🎵 Música / Bandas que me gustan: ${favoriteArtists.trim()}\n`;
    }
    if (preferredSchedule.trim()) {
      msg += `🕒 Días/Horarios tentativos: ${preferredSchedule.trim()}\n`;
    }
    if (studentName.trim()) {
      msg += `👤 Mi nombre: ${studentName.trim()}\n`;
    }
    msg += `\n¿Tenés disponibilidad para coordinar una primera clase? ¡Muchas gracias!`;
    return msg;
  };

  const handleSendWhatsApp = () => {
    const rawMessage = buildWhatsAppMessage();
    const encoded = encodeURIComponent(rawMessage);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCopyMessage = () => {
    const rawMessage = buildWhatsAppMessage();
    navigator.clipboard.writeText(rawMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Container: Bottom Sheet on Mobile, Centered Card on Desktop */}
      <div
        className="bg-[#12141F] border-t sm:border border-white/15 rounded-t-3xl sm:rounded-3xl w-full max-w-xl max-h-[92vh] sm:max-h-[88vh] flex flex-col shadow-2xl relative overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Handle */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-slate-600/70" />
        </div>

        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-amber-400/20">
              <MessageCircle className="w-5 h-5 fill-slate-950/20" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Consultá por tus Clases
              </h3>
              <p className="text-xs text-amber-400">
                Directo al WhatsApp de Pablo (+54 11 5220-7483)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar ventana de consulta"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Step 1: Instrument */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
              <Music2 className="w-4 h-4 text-amber-400" />
              <span>1. Elegí tu Instrumento</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {INSTRUMENTS_LIST.map((inst) => (
                <button
                  type="button"
                  key={inst.id}
                  onClick={() => setSelectedInstrument(inst.label)}
                  className={`min-h-[44px] p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    selectedInstrument === inst.label
                      ? 'bg-amber-400/15 border-amber-400 text-amber-300 shadow-sm'
                      : 'bg-[#181A26] border-white/5 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <span className="text-base">{inst.icon}</span>
                  <span className="line-clamp-1">{inst.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Level */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 block">
              2. Tu Nivel Actual
            </label>
            <div className="space-y-2">
              {LEVELS_LIST.map((lvl) => (
                <button
                  type="button"
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.label)}
                  className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                    selectedLevel === lvl.label
                      ? 'bg-amber-400/15 border-amber-400 text-white shadow-sm'
                      : 'bg-[#181A26] border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <span>{lvl.label}</span>
                  {selectedLevel === lvl.label && (
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Modality */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>3. Modalidad Preferida</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {MODALITIES.map((mod) => (
                <button
                  type="button"
                  key={mod.id}
                  onClick={() => setSelectedModality(mod.title)}
                  className={`min-h-[44px] p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedModality === mod.title
                      ? 'bg-amber-400/15 border-amber-400 text-white'
                      : 'bg-[#181A26] border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <p className="text-xs font-bold text-white mb-0.5">{mod.title}</p>
                  <p className="text-[11px] text-slate-400">{mod.subtitle}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Optional details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span>Tu Nombre (Opcional)</span>
              </label>
              <input
                type="text"
                placeholder="Ej. Martín"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-[#181A26] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Días / Horarios Tentativos</span>
              </label>
              <input
                type="text"
                placeholder="Ej. Tardes o sábados"
                value={preferredSchedule}
                onChange={(e) => setPreferredSchedule(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-[#181A26] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 block">
              ¿Qué canciones, bandas o estilos te gustaría aprender? (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ej. Spinetta, Pink Floyd, Queen, Metallica, Blues, temas propios..."
              value={favoriteArtists}
              onChange={(e) => setFavoriteArtists(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-[#181A26] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Modal Footer (Always thumb accessible) */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0E1019] flex flex-col sm:flex-row items-center gap-2.5">
          <button
            onClick={handleSendWhatsApp}
            className="w-full sm:flex-1 min-h-[50px] px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/25 active:scale-98 transition-all cursor-pointer"
          >
            <Send className="w-5 h-5 fill-slate-950" />
            <span>Enviar Consulta a WhatsApp</span>
          </button>

          <button
            onClick={handleCopyMessage}
            title="Copiar texto al portapapeles"
            className="w-full sm:w-auto min-h-[48px] px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '¡Mensaje Copiado!' : 'Copiar Texto'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
