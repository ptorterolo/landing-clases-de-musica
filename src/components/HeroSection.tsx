import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, MessageCircle, ArrowDown, MapPin, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER, resolveAssetUrl } from '../data/musicData';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until user gesture
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 bg-[#0A0B10]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={resolveAssetUrl('/assets/aistudio/PabloClasesMusica_b3a22499.png')}
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-105 filter brightness-75 contrast-110 ${
            videoLoaded ? 'opacity-50 sm:opacity-40' : 'opacity-25'
          }`}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-guitarist-playing-an-electric-guitar-in-a-studio-41710-large.mp4"
            type="video/mp4"
          />
          {/* Fallback alternative public video */}
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Stage Lighting Gradients & Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-[#0A0B10]/80 to-[#0A0B10]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0A0B10] to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Kicker Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide mb-5 shadow-sm">
          <span>Clases de Música Personalizadas</span>
          <span className="text-amber-400/60">·</span>
          <span>CABA & Online</span>
        </div>

        {/* Hero Title (Poster Inspired Typography) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white max-w-4xl text-balance leading-[1.08] drop-shadow-2xl mb-4 sm:mb-6">
          Tocá, Creá y Grabá <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
            Tu Propia Música
          </span>
        </h1>

        {/* Subhead Instruments */}
        <div className="text-sm sm:text-xl md:text-2xl font-bold tracking-wider sm:tracking-widest text-amber-400 uppercase mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span>Guitarra</span>
          <span className="text-amber-500/50">•</span>
          <span>Bajo</span>
          <span className="text-amber-500/50">•</span>
          <span>Piano</span>
          <span className="text-amber-500/50">•</span>
          <span>Producción</span>
        </div>

        {/* Value Proposition Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl text-balance mb-6 sm:mb-8 font-normal leading-relaxed">
          Aprendé con un método dinámico y práctico desde tu primera clase. Clases individuales en mi estudio, a domicilio en CABA o en vivo online por videollamada HD.
        </p>

        {/* Quick Modality Strips (Mobile Friendly) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-slate-300 mb-8 sm:mb-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Online en Vivo (Global)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Presencial en Estudio (CABA)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>A Domicilio en Capital</span>
          </div>
        </div>

        {/* Action Buttons (Thumb & Touch Sized >= 48px) */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-xl shadow-amber-400/25 active:scale-98 transition-all cursor-pointer group"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950/20 group-hover:scale-110 transition-transform" />
            <span>Consultar por Clases</span>
          </button>

          <a
            href="#metodologia"
            className="w-full sm:w-auto min-h-[50px] px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 active:scale-98 transition-all"
          >
            <span>Ver Metodología & Fotos</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Adjacency Trust Statement */}
        <div className="mt-8 sm:mt-12 text-xs sm:text-sm text-slate-400 flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span>Docente con +15 años de trayectoria en recitales y grabaciones de estudio</span>
        </div>
      </div>

      {/* Discreet Video Controls (Bottom Left) */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-[#0A0B10]/80 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pausar video de fondo' : 'Reproducir video de fondo'}
          className="min-h-[36px] min-w-[36px] flex items-center justify-center text-slate-300 hover:text-amber-400 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Activar sonido del video' : 'Silenciar video'}
          className="min-h-[36px] min-w-[36px] flex items-center justify-center text-slate-300 hover:text-amber-400 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <span className="text-[11px] font-mono text-slate-400 pr-2 hidden sm:inline">
          {isPlaying ? 'Video en Vivo' : 'Pausado'}
        </span>
      </div>
    </section>
  );
};
