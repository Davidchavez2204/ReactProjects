import React from "react";
import '../hojas-de-estilo/Sidebar.css';
export function Sidebar(props){
    return(
        <>
        <div className="side">
            <ul className="cursos no-padding">
                <li className="widget-curso">
                    <h4 className="no-margin subtitulo">{props.subtitulo1}</h4>
                    <p className="widget-curso__label">Precio: <span className="widget-curso__infor">Gratis</span></p>
                    <p className="widget-curso__label">Cupo: <span className="widget-curso__infor">20</span></p>
                    <a href="/entrada.html" className="boton boton--secundario">Más información sobre nuestros cursos</a>
                </li>
                <li className="widget-curso">
                    <h4 className="no-margin subtitulo">{props.subtitulo2}</h4>
                    <p className="widget-curso__label">Precio: <span className="widget-curso__infor">Gratis</span></p>
                    <p className="widget-curso__label">Cupo: <span className="widget-curso__infor">20</span></p>
                    <a href="entrada.html" className="boton boton--secundario">Más información sobre nuestros cursos</a>
                </li>
            </ul>
        </div>
            
        </>
         
    );
}

export default Sidebar;