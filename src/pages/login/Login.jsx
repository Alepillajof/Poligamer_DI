import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaGamepad, FaEye, FaEyeSlash } from 'react-icons/fa';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { authFirebase } from '../../firebase';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(
                authFirebase,
                email,
                password
            );

            const user = userCredential.user;

            console.log("Usuario autenticado:", user);

            alert("Inicio de sesión exitoso");

            navigate('/');

        } catch (error) {
            console.error(error);

            switch (error.code) {
                case 'auth/user-not-found':
                    alert('No existe una cuenta con este correo');
                    break;

                case 'auth/wrong-password':
                    alert('Contraseña incorrecta');
                    break;

                case 'auth/invalid-email':
                    alert('Correo inválido');
                    break;

                case 'auth/invalid-credential':
                    alert('Correo o contraseña incorrectos');
                    break;

                default:
                    alert(error.message);
            }
        }
    };

    return (
        <div className="login-page">
            <div className="login-master-grid" data-aos="zoom-in">

                {/* Panel Izquierdo */}
                <div className="login-branding-panel">
                    <div className="branding-overlay"></div>

                    <div
                        className="branding-content"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
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

                    <div className="laser-scanline"></div>
                </div>

                {/* Panel Derecho */}
                <div
                    className="login-form-panel"
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <div className="form-header">
                        <h2>
                            Iniciar <span>Sesión</span>
                        </h2>
                        <p>
                            Ingresa tus credenciales para acceder a la plataforma
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">

                        {/* Email */}
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

                        {/* Password */}
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

                        {/* Opciones */}
                        <div className="form-utility-row">
                            <label className="custom-checkbox-container">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Mantener sesión activa
                            </label>

                            <a
                                href="#recuperar"
                                className="forgot-password-link"
                            >
                                ¿Olvidaste tu clave?
                            </a>
                        </div>

                        {/* Botón */}
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="btn-login-submit"
                        >
                            <span className="btn-glitch-text">
                                Autenticar Usuario
                            </span>

                            <div className="btn-laser-glow"></div>
                        </motion.button>
                    </form>

                    {/* Registro */}
                    <div className="form-footer-redirect">
                        <p>
                            ¿Aún no tienes cuenta?{' '}
                            <a href="/register">
                                Crear cuenta institucional
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;