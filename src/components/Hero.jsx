import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <section className="hero">
      {/* Ícono ||| en la esquina superior derecha */}
      <div className={`hero-toggle ${menuAbierto ? 'abierto' : ''}`} onClick={toggleMenu}>
        {menuAbierto ? '╳' : '|||'}
      </div>

      <div className="tit">
        <h2>Bienvenido a Santicafé</h2>
        <p>El mejor café artesanal de los Reartes</p>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`menu-movil ${menuAbierto ? 'mostrar' : ''}`} onClick={() => setMenuAbierto(false)}>
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Sobre Nosotros</a>
        <a href="#contacto">Contacto</a>
        <Link to="/menu">Menú</Link>
      </div>
    </section>
  );
}

export default Hero;
