import './App.css';
import Inicio from './componentes/inicio';
import logo from './img/logo.png'
import fondo from './img/fondo.jpg'

function App() {
  return (
    <>
      <Inicio
      imagen1={fondo}
      imagen2={logo}
      />
    </>
  )
}

export default App
