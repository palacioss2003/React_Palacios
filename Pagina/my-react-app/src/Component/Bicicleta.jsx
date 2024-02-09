import React from 'react';
import './../App.css';
import fondo from '../assets/fondo-loader.jpg';

const BicicletaLoader = () => {
    
    return (
      
      <div className="container">
        <img className="img-fondo" src={fondo} alt="Background"/>
        <div className="custom-loader"></div>
      </div>


      
          
       
      );
  }
  
  export default BicicletaLoader;