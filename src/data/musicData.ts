import { AlbumRelease, CarouselSlide } from '../types';

export const WHATSAPP_NUMBER = '541152207483';
export const WHATSAPP_DISPLAY = '+54 11 5220-7483';
export const INSTAGRAM_URL = 'https://www.instagram.com/pablotorterologtr/';
export const FACEBOOK_URL = 'https://www.facebook.com/pdtclasesdeguitarra/';

export const resolveAssetUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/src/')) return url;
  const base = import.meta.env.BASE_URL || './';
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
  return `${base.endsWith('/') ? base : base + '/'}${cleanUrl}`;
};

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'slide-1',
    title: 'Clases Personalizadas en Estudio',
    subtitle: 'Equipamiento profesional, amplificadores Peavey, pedaleras análogas/digitales y microfonía de primer nivel.',
    imageUrl: '/src/assets/images/carousel_guitar_lesson_1792682372137.jpg',
    alt: 'Pablo Torterolo enseñando guitarra en estudio',
    tag: 'Estudio en CABA'
  },
  {
    id: 'slide-2',
    title: 'Experiencia Real en Escenario',
    subtitle: 'Guitarrista en vivo con bandas como Adicta, Cardo Ruso y presentaciones en los principales escenarios.',
    imageUrl: '/src/assets/images/carousel_live_performance_1792682372906.jpg',
    alt: 'Pablo Torterolo tocando solo de guitarra eléctrica en vivo',
    tag: 'En Vivo'
  },
  {
    id: 'slide-3',
    title: 'Grabación y Producción Musical',
    subtitle: 'DAW Pro Tools, Ableton Live, interfaz Audient y monitoreo para registrar tus propias pistas.',
    imageUrl: '/src/assets/images/carousel_home_studio_piano_1792682373767.jpg',
    alt: 'Estación de producción musical y teclado piano en estudio',
    tag: 'Producción & Piano'
  },
  {
    id: 'slide-4',
    title: 'Tocá, Creá y Grabá tu Música',
    subtitle: 'Metodología directa al grano: desde sacar tus canciones favoritas hasta registrar tu primer cover.',
    imageUrl: '/assets/aistudio/PabloClasesMusica_b3a22499.png',
    alt: 'Afiche oficial de clases de música con Pablo Torterolo',
    tag: 'Metodología Práctica'
  }
];

export const ALBUM_RELEASES: AlbumRelease[] = [
  {
    id: 'release-la-hora-cero',
    title: 'La Hora Cero',
    artist: 'Adicta',
    category: 'singles',
    role: 'Guitarras',
    coverUrl: '/assets/aistudio/adicta_la_hora_cero_111e0733.jpg',
    linkUrl: 'https://open.spotify.com/intl-es/track/0QiAPN6WLtnEdtAKORU17J?si=53cfd6a816b045ea',
    mediaType: 'spotify',
    embedId: 'track/0QiAPN6WLtnEdtAKORU17J',
    description: 'Single oficial de la banda Adicta con guitarras melódicas y sonido electropop moderno.'
  },
  {
    id: 'release-en-oro',
    title: 'En Oro',
    artist: 'Adicta',
    category: 'singles',
    role: 'Guitarras',
    coverUrl: '/assets/aistudio/adicta_en_oro_d039be65.jpg',
    linkUrl: 'https://open.spotify.com/intl-es/track/5EYPWnaFKcyNMF1GZFNign?si=d331805098ff4ed5',
    mediaType: 'spotify',
    embedId: 'track/5EYPWnaFKcyNMF1GZFNign',
    description: 'Single de Adicta con arreglos de guitarra eléctrica y texturas envolventes.'
  },
  {
    id: 'release-gira-la-rueda',
    title: 'Gira la rueda',
    artist: 'Cardo Ruso',
    category: 'singles',
    role: 'Guitarras',
    coverUrl: '/assets/aistudio/gira_la_rueda_e29cf97a.jpg',
    linkUrl: 'https://open.spotify.com/intl-es/track/47LkOoo3SsNWv0b1TXbqOp?si=4fa6c3881eea40b1',
    mediaType: 'spotify',
    embedId: 'track/47LkOoo3SsNWv0b1TXbqOp',
    description: 'Single de rock con guitarras potentes, riffs contundentes y sonido valvular.'
  },
  {
    id: 'release-viva-adicta',
    title: 'Viva Adicta',
    artist: 'Adicta',
    category: 'albums',
    role: 'Guitarras en Vivo',
    coverUrl: '/assets/aistudio/viva_adicta_14cfab20.jpg',
    linkUrl: 'https://open.spotify.com/intl-es/album/0D3Xg50bcXu9bLJjqVGC3F?si=SkpVFntcRS66S-SOKVQTag',
    mediaType: 'spotify',
    embedId: 'album/0D3Xg50bcXu9bLJjqVGC3F',
    description: 'Álbum en vivo registrando la potencia escénica y musical de Adicta en concierto.'
  },
  {
    id: 'release-fusion-mimica',
    title: 'Fusión Mímica',
    artist: 'Fusión Mímica',
    category: 'albums',
    role: 'Guitarras & Composición',
    coverUrl: '/assets/aistudio/fusion_mimica_c3067ff6.jpg',
    linkUrl: 'https://fusionmimica.bandcamp.com/album/fusion-mimica',
    mediaType: 'bandcamp',
    description: 'Álbum de estudio de rock alternativo con pasajes elaborados, armonía y arreglos de guitarras.'
  },
  {
    id: 'release-produccion-playlist',
    title: 'Producción y Mezcla (Playlist)',
    artist: 'Pablo Torterolo Studio',
    category: 'produccion',
    role: 'Producción & Mezcla',
    coverUrl: 'https://img.youtube.com/vi/JHcYQFlvMMY/hqdefault.jpg',
    linkUrl: 'https://www.youtube.com/watch?v=JHcYQFlvMMY&list=PLCY6B5YKYjCp4nJ1X9iObsG2OEzaJHzsl',
    mediaType: 'youtube',
    embedId: 'JHcYQFlvMMY',
    playlistId: 'PLCY6B5YKYjCp4nJ1X9iObsG2OEzaJHzsl',
    description: 'Playlist con producciones discográficas, mezclas y grabaciones de estudio realizadas por Pablo Torterolo.'
  },
  {
    id: 'release-tu-mal-vivo',
    title: 'Tu Mal (En Vivo)',
    artist: 'Adicta',
    category: 'entrevistas',
    role: 'En Vivo / Guitarras',
    coverUrl: 'https://img.youtube.com/vi/eJXa4weSnHw/hqdefault.jpg',
    linkUrl: 'https://www.youtube.com/watch?v=eJXa4weSnHw',
    mediaType: 'youtube',
    embedId: 'eJXa4weSnHw',
    description: 'Presentación en vivo de Adicta interpretando "Tu Mal" con Pablo Torterolo en guitarra eléctrica.'
  },
  {
    id: 'release-nota-morada',
    title: 'Nota en vivo Morada',
    artist: 'Ciclo Morada / Entrevista',
    category: 'entrevistas',
    role: 'Entrevista & Sesión en Vivo',
    coverUrl: 'https://img.youtube.com/vi/QynHaGv-m4E/hqdefault.jpg',
    linkUrl: 'https://www.youtube.com/watch?v=QynHaGv-m4E',
    mediaType: 'youtube',
    embedId: 'QynHaGv-m4E',
    description: 'Entrevista y música en vivo en el ciclo Morada sobre producción musical, guitarras y sonido.'
  }
];

export const TEACHING_PILLARS = [
  {
    id: 'personalized',
    title: 'Clases Personalizadas',
    description: 'El plan de estudio se adapta a tus metas, tus tiempos y la música que te apasiona escuchar.',
    iconName: 'Flame',
    highlight: '100% a tu medida'
  },
  {
    id: 'first-song',
    title: 'De Cero a tu Primera Canción',
    description: 'Cero teoría aburrida sin contexto. Desde la primera clase estás tocando acordes, ritmo y melodía real.',
    iconName: 'Music',
    highlight: 'Resultados rápidos'
  },
  {
    id: 'favorite-tracks',
    title: 'Sacá tus Temas Favoritos',
    description: 'Te enseño a entrenar el oído, entender la armonía detrás de cada tema y dominar las técnicas de tus guitarristas favoritos.',
    iconName: 'Headphones',
    highlight: 'Oído musical'
  },
  {
    id: 'record-cover',
    title: 'Grabá tu Primer Cover',
    description: 'Accedé al estudio para registrar tus pistas en Pro Tools / Ableton con sonido pro y llevarte tu música terminada.',
    iconName: 'Radio',
    highlight: 'Experiencia de estudio'
  }
];

export const MODALITIES = [
  {
    id: 'online',
    title: 'Online en Vivo',
    subtitle: 'Desde cualquier lugar del mundo',
    details: 'Cámara HD múltiple para manos y mástil, audio estéreo directo de consola vía Zoom o Meet.',
    badge: 'Sin fronteras'
  },
  {
    id: 'studio',
    title: 'Presencial en Estudio',
    subtitle: 'En Ciudad de Buenos Aires',
    details: 'Equipamiento profesional de guitarras, amplificadores Peavey, pedaleras análogas y digitales, Pro Tools y microfonía pro.',
    badge: 'CABA'
  },
  {
    id: 'domicilio',
    title: 'A Domicilio en CABA',
    subtitle: 'En la comodidad de tu casa',
    details: 'Clases personalizadas a domicilio en Palermo, Belgrano, Colegiales, Caballito, Almagro y barrios de Capital Federal.',
    badge: 'Comodidad total'
  }
];

export const INSTRUMENTS_LIST = [
  { id: 'guitar-electric', label: 'Guitarra Eléctrica', icon: '🎸' },
  { id: 'guitar-acoustic', label: 'Guitarra Acústica / Criolla', icon: '🪕' },
  { id: 'piano', label: 'Piano / Teclado', icon: '🎹' },
  { id: 'bass', label: 'Bajo Eléctrico', icon: '🎵' },
  { id: 'production', label: 'Producción & Grabación', icon: '🎛️' }
];

export const LEVELS_LIST = [
  { id: 'zero', label: 'Principiante total (Empiezo de cero)' },
  { id: 'basic', label: 'Básico (Conozco algunos acordes)' },
  { id: 'intermediate', label: 'Intermedio (Toco temas pero quiero destrabarme)' },
  { id: 'advanced', label: 'Avanzado (Busco improvisación, solos y técnica pro)' }
];
