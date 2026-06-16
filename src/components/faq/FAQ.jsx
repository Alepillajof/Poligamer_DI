import { useState } from 'react';
import './FAQ.css';
import video3 from '../../assets/video3.mp4'; 

const faqs = [
  { 
    question: "¿Los juegos en POLIGAMER son realmente gratuitos?", 
    answer: "Sí, todos los juegos disponibles en nuestra plataforma son totalmente gratuitos para nuestra comunidad." 
  },
  { 
    question: "¿Necesito crear una cuenta para jugar?", 
    answer: "Para acceder a todas las funciones, guardar tu progreso y participar en eventos, te recomendamos crear una cuenta gratuita." 
  },
  {  
    question: "¿Qué tipo de juegos encontraré?", 
    answer: "Contamos con una amplia variedad de géneros, desde acción y aventura hasta juegos de estrategia y competivos." 
  },
  { 
    question: "¿Puedo jugar desde celular?", 
    answer: "¡Claro que sí! Nuestra plataforma es responsiva y puedes disfrutar de gran parte de nuestro catálogo directamente desde tu dispositivo móvil." 
  },
  { 
    question: "¿Cada cuánto agregan nuevos juegos?", 
    answer: "Actualizamos nuestra biblioteca constantemente, añadiendo nuevos títulos y contenido semanalmente para que siempre tengas algo nuevo que probar." 
  },
  { 
    question: "¿Cómo instalo el cliente de PoliGamer?", 
    answer: "Ve a nuestra sección de descargas, selecciona tu sistema operativo y sigue los pasos del asistente de instalación. Es un proceso rápido y sencillo." 
  },
  { 
    question: "¿Es compatible con Windows y Mac?", 
    answer: "Actualmente, nuestra plataforma está optimizada para Windows, Android y iOS. Estamos trabajando en soporte nativo para macOS en futuras actualizaciones." 
  },
  { 
    question: "¿Cómo puedo contactar con soporte técnico?", 
    answer: "Puedes enviarnos un mensaje directamente a través del formulario en nuestra sección de contactos o escribirnos a nuestro correo oficial." 
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-grid">
        
        {/* Columna Izquierda: Entrada suave lateral para el Frame del Video */}
        <div className="faq-media-wrapper" data-aos="fade-right">
          <div className="faq-video-frame-cyber">
            <div className="faq-video-glow"></div>
            <div className="faq-corner-tag">INFO CORE</div>
            <video 
              src={video3}
              autoPlay 
              muted 
              loop 
              playsInline
              className="faq-video"
            />
          </div>
        </div>

        {/* Columna Derecha: Acordeón de Preguntas Frecuentes */}
        <div className="faq-content">
          {/* Cabeceras animadas con enfoque zoom-out */}
          <span className="faq-tag" data-aos="zoom-out" data-aos-delay="100">
            Soporte y Comunidad
          </span>
          <h2 className="faq-title" data-aos="zoom-out" data-aos-delay="200">
            Preguntas Frecuentes
          </h2>
          
          <div className="faq-container">
            {faqs.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                // Multiplica el index por 50 para que aparezcan en cascada impecable (50ms, 100ms, 150ms...)
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  {item.question}
                  <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;