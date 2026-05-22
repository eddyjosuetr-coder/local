import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import FullMenu from './components/FullMenu';

const Home = () => (
  <>
    <Hero />
    <Experience />
    <Reservation />
  </>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<FullMenu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
