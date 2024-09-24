import '../stylesheet/inicio.css';
import { MdOutlinePlace } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { Slide } from"react-awesome-reveal";
function Inicio(props){
    return(
        <>
        <header className='header'>
            <div className='fondo-pantalla'>
                <img className='fondo' src={props.imagen1}
                alt="fondo-imagen"/>
            </div>
            <div className='navegacion'>
                <nav className='navegacion-principal'>
                    <a className='enlace' href="#inicio">Inicio</a>
                    <a className='enlace' href="#nosotros">Nosotros</a>
                    <a className='enlace' href="#carta">Cartas</a>
                    <a className='enlace' href="#planta">Planta</a>
                    <a className='enlace' href="#contacto">Contacto</a>
                </nav>
                <div className='imagen'>
                    <img src={props.imagen2}
                        alt="fondo-imagen"/>
                </div>            
            </div>
        </header>
        </>
    )
}
export default Inicio;