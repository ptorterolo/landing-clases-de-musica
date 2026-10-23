export type ReleaseCategory = 'singles' | 'albums' | 'produccion' | 'entrevistas';

export interface AlbumRelease {
  id: string;
  title: string;
  artist: string;
  year?: string;
  category: ReleaseCategory;
  role: string;
  coverUrl: string;
  linkUrl: string;
  mediaType: 'spotify' | 'youtube' | 'bandcamp';
  embedId?: string;
  playlistId?: string;
  description: string;
}

export interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  alt: string;
  tag: string;
}

export interface InquiryFormData {
  instrument: string;
  level: string;
  modality: string;
  favoriteSongs: string;
  preferredSchedule: string;
  studentName: string;
}
