
import './Services.css';
import { FaHeadset, FaGamepad, FaQuoteLeft, FaQuestionCircle } from 'react-icons/fa';

export const Services = () => {
  const serviciosList = [
    {
      id: 1,
      titulo: "Soporte Técnico 24/7",
      descripcion: "Resolución de incidencias de conexión, gestión de cuentas y optimización de rendimiento.",
      icono: <FaHeadset className="service-icon" />
    },
    {
      id: 2,
      titulo: "Recomendaciones",
      descripcion: "Motor de sugerencias basado en el análisis de tu biblioteca y métricas de uso.",
      icono: <FaGamepad className="service-icon" />
    },
    {
      id: 3,
      titulo: "Testimonios",
      descripcion: "«Gestión eficiente de biblioteca y emparejamiento rápido en partidas.» - Usuario Verificado",
      icono: <FaQuoteLeft className="service-icon" />
    },
    {
      id: 4,
      titulo: "Preguntas Frecuentes",
      descripcion: "Documentación sobre facturación, requisitos de hardware y compatibilidad de sistemas.",
      icono: <FaQuestionCircle className="service-icon" />
    }
  ];

  return (
    <section className="services-container">
      <h2 className="services-title">Servicios de Plataforma</h2>
      <div className="services-grid">
        {serviciosList.map((servicio) => (
          <div key={servicio.id} className="service-card">
            <div className="icon-wrapper">
              {servicio.icono}
            </div>
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};