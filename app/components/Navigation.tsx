"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// navigation links
const navLinks = [
  { label: 'Home', type: 'link', target: '/' },
  { label: 'Experience', type: 'scroll', targetRefName: 'experienceRef' },
  { label: 'Contact', type: 'scroll', targetRefName: 'contactRef' },
];

// Type checking
interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scrolling functionality
  const handleNavigation = (link: typeof navLinks[0]) => {
    // Closes menu
    setIsMenuOpen(false);

    // Checks navigation type
    if (link.type === 'link') {
      // Scroll to top for 'Home' link
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
      
    } else if (link.type === 'scroll') {
      // Get refs from window object
      const navigationRefs = (window as any).navigationRefs;
      if (!navigationRefs) return;

      let ref: React.RefObject<HTMLElement | null> | undefined;

      // Map the targetRefName to the actual ref prop
      if (link.targetRefName === 'experienceRef') {
        ref = navigationRefs.experienceRef;
      } else if (link.targetRefName === 'contactRef') {
        ref = navigationRefs.contactRef;
      }

      // Perform scroll
      if (ref?.current) {
        ref.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  return (
    <>
      {/* Menu toggle icon - only shows when menu is closed */}
      {!isMenuOpen && (
        <div 
          onClick={toggleMenu}
          style={{
            position: "fixed", 
            top: "32px", 
            right: "32px", 
            cursor: "pointer", 
            zIndex: 20,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "50%",
            padding: "8px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <Menu style={{ width: "32px", height: "32px", color: "white" }} />
        </div>
      )}

      {/* Menu panel */}
      <div
        style={{
          position: 'fixed', 
          top: 0, 
          right: 0, 
          height: '100vh',
          width: 'clamp(200px, 70vw, 350px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)', 
          boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.5)',
          zIndex: 100,
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s ease-in-out',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start',
          padding: '32px',
        }}
      >
        {/* Minimize Icon (X) */}
        <div 
          onClick={toggleMenu} 
          style={{ 
            alignSelf: 'flex-end', 
            cursor: 'pointer', 
            marginBottom: '40px',
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "50%",
            padding: "8px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <X style={{ width: "32px", height: "32px", color: "white" }} />
        </div>

        {/* Menu Items */}
        <nav>
          {navLinks.map((item) => (
            <div
              key={item.label}
              onClick={() => handleNavigation(item)} 
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontFamily: "'Playfair Display', serif",
                color: '#F0E6D8',
                fontWeight: 'bold',
                marginBottom: '20px',
                cursor: 'pointer',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s ease-in-out',
                transform: 'scale(1) translateY(0)',
                userSelect: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-3px)';
                e.currentTarget.style.textShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
                e.currentTarget.style.color = '#f266acff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.textShadow = 'none';
                e.currentTarget.style.color = '#F0E6D8';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95) translateY(-1px)';
                e.currentTarget.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-3px)';
                e.currentTarget.style.textShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
              }}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
