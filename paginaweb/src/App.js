import React from 'react';
import Imagen from './Component/Imagen'; // Importa el componente Imagen

const App = () => {
  return (
    <div>
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>Ruedines Bike</title>
      </head>

      <body>
        <header>
          <div className="cabecera">
            <div className="logo">
              <img src="logo_sinfondo1.png" className="navbar-brand" alt="Logo" width="100px" />
            </div>
            <div className="titulo">
              <h1>RUEDINES BIKE</h1>

              <nav className="menu">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Servicios
                      <span className="visually-hidden"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Personal</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Instalaciones</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                  </li>
                </ul>
              </nav>
            </div>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </header>

        <main>
          <Imagen/>

          <div className="ubicacion">
            <div id="mapa"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1702902158340!6m8!1m7!1sZE7T8VPmdsgUYk8YK_CD1Q!2m2!1d38.83014888174743!2d-3.576132397461!3f109.91474840371436!4f-16.612830506847445!5f0.7261569922872249"
              width="100%" height="200" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </main>

        <footer>
          <div className="contact-info">
            <p>Teléfono: 642 67 93 05</p>
            <p>info@ruedines.com</p>
          </div>

          <div className="social-links">
            <a href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/tu_cuenta_de_facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </footer>

        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
      </body>
    </div>
  );
};

export default App;

