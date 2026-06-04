import imgAntipasti from '../assets/menu_antipasti.png';
import imgPrimi     from '../assets/menu_primi.png';
import imgSecondi   from '../assets/menu_secondi.png';
import imgDolci     from '../assets/menu_dolci.png';
import imgJuices    from '../assets/menu_juices.png';
import imgCocktails from '../assets/menu_cocktails.png';

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

import imgJ1  from '../assets/item_juices_1.png';
import imgJ2  from '../assets/item_juices_2.png';
import imgJ3  from '../assets/item_juices_3.png';
import imgJ4  from '../assets/item_juices_4.png';
import imgJ5  from '../assets/item_juices_5.png';
import imgJ6  from '../assets/item_juices_6.png';
import imgJ7  from '../assets/item_juices_7.png';
import imgJ8  from '../assets/item_juices_8.png';
import imgJ9  from '../assets/item_juices_9.png';
import imgJ10 from '../assets/item_juices_10.png';

import imgAl1 from '../assets/item_alcohol_1.png';
import imgAl2 from '../assets/item_alcohol_2.png';
import imgAl3 from '../assets/item_alcohol_3.png';
import imgAl4 from '../assets/item_alcohol_4.png';
import imgAl5 from '../assets/item_alcohol_5.png';
import imgAl6 from '../assets/item_alcohol_6.png';
import imgAl7 from '../assets/item_alcohol_7.png';

import imgSD1 from '../assets/item_softdrinks_1.png';
import imgSD2 from '../assets/item_softdrinks_2.png';
import imgSD3 from '../assets/item_softdrinks_3.png';
import imgSD4 from '../assets/item_softdrinks_4.png';
import imgSD5 from '../assets/item_softdrinks_5.png';

export const banners = {
  antipasti: imgAntipasti,
  primi:     imgPrimi,
  secondi:   imgSecondi,
  dolci:     imgDolci,
  juices:    imgJuices,
  cocktails: imgCocktails,
};

export const menuData = {
  antipasti: [
    { name: "Carpaccio di Manzo",     price: "$24", description: "Láminas finas de lomo de res, rúcula silvestre, lascas de Parmigiano Reggiano 36 meses y aceite de trufa blanca.", image: imgA1 },
    { name: "Burrata con Tartufo",    price: "$28", description: "Burrata fresca importada de Puglia, trufa negra de Umbría rallada en la mesa y crostini de masa madre.", image: imgA2 },
    { name: "Fiori di Zucca Ripieni", price: "$22", description: "Flores de calabacín rellenas de ricotta de oveja y pecorino, en ligera tempura con miel de trufa.", image: imgA3 },
    { name: "Tartare di Tonno Rosso", price: "$32", description: "Atún rojo del Mediterráneo, alcaparras de Pantelleria, emulsión de cítricos sicilianos y caviar Oscietra.", image: imgA4 },
  ],
  primi: [
    { name: "Ravioli all'Astice",           price: "$45", description: "Raviolis rellenos de langosta de Maine, bañados en una bisque de mariscos y espuma de azafrán.", image: imgP1 },
    { name: "Risotto al Tartufo Nero",       price: "$42", description: "Arroz Carnaroli Acquerello, mantequilla de Normandía, Parmigiano y trufa negra fresca.", image: imgP2 },
    { name: "Pappardelle al Ragù di Cinghiale", price: "$38", description: "Cintas de pasta fresca al huevo con un estofado lento de jabalí salvaje al vino Barolo.", image: imgP3 },
    { name: "Linguine alle Vongole Veraci",  price: "$35", description: "Linguine de Gragnano, almejas frescas, ajo, peperoncino y un toque de vino blanco.", image: imgP4 },
  ],
  secondi: [
    { name: "Ossobuco alla Milanese",   price: "$55",  description: "Corte tradicional de ternera braseado durante 12 horas, gremolata y risotto al azafrán.", image: imgS1 },
    { name: "Bistecca alla Fiorentina", price: "$120", description: "Para compartir. Corte T-bone de res Wagyu madurado 45 días, cocinado a la brasa con romero.", image: imgS2 },
    { name: "Branzino al Sale",         price: "$48",  description: "Lubina europea asada en costra de sal marina, terminada en mesa con aceite de oliva extra virgen.", image: imgS3 },
    { name: "Costolette di Agnello",    price: "$52",  description: "Costillas de cordero lechal en costra de pistachos de Bronte, puré de apionabo y jus de vino tinto.", image: imgS4 },
  ],
  dolci: [
    { name: "Tiramisú Velluto",               price: "$18", description: "El clásico veneciano reconstruido: mascarpone aireado, savoiardi empapados en espresso illy y cacao oscuro.", image: imgD1 },
    { name: "Panna Cotta alla Vaniglia",      price: "$16", description: "Crema cocida con vainilla de Madagascar, coulis de frutos del bosque y crocante de almendras.", image: imgD2 },
    { name: "Cannolo Siciliano Scomposto",    price: "$18", description: "Ricotta de oveja dulce, pistachos tostados, chocolate de Modica y tejas crujientes.", image: imgD3 },
  ],
  juices: [
    { name: "Limonata con Menta e Zenzero", price: "$10", description: "Limonada fresca con menta italiana y un toque de jengibre.", image: imgJ1 },
    { name: "Spremuta di Arancia Rossa",    price: "$12", description: "Zumo natural de naranjas sanguinas de Sicilia.", image: imgJ2 },
    { name: "Estratto Verde Purgante",      price: "$11", description: "Manzana verde, apio, pepino, espinaca y limón.", image: imgJ3 },
    { name: "Nettare di Pesca e Basilico",  price: "$12", description: "Néctar de melocotón blanco con albahaca dulce fresca.", image: imgJ4 },
    { name: "Succo di Melograno",           price: "$14", description: "Jugo de granada 100% natural prensado en frío.", image: imgJ5 },
    { name: "Frutti Rossi e Hibisco",       price: "$12", description: "Infusión fría de flor de jamaica con fresas y moras.", image: imgJ6 },
    { name: "Mela e Rosmarino",             price: "$10", description: "Jugo de manzana clarificado con infusión de romero.", image: imgJ7 },
    { name: "Ananas, Cocco e Lime",         price: "$13", description: "Piña dorada, agua de coco joven y ralladura de lima.", image: imgJ8 },
    { name: "Succo di Pompelmo Rosa",       price: "$11", description: "Zumo de pomelo rosado recién exprimido.", image: imgJ9 },
    { name: "Anguria Fresca",               price: "$10", description: "Zumo de sandía con un toque de sal rosa del Himalaya.", image: imgJ10 },
  ],
  alcohol: [
    { name: "Aperol Spritz Clásico",          price: "$18", description: "Aperol, Prosecco Superiore DOCG y un golpe de soda.", image: imgAl1 },
    { name: "Negroni Sbagliato",              price: "$20", description: "Campari, Vermouth rojo y Prosecco en lugar de ginebra.", image: imgAl2 },
    { name: "Velluto Martini",                price: "$24", description: "Vodka premium, vermouth seco, aceituna siciliana y polvo de oro.", image: imgAl3 },
    { name: "Barolo DOCG (Copa)",             price: "$35", description: "El rey de los vinos tintos italianos del Piamonte.", image: imgAl4 },
    { name: "Brunello di Montalcino (Copa)",  price: "$40", description: "Elegancia y estructura en un vino tinto toscano excepcional.", image: imgAl5 },
    { name: "Chianti Classico Riserva (Copa)",price: "$25", description: "Tinto clásico toscano con notas a cereza madura y roble.", image: imgAl6 },
    { name: "Prosecco Valdobbiadene (Copa)",  price: "$22", description: "Espumoso elegante, floral y seco del norte de Italia.", image: imgAl7 },
  ],
  softDrinks: [
    { name: "San Pellegrino (750ml)",       price: "$9", description: "Agua mineral gasificada de los Alpes Italianos.", image: imgSD1 },
    { name: "Acqua Panna (750ml)",          price: "$9", description: "Agua mineral natural sin gas de la Toscana.", image: imgSD2 },
    { name: "Aranciata San Pellegrino",     price: "$6", description: "Bebida espumosa de naranja.", image: imgSD3 },
    { name: "Limonata San Pellegrino",      price: "$6", description: "Bebida espumosa de limón.", image: imgSD4 },
    { name: "Coca-Cola / Coca-Cola Zero",   price: "$5", description: "Clásicos refrescos carbonatados.", image: imgSD5 },
  ],
};
