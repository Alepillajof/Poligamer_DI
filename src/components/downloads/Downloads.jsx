import './Downloads.css';
import { FaGooglePlay, FaWindows, FaApple } from 'react-icons/fa';
import video2 from '../../assets/video2.mp4'; 

const Downloads = () => {
  return ( 
    <section className="downloads-container" id="descargas">
      <div className="downloads-grid">
        
        {/* Columna Izquierda: Bloque de texto con Zoom expansivo hacia arriba */}
        <div className="downloads-content" data-aos="zoom-in-up">
          <span className="downloads-tag">Disponibilidad Multiplataforma</span>
          <h2 className="downloads-title">Descargas</h2>
          <p className="downloads-subtitle">
            Lleva el universo competitivo contigo. Instala nuestro cliente optimizado en cualquiera de tus dispositivos y domina la arena de PoliGamer.
          </p>
          
          <div className="download-buttons">
            {/* Botón Windows: Aparece de inmediato */}
            <a href="#windows" className="btn-download btn-windows" data-aos="fade-up" data-aos-delay="100">
              <div className="btn-scanline"></div>
              <FaWindows className="btn-icon" />
              <div className="btn-text">
                <span>Cliente oficial para</span>
                <strong> Windows 11 / 10</strong>
              </div>
              <div className="btn-border-glow"></div>
            </a>

            {/* Botón Android: Aparece con 250ms de retraso */}
            <a href="#android" className="btn-download btn-android" data-aos="fade-up" data-aos-delay="250">
              <div className="btn-scanline"></div>
              <FaGooglePlay className="btn-icon" />
              <div className="btn-text">
                <span>Consíguelo en</span>
                <strong> Google Play</strong>
              </div>
              <div className="btn-border-glow"></div>
            </a>

            {/* Botón iOS: Aparece con 400ms de retraso */}
            <a href="#ios" className="btn-download btn-apple" data-aos="fade-up" data-aos-delay="400">
              <div className="btn-scanline"></div>
              <FaApple className="btn-icon" />
              <div className="btn-text">
                <span>Descárgalo desde la</span>
                <strong> App Store</strong>
              </div>
              <div className="btn-border-glow"></div>
            </a>
          </div>
        </div>

        {/* Columna Derecha: Video con rotación 3D Flip hacia la derecha */}
        <div className="downloads-media-wrapper" data-aos="flip-right" data-aos-delay="200" data-aos-duration="1200">
          <div className="video-frame-cyber">
            <div className="video-glow-effect"></div>
            <div className="corner-tag">LIVE HUD</div>
            <video 
              src={video2}
              autoPlay 
              muted 
              loop 
              playsInline
              className="downloads-video"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Downloads;