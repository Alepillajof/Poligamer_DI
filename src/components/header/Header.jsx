import './Header.css';

    const Header = () => {
    return (
        <header className="header">
        <div className="header-logo">
            <h2>Poli<span>Gamer</span></h2>
        </div>
        
        <nav className="header-nav">
            <ul>
            <li><a href="#inicio" className="active">Inicio</a></li>
            <li><a href="#about">Acerca de nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contacts">Contactos</a></li>
            </ul>
        </nav>

        <div className="header-auth">
            <button className="btn-login">Iniciar sesión</button>
            <button className="btn-register">Registrarse</button>
        </div>
        </header>
    );
    };

    export default Header;