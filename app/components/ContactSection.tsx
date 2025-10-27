import React from 'react';
//what i'm calling for the links- has link, and name its called by
const ContactSection: React.FC = () => {
  const socialLinks = [
    { icon: '/github.JPEG', href: 'https://github.com/taranbrown-png', label: 'GitHub' },
    { icon: '/linkdn.JPEG', href: 'https://www.instagram.com/_taranbrown/', label: 'LinkedIn' },
    { icon: '/gmail.JPEG', href: 'mailto:taranbrown@berkeley.edu', label: 'Email' },
  ];

  
  return (
    <footer 
      style={{//background image styling
        backgroundImage: "url('/bgi3.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center top', 
        position: 'relative',
        height: '100vh', //Taran you tried adjusting this, just keep vh
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Keeps text centered
        alignItems: 'center',
        color: 'white',
        overflow: 'hidden'
        
      }}
    >
      {/* "The tint"- this is how we go the split, DO NOT ADJUST THE 50%, and brighghtenss is the whole thing and i think this is the best option */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.6) 50%)',
        backdropFilter: 'brightness(0.5)'
      }}></div>
      
      {/* Top transition from Experience section */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '70px',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent)',
        zIndex: 1,
      }}></div>
      

    {/* Stay in touch stuff*/}
    <div style={{ position: 'relative', width: 'fit-content' }}>
    <div style={{ position: 'relative', width: 'fit-content', height: 'auto' , marginBottom: "25%"}}>

  {/* THE SHADOW LAYER taht took WAY too long to figure out */}
  <h3 style={{
    position: 'absolute', 
    top: '-12%',     // Aligns the top of the text box to the top of the parent div
    left: '0.4%', // Shadow offset
    zIndex: 9,    
    
    fontSize: 'clamp(4.5rem, 12vw, 11rem)', 
    fontFamily: "'Playfair Display', serif",
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: 'white', //shadow color
  }}>
    Stay in touch
  </h3>
 

  {/* teh Gradient to match the tint vibe */}
  <h2 style={{
    position: 'absolute', 
    top: '0',     
    left: '0',    
    zIndex: 10, 

    fontSize: 'clamp(4.5rem, 12vw, 11rem)', 
    fontFamily: "'Playfair Display', serif",
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap', 
    
    color: 'transparent',
    backgroundImage: 'linear-gradient(to right, #22031cff 45%, #381111ff 65%)', //gradient details
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text', 
  }}>
    Stay in touch
  </h2>
  
  {/* A spacer div is REQUIRED when both children are absolute! wait i lowk don't know what this means*/} 
  <div style={{
    // This div sets the height of the parent 'fit-content' div
    // based on the dimensions of the text (h2/h3).
    fontSize: 'clamp(4.5rem, 12vw, 11rem)',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 'bold',
    visibility: 'hidden'
  }}>
    Stay in touch
  </div>

</div>

</div>

      {/* Social Icons*/}
      <div style={{
        position: 'absolute',
        bottom: '1vh', 
        display: 'flex',
        gap: '3vw', //responsive gap btw, i liked the small better we did start with wider
        alignItems: 'center',
        zIndex: 10
      }}>
        {socialLinks.map((link, index) => (//thisi is where its mapping the links
          <a 
            key={index} 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'block',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label={`Link to ${link.label}`}
          >
            <img 
              src={link.icon}
              alt={link.label}
              style={{
                // RESPONSIVE SIZE: Adjusting to a smaller, responsive value (e.g., 8vw)
                height: '4vw',
                objectFit: 'contain',
                display: 'block',
                filter: 'grayscale(100%) sepia(50%) hue-rotate(330deg) brightness(80%) contrast(120%)',
                borderRadius: '50%',

              }}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default ContactSection;