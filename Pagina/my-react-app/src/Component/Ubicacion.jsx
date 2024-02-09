import React from 'react';

const Ubicacion = () => {
  return (
    <div className="ubicacion" id='ubicacion'>
    
    <div className="apartados">
        <hr id="linea_arriba" />
          <h2 id="apartado">Ubicación</h2>
        <hr />
      </div>
      <div id="mapa">
      <iframe src="https://www.google.com/maps/embed?pb=!4v1706258601110!6m8!1m7!1s93GrItv0ezzHgrlwvHIi9Q!2m2!1d38.82853485025742!2d-
      3.580671923171166!3f283.78791590482933!4f-10.025343735861483!5f0.7820865974627469" width="100%" height="450" style={{border:0}} 
      allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        
      </div>
    </div>
  );
};

export default Ubicacion;