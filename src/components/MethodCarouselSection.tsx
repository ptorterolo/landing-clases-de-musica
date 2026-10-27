import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Flame, Music, Headphones, Radio, Sparkles, Check, Maximize2, X } from 'lucide-react';
import { CAROUSEL_SLIDES, TEACHING_PILLARS, resolveAssetUrl } from '../data/musicData';

interface MethodCarouselSectionProps {
  onOpenInquiry: () => void;
}

export const MethodCarouselSection: React.FC<MethodCarouselSectionProps> = ({ onOpenInquiry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Touch swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = CAROUSEL_SLIDES.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped left -> next
      nextSlide();
    } else if (diff < -50) {
      // Swiped right -> prev
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Music':
        return <Music className="w-5 h-5 text-amber-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-amber-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="metodologia" className="py-16 sm:py-24 bg-[#0D0E15] relative overflow-hidden border-y border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-10 sm:mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">
            <span>Metodología & Experiencia</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight text-balance">
            Cómo aprendés con Pablo Torterolo
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Un método pensado para que toques desde el primer día, sin perderte en ejercicios mecánicos sin música.
          </p>
        </div>

        {/* 2-Column Split: Content on Left, Carousel on Right + 12-Column Gear Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-12 lg:gap-y-8 items-center">
          {/* Left Column: Pedagogical Pillars & Value Props */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TEACHING_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-5 rounded-2xl bg-[#141620] border border-white/5 hover:border-amber-400/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center justify-between">
                      <span>{pillar.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    <span>{pillar.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Image Carousel */}
          <div
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#161824] border border-white/10 shadow-2xl group">
              {/* Image Carousel Container with touch gestures */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {CAROUSEL_SLIDES.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={resolveAssetUrl(slide.imageUrl)}
                      alt={slide.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    {/* Contrast Gradient for Caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-[#0A0B10]/40 to-transparent" />

                    {/* Tag badge on top right */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                        {slide.tag}
                      </span>
                    </div>

                    {/* Lightbox zoom button on top left */}
                    <button
                      onClick={() => setLightboxImage(slide.imageUrl)}
                      aria-label="Ver imagen en tamaño completo"
                      className="absolute top-4 left-4 z-20 min-h-[36px] min-w-[36px] p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-slate-200 hover:text-white hover:bg-black/80 transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-20">
                      <h4 className="text-lg sm:text-2xl font-bold text-white mb-1.5 leading-snug">
                        {slide.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows (min 44px hitboxes for touch ergonomics) */}
              <button
                onClick={prevSlide}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-black/60 hover:bg-amber-400 hover:text-slate-950 text-white backdrop-blur-md border border-white/15 transition-all active:scale-95 cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Siguiente foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-black/60 hover:bg-amber-400 hover:text-slate-950 text-white backdrop-blur-md border border-white/15 transition-all active:scale-95 cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Carousel Dot Indicators & Counter */}
            <div className="flex items-center justify-between mt-4 px-2">
              <div className="flex items-center gap-2">
                {CAROUSEL_SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir a foto ${index + 1}`}
                    className={`min-h-[32px] min-w-[32px] flex items-center justify-center cursor-pointer`}
                  >
                    <span
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-slate-400 tabular-nums">
                {currentSlide + 1} / {totalSlides}
              </div>
            </div>
          </div>

          {/* Full-Width 12-Column Studio Gear & DAWs Strip */}
          <div className="lg:col-span-12 p-6 sm:p-7 rounded-2xl bg-[#161824] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1.5">
                Equipamiento & Grabación
              </p>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                Amplificadores Peavey, pedaleras análogas y digitales, DAW Pro Tools, Interfaz Audient, Micrófonos Warm, Telefunken y más.
              </p>
            </div>
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shrink-0 active:scale-95 transition-all shadow-md shadow-amber-400/20 cursor-pointer min-h-[44px] flex items-center justify-center whitespace-nowrap"
            >
              Consultar Disponibilidad
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Image Zoom */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            aria-label="Cerrar imagen"
            className="absolute top-4 right-4 z-50 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={resolveAssetUrl(lightboxImage)}
              alt="Detalle ampliado de clase"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
