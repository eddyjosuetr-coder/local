import { Link } from 'react-router-dom';
import './Footer.css';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import logoImg from '../assets/restaurant_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <h3>Enlaces</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/menu">El Menú</Link></li>
              <li><a href="/#experience">La Experiencia</a></li>
              <li><a href="/#reservations">Reservas</a></li>
            </ul>
          </div>
          <div className="footer-brand">
            <img src={logoImg} alt="Velluto Logo" style={{ height: '140px', marginBottom: '1rem', objectFit: 'contain' }} />
            <p>La esencia de Italia en cada bocado. Una experiencia culinaria diseñada para cautivar sus sentidos.</p>
          </div>
          <div className="footer-social">
            <h3>Síganos</h3>
            <div className="social-icons">
              <a href="#" className="social-icon whatsapp">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" className="social-icon instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="social-icon facebook">
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Velluto Ristorante. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
