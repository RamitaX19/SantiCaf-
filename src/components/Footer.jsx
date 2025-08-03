import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    return (
    <footer className="footer">
        <div className="footer-container">
        {/* Columna 1: Marca */}
        <div className="footer-col">
            <h3 className="footer-title">Santicafé</h3>
        </div>

        {/* Columna 2: Contacto */}
        <div className="footer-col">
            <h3>Contacto</h3>
            <p><FaPhoneAlt /> +54 03546 43-7081</p>
            <p><FaWhatsapp /> <a href="https://wa.me/5403546437081" target="_blank" rel='noopener noreferrer'>WhatsApp</a></p>
            <p><FaMapMarkerAlt /> Los reartes, Av San Martín 74</p>
        </div>

        {/* Columna 3: Redes */}
        <div className="footer-col">
            <h3>Redes</h3>
            <p>
                <FaInstagram /> <a href="https://www.instagram.com/santicafe_" target="_blank" rel='noopener noreferrer'>@santicafe_</a>
            </p>
        </div>
        </div>

        <div className="footer-bottom">
            <p>© 2025 Santicafé - Todos los derechos reservados | pagina desarrollada por <a className='miWsp' href="http://wa.me/541126364952" target="_blank" rel="noopener noreferrer">ByRamaDev</a></p>
        </div>
    </footer>
    );
}

export default Footer;
