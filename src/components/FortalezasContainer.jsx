import React from 'react';
import imgPrincipal from "/img/ChicaConPerroAboutUsIndex.svg";
import CardFortaleza from './CardFortaleza';
import iconoEnvios from "/img/IconoEnvios.jpg";
import iconoHQ from "/img/IconoHQ.jpg";
import iconoAtencionPersonalizada from "/img/IconoAtencionPersonalizada.jpg";
import iconoSeguridadEnElProceso from "/img/IconoSeguridadEnElProceso.jpg";

const FortalezasContainer = () => {
    return (
        <>
        <div className="index__aboutUs__grid">
            <div className="index__aboutUsMainImg__container">
                <img className="animate__animated animate__zoomIn" src={imgPrincipal} alt="Una dueña disfruta de jugar tranquila con su perro gracias al DOG ID" />
            </div>

            <div className="index__ProductosDeCalidad__container animate__animated animate__fadeInLeft">
                <CardFortaleza tituloDeCard="PRODUCTOS DE CALIDAD" informacionDeCard="Nuestros productos son elaborados y confeccionados con materiales de alta calidad para los reyes y reinas del hogar." img={ iconoHQ }/>
            </div>

            <div className="index__seguridadEnElProceso__container animate__animated animate__fadeInLeft">
                <CardFortaleza tituloDeCard="SEGURIDAD EN EL PROCESO" informacionDeCard="Te damos la garantía que tu compra estará segura con nosotros. No compartiremos tus datos personales con nadie." img={ iconoSeguridadEnElProceso }/>
            </div>

            <div className="index__AtencionPersonalizada__container animate__animated animate__fadeInRight">
                <CardFortaleza tituloDeCard="ATENCIÓN PERSONALIZADA" informacionDeCard="Puedes escribirnos al Whatsapp o Instagram y estaremos gustosos de atender cualquier duda que tengas." img={ iconoAtencionPersonalizada }/>
            </div>

            <div className="index__envios__container animate__animated animate__fadeInRight">
                <CardFortaleza tituloDeCard="ENVÍOS A TODO EL PAÍS" informacionDeCard="A través del correo enviaremos tu pedido para que llegue lo más pronto posible." img={ iconoEnvios }/>
            </div>
        </div>
        
        </>
    )
}

export default FortalezasContainer