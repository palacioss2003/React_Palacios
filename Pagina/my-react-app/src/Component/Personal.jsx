import React from 'react';
import imagen1 from '../assets/paco.jpg';
import imagen2 from '../assets/paula.jpeg';
import imagen3 from '../assets/javier.jpeg';
import Zoom from 'react-reveal/Zoom';

const Personal = () => {
    return (
        <Zoom>
        <div className='Personal' id='personal'>
            <div class="apartados">
            <hr id='linea_arriba'/><h2 id='apartado'>Nuestro Equipo</h2><hr />
            </div>

            <div class='empleado'>
                <div class="empleado_imagen">
                    <img src={imagen1} id='empleado_foto' width="210px" height="240px"></img>
                </div>
                <div className="empleado_info">
                    <h3>Juan Pérez</h3>
                    <p>Técnico de Bicicletas</p>
                    <p>
                        Experto en reparación y mantenimiento de bicicletas, 
                        María asegura que tus bicis estén siempre en óptimas condiciones 
                    </p>
                </div>


            </div>

            <div class='empleado'>
                <div class="empleado_imagen">
                    <img src={imagen2} id='empleado_foto' width="210px" height="240px"></img>
                </div>
                <div className="empleado_info">
                    <h3>Paula Gutierrez</h3>
                    <p>Gerente de Ventas</p>
                    <p>
                        Con más de 10 años de experiencia en la industria, Juan lidera nuestro 
                        equipo de ventas. 
                    </p>
                </div>


            </div>


            <div class='empleado'>
                <div class="empleado_imagen">
                    <img src={imagen3} id='empleado_foto1' width="210px" height="240px"></img>
                </div>
                <div className="empleado_info">
                    <h3>Javier Naranjo</h3>
                    <p>Especialista en Accesorios</p>
                    <p>
                        Con un ojo para los detalles, Carlos te asesorará sobre 
                        los mejores accesorios para tu bicicleta. 
                    </p>
                </div>


            </div>

        </div>
        </Zoom>
    );
};

export default Personal;





