import React from "react";
import '../hojas-de-estilo/Encabezado.css';
export function Encabezado(){
    return(
        <header className="header">
        <div className="contenedor">
          <div className="barra">
            <a href="/index.html" className="logo no-margin centrar-texto">
              <h1 className="logo__nombre">Block<span className="logo__bold">DeCafe</span></h1>
            </a>
            <nav className="navegacion">
              <a href="nosotros.html" className="navegacion__enlace">Nosotros</a>
              <a href="cursos.html" className="navegacion__enlace">Servicios</a>
              <a href="contacto.html" className="navegacion__enlace">Contacto</a>
            </nav>
          </div>
        </div>
        <div className="header__texto">
          <h2 className="no-margin">Blog de café con consejos y cursos</h2>
          <p className="no-margin">Aprende de los expertos con las mejores recetas y consejos</p>
        </div>
      </header>
    );
}
export default Encabezado;