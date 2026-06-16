import "./Contacts.css";

export const Contacts = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact__main-title">Contáctanos</h1>
      
      <div className="contact__container">
        {/* Columna Izquierda: Formulario */}
        <div className="contact__form-card">
          <h2 className="contact__subtitle">Envíanos un Mensaje</h2>
          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre..." />
            
            <label>Email</label>
            <input type="email" placeholder="ejemplo@correo.com" />
            
            <label>Asunto</label>
            <input type="text" placeholder="¿En qué te puedo ayudar?" />
            
            <label>Mensaje</label>
            <textarea rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
            
            <button type="submit" className="btn-send">Enviar Mensaje</button>
          </form>
        </div>

        {/* Columna Derecha: Mapa y Detalles */}
        <div className="contact__info-col">
          <div className="contact__map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7997972740924!2d-78.4907012253457!3d-0.2104599997816174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59902672535dd%3A0x608b4ef267568552!2sEscuela%20Polit%C3%A9cnica%20Nacional!5e0!3m2!1ses!2sec!4v1718370000000!5m2!1ses!2sec" 
              allowFullScreen="" 
              loading="lazy" 
              title="Ubicación EPN"
            ></iframe>
          </div>
          
          <div className="contact__details">
            <div className="contact__item">
              <span>📍</span> 
              <p><strong>Ubicación</strong><br/>Escuela Politécnica Nacional, Quito, Ecuador</p>
            </div>
            <div className="contact__item">
              <span>✉️</span> 
              <p><strong>Email</strong><br/>furyalred@gmail.com</p>
            </div>
            <div className="contact__item">
              <span>📞</span> 
              <p><strong>Teléfono</strong><br/>+593 99 982 6289</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;