import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaGamepad, FaEye, FaEyeSlash } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica de autenticación de tu tesis
        console.log('Iniciando sesión con:', { email, password });
    };

    return (
        <div className="login-page">
            <div className="login-master-grid" data-aos="zoom-in">
                
                {/* Panel Izquierdo: Estética de Marca e Infraestructura */}
                <div className="login-branding-panel">
                    <div className="branding-overlay"></div>
                    <div className="branding-content" data-aos="fade-up" data-aos-delay="300">
                        <div className="branding-logo">
                            <FaGamepad className="logo-icon-gaming" />
                            <span>POLI<span>GAMER</span></span>
                        </div>
                        <p className="branding-quote">
                            CONECTA. COMPITE. DOMINA.
                        </p>
                        <div className="branding-hud-specs">
                            <span>SYS.STATUS: ONLINE</span>
                            <span>NODE: EPN-QUITO</span>
                        </div>
                    </div>
                    {/* Línea láser decorativa */}
                    <div className="laser-scanline"></div>
                </div>

                {/* Panel Derecho: Formulario de Acceso Seguro */}
                <div className="login-form-panel" data-aos="fade-left" data-aos-delay="200">
                    <div className="form-header">
                        <h2>Iniciar <span>Sesión</span></h2>
                        <p>Ingresa tus credenciales para acceder a la plataforma</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        
                        {/* Input de Usuario / Email */}
                        <div className="input-hud-group">
                            <label>Identificación de Usuario</label>
                            <div className="input-wrapper">
                                <FaUser className="input-hud-icon" />
                                <input 
                                    type="email" 
                                    placeholder="ejemplo@epn.edu.ec" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                                <div className="input-hud-border"></div>
                            </div>
                        </div>

                        {/* Input de Contraseña */}
                        <div className="input-hud-group">
                            <label>Clave de Acceso</label>
                            <div className="input-wrapper">
                                <FaLock className="input-hud-icon" />
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="••••••••••••" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                                <button 
                                    type="button" 
                                    className="toggle-password-btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                <div className="input-hud-border"></div>
                            </div>
                        </div>

                        {/* Opciones extras: Recordar y Recuperar */}
                        <div className="form-utility-row">
                            <label className="custom-checkbox-container">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Mantener sesión activa
                            </label>
                            <a href="#recuperar" className="forgot-password-link">¿Olvidaste tu clave?</a>
                        </div>

                        {/* Botón de envío con efecto Framer Motion para el Click */}
                        <motion.button 
                            whileTap={{ scale: 0.97 }}
                            type="submit" 
                            className="btn-login-submit"
                        >
                            <span className="btn-glitch-text">Autenticar Usuario</span>
                            <div className="btn-laser-glow"></div>
                        </motion.button>
                    </form>

                    {/* Footer del Formulario */}
                    <div className="form-footer-redirect">
                        <p>¿Aún no tienes cuenta? <a href="#registro">Crear cuenta institucional</a></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;