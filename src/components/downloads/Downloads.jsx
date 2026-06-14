
import './Downloads.css';
import { FaGooglePlay, FaWindows, FaApple } from 'react-icons/fa';

export const Downloads = () => {
  return (
    <section className="downloads-container">
      <div className="downloads-content">
        <h2 className="downloads-title">Descargas</h2>
        <div className="download-buttons">
          <a href="#windows" className="btn-download btn-windows">
            <FaWindows className="btn-icon" />
            <div className="btn-text">
              <span>Cliente para</span>
              <strong>Windows</strong>
            </div>
          </a>

          <a href="#android" className="btn-download btn-android">
            <FaGooglePlay className="btn-icon" />
            <div className="btn-text">
              <span>Instalador en</span>
              <strong>Google Play</strong>
            </div>
          </a>

          <a href="#ios" className="btn-download btn-apple">
            <FaApple className="btn-icon" />
            <div className="btn-text">
              <span>Instalador en</span>
              <strong>App Store</strong>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};