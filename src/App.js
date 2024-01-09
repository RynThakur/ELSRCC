import React from 'react';
import './app.css';
import './index.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Sponser from './components/Sponser/Sponser';
import './app.css';
import Publication from './components/publications/Publication';
import Contact from './components/contacts/Contact';
import Zephyr from './components/Zephyr/Zephyr';
import Footer from './components/footer/Footer';
import ZephyrM from './components/Zephyr/ZephyrM';
import PublicationM from './components/publications/PublicationM';
import Sreo from './components/Sreo/Sreo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />

        <Router>
          <Header />
          <Hero />
          <Sponser/>
          <About />
          <Publication />
          <Contact />
          <Zephyr />
          <Routes>
            <Route path="/zephyrM" element={<ZephyrM />} />
            <Route path="/publicationM" element={<PublicationM/>} />
            <Route path="/sreo" element={<Sreo/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
