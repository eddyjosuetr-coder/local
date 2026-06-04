import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FullMenu.css';
import { menuData, banners } from '../data/menuData';

const MenuSection = ({ title, subtitle, banner, items }) => (
  <section className="menu-category">
    <h2 className="category-title">
      {title} {subtitle && <span>{subtitle}</span>}
    </h2>
    {banner && (
      <div className="category-banner">
        <img src={banner} alt={title} loading="lazy" />
      </div>
    )}
    <div className="menu-grid cards-grid">
      {items.map((item, i) => (
        <div className="menu-card" key={i}>
          {item.image && (
            <div className="menu-card-image">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
          )}
          <div className="menu-card-content">
            <div className="menu-item-header">
              <h3>{item.name}</h3>
              <span className="price">{item.price}</span>
            </div>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const FullMenu = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="full-menu-page">

      {/* ─── Botón volver ─── */}
      <Link to="/" className="back-btn">
        <span className="back-btn__arrow">←</span>
        <span>Volver al inicio</span>
      </Link>

      <div className="menu-header">
        <h1>Il Menú</h1>
        <p>Una travesía gastronómica por las regiones de Italia, curada con excelencia y pasión.</p>
      </div>

      <div className="container menu-container">

        <MenuSection title="Antipasti"      subtitle="(Entradas)"              banner={banners.antipasti} items={menuData.antipasti} />
        <MenuSection title="Primi Piatti"   subtitle="(Pastas y Risottos)"     banner={banners.primi}     items={menuData.primi} />
        <MenuSection title="Secondi Piatti" subtitle="(Platos Principales)"    banner={banners.secondi}   items={menuData.secondi} />
        <MenuSection title="Dolci"          subtitle="(Postres)"               banner={banners.dolci}     items={menuData.dolci} />

        <div className="menu-divider" />

        <div className="menu-header drinks-header">
          <h1>Le Bevande</h1>
          <p>Nuestra exclusiva selección de mixología, jugos frescos y refrescos.</p>
        </div>

        <MenuSection title="Jugos y Néctares Naturales"  banner={banners.juices}    items={menuData.juices} />
        <MenuSection title="Cócteles y Vinos por Copa"   banner={banners.cocktails} items={menuData.alcohol} />
        <MenuSection title="Refrescos y Aguas"                                       items={menuData.softDrinks} />

      </div>
    </div>
  );
};

export default FullMenu;
