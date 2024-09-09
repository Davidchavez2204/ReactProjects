import React from 'react';
import './App.css';
function App() {
  return (
    <article>
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

      <div className="contenedor contenido-principal">
        <main className="blog">
          <h3>Nuestro Blog</h3>
          <div className="separador1">
            <article className="entrada entrada1">
              <div className="entrada__imagen">
                <picture>
                  <source loading="lazy" srcSet="/img/cafe/blog1.webp" type="image/webp" />
                  <img loading="lazy" src="/img/cafe/blog1.jpg" alt="imagen blog" />
                </picture>
              </div>
              <div className="entrada__contenido">
                <h4 className="no-margin">Tipos de Grano de Café</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum praesentium amet laborum, voluptatem quae beatae sint? Repellat, impedit ad soluta amet totam sapiente ducimus itaque est deserunt veniam eum?</p>
                <a href="entrada.html" className="boton boton--primario">Leer Entrada</a>
              </div>
            </article>
          </div>
          <aside className="sidebar1">
            <h3>Nuestros cursos y talleres</h3>
            <ul className="cursos no-padding">
              <li className="widget-curso">
                <h4 className="no-margin">Técnicas de extracción de café</h4>
                <p className="widget-curso__label">Precio: <span className="widget-curso__infor">Gratis</span></p>
                <p className="widget-curso__label">Cupo: <span className="widget-curso__infor">20</span></p>
                <a href="/entrada.html" className="boton boton--secundario">Más información sobre nuestros cursos</a>
              </li>
              <li className="widget-curso">
                <h4 className="no-margin">4 recetas de café para principiantes</h4>
                <p className="widget-curso__label">Precio: <span className="widget-curso__infor">Gratis</span></p>
                <p className="widget-curso__label">Cupo: <span className="widget-curso__infor">20</span></p>
                <a href="entrada.html" className="boton boton--secundario">Más información sobre nuestros cursos</a>
              </li>
            </ul>
          </aside>
          <div className="separador">
            <article className="entrada">
              <div className="entrada__imagen">
                <picture>
                  <source loading="lazy" srcSet="/img/cafe/blog2.webp" type="image/webp" />
                  <img loading="lazy" src="/img/cafe/blog2.jpg" alt="imagen blog" />
                </picture>
              </div>
              <div className="entrada__contenido">
                <h4 className="no-margin">3 deliciosas recetas de café</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum praesentium amet laborum, voluptatem quae beatae sint? Repellat, impedit ad soluta amet totam sapiente ducimus itaque est deserunt veniam eum?</p>
                <a href="entrada.html" className="boton boton--primario">Leer Entrada</a>
              </div>
            </article>
          </div>
          <aside className="sidebar">
            <ul className="cursos no-padding">
              <li className="widget-curso">
                <h4 className="no-margin">Técnicas de extracción de café</h4>
                <p className="widget-curso__label">Precio: <span className="widget-curso__infor">Gratis</span></p>
                <p className="widget-curso__label">Cupo: <span className="widget-curso__infor">20</span></p>
                <a href="/entrada.html" className="boton boton--secundario">Más información sobre nuestros cursos</a>
              </li>
              <li className="widget-curso">
                <h4 className="no-margin">4 recetas de café para principiantes</h4>
                <p className="widget-curso__label">Precio: <span className="widget-curso__infor">Gratis</span></p>
                <p className="widget-curso__label">Cupo: <span className="widget-curso__infor">20</span></p>
                <a href="entrada.html" className="boton boton--secundario">Más información sobre nuestros cursos</a>
              </li>
            </ul>
          </aside>
          <div className="separador">
            <article className="entrada">
              <div className="entrada__imagen">
                <picture>
                  <source loading="lazy" srcSet="/img/cafe/blog3.webp" type="image/webp" />
                  <img loading="lazy" src="/img/cafe/blog3.jpg" alt="imagen blog" />
                </picture>
              </div>
              <div className="entrada__contenido">
                <h4 className="no-margin">Beneficios del Café</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum praesentium amet laborum, voluptatem quae beatae sint? Repellat, impedit ad soluta amet totam sapiente ducimus itaque est deserunt veniam eum?</p>
                <a href="/entrada.html" className="boton boton--primario">Leer Entrada</a>
              </div>
            </article>
          </div>
          <aside className="sidebar">
            <ul className="cursos no-padding">
              <li className="widget-curso">
                <h4 className="no-margin">Técnicas de extracción de café</h4>
                <p className="widget-curso__label">Precio: <span className="widget-curso__infor">Gratis</span></p>
                <p className="widget-curso__label">Cupo: <span className="widget-curso__infor">20</span></p>
                <a href="/entrada.html" className="boton boton--secundario">Más información sobre nuestros cursos</a>
              </li>
              <li className="widget-curso">
                <h4 className="no-margin">4 recetas de café para principiantes</h4>
                <p className="widget-curso__label">Precio: <span className="widget-curso__infor">Gratis</span></p>
                <p className="widget-curso__label">Cupo: <span className="widget-curso__infor">20</span></p>
                <a href="entrada.html" className="boton boton--secundario">Más información sobre nuestros cursos</a>
              </li>
            </ul>
          </aside>
        </main>
      </div>

      <footer className="footer">
        <div className="contenedor">
          <div className="barra-footer">
            <a href="/index.html" className="logo-footer no-margin centrar-texto">
              <h1 className="footer__nombre no-margin">Blog<span className="footer__bold">DeCafé</span></h1>
            </a>
            <nav className="navegacion-footer">
              <a href="nosotros.html" className="navegacion-footer__enlace">Nosotros</a>
              <a href="cursos.html" className="navegacion-footer__enlace">Cursos</a>
              <a href="contacto.html" className="navegacion-footer__enlace">Contacto</a>
            </nav>
          </div>
          <p className="footer__derechos">Andres's Cafe - Todos los derechos reservados 2024.</p>
        </div>
      </footer>

      <script src="/js/modernizr.js"></script>
      <script src="/js/index.js"></script>
    </article>
  );
}

export default App;
