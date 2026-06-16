import { useState } from 'react';
import { Link } from 'react-router';
import './Header.css';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <header className="header">
            <div className="header-logo">
                <h2>Poli<span>Gamer</span></h2>
            </div>

            <nav className={`header-nav ${menuActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        {/* Removido el className="active" fijo para que no se quede siempre subrayado */}
                        <Link to="/" onClick={closeMenu}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>Acerca de nosotros</Link>
                    </li>
                    <li>
                        <Link to="/service" onClick={closeMenu}>Servicios</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeMenu}>Contactos</Link>
                    </li>
                </ul>
            </nav>

            <div className={`header-auth ${menuActive ? 'active' : ''}`}>
                <Link to="/login" onClick={closeMenu}>
                    <button className="btn-login">
                        Iniciar sesión
                    </button>
                </Link>

                <Link to="/register" onClick={closeMenu}>
                    <button className="btn-register">
                        Registrarse
                    </button>
                </Link>
            </div>

            <div className={`header-hamburger ${menuActive ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;