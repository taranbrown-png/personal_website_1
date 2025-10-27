"use client";

import React, { useRef, useEffect } from 'react';
import HeroSection from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Set the global dark theme
  useEffect(() => {
    document.documentElement.style.backgroundColor = '#1a1010';
  }, []);

  // Pass refs to the global Navigation component via window object
  useEffect(() => {
    (window as any).navigationRefs = { experienceRef, contactRef };
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1010]">
      {/* Hero section scrolls to Experience */}
      <HeroSection />
      
      {/* Experience section with ref */}
      <div ref={experienceRef as React.RefObject<HTMLDivElement>}>
        <ExperienceSection contactRef={contactRef} />
      </div>

      {/* Contact section with ref */}
      <div ref={contactRef as React.RefObject<HTMLDivElement>}>
        <ContactSection />
      </div>
    </div>
  );
}

