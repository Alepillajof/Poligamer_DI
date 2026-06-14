    import './Main.css';

    const Main = () => {
    return (
        <main className="main-container" id="inicio">
        <div className="hero-content">
            <h1 className="hero-title">
            El Universo <br />
            Gamer en tus manos
            </h1>
            <p className="hero-subtitle">
            Explora los mejores servicios, conecta con la comunidad y lleva tu experiencia de juego al siguiente nivel en PoliGamer.
            </p>
            <div className="hero-buttons">
            <button className="btn-primary">Explorar Juegos</button>
            <button className="btn-secondary">Saber Más</button>
            </div>
        </div>
        
        {/* Un elemento decorativo para simular un fondo abstracto gamer */}
        <div className="hero-visual-effect"></div>
        </main>
    );
    };

    export default Main;