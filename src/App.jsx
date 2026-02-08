import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {
  // Détecte si on est sur GitHub Pages ou en local
  const isProduction = import.meta.env.PROD;
  const baseName = isProduction ? '/hugues' : '';

  return (
    <BrowserRouter basename={baseName}>
      <Navbar/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='portfolio' element={<Portfolio />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;