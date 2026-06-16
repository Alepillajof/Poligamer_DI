    import { motion } from 'framer-motion'
    import { useInView } from 'framer-motion'
    import { useRef } from 'react'
    import './About.css'

    export default function About() {
    
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

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
                <p>
                Somos estudiantes de la <strong>Escuela Politécnica Nacional</strong> y <strong>Poligamer</strong> es nuestro proyecto de tesis: una plataforma gamer para conectar, competir y disfrutar.
                </p>
                <div className="about-btns">
                <a href="#servicios" className="btn-primary">Ver servicios</a>
                <a href="#contacto" className="btn-outline">Contáctanos</a>
                </div>
            </div>

            <div className="about-cards">
                {[
                { icon: '🏆', title: 'Torneos', desc: 'Competencias con premios' },
                { icon: '🎮', title: 'Juegos', desc: '+500 títulos disponibles' },
                { icon: '👥', title: 'Comunidad', desc: 'Miles de gamers activos' },
                { icon: '⚡', title: 'Velocidad', desc: 'Baja latencia garantizada' },
                ].map((item, i) => (
                <motion.div className="about-card" key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + 0.3 }}>
                    <div className="about-card-icon">{item.icon}</div>
                    <div className="about-card-title">{item.title}</div>
                    <div className="about-card-desc">{item.desc}</div>
                </motion.div>
                ))}
            </div>
            </div>
        </motion.div>
        </section>
    )
    }