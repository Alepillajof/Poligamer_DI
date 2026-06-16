import './Footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Columna 1: Información de marca (Entrada desde la izquierda) */}
        <div className="footer-info" data-aos="fade-right" data-aos-delay="100">
          <h3>POLIGAMER</h3>
          <p>Tu plataforma de juegos preferida. Calidad, velocidad y diversión garantizada.</p>
        </div>
        
        {/* Columna 2: Contacto (Entrada desde abajo) */}
        <div className="footer-contact" data-aos="fade-up" data-aos-delay="200">
          <h4>Contacto</h4>
          <p><FaMapMarkerAlt /> Escuela Politécnica Nacional, Quito, Ecuador</p>
          <p><FaEnvelope /> furyalred@gmail.com</p>
          <p><FaPhoneAlt /> +593 99 982 6289</p>
        </div>

        {/* Columna 3: Redes Sociales (Entrada desde la derecha) */}
        <div className="footer-social" data-aos="fade-left" data-aos-delay="300">
          <h4>Sígueme</h4>
          <div className="social-icons">
            <a href="#" className="social-link"><FaFacebook /> Facebook</a>
            <a href="#" className="social-link"><FaGithub /> GitHub</a>
            <a href="#" className="social-link"><FaInstagram /> Instagram</a>
          </div>
        </div>
      </div>
      
      {/* Barra Inferior: Revelado centrado sutil con retardo */}
      <div className="footer-bottom" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800">
        <p>© 2026 POLIGAMER. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;