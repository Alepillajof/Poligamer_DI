import { useRef, useEffect } from 'react'; // Añadido useEffect
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Importación de AOS (Librería y Estilos)
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importación del video desde assets
import video from '../../assets/video1.mp4';

// Importación de las 5 imágenes con extensión .png
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';

// Importación de estilos obligatorios de Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import './Main.css';

const Main = () => {
    const swiperRef = useRef(null);
    const videoRef = useRef(null);

    // Inicialización de AOS al montar el componente
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración global de las animaciones (1 segundo)
            once: true,     // La animación ocurre solo una vez al hacer scroll
            easing: 'ease-out-cubic', // Transición fluida y profesional
        });
    }, []);

    // Función que se ejecuta cuando el video llega a su fin (8s)
    const handleVideoEnd = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <main className="main-container" id="inicio">
            {/* Animación: Desplazamiento sutil hacia arriba a la derecha */}
            <div className="hero-content" data-aos="fade-up-right">
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
            
            {/* Contenedor del Carrusel Multimedia (Lado Derecho) */}
            {/* Animación: Desplazamiento hacia la izquierda con un retraso de 200ms para dar jerarquía */}
            <div className="hero-media-wrapper" data-aos="fade-left" data-aos-delay="200">
                <Swiper
                    ref={swiperRef}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    effect={'fade'}
                    allowTouchMove={false}
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true} 
                    autoplay={{
                        delay: 7000, 
                        disableOnInteraction: false,
                    }}
                    onInit={(swiper) => {
                        swiper.autoplay.stop();
                    }}
                    onActiveIndexChange={(swiper) => {
                        if (swiper.realIndex === 0) {
                            swiper.autoplay.stop();
                            if (videoRef.current) {
                                videoRef.current.currentTime = 0;
                                videoRef.current.play().catch(err => console.log(err));
                            }
                        } else {
                            swiper.autoplay.start();
                        }
                    }}
                    className="hero-swiper"
                >
                    {/* Slide 1: Video de 8 segundos */}
                    <SwiperSlide>
                        <div className="media-slide">
                            <video 
                                ref={videoRef}
                                src={video}
                                autoPlay 
                                muted 
                                playsInline
                                onEnded={handleVideoEnd}
                            />
                        </div>
                    </SwiperSlide>

                    {/* Slides 2 a 6: Tus 5 Imágenes en formato .png */}
                    <SwiperSlide>
                        <div className="media-slide">
                            <img src={img1} alt="Preview 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="media-slide">
                            <img src={img2} alt="Preview 2" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="media-slide">
                            <img src={img3} alt="Preview 3" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="media-slide">
                            <img src={img4} alt="Preview 4" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="media-slide">
                            <img src={img5} alt="Preview 5" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                
                {/* Marco decorativo neón para el carrusel */}
                <div className="media-frame-effect"></div>
            </div>
        </main>
    );
};

export default Main;