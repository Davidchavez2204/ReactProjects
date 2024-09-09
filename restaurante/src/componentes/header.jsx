import fondovideo from '../video/fondo.mp4';
import fondoazul from '../video/fondoazul.mp4'
import '../stylesheet/header.css';
function Header(){
    return(
        <>
        <header className='header'>
            <div className='overlay'>
                <video autoPlay loop muted className='video'>
                <source src={fondoazul} type='video/mp4'/>
                </video>
            </div> 
            <div className='navegacion'>
                <nav className='navegacion-principal'>
                    <a className='enlace' href="#nosotros">Nosotros</a>
                    <a className='enlace' href="#servisios">Servicios</a>
                    <a className='enlace' href="#carta">Carta</a>
                    <a className='enlace' href="#reserva">Reserva</a>
                </nav>
                <div className='header-texto'>
                    <h1>CEVICHERIA</h1>
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h2>
                </div>
            </div>
        </header>
        </>
        
        
        
    )
}
export default Header;