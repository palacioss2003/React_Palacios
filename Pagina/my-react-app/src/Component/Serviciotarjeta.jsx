import React from 'react';
import imagen1 from '../assets/ventaBici.jpeg';
import imagen2 from '../assets/accesorios_bicicleta.jpeg';
import imagen3 from '../assets/taller.jpg';
import imagen4 from '../assets/asesoramiento.jpeg';
import Zoom from 'react-reveal/Zoom';

const Servicios = () => {
  
  return (
    <Zoom>
    <div className='Servicios' id='servicios'>

      <div class="apartados" >
        <hr id='linea_arriba'/><h2 id='apartado'>Servicios</h2><hr/>
      </div>

   
    
      <div class="flip-card-row">

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">

                <div className="imagen_tarjetas">
                  <div id="img_servicios">
                  <img id="foto" src={imagen1} />
                  </div>
                  <div className="texto">Venta de Bicicletas </div>
                </div>
                   
                </div>
                <div class="flip-card-back">
                    <p>
                      Descubre nuestra amplia gama de bicicletas para todas las edades y niveles, 
                      desde bicicletas de montaña hasta bicicletas de carretera.  
                    </p>
                </div>
            </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">

              <div className="imagen_tarjetas">
                <div id="img_servicios">
                <img id="foto" src={imagen2} />
                </div>
                <div className="texto">Accesorios y Equipamientos </div>
                
              </div>
            </div>
            <div class="flip-card-back">
              <p>
                Encuentra los mejores accesorios y equipamiento para tu bicicleta: cascos, 
                luces, candados, ropa especializada y más.
              </p>
            </div>
          </div>
        </div>


        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">

              <div className="imagen_tarjetas">
                <div id="img_servicios">
                  <img id="foto" src={imagen3}/>
                </div>
                <div className="texto">Mantenimiento y Reparación</div>
                
              </div>
            </div>
            <div class="flip-card-back">
              <p>
                Ofrecemos servicios de mantenimiento y reparación de bicicletas para garantizar 
                un rendimiento óptimo y una experiencia de conducción segura.    
              </p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">

              <div className="imagen_tarjetas">
                <div id="img_servicios">
                <img id="foto" src={imagen4} />
                </div>
                <div className="texto">Asesoramiento Personalizado</div>
                
              </div>
            </div>
            <div class="flip-card-back">
              <p>
                Nuestro equipo experto está listo para proporcionar asesoramiento personalizado, 
                ayudándote a elegir la bicicleta perfecta y accesorios que se adapten a tus necesidades.     
              </p>
            </div>
          </div>
        </div>
     

       


      </div>

    </div>
    </Zoom>
  );

};

export default Servicios;