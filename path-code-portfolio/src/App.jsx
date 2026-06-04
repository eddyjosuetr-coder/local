import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const letterORef = useRef(null);
  const whiteSectionRef = useRef(null);
  
  // Custom cursor logic
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    let scrollTimeout;
    const handleScroll = () => {
      setIsDragging(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsDragging(false);
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useGSAP(() => {
    // Zoom Animation Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=3000', // Scroll duration for the zoom
        scrub: 1,
        pin: true,
      }
    });

    // 1. Scale up the letter 'O' massively
    tl.to(letterORef.current, {
      scale: 150, // Massive scale to cover screen with the hole
      transformOrigin: '50% 50%',
      ease: 'power2.inOut',
    }, 0);

    // 2. Fade out other elements while zooming
    tl.to('.fade-out-on-scroll', {
      opacity: 0,
      ease: 'power1.inOut',
    }, 0);

    // 3. Make the background of the 'O' hole white by fading in the white section
    tl.to(whiteSectionRef.current, {
      opacity: 1,
      pointerEvents: 'auto',
      ease: 'power2.in',
    }, 0.5);

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="app-container" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      
      {/* Hand Cursor Placeholder */}
      <div 
        className={`custom-cursor ${isDragging ? 'dragging' : ''}`}
        style={{ 
          opacity: 1, 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px` 
        }}
      >
        {/* Placeholder emoji for hand, user will replace with video/image */}
        <span style={{ fontSize: '40px', filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.5))' }}>🤏</span>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          zIndex: 1
        }}
      >
        
        {/* Main Title */}
        <div 
          ref={textRef}
          style={{ 
            fontFamily: 'var(--font-gothic)', 
            fontSize: 'clamp(5rem, 15vw, 15rem)', 
            color: 'var(--primary-pink)',
            lineHeight: 0.9,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            textShadow: '0 0 20px rgba(255, 166, 201, 0.2)',
            zIndex: 2,
            position: 'relative'
          }}
        >
          <span className="fade-out-on-scroll" style={{ display: 'inline-block' }}>PATH C</span>
          <span 
            ref={letterORef} 
            style={{ 
              display: 'inline-block', 
              position: 'relative',
              // Using a trick: the 'O' itself scales. If we use a font, the letter scales. 
              // We'll give it a clean geometric O just for this letter to ensure a good hole zoom.
            }}
          >
            O
          </span>
          <span className="fade-out-on-scroll" style={{ display: 'inline-block' }}>DE</span>
        </div>

        {/* Subtitle */}
        <div 
          className="fade-out-on-scroll"
          style={{
            alignSelf: 'flex-end',
            marginRight: '10%',
            marginTop: '1rem',
            textAlign: 'right'
          }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '2px' }}>PORTFOLIO SITE</h2>
          <p style={{ fontSize: '0.8rem', color: '#aaa', marginTop: '0.5rem' }}>© 2026 DARKROOM.ENGINEERING</p>
        </div>

        {/* Bottom Elements */}
        <div 
          className="fade-out-on-scroll"
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            right: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}
        >
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
            <div style={{ borderLeft: '2px solid var(--primary-pink)', paddingLeft: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.1 }}>SCROLL<br/>TO EXPLORE</h3>
            </div>
            <p style={{ fontSize: '0.9rem', maxWidth: '200px', lineHeight: 1.4, fontWeight: 500 }}>
              A CUSTOM-BUILT PORTFOLIO |<br/>CRAFTED BY PATH CODE
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ 
              display: 'flex', alignItems: 'center', backgroundColor: 'var(--primary-pink)', color: '#000', 
              textDecoration: 'none', fontWeight: 700, padding: '0', height: '48px'
            }}>
              <div style={{ backgroundColor: '#000', color: '#fff', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </div>
              <span style={{ padding: '0 2rem' }}>DOCUMENTATION</span>
            </a>
            
            <a href="#" style={{ 
              display: 'flex', alignItems: 'center', backgroundColor: 'var(--primary-pink)', color: '#000', 
              textDecoration: 'none', fontWeight: 700, padding: '0', height: '48px'
            }}>
              <div style={{ backgroundColor: '#000', color: '#fff', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowUpRight size={20} />
              </div>
              <span style={{ padding: '0 2rem' }}>VIEW SHOWCASE</span>
            </a>
          </div>
        </div>
      </section>

      {/* White Section (The Story) */}
      <section
        ref={whiteSectionRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          color: '#000000',
          opacity: 0, // Hidden initially
          pointerEvents: 'none', // Allow clicks to pass through when hidden
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem',
        }}
      >
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--primary-pink)' }}>NUESTRA HISTORIA</h2>
          <p style={{ fontSize: '1.5rem', lineHeight: 1.6, fontWeight: 500 }}>
            En <strong>Path Code</strong>, nos especializamos en crear páginas web profesionales, 
            altamente animadas y diseñadas a medida. 
          </p>
          <p style={{ fontSize: '1.5rem', lineHeight: 1.6, fontWeight: 500, marginTop: '1.5rem' }}>
            Transformamos flujos de trabajo complejos en sistemas simples mediante
            <strong> automatizaciones avanzadas con n8n</strong>, llevando la eficiencia 
            de tu negocio al siguiente nivel.
          </p>
        </div>
      </section>

    </div>
  );
}

export default App;
