import { useState } from 'react';
import './FAQ.css';

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
    answer: "Contamos con una amplia variedad de géneros, desde acción y aventura hasta juegos de estrategia y competitivos." 
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
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;