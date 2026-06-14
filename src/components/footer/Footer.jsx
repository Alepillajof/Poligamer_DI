import './Footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {}
        <div className="footer-info">
          <h3>POLIGAMER</h3>
          <p>Tu plataforma de juegos preferida. Calidad, velocidad y diversión garantizada.</p>
        </div>
        
        {}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p><FaMapMarkerAlt /> Escuela Politécnica Nacional, Quito, Ecuador</p>
          <p><FaEnvelope /> furyalred@gmail.com</p>
          <p><FaPhoneAlt /> +593 99 982 6289</p>
        </div>

        {}
        <div className="footer-social">
          <h4>Sígueme</h4>
          <div className="social-icons">
            <a href="#" className="social-link"><FaFacebook /> Facebook</a>
            <a href="#" className="social-link"><FaGithub /> GitHub</a>
            <a href="#" className="social-link"><FaInstagram /> Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 POLIGAMER. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};