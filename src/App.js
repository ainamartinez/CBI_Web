import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gamification from './pages/Gamification';
import Stats from './pages/Stats';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("CBI | Metrio x Aqua Mist");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/gamification" element={<Gamification />} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
