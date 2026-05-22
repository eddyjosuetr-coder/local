import './Menu.css';
import pastaImg from '../assets/food_pasta.png';
import pizzaImg from '../assets/food_pizza.png';
import tiramisuImg from '../assets/food_tiramisu.png';

const menuItems = [
  {
    id: 1,
    title: "Pasta al Tartufo",
    description: "Pasta artesanal con trufa negra fresca, parmesano reggiano y un toque de aceite de oliva.",
    price: "$35",
    image: pastaImg
  },
  {
    id: 2,
    title: "Pizza Margherita Suprema",
    description: "Masa madre de fermentación lenta, tomate San Marzano, mozzarella di bufala y albahaca fresca.",
    price: "$28",
    image: pizzaImg
  },
  {
    id: 3,
    title: "Tiramisú L'Aura",
    description: "Nuestra versión deconstruida del clásico italiano, con mascarpone, café espresso y cacao premium.",
    price: "$18",
    image: tiramisuImg
  }
];

const Menu = () => {
  return (
    <section id="menu" className="section menu">
      <div className="container">
        <h2 className="section-title">Nuestro Menú</h2>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3 className="menu-item-title">{item.title}</h3>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="menu-action">
          <button className="btn btn-outline">Ver Menú Completo</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
