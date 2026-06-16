import './Header.css';
import { Link } from 'react-router';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <h2>Poli<span>Gamer</span></h2>
            </div>

            <nav className="header-nav">
                <ul>
                    <li>
                        <Link to="/" className="active">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about">Acerca de nosotros</Link>
                    </li>
                    <li>
                        <Link to="/service">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contactos</Link>
                    </li>
                </ul>
            </nav>

            <div className="header-auth">
                <Link to="/login">
                    <button className="btn-login">
                        Iniciar sesión
                    </button>
                </Link>

                <Link to="/register">
                    <button className="btn-register">
                        Registrarse
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;