import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`navbar ${scroll ? 'navbar-scrolled' : ''}`}>
      <logo className="logo">
        <img src="logo_santi.jpg" className="log" alt="Logo" />
        <h1 className="titNav">Santicafé</h1>
      </logo>

      <div className="menu-pc">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Sobre Nosotros</a>
        <a href="#contacto">Contacto</a>
        <Link to="/menu">Menú</Link>
      </div>
    </section>
  );
}

export default Navbar;