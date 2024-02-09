import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();


  return (
    <div className="contacto-background">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="contacto" className="contacto-section mi-clase-de-fondo">
        <div className="contacto-container">
          <h2 className='contacto'>Contacto</h2>

          <div className="formulario-contacto">
            <form onSubmit={handleSubmit} id="formularioContacto">
              <div className="campo-formulario">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="apellidos">Apellidos:</label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="campo-formulario">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="boton-enviar">
                <b>Enviar Mensaje</b>
              </button>
            </form>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ContactForm;