"use client";

import React, { useState, useEffect } from 'react';
import { experienceData } from '../data';
import { X } from 'lucide-react';

interface ExperienceSectionProps {
  contactRef: React.RefObject<HTMLElement | null>;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  // State to track which card is currently being hovered over
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // STATE: To manage the expanded view (index of the open card)
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  // STATE: To manage photo slide deck in modal
  const [currentPhotoSlide, setCurrentPhotoSlide] = useState(0);

  // STATE: To manage the philosophy popup
  const [isPhilosophyVisible, setIsPhilosophyVisible] = useState(false);
  const [isPhilosophyButtonHovered, setIsPhilosophyButtonHovered] = useState(false);

  // Function to open the expanded card view
  const handleOpenExpandedView = (index: number) => {
    setExpandedCardIndex(index);
    setCurrentPhotoSlide(0); // Reset photo slide to first image
    document.body.style.overflow = 'hidden';
  };

  // Function to close the expanded card view
  const handleCloseExpandedView = () => {
    setExpandedCardIndex(null);
    document.body.style.overflow = 'unset';
  };

  // Function to handle philosophy button click
  const handlePhilosophyClick = () => {
    setIsPhilosophyVisible(!isPhilosophyVisible);
  };


  // Function to go to next photo in modal
  const nextPhoto = () => {
    if (expandedCardIndex === 0 || expandedCardIndex === 1 || expandedCardIndex === 2) { // For Life, People, and Skills
      const currentPhotos = experienceData[expandedCardIndex].photos || [experienceData[expandedCardIndex].imageUrl];
      setCurrentPhotoSlide((prev) => (prev + 1) % currentPhotos.length);
    }
  };

  // Function to go to previous photo in modal
  const prevPhoto = () => {
    if (expandedCardIndex === 0 || expandedCardIndex === 1 || expandedCardIndex === 2) { // For Life, People, and Skills
      const currentPhotos = experienceData[expandedCardIndex].photos || [experienceData[expandedCardIndex].imageUrl];
      setCurrentPhotoSlide((prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length);
    }
  };

  // Function to go to specific photo in modal
  const goToPhoto = (index: number) => {
    setCurrentPhotoSlide(index);
  };


  const expandedCard = expandedCardIndex !== null 
    ? experienceData[expandedCardIndex] 
    : null;

  return (
    <>
      <style>{`
        /* --- CORE RESPONSIVENESS: CSS Grid with Media Queries --- */
        .experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 3 columns on large screens */
          gap: clamp(10px, 3vw, 40px); /* Responsive gap */
        }
        @media (max-width: 1200px) {
          .experience-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns, fully proportional */
            gap: clamp(8px, 2.5vw, 30px);
          }
        }
        @media (max-width: 768px) {
          .experience-grid {
            grid-template-columns: 1fr; /* 1 column, fully proportional */
            gap: clamp(6px, 2vw, 20px);
          }
        }
        
        /* --- PHOTO SLIDE DECK STYLES FOR MODAL --- */
        .photo-slide-deck {
          position: relative;
          width: 400px;
          height: 400px;
          margin: 0 auto 20px auto;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          .photo-slide-deck {
            width: 300px;
            height: 300px;
          }
        }
        
        @media (max-width: 480px) {
          .photo-slide-deck {
            width: 250px;
            height: 250px;
          }
        }
        
        .photo-slide-container {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease-in-out;
        }
        
        .photo-slide {
          min-width: 100%;
          height: 100%;
          position: relative;
        }
        
        .photo-slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .photo-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          border: none;
          color: white;
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .photo-nav:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: translateY(-50%) scale(1.1);
        }
        
        .photo-nav.prev {
          left: 10px;
        }
        
        .photo-nav.next {
          right: 10px;
        }
        
        .photo-indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        
        .photo-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .photo-indicator.active {
          background: #f266acff;
          transform: scale(1.2);
        }
        
        /* CSS for gentle modal entry/exit (Fade and Scale) */
        .modal-overlay-enter {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
        .modal-overlay-enter-active {
            opacity: 1;
        }

        .modal-content-enter {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
            transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .modal-content-enter-active {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }

      `}</style>
      
      <section 
      style={{
        backgroundImage: "url('/bgi2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top', // Position to show top of image
        // Set top padding to 10vh to space the title down
        paddingTop: '10vh', 
        paddingBottom: '5rem', 
        paddingLeft: 'clamp(8px, 2vw, 32px)', // Responsive horizontal padding
        paddingRight: 'clamp(8px, 2vw, 32px)',
      }}
      className="relative min-h-screen text-white"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Top transition from Hero section */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "60px",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent)",
        zIndex: 1,
      }}></div>
      
      {/* Bottom transition to Contact section */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "60px",
        background: "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)",
        zIndex: 1,
      }}></div>
      
      {/* Title Container: Normal flow, positioned above cards */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        marginBottom: '64px', // Space below the title before the cards start
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 'bold',
          color: '#F0E6D8',
          margin: 0,
        }}>
          Experience
        </h2>
        
        {/* My Philosophy button - subtle styling */}
        <button
          onClick={handlePhilosophyClick} 
          onMouseEnter={() => setIsPhilosophyButtonHovered(true)}
          onMouseLeave={() => setIsPhilosophyButtonHovered(false)}
          style={{
            padding: '4px 12px', marginTop: '15px', border: '1px solid rgba(240, 230, 216, 0.3)',
            borderRadius: '20px',             backgroundColor: isPhilosophyButtonHovered ? '#f266acff' : 'transparent', 
            color: isPhilosophyButtonHovered ? '#1C1C1C' : 'rgba(240, 230, 216, 0.7)', fontSize: 'clamp(0.7rem, 0.9vw, 0.9rem)',
            fontWeight: 'normal', cursor: 'pointer', outline: 'none', transition: 'all 0.3s ease-in-out',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {isPhilosophyVisible ? "Hide Philosophy" : "My Life Philosophy"}
        </button>

        {/* Philosophy content popup */}
        <div
          style={{
            opacity: isPhilosophyVisible ? 1 : 0, maxHeight: isPhilosophyVisible ? '500px' : '0', 
            overflow: 'hidden', transition: 'opacity 0.6s ease-in-out, max-height 0.8s ease-in-out',
            padding: isPhilosophyVisible ? '1.5rem 2rem' : '0 2rem', marginTop: isPhilosophyVisible ? '20px' : '0',
            width: '100%', maxWidth: '800px', backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px', borderLeft: '4px solid #F0E6D8', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            boxSizing: 'border-box', margin: isPhilosophyVisible ? '20px auto 0' : '0 auto',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', fontFamily: "'Roboto', sans-serif",
              lineHeight: 1.6, color: '#F0E6D8', margin: 0, textAlign: 'left',
            }}
          >
            In this little life, I have taken upon myself the mindset of trying as many new things as I can in the little time I am here. Everyday is an opportunity to try something new, gain a new experience, and, hopefully, learn something. I am so grateful for every adventure I have taken upon, every mistake I have made, every fear I have conquered, and, most importantly, every person I have met and who has been there by my side. I hope to encourage and inspire everyone to take their life as a never-ending bucket list in which anything and everything is possible.  
          </p>
        </div>
      </div>
      

      {/* 🟢 FIXED CARD GRID CONTAINER: Fully proportional sizing */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          maxWidth: '70vw', 
          width: '100%', 
          margin: '0 auto', // Centered
          padding: '0 clamp(8px, 2vw, 16px)', // Responsive padding
        }}
      >
        <div className="experience-grid">
          {experienceData.map((item, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index} 
                onClick={() => handleOpenExpandedView(index)} 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                
                style={{ 
                  backgroundColor: isHovered 
                    ? 'rgba(107, 70, 62, 0.95)'
                    : 'rgba(107, 70, 62, 0.85)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: isHovered
                    ? '0 30px 60px -15px rgb(0 0 0 / 0.5)'
                    : '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                  transform: isHovered ? 'translateY(-15px)' : 'translateY(0)',
                }}
              >
                {/* Card Image Container: Square Aspect Ratio */}
                <div style={{ 
                    width: '100%', 
                    height: 0, 
                    paddingBottom: '100%', // Makes the container square
                    overflow: 'hidden', 
                    position: 'relative' 
                }}>
                  <img 
                    src={item.imageUrl}
                    alt={item.title} 
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block',
                      maxWidth: '100%'
                    }}
                  />
                  {/* Title Overlay */}
                  <h3 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '12px 20px',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      fontSize: 'clamp(1rem, 1.5vw, 20px)',
                      fontWeight: 'bold', 
                      color: '#FFC0CB',
                      fontFamily: "'Playfair Display', serif",
                      margin: 0,
                      textAlign: 'center',
                      zIndex: 10,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --------------------------- GENTLE EXPANDED CARD MODAL --------------------------- */}
      {expandedCard && (
        <>
          {/* Overlay (Gentle Fade-in) */}
          <div 
            onClick={handleCloseExpandedView}
            className="modal-overlay-enter modal-overlay-enter-active" 
            style={{
              position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)', 
              zIndex: 100, backdropFilter: 'blur(5px)'
            }}
          />
          
          {/* Expanded Card Content Container (Gentle Scale-in) */}
          <div 
            className="modal-content-enter modal-content-enter-active" 
            style={{
              position: 'fixed', 
              top: '50%', 
              left: '50%', 
              zIndex: 101,
              maxWidth: '800px', 
              width: '90vw', 
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#4B3F3C', 
              borderRadius: '15px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
              padding: '40px',
              color: '#F0E6D8',
            }}
          >
            {/* Close Button */}
            <X 
              onClick={handleCloseExpandedView} 
              style={{
                position: 'absolute', top: '15px', right: '15px', 
                cursor: 'pointer', width: '28px', height: '28px', 
                color: '#FFC0CB', zIndex: 102
              }} 
            />

            {/* Modal Title */}
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
                fontFamily: "'Playfair Display', serif",
                fontWeight: 'bold',
                marginBottom: '20px',
                borderBottom: '2px solid #FFC0CB',
                paddingBottom: '10px',
              }}
            >
              {expandedCard.title}
            </h2>

            {/* Modal Image - Photo Slide Deck for Life, People, and Skills, static image for others */}
            {(expandedCardIndex === 0 || expandedCardIndex === 1 || expandedCardIndex === 2) && expandedCard.photos && expandedCard.photos.length > 1 ? (
              <div className="photo-slide-deck">
                {/* Navigation Buttons */}
                <button className="photo-nav prev" onClick={prevPhoto}>
                  ‹
                </button>
                <button className="photo-nav next" onClick={nextPhoto}>
                  ›
                </button>
                
                {/* Photo Container */}
                <div 
                  className="photo-slide-container"
                  style={{ transform: `translateX(-${currentPhotoSlide * 100}%)` }}
                >
                  {expandedCard.photos.map((photo, index) => (
                    <div key={index} className="photo-slide">
                      <img 
                        src={photo}
                        alt={`${expandedCard.title} - Photo ${index + 1}`}
                        className="photo-slide-image"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Photo Indicators */}
                <div className="photo-indicators">
                  {expandedCard.photos.map((_, index) => (
                    <button
                      key={index}
                      className={`photo-indicator ${index === currentPhotoSlide ? 'active' : ''}`}
                      onClick={() => goToPhoto(index)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ 
                  width: '100%', 
                  height: 0, 
                  paddingBottom: '56.25%', 
                  overflow: 'hidden', 
                  marginBottom: '30px', 
                  borderRadius: '8px',
                  position: 'relative'
              }}>
                  <img 
                      src={expandedCard.imageUrl}
                      alt={expandedCard.title} 
                      style={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          display: 'block'
                      }}
                  />
              </div>
            )}

            {/* Detailed Text */}
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', fontFamily: "'Roboto', sans-serif" }}>
              {expandedCard.description}
            </p>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              fontFamily: "'Roboto', sans-serif", 
              marginTop: '20px',
              fontStyle: 'italic',
              color: '#F0E6D8',
              opacity: 0.9,
              borderLeft: '3px solid #FFC0CB',
              paddingLeft: '15px'
            }}>
              {expandedCard.modalBottomText}
            </p>
          </div>
        </>
      )}

    </section>
    </>
  );
};

export default ExperienceSection;