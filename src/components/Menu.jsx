import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
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
  );
}

export default Menu;
