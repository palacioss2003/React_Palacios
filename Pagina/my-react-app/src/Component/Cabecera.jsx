import React from 'react';
import logo from '../assets/logo_sinfondo1.png';
import menu from '../assets/menu3.png';


const Cabecera = () => {
  const toggleDropdown = () => {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
  };

  const closeDropdown = (event) => {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="cabecera">
      <div className="logo">
        <img src={logo} className="navbar-brand" alt="Logo" width="100px" />
      </div>

      <div className="titulo">
        <h1>RUEDINES BIKE</h1>
      </div>
    
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            <img src={menu} className="imagen-menu" />
          </button>
          <div id="myDropdown" className="dropdown-content">
            <a href="#cabeza">Home</a>
            <a href="#servicios">Servicios</a>
            <a href="#personal">Personal</a>
            <a href="#instalaciones">Instalaciones</a>
            <a href="#ubicacion">Ubicacion</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </div>
  );
};

export default Cabecera;