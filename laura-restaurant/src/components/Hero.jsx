import { Link } from 'react-router-dom';
import './Hero.css';
import heroImage from '../assets/restaurant_ambiance.jpg.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <p className="hero-subtitle">Alta Cocina Italiana</p>

        <div className="hero-ornament">
          <span className="ornament-line"></span>
          <span className="ornament-gem">◆</span>
          <span className="ornament-line ornament-line--right"></span>
        </div>

        <h1 className="hero-title">Velluto</h1>

        <p className="hero-text">
          Una experiencia culinaria inolvidable. Descubra la verdadera esencia de Italia
          en un ambiente de elegancia y sofisticación.
        </p>

        <div className="hero-buttons">
          <a href="#reservations" className="btn btn-primary">Hacer una Reserva</a>
          <Link to="/menu" className="btn btn-outline">Ver Menú Completo</Link>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="scroll-line"></span>
      </div>
    </section>
  );
};

export default Hero;
