import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/restaurant_logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logoImg} alt="Velluto" style={{ height: '44px', objectFit: 'contain' }} />
          </Link>

          {/* Links escritorio */}
          <ul className="navbar-menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/menu">El Menú</Link></li>
            <li><a href="/#experience">La Experiencia</a></li>
          </ul>

          <div className="navbar-right">
            <a href="/#reservations" className="btn btn-outline btn-sm navbar-cta">Reservar</a>

            {/* Botón hamburguesa */}
            <button
              className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil overlay */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__nav">
          <Link to="/" className="mobile-menu__link">Inicio</Link>
          <Link to="/menu" className="mobile-menu__link">El Menú</Link>
          <a href="/#experience" className="mobile-menu__link" onClick={() => setMenuOpen(false)}>
            La Experiencia
          </a>
          <a href="/#reservations" className="mobile-menu__link mobile-menu__link--cta" onClick={() => setMenuOpen(false)}>
            Reservar
          </a>
        </nav>
        <div className="mobile-menu__ornament" aria-hidden="true">Velluto</div>
      </div>
    </>
  );
};

export default Navbar;
