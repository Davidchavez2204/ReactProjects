import './App.css';
import Sidebar from './components/Sidebar';
import Encabezado from './components/Encabezado';
import Blog from './components/Blog';
import blog1 from './img/cafe/blog1.webp';
import blog2 from './img/cafe/blog2.webp';
import blog3 from './img/cafe/blog3.webp';


function App() {
  return (
    
    <div className='App'>
      <Encabezado/>
      <div className='blog contenedor'>
        <div className='contenido'>
          <h3>Nuestro Blog</h3>
              <Blog
                imagen={blog1}
                titulo1='Tipos de Grano de Café'
              />
        </div>
        <div className='sidebar'>
          <h3>Nuestros cursos y talleres</h3>
              <Sidebar
              subtitulo1="4 recetas de cafe sano"
              subtitulo2="3 formas de hacer cafe"
              />
        </div>
        <div className='contenido'>
              <Blog
                imagen={blog2}
                titulo1='Tumbes como lugar de origen del Café'
              />
        </div>
        <div className='sidebar'>
              <Sidebar
              subtitulo1="Curso como preparar cafe pasado"
              subtitulo2="¿De donde viene el café?"
              />
        </div>
        <div className='contenido'>
              <Blog
                imagen={blog3}
                titulo1='Lo perjudicial que puede ser el tomar mucho café'
              />
        </div>
        <div className='sidebar'>
              <Sidebar
              subtitulo1="Cafe pasado VS Cafe en sobre"
              subtitulo2="Beneficios de tomar cafe"
              />
        </div>                 
      </div> 
    </div>
    
  );
}

export default App;
