import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import FullMenu from './components/FullMenu';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';

const Home = () => (
  <>
    <Hero />
    <Experience />
    <Reservation />
  </>
);

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<FullMenu />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
