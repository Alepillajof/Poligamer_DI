import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Typed from 'typed.js' // Importación de typed.js
import './About.css'

export default function About() {
    const ref = useRef(null) 
    const inView = useInView(ref, { once: true })
    const el = useRef(null) // Referencia para el elemento de texto animado

    useEffect(() => {
        // Inicialización de Typed.js cuando el componente se monta
        const typed = new Typed(el.current, {
            strings: [
                'nuestro proyecto de tesis.',
                'la plataforma definitiva para conectar.',
                'el espacio para competir a otro nivel.',
                'el Universo Gamer en la EPN.'
            ],
            typeSpeed: 40,
            backSpeed: 25,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '▋' // Cursor estilo terminal/HUD gamer
        });

        return () => {
            typed.destroy(); // Limpieza al desmontar
        };
    }, []);

    return (
        <section id="acerca" className="about-section" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}>

                <div className="section-header">
                    <div className="section-tag">🎮 Quiénes somos</div>
                    <h2 className="section-title">Acerca <span>de nosotros</span></h2>
                </div>

                <div className="about-grid">
                    <div className="about-text">
                        <p className="main-about-paragraph">
                            Somos estudiantes de la <strong>Escuela Politécnica Nacional</strong> y <strong>PoliGamer</strong> es <span ref={el} className="typed-text-glow"></span>
                        </p>
                        <p>Esta plataforma nace con el objetivo de centralizar el ecosistema gaming universitario, integrando infraestructuras de baja latencia con herramientas de emparejamiento competitivo y gestión automatizada de torneos. Buscamos transformar el entretenimiento digital en un espacio estructurado que fomente la cooperación, el desarrollo de habilidades estratégicas y la cohesión de la comunidad a nivel institucional.</p>
                        <div className="about-btns">
                            <a href="#servicios" className="btn-primary">Ver servicios</a>
                            <a href="#contacto" className="btn-outline">Contáctanos</a>
                        </div>
                    </div>

                    <div className="about-cards">
                        {[
                            { icon: '🏆', title: 'TORNEOS', desc: 'Competencias de alto nivel con premios exclusivos' },
                            { icon: '🎮', title: 'JUEGOS', desc: 'Más de 500 títulos listos para la acción' },
                            { icon: '👥', title: 'COMUNIDAD', desc: 'Miles de estudiantes y gamers activos' },
                            { icon: '⚡', title: 'VELOCIDAD', desc: 'Baja latencia e infraestructura optimizada' },
                        ].map((item, i) => (
                            <motion.div className="about-card" key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: i * 0.1 + 0.3 }}>
                                <div className="about-card-icon">{item.icon}</div>
                                <div className="about-card-title">{item.title}</div>
                                <div className="about-card-desc">{item.desc}</div>
                                <div className="card-hud-line"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            
        </section>
        
    )
}