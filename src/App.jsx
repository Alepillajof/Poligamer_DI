    import './App.css'
    import Header from './components/header/Header'
    import Main from './components/main/Main'
    import About from './components/about/About'

    function App() {
    return (
        <div className="app">
        <Header />
        <Main />
        <About />
        <footer className="footer">
            <p>© 2025 Poligamer — Todos los derechos reservados 🎮</p>
        </footer>
        </div>
    )
    }

    export default App