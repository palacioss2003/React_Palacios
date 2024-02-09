import './App.css';
import React, { useState, useEffect, CSSProperties } from 'react';
//import ClipLoader from "react-spinners/ClipLoader";
import LoaderBicicleta from './Component/Bicicleta'; // Importa el loader de la bicicleta

import Imagen from './Component/Imagen'; // Importa el componente Imagen
import Cabecera from './Component/Cabecera';
import Ubicacion from './Component/Ubicacion';
import Servicios from './Component/Serviciotarjeta';
import Personal from './Component/Personal';
import Instalaciones from './Component/Instalaciones';
import Contacto from './Component/Contacto';


import Piepagina from './Component/Piepagina';

const override={
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const App = () => {


  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  const recargarPagina = () => {
  };


  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        recargarPagina();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <LoaderBicicleta />     
       
        ) : (
        <>
          <header>
            <Cabecera />
          </header>
  
          <main>
            <Imagen />
            <Servicios />
            <Personal />
            <Instalaciones />
            <Ubicacion />
            <Contacto />
          </main>
  
          <footer>
            <Piepagina />
          </footer>
  
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root"></div>
        </>
      )}
    </div>
  );
};

export default App;

