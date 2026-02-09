import ReactGA from "react-ga4";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';


// Initialise Google Analytics avec ton ID de mesure
ReactGA.initialize("G-XXXXXXXXXX"); // REMPLACE PAR TON ID

// Envoie une notification de vue de page pour la page d'accueil
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function App() {
  return (
    <BrowserRouter>
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