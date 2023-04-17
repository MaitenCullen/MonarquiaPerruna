import React from 'react';
import imgPrincipal from "/img/PreguntasFrecuentesFondo.png"

export const Preguntas = () => {
  return (
    <>
    <section className="preguntasFrecuentes__imagenPrincipal__container">
      <img src={ imgPrincipal } alt="Imagen de perros introduciendo la seeccion de preguntas frecuentes de Monarquia perruna" />
      <div className="preguntasFrecuentes__tituloSeccion__container">
        <h1>Preguntas frecuentes</h1>
      </div>
    </section>
    <section className="preguntasFrecuentes__preguntas__section">
      <div className="preguntasFrecuentes__preguntas__container">
          <div>
            <h3>General</h3>
          </div>
          <div className="preguntasFrecuentes__pregunta__container">
                  <p>¿Dónde puedo ver las novedades en productos para mi mascota?</p>
                  <button>+</button>
          </div>
          <div>
            <h3>Envíos, cambios y devoluciones</h3>
          </div>
          <div>

          </div>
          <div>
            <h3>Pagos</h3>
          </div>
          <div>

          </div>
          <div>
            <h3>Talles</h3>
          </div>
          <div>

          </div>
          <div>
            <h3>
              Cuidado del producto
            </h3>
          </div>
          <div>

          </div>
      </div>
    </section>
    </>
  )
}
