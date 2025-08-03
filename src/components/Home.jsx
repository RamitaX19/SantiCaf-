import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="app">
      <Navbar />

      <section id="inicio">
        <Hero />
      </section>

      <section id="nosotros">
        <About />
      </section>

      <section id="contacto">
        <contacto />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
