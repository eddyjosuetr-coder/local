import { useEffect } from 'react';
import './FullMenu.css';

import imgAntipasti from '../assets/menu_antipasti.png';
import imgPrimi from '../assets/menu_primi.png';
import imgSecondi from '../assets/menu_secondi.png';
import imgDolci from '../assets/menu_dolci.png';
import imgJuices from '../assets/menu_juices.png';
import imgCocktails from '../assets/menu_cocktails.png';

// Individual food items
import imgA1 from '../assets/item_antipasti_1.png';
import imgA2 from '../assets/item_antipasti_2.png';
import imgA3 from '../assets/item_antipasti_3.png';
import imgA4 from '../assets/item_antipasti_4.png';
import imgP1 from '../assets/item_primi_1.png';
import imgP2 from '../assets/item_primi_2.png';
import imgP3 from '../assets/item_primi_3.png';
import imgP4 from '../assets/item_primi_4.png';
import imgS1 from '../assets/item_secondi_1.png';
import imgS2 from '../assets/item_secondi_2.png';
import imgS3 from '../assets/item_secondi_3.png';
import imgS4 from '../assets/item_secondi_4.png';
import imgD1 from '../assets/item_dolci_1.png';
import imgD2 from '../assets/item_dolci_2.png';
import imgD3 from '../assets/item_dolci_3.png';
import imgJ1 from '../assets/item_juices_1.png';
import imgJ2 from '../assets/item_juices_2.png';
import imgJ3 from '../assets/item_juices_3.png';

const menuData = {
  antipasti: [
    { name: "Carpaccio di Manzo", price: "$24", description: "Láminas finas de lomo de res, rúcula silvestre, lascas de Parmigiano Reggiano 36 meses y aceite de trufa blanca.", image: imgA1 },
    { name: "Burrata con Tartufo", price: "$28", description: "Burrata fresca importada de Puglia, trufa negra de Umbría rallada en la mesa y crostini de masa madre.", image: imgA2 },
    { name: "Fiori di Zucca Ripieni", price: "$22", description: "Flores de calabacín rellenas de ricotta de oveja y pecorino, en ligera tempura con miel de trufa.", image: imgA3 },
    { name: "Tartare di Tonno Rosso", price: "$32", description: "Atún rojo del Mediterráneo, alcaparras de Pantelleria, emulsión de cítricos sicilianos y caviar Oscietra.", image: imgA4 }
  ],
  primi: [
    { name: "Ravioli all'Astice", price: "$45", description: "Raviolis rellenos de langosta de Maine, bañados en una bisque de mariscos y espuma de azafrán.", image: imgP1 },
    { name: "Risotto al Tartufo Nero", price: "$42", description: "Arroz Carnaroli Acquerello, mantequilla de Normandía, Parmigiano y trufa negra fresca.", image: imgP2 },
    { name: "Pappardelle al Ragù di Cinghiale", price: "$38", description: "Cintas de pasta fresca al huevo con un estofado lento de jabalí salvaje al vino Barolo.", image: imgP3 },
    { name: "Linguine alle Vongole Veraci", price: "$35", description: "Linguine de Gragnano, almejas frescas, ajo, peperoncino y un toque de vino blanco.", image: imgP4 }
  ],
  secondi: [
    { name: "Ossobuco alla Milanese", price: "$55", description: "Corte tradicional de ternera braseado durante 12 horas, gremolata y risotto al azafrán.", image: imgS1 },
    { name: "Bistecca alla Fiorentina", price: "$120", description: "Para compartir. Corte T-bone de res Wagyu madurado 45 días, cocinado a la brasa con romero.", image: imgS2 },
    { name: "Branzino al Sale", price: "$48", description: "Lubina europea asada en costra de sal marina, terminada en mesa con aceite de oliva extra virgen.", image: imgS3 },
    { name: "Costolette di Agnello", price: "$52", description: "Costillas de cordero lechal en costra de pistachos de Bronte, puré de apionabo y jus de vino tinto.", image: imgS4 }
  ],
  dolci: [
    { name: "Tiramisú Velluto", price: "$18", description: "El clásico veneciano reconstruido: mascarpone aireado, savoiardi empapados en espresso illy y cacao oscuro.", image: imgD1 },
    { name: "Panna Cotta alla Vaniglia", price: "$16", description: "Crema cocida con vainilla de Madagascar, coulis de frutos del bosque y crocante de almendras.", image: imgD2 },
    { name: "Cannolo Siciliano Scomposto", price: "$18", description: "Ricotta de oveja dulce, pistachos tostados, chocolate de Modica y tejas crujientes.", image: imgD3 }
  ],
  juices: [
    { name: "Limonata con Menta e Zenzero", price: "$10", description: "Limonada fresca con menta italiana y un toque de jengibre.", image: imgJ1 },
    { name: "Spremuta di Arancia Rossa", price: "$12", description: "Zumo natural de naranjas sanguinas de Sicilia.", image: imgJ2 },
    { name: "Estratto Verde Purgante", price: "$11", description: "Manzana verde, apio, pepino, espinaca y limón.", image: imgJ3 },
    { name: "Nettare di Pesca e Basilico", price: "$12", description: "Néctar de melocotón blanco con albahaca dulce fresca." },
    { name: "Succo di Melograno", price: "$14", description: "Jugo de granada 100% natural prensado en frío." },
    { name: "Frutti Rossi e Hibisco", price: "$12", description: "Infusión fría de flor de jamaica con fresas y moras." },
    { name: "Mela e Rosmarino", price: "$10", description: "Jugo de manzana clarificado con infusión de romero." },
    { name: "Ananas, Cocco e Lime", price: "$13", description: "Piña dorada, agua de coco joven y ralladura de lima." },
    { name: "Succo di Pompelmo Rosa", price: "$11", description: "Zumo de pomelo rosado recién exprimido." },
    { name: "Anguria Fresca", price: "$10", description: "Zumo de sandía con un toque de sal rosa del Himalaya." }
  ],
  alcohol: [
    { name: "Aperol Spritz Clásico", price: "$18", description: "Aperol, Prosecco Superiore DOCG y un golpe de soda." },
    { name: "Negroni Sbagliato", price: "$20", description: "Campari, Vermouth rojo y Prosecco en lugar de ginebra." },
    { name: "Velluto Martini", price: "$24", description: "Vodka premium, vermouth seco, aceituna siciliana y polvo de oro." },
    { name: "Barolo DOCG (Copa)", price: "$35", description: "El rey de los vinos tintos italianos del Piamonte." },
    { name: "Brunello di Montalcino (Copa)", price: "$40", description: "Elegancia y estructura en un vino tinto toscano excepcional." },
    { name: "Chianti Classico Riserva (Copa)", price: "$25", description: "Tinto clásico toscano con notas a cereza madura y roble." },
    { name: "Prosecco Valdobbiadene (Copa)", price: "$22", description: "Espumoso elegante, floral y seco del norte de Italia." }
  ],
  softDrinks: [
    { name: "San Pellegrino (750ml)", price: "$9", description: "Agua mineral gasificada de los Alpes Italianos." },
    { name: "Acqua Panna (750ml)", price: "$9", description: "Agua mineral natural sin gas de la Toscana." },
    { name: "Aranciata San Pellegrino", price: "$6", description: "Bebida espumosa de naranja." },
    { name: "Limonata San Pellegrino", price: "$6", description: "Bebida espumosa de limón." },
    { name: "Coca-Cola / Coca-Cola Zero", price: "$5", description: "Clásicos refrescos carbonatados." }
  ]
};

const FullMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="full-menu-page">
      <div className="menu-header">
        <h1>Il Menú</h1>
        <p>Una travesía gastronómica por las regiones de Italia, curada con excelencia y pasión.</p>
      </div>

      <div className="container menu-container">
        {/* --- COMIDA --- */}
        <section className="menu-category">
          <h2 className="category-title">Antipasti <span>(Entradas)</span></h2>
          <div className="category-banner">
             <img src={imgAntipasti} alt="Antipasti" loading="lazy" />
          </div>
          <div className="menu-grid cards-grid">
            {menuData.antipasti.map((item, i) => (
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

        <section className="menu-category">
          <h2 className="category-title">Primi Piatti <span>(Pastas y Risottos)</span></h2>
          <div className="category-banner">
             <img src={imgPrimi} alt="Primi Piatti" loading="lazy" />
          </div>
          <div className="menu-grid cards-grid">
            {menuData.primi.map((item, i) => (
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

        <section className="menu-category">
          <h2 className="category-title">Secondi Piatti <span>(Platos Principales)</span></h2>
          <div className="category-banner">
             <img src={imgSecondi} alt="Secondi Piatti" loading="lazy" />
          </div>
          <div className="menu-grid cards-grid">
            {menuData.secondi.map((item, i) => (
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

        <section className="menu-category">
          <h2 className="category-title">Dolci <span>(Postres)</span></h2>
          <div className="category-banner">
             <img src={imgDolci} alt="Dolci" loading="lazy" />
          </div>
          <div className="menu-grid cards-grid">
            {menuData.dolci.map((item, i) => (
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

        <div className="menu-divider"></div>

        {/* --- BEBIDAS --- */}
        <div className="menu-header drinks-header">
          <h1>Le Bevande</h1>
          <p>Nuestra exclusiva selección de mixología, jugos frescos y refrescos.</p>
        </div>

        <section className="menu-category">
          <h2 className="category-title">Jugos y Néctares Naturales</h2>
          <div className="category-banner">
             <img src={imgJuices} alt="Jugos y Néctares" loading="lazy" />
          </div>
          <div className="menu-grid cards-grid">
            {menuData.juices.map((item, i) => (
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

        <section className="menu-category">
          <h2 className="category-title">Cócteles y Vinos por Copa</h2>
          <div className="category-banner">
             <img src={imgCocktails} alt="Cócteles y Vinos" loading="lazy" />
          </div>
          <div className="menu-grid">
            {menuData.alcohol.map((item, i) => (
              <div className="menu-item" key={i}>
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="menu-category">
          <h2 className="category-title">Refrescos y Aguas</h2>
          <div className="menu-grid">
            {menuData.softDrinks.map((item, i) => (
              <div className="menu-item" key={i}>
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default FullMenu;
