import React, { useState } from 'react';
import { ExternalLink, Play, Disc3, Music2, Youtube, Instagram, X } from 'lucide-react';
import { ALBUM_RELEASES, INSTAGRAM_URL, resolveAssetUrl } from '../data/musicData';
import { AlbumRelease, ReleaseCategory } from '../types';

export const DiscographySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activePlayer, setActivePlayer] = useState<AlbumRelease | null>(null);

  const filterCategories = [
    { id: 'todos', label: 'Todos' },
    { id: 'singles', label: 'Singles' },
    { id: 'albums', label: 'Albums' },
    { id: 'produccion', label: 'Producción & Mezcla' },
    { id: 'entrevistas', label: 'Entrevistas' },
  ];

  const filteredReleases = ALBUM_RELEASES.filter((release) => {
    if (selectedCategory === 'todos') return true;
    return release.category === (selectedCategory as ReleaseCategory);
  });

  const getPlatformIcon = (mediaType: 'spotify' | 'youtube' | 'bandcamp') => {
    if (mediaType === 'youtube') {
      return <Youtube className="w-3.5 h-3.5 text-red-500" />;
    }
    if (mediaType === 'bandcamp') {
      return (
        <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-[9px] text-[#1da0c3] border border-[#1da0c3] rounded-sm">
          BC
        </span>
      );
    }
    return (
      <svg className="w-3.5 h-3.5 fill-[#1DB954]" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308c-.215.352-.676.463-1.028.248-2.816-1.721-6.36-2.111-10.536-1.157-.402.092-.801-.16-.893-.562-.092-.403.16-.802.563-.894 4.571-1.044 8.492-.599 11.646 1.337.352.215.463.676.248 1.028zm1.47-3.266c-.27.44-.848.578-1.287.308-3.224-1.982-8.139-2.555-11.952-1.397-.497.151-1.026-.135-1.177-.633-.151-.498.136-1.026.634-1.177 4.358-1.323 9.776-.682 13.474 1.588.44.27.578.848.308 1.287l.004.024zm.126-3.41c-3.864-2.294-10.244-2.506-13.942-1.382-.593.18-1.222-.162-1.402-.755-.18-.593.162-1.222.755-1.402 4.25-1.29 11.295-1.042 15.733 1.593.533.316.707 1.011.391 1.544-.316.533-1.011.707-1.535.402z"/>
      </svg>
    );
  };

  const getPlatformLabel = (mediaType: 'spotify' | 'youtube' | 'bandcamp') => {
    if (mediaType === 'youtube') return 'YouTube';
    if (mediaType === 'bandcamp') return 'Bandcamp';
    return 'Spotify';
  };

  const getEmbedUrl = (release: AlbumRelease) => {
    if (release.mediaType === 'spotify') {
      return `https://open.spotify.com/embed/${release.embedId || 'track/0QiAPN6WLtnEdtAKORU17J'}?utm_source=generator&theme=0`;
    }
    if (release.mediaType === 'youtube') {
      if (release.playlistId) {
        return `https://www.youtube.com/embed/${release.embedId}?list=${release.playlistId}&autoplay=1`;
      }
      return `https://www.youtube.com/embed/${release.embedId}?autoplay=1`;
    }
    return null;
  };

  return (
    <section id="discografia" className="py-16 sm:py-24 bg-[#0A0B10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest mb-2">
              <Disc3 className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>Trayectoria Discográfica & Sesiones</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Álbumes, Singles & Producciones
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Grabaciones en estudio, lanzamientos discográficos y sesiones en vivo donde participé como guitarrista, compositor o productor.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#151722] rounded-xl border border-white/5 shrink-0">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Releases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReleases.map((item) => (
            <div
              key={item.id}
              className="bg-[#12141D] rounded-2xl border border-white/5 overflow-hidden hover:border-amber-400/40 transition-all duration-300 group flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Release Thumbnail */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
                  <img
                    src={resolveAssetUrl(item.coverUrl)}
                    alt={`${item.title} - ${item.artist}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay with Action Buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs p-4">
                    <button
                      onClick={() => setActivePlayer(item)}
                      aria-label={`Reproducir ${item.title}`}
                      className="min-h-[44px] min-w-[44px] p-3 rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300 font-bold flex items-center justify-center shadow-lg active:scale-95 transition-transform cursor-pointer"
                    >
                      <Play className="w-5 h-5 fill-slate-950" />
                    </button>
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${item.title} en ${getPlatformLabel(item.mediaType)}`}
                      className={`min-h-[44px] min-w-[44px] p-3 rounded-full text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform ${
                        item.mediaType === 'youtube'
                          ? 'bg-red-600 hover:bg-red-500'
                          : item.mediaType === 'bandcamp'
                          ? 'bg-[#1da0c3] hover:brightness-110'
                          : 'bg-[#1DB954] hover:brightness-110'
                      }`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Category & Platform Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-bold text-slate-200 border border-white/10 flex items-center gap-1.5 uppercase">
                      {getPlatformIcon(item.mediaType)}
                      <span>{getPlatformLabel(item.mediaType)}</span>
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md bg-amber-400/90 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="p-4 sm:p-5">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wide block mb-1">
                    {item.role}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mb-2">
                    {item.artist}
                  </p>
                  <p className="text-xs text-slate-400 font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setActivePlayer(item)}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <Play className="w-3.5 h-3.5 fill-amber-400" />
                  <span>Ver / Escuchar</span>
                </button>
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs font-semibold hover:underline flex items-center gap-1 py-1 ${
                    item.mediaType === 'youtube'
                      ? 'text-red-400'
                      : item.mediaType === 'bandcamp'
                      ? 'text-[#1da0c3]'
                      : 'text-[#1DB954]'
                  }`}
                >
                  <span>{getPlatformLabel(item.mediaType)}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile Strip (Changed from Spotify as requested) */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#141622] via-[#161826] to-[#141622] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Seguí más grabaciones, solos y sesiones de estudio
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Videos tocando en vivo, pruebas de sonido, backstage y material exclusivo en Instagram.
              </p>
            </div>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-900/20 shrink-0 transition-opacity"
          >
            <span>Ver perfil en Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Embedded Player Modal (Handles Spotify, YouTube, and Bandcamp) */}
      {activePlayer && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActivePlayer(null)}
        >
          <div
            className="bg-[#12141D] border border-white/15 rounded-3xl p-5 sm:p-6 max-w-xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePlayer(null)}
              aria-label="Cerrar reproductor"
              className="absolute top-4 right-4 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={resolveAssetUrl(activePlayer.coverUrl)}
                alt={activePlayer.title}
                className="w-14 h-14 rounded-xl object-cover border border-white/10"
              />
              <div className="pr-8">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                  {activePlayer.role} · {activePlayer.category}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {activePlayer.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {activePlayer.artist}
                </p>
              </div>
            </div>

            {/* Embedded Player Body */}
            {activePlayer.mediaType === 'spotify' && (
              <div className="rounded-xl overflow-hidden bg-black/40 border border-white/10 my-4">
                <iframe
                  title={`Spotify Player - ${activePlayer.title}`}
                  src={getEmbedUrl(activePlayer)!}
                  width="100%"
                  height={activePlayer.category === 'albums' ? '352' : '152'}
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-xl"
                />
              </div>
            )}

            {activePlayer.mediaType === 'youtube' && (
              <div className="rounded-xl overflow-hidden bg-black border border-white/10 my-4 aspect-video">
                <iframe
                  title={`YouTube Player - ${activePlayer.title}`}
                  src={getEmbedUrl(activePlayer)!}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                />
              </div>
            )}

            {activePlayer.mediaType === 'bandcamp' && (
              <div className="rounded-xl p-5 bg-[#171a26] border border-white/10 my-4 flex flex-col items-center text-center gap-3">
                <img
                  src={resolveAssetUrl(activePlayer.coverUrl)}
                  alt={activePlayer.title}
                  className="w-28 h-28 rounded-xl object-cover shadow-lg"
                />
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {activePlayer.title} en Bandcamp
                  </h4>
                  <p className="text-xs text-slate-300">
                    Escuchá el álbum completo y los temas grabados en estudio de Fusión Mímica.
                  </p>
                </div>
              </div>
            )}

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {activePlayer.description}
            </p>

            <div className="flex items-center justify-between gap-3 pt-2">
              <a
                href={activePlayer.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 min-h-[44px] flex items-center justify-center gap-2 rounded-xl text-white font-bold text-xs sm:text-sm hover:brightness-110 transition-all ${
                  activePlayer.mediaType === 'youtube'
                    ? 'bg-red-600 hover:bg-red-500'
                    : activePlayer.mediaType === 'bandcamp'
                    ? 'bg-[#1da0c3]'
                    : 'bg-[#1DB954]'
                }`}
              >
                <span>Abrir en {getPlatformLabel(activePlayer.mediaType)}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setActivePlayer(null)}
                className="min-h-[44px] px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
