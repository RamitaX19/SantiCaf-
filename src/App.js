import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu'; // si querés, también podés moverlo a /pages
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />         {/* Página principal con secciones */}
        <Route path="/menu" element={<Menu />} />     {/* Página aparte solo para el Menú */}
      </Routes>
    </Router>
  );
}

export default App;
