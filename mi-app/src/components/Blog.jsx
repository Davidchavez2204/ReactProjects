import React from "react";
import '../hojas-de-estilo/Blog.css';
export function Blog(props){
    return(
        <>
        <div 
            className="separador">
            <article className="entrada entrada1">
                <div className="entrada__imagen">
                <img src={props.imagen}
                alt="Blog-imagen"/>
                </div>
                <div className="entrada__contenido">
                    <h4 className="no-margin">{props.titulo1}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum praesentium amet laborum, voluptatem quae beatae sint? Repellat, impedit ad soluta amet totam sapiente ducimus itaque est deserunt veniam eum?</p>
                    <a href="entrada.html" className="boton boton--primario">Leer Entrada</a>
                </div>
            </article>
        </div>
                </>
         
    );
}

export default Blog;