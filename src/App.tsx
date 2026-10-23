/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MethodCarouselSection } from './components/MethodCarouselSection';
import { DiscographySection } from './components/DiscographySection';
import { TeacherProfileSection } from './components/TeacherProfileSection';
import { SocialLinksSection } from './components/SocialLinksSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LessonInquiryModal } from './components/LessonInquiryModal';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const handleOpenInquiry = () => {
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0B10] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Stage Background Video */}
        <HeroSection onOpenInquiry={handleOpenInquiry} />

        {/* Section: Content on Left, Image Carousel on Right */}
        <MethodCarouselSection onOpenInquiry={handleOpenInquiry} />

        {/* Section: Discography & Spotify Thumbnails */}
        <DiscographySection />

        {/* Section: About Pablo Torterolo & Live Poster */}
        <TeacherProfileSection onOpenInquiry={handleOpenInquiry} />

        {/* Section: Social Media (Instagram, Facebook, WhatsApp) */}
        <SocialLinksSection />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Floating WhatsApp Action Button (Right Bottom Corner) */}
      <FloatingWhatsApp onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Lesson Inquiry Modal / Mobile Bottom Sheet */}
      <LessonInquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
      />
    </div>
  );
}
