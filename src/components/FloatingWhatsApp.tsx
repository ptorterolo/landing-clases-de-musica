import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_DISPLAY } from '../data/musicData';

interface FloatingWhatsAppProps {
  onOpenInquiry: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenInquiry }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 select-none">
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div className="bg-[#141622] border border-emerald-500/30 text-white px-3.5 py-2 rounded-2xl shadow-xl shadow-black/50 text-xs flex items-center gap-2 animate-bounce-subtle">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <div className="pr-1 cursor-pointer" onClick={onOpenInquiry}>
            <p className="font-bold text-[11px] text-emerald-400">Pablo en línea</p>
            <p className="text-[11px] text-slate-200">¿Consultar por clases?</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Cerrar aviso de WhatsApp"
            className="text-slate-400 hover:text-white p-1 rounded-md"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={onOpenInquiry}
        aria-label={`Contactar por WhatsApp a ${WHATSAPP_DISPLAY}`}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer relative group"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-60" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950/25 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
