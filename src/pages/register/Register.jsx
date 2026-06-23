import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope, FaGamepad, FaEye, FaEyeSlash } from 'react-icons/fa';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { authFirebase } from '../../firebase';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                authFirebase,
                email,
                password
            );

            const user = userCredential.user;

            console.log("Usuario registrado:", user);

            alert("Registro exitoso");

            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            navigate('/login');

        } catch (error) {
            console.error(error);

            switch (error.code) {
                case "auth/email-already-in-use":
                    alert("Este correo ya está registrado");
                    break;

                case "auth/invalid-email":
                    alert("Correo inválido");
                    break;

                case "auth/weak-password":
                    alert("La contraseña debe tener al menos 6 caracteres");
                    break;

                default:
                    alert(error.message);
            }
        }
    };

    return (
        <div className="register-page">
            <div className="register-master-grid" data-aos="zoom-in">

                {/* Panel Izquierdo */}
                <div className="register-branding-panel">
                    <div className="branding-overlay"></div>

                    <div
                        className="branding-content"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="branding-logo">
                            <FaGamepad className="logo-icon-gaming" />
                            <span>
                                POLI<span>GAMER</span>
                            </span>
                        </div>

                        <p className="branding-quote">
                            CREA TU AVATAR. UNE A LA ESCUADRA.
                        </p>

                        <div className="branding-hud-specs">
                            <span>SECURE_CORE: ACTIVE</span>
                            <span>DATABASE: LINKED</span>
                        </div>
                    </div>

                    <div className="laser-scanline"></div>
                </div>

                {/* Panel Derecho */}
                <div
                    className="register-form-panel"
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <div className="form-header">
                        <h2>
                            Crear <span>Cuenta</span>
                        </h2>
                        <p>Únete a la comunidad competitiva e institucional</p>
                    </div>

                    <form onSubmit={handleRegister} className="auth-form">

                        {/* Usuario */}
                        <div className="input-hud-group">
                            <label>Nombre de Usuario (Gamertag)</label>

                            <div className="input-wrapper">
                                <FaUser className="input-hud-icon" />

                                <input
                                    type="text"
                                    placeholder="Ej. FuryAlred"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />

                                <div className="input-hud-border"></div>
                            </div>
                        </div>

                        {/* Correo */}
                        <div className="input-hud-group">
                            <label>Correo Electrónico Institucional</label>

                            <div className="input-wrapper">
                                <FaEnvelope className="input-hud-icon" />

                                <input
                                    type="email"
                                    placeholder="tu.apellido@epn.edu.ec"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <div className="input-hud-border"></div>
                            </div>
                        </div>

                        {/* Contraseña */}
                        <div className="input-hud-group">
                            <label>Establecer Contraseña</label>

                            <div className="input-wrapper">
                                <FaLock className="input-hud-icon" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Mínimo 6 caracteres"
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

                        {/* Confirmar Contraseña */}
                        <div className="input-hud-group">
                            <label>Confirmar Contraseña</label>

                            <div className="input-wrapper">
                                <FaLock className="input-hud-icon" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Repite tu contraseña"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    required
                                />

                                <div className="input-hud-border"></div>
                            </div>
                        </div>

                        {/* Términos */}
                        <div className="form-utility-row">
                            <label className="custom-checkbox-container">
                                <input type="checkbox" required />
                                <span className="checkmark"></span>
                                Acepto los términos de la arena
                            </label>
                        </div>

                        {/* Botón */}
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="btn-register-submit"
                        >
                            <span className="btn-glitch-text">
                                Inicializar Perfil
                            </span>

                            <div className="btn-laser-glow"></div>
                        </motion.button>
                    </form>

                    {/* Login */}
                    <div className="form-footer-redirect">
                        <p>
                            ¿Ya eres miembro?{" "}
                            <a href="/login">Iniciar Sesión</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;