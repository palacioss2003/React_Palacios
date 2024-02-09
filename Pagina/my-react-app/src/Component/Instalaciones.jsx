import React from 'react';
import imagen1 from '../assets/instalacion_interior_1.jpg';
import imagen2 from '../assets/instalacion_interior_2.jpg';
import imagen3 from '../assets/instalacion_interior_3.jpg';
import imagen4 from '../assets/instalacion_exterior.jpg';
import Zoom from 'react-reveal/Zoom';

const Personal = () => {
    return (
      <Zoom>
    <div className="Instalaciones" id='instalaciones'>
      <div className="apartados">
        <hr id="linea_arriba" /><h2 id="apartado">Instalaciones</h2>
        <hr />
      </div>
      <div class="seccion-con-imagenes">

        <p class="texto-adicional1">Visualiza unas imagenes del interior de la tienda física</p>

        <div class="imagenes-container">
            <img src={imagen1} />
            <img src={imagen2} />
            <img src={imagen3} />
        </div>
        <div class="espacio"></div>

        <div class="contenido-adicional">
            <img src={imagen4}  class="imagen-adicional" />
            <div class="texto-adicional">
                <h3>Visita nuestra tienda virtual.</h3>
                <p>También puedes seguirnos en redes :).</p>
            </div>
        </div>
      </div>
    </div>
    </Zoom>
  );
};
           
    

export default Personal;
