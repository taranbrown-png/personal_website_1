"use client";

import React, { useState } from "react";

// Type checking
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleAboutMeClick = () => {
    setIsInfoVisible(!isInfoVisible);
  };
  //background detailing (plants#photosynthesize)
  return (
    <section
      style={{
        backgroundImage: "url('/bgi1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom", // Position to show bottom of image
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        overflow: "hidden"
      }}
    >
      {/* the tint and the blur ts */}
      <div style={{
        position: "absolute", inset: "0", backgroundColor: "rgba(0, 0, 0, 0.6)", 
        backdropFilter: "brightness(0.7)", zIndex: 1,
      }}></div>

      <div
        style={{
            position: "absolute", inset: "5%", backgroundColor: "rgba(82, 63, 63, 0.15)",
            backdropFilter: "blur(7px)", borderRadius: "50px", zIndex: 5, 
        }}
      >
      </div>

      {/* Bottom transition to next section */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "60px",
        background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3))",
        zIndex: 6,
      }}></div>

   {/* Profile and name */}
<div
  style={{
    position: "relative", zIndex: 10, maxWidth: "1400px", width: "100%", padding: "0 5%",
  }}
>
  <div
    style={{
      display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",
      gap: "min(4vw, 40px)", flexWrap: 'wrap', alignContent: 'center', minHeight: '80vh',
    }}
  >
    {/* Profile Image stuff */}
    <div
      style={{
        width: "clamp(280px, 35vw, 480px)", aspectRatio: '1 / 1', borderRadius: "50%",
        overflow: "hidden", border: "4px solid white",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", flexShrink: 0,
        // Negative margin to pull it slightly outside the blurry box
        marginLeft: 'max(-100px, -7vw)', marginRight: 'min(4vw, 40px)', position: 'relative',
        zIndex: 15,
      }}
    >
      <img
        src="/headshot.png" alt="Taran Brown Profile"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>

    {/* button and extra info  */}
    <div
      style={{
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        flexGrow: 1, maxWidth: "600px", textAlign: 'center', padding: '20px 0',
      }}
    >
      {/* name */}
      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)", fontFamily: "'Playfair Display', serif",
          fontWeight: "bold", letterSpacing: "-0.025em", color: "#F0E6D8", margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        Taran Brown
      </h1>
      
      {/* about me button sooo cute :)*/}
      <button
        onClick={handleAboutMeClick} onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        style={{
          padding: '6px 18px', marginTop: '20px', border: '2px solid #F0E6D8',
          borderRadius: '50px', backgroundColor: isButtonHovered ? '#f266acff' : 'transparent', 
          color: isButtonHovered ? '#1C1C1C' : '#F0E6D8', fontSize: 'clamp(0.8rem, 1.2vw, 1.0rem)',
          fontWeight: 'bold', cursor: 'pointer', outline: 'none', transition: 'all 0.3s ease-in-out',
        }}
      >
        {isInfoVisible ? "Hide Info" : "About Me"}
      </button>


      {/* the actual info for the about me button*/}
      <div
        style={{
          opacity: isInfoVisible ? 1 : 0, maxHeight: isInfoVisible ? '500px' : '0', 
          overflow: 'hidden', transition: 'opacity 0.6s ease-in-out, max-height 0.8s ease-in-out',
          padding: isInfoVisible ? '1.5rem 2rem' : '0 2rem', marginTop: isInfoVisible ? '20px' : '0',
          width: '100%', maxWidth: '450px', backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px', borderLeft: '4px solid #F0E6D8', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          boxSizing: 'border-box',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', fontFamily: "'Roboto', sans-serif",
            lineHeight: 1.6, color: '#F0E6D8', margin: 0, textAlign: 'left',
          }}
        >
          Hi friend! My name is Taran Brown and I am a student at the University of California, Berkeley. I am currently pursuing a degree in Economics and Philosophy! Evidently, my interests are anything but limited; I am a published writer for BARE magazine and I am actively developing software skills specifically in web design. Above all, I love connecting with like-minded individiuals, so feel free to reach out!
        </p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default HeroSection;