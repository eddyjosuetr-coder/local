import { useEffect } from 'react';
import './Experience.css';
import interiorImg from '../assets/hero_interior.png';
import pastaImg from '../assets/food_pasta.png';
import pizzaImg from '../assets/food_pizza.png';
import tiramisuImg from '../assets/food_tiramisu.png';
import risottoImg from '../assets/food_risotto.png';
import ossobucoImg from '../assets/food_ossobuco.png';
import capreseImg from '../assets/food_caprese.png';
import ravioliImg from '../assets/food_ravioli.png';

const galleryImages = [
  { id: 1, src: ravioliImg,   alt: 'Lobster Ravioli' },
  { id: 2, src: capreseImg,   alt: 'Caprese Salad' },
  { id: 3, src: ossobucoImg,  alt: 'Ossobuco alla Milanese' },
  { id: 4, src: pastaImg,     alt: 'Pasta al Tartufo' },
  { id: 5, src: pizzaImg,     alt: 'Pizza Margherita' },
  { id: 6, src: risottoImg,   alt: 'Risotto al Zafferano' },
  { id: 7, src: tiramisuImg,  alt: 'Tiramisú' },
];

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section experience">
      <div className="container">

        {/* ─── Texto + imagen ─── */}
        <div className="context-section reveal">
          <div className="context-text">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              El Alma de<br />la Cocina Italiana
            </h2>
            <p>
              En Velluto, la gastronomía trasciende lo ordinario para convertirse en un arte sublime. Cada creación es un homenaje a nuestras raíces italianas, donde la pasión inquebrantable por los detalles y la pureza de nuestros ingredientes cuentan una historia de herencia y sofisticación.
            </p>
            <p>
              Seleccionamos meticulosamente desde las raras trufas de la Toscana hasta el oro líquido prensado en frío de Sicilia. Nuestro equipo culinario transforma estos tesoros en obras que logran el <strong>equilibrio perfecto entre la innovación y la nostalgia de la tradición</strong>. Cruce nuestras puertas y permítase vivir una velada donde la elegancia y el sabor absoluto toman el protagonismo.
            </p>
          </div>
          <div className="context-image">
            <img src={interiorImg} alt="Interior del restaurante Velluto" />
          </div>
        </div>

        {/* ─── Pull quote ─── */}
        <blockquote className="pull-quote reveal">
          <span className="pull-quote__mark">&ldquo;</span>
          La cucina è la più bella forma d&rsquo;arte italiana.
          <span className="pull-quote__attribution">— Arte Culinaria · Firenze</span>
        </blockquote>

        {/* ─── Galería ─── */}
        <div className="gallery-section">
          <div className="gallery-header reveal">
            <h2 className="section-title">El Arte en Nuestros Platos</h2>
          </div>
          <div className="artistic-gallery">
            {galleryImages.map((img, index) => (
              <div
                key={img.id}
                className={`gallery-item reveal reveal-delay-${Math.min(index + 1, 7)}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-label">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
