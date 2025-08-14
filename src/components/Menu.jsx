import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Menu() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
    };

  return (
    <>
    <section className="navbarMenu">
          <logo className="logo">
            <img src="logo_santi.jpg" className="log" alt="Logo" />
            <h1 className="titNav">Santicafé</h1>
          </logo>
    
          <div className="menu-pcM">
            <Link to="/">Inicio</Link>
            <Link to="/">Sobre nosotros</Link>
            <Link to="/menu">Menú</Link>
          </div>
    </section>

    <section className="heroM">
          {/* Ícono ||| en la esquina superior derecha */}
          <div className={`hero-toggle ${menuAbierto ? 'abierto' : ''}`} onClick={toggleMenu}>
            {menuAbierto ? '╳' : '|||'}
          </div>

          {/* Menú móvil desplegable */}
          <div className={`menu-movil ${menuAbierto ? 'mostrar' : ''}`} onClick={() => setMenuAbierto(false)}>
            <Link to="/">Inicio</Link>
            <Link to="/">Sobre nosotros</Link>
            <Link to="/menu">Menú</Link>
          </div>
        </section>

    <div className="pagina-menu">
      <h1 className="titulo">Nuestro Menú</h1>
      <div className="categorias">
        <h2 className="titCateg">Opciones dulces</h2>
      </div>
      <div className="menu-grid">
        <div className="card-menu">
          <img src="/img_cafe1.jpg" alt="Prueba" />
          <h3>prueba</h3>
          <p>Descripcion de prueba.</p>
          <span>$1</span>
        </div>
        <div className="card-menu">
          <img src="/img_cafe1.jpg" alt="Prueba" />
          <h3>prueba</h3>
          <p>Descripcion de prueba.</p>
          <span>$1</span>
        </div>
      </div>
      <div className="categorias">
        <h2 className="titCateg">Opciones saladas</h2>
      </div>
      <div className="menu-grid">
        <div className="card-menu">
          <img src="/img_cafe1.jpg" alt="Prueba" />
          <h3>prueba</h3>
          <p>Descripcion de prueba.</p>
          <span>$1</span>
        </div>
        <div className="card-menu">
          <img src="/img_cafe1.jpg" alt="Prueba" />
          <h3>prueba</h3>
          <p>Descripcion de prueba.</p>
          <span>$1</span>
        </div>
      </div>
      <div className="categorias">
        <h2 className="titCateg">bebidas</h2>
      </div>
      <div className="menu-grid">
        <div className="card-menu">
          <img src="/img_cafe1.jpg" alt="Prueba" />
          <h3>prueba</h3>
          <p>Descripcion de prueba.</p>
          <span>$1</span>
        </div>
        <div className="card-menu">
          <img src="/img_cafe1.jpg" alt="Prueba" />
          <h3>prueba</h3>
          <p>Descripcion de prueba.</p>
          <span>$1</span>
        </div>
      </div>
      <div className='linkInicio'>
      <Link to="/" className='volver'>Volver al inicio</Link>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Menu;
