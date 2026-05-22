import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/restaurant_logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="Velluto" style={{ height: '44px', objectFit: 'contain' }} />
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/menu">El Menú</Link></li>
          <li><a href="/#experience">La Experiencia</a></li>
        </ul>
        <div className="navbar-action">
          <a href="/#reservations" className="btn btn-outline btn-sm">Reservar</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
