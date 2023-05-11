import React from 'react';
import imgPrincipal from "/img/PreguntasFrecuentesFondo.png"
import PreguntaDesplegable from '../components/PreguntaDesplegable';

export const Preguntas = () => {
  return (
    <>
    <section className="preguntasFrecuentes__imagenPrincipal__container">
      <img src={ imgPrincipal } alt="Imagen de perros introduciendo la seeccion de preguntas frecuentes de Monarquia perruna" />
      <div className="preguntasFrecuentes__tituloSeccion__container">
        <h1 className='text-black'>Preguntas frecuentes</h1>
      </div>
    </section>
    <section className="preguntasFrecuentes__preguntas__section">
      <div className="preguntasFrecuentes__preguntas__container">
          <div>
            <div className="preguntasFrecuentes__titulosDePregunta__container">
              <h3 className='text-black'>General</h3>
            </div>
            <PreguntaDesplegable pregunta="¿Dónde puedo ver las novedades en productos para mi mascota?" respuesta="Síguenos en nuestras redes sociales Facebook e Instagram, donde podrás ver todos los productos que tenemos para tu mascota. También puedes consultar por nuestras novedades en productos a través de Whatsapp o enviándonos un correo."/>
          </div>
          <div>
            <div className="preguntasFrecuentes__titulosDePregunta__container">
              <h3 className='text-black'>Envíos,cambios y devoluciones</h3>
            </div>
            <PreguntaDesplegable pregunta="¿Puedo hacer algún cambio o devolución de mi pedido?" respuesta="Puedes hacer un cambio de talle en un plazo máximo de 7 días de haber recibido el pedido. Recuerda que deberás asumir los costos de devolución y envío; por ello, te recomendamos que revises las medidas de nuestros talles antes de realizar la compra."/>
            <PreguntaDesplegable pregunta="¿Cuál es la cobertura de envío y puntos de encuentro?" respuesta="Hacemos envíos a todo el país."/>
            <PreguntaDesplegable pregunta="¿En cuánto tiempo entregan mi pedido?" respuesta="El tiempo de envío dependerá del lugar en donde te encuentres. Si el pedido ha sido enviado por correo, puedes hacer seguimiento con el código generado."/>
          </div>
          <div>
            <div className="preguntasFrecuentes__titulosDePregunta__container">
              <h3 className='text-black'>Pagos</h3>
            </div>
            <PreguntaDesplegable pregunta="¿Qué métodos de pago aceptan?" respuesta="Todo pago es procesado por Mercado Pago, se aceptan tarjetas de débito, crédito y transferencias bancarias."/>
          </div>
          <div>
            <div className="preguntasFrecuentes__titulosDePregunta__container">
              <h3 className='text-black'>Talles</h3>
            </div>
            <PreguntaDesplegable pregunta="¿Cómo puedo saber el talle de mi perro?" respuesta="Revisa las medidas en la sección de “Ropa”, ahí encontrarás cuál es el talle perfecto para tu mascota. "/>
          </div>
          <div>
            <div className="preguntasFrecuentes__titulosDePregunta__container">
              <h3 className='text-black'>Cuidado del producto</h3>
            </div>
            <PreguntaDesplegable pregunta="¿Qué cuidados debo tener al lavar la ropa de mi perro?" respuesta="El lavado debe ser delicado, recuerda no centrifugar la ropa ni plancharla. "/>
          </div>
      </div>
    </section>
    </>
  )
}
