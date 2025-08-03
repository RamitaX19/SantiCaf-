import React from 'react';

function About() {
  return (
    <section className="cuadricula">
      <div className="item imagen img1 area-img1"></div>
      <div className="item texto area-text1">
        <h2 className='titCuadri'>Sobre Nosotros</h2>
        <p>En SantiCafé, cada taza cuenta una historia. 
          Somos mucho más que una cafetería, somos un espacio donde el aroma del café recién hecho se mezcla con momentos únicos, charlas sinceras y pausas necesarias.</p>
        <p>Nuestro nombre rinde homenaje a lo sencillo, lo cálido y lo auténtico todo lo que representa cada rincón de SantiCafé. 
          Nuestra carta combina clásicos, con propuestas innovadoras y opciones para todos los gustos, incluyendo delicias dulces y saladas hechas artesanalmente.</p>
        <p>Ya sea que vengas a leer un libro, tener una reunión o simplemente desconectar del mundo, en SantiCafé siempre vas a encontrar un ambiente cálido.</p>
      </div>
      <div className="item imagen img2 area-img2"></div>
      <div className="item texto area-text2">
        <h2 className='titCuadri'>Encontranos</h2>
        <p className='txtUbi'>Pasá a visitarnos y hacé de SantiCafé tu rincón favorito. ¡Te esperamos!</p>
        <iframe className='mapa-container'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.4523221694567!2d-64.57744385506967!3d-31.922047608317264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2b1dc279a144f%3A0x1644e3db207bb70f!2sSanti%20cafe!5e0!3m2!1ses!2sar!4v1754172732586!5m2!1ses!2sar"
          width="800"
          height="460"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Santi Café"
        ></iframe>
      </div>
    </section>
  );
}

export default About;
