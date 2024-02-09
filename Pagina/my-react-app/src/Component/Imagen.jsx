import React from 'react';
import fondoBicicleta from '../assets/fondo_bicicleta.jpeg';

const Imagen = () => {
  return (
    <div className="imagen" id='cabeza'>
      <div id="imagen_eslogan">
        <img src={fondoBicicleta} height="600px" width="100%" alt="Fondo bicicleta" />
      </div>
      <h1 className="texto1">PEDALEA <br />MÁS RÁPIDO <br />CON NOSOTROS</h1>
    </div>


    
  );
};


export default Imagen;