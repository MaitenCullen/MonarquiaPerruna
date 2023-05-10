import React from 'react'
import imgPrincipal from "/img/Contactanos.png";
import iconoMail from "/img/IconoMail.jpg";
import iconoWhatsApp from "/img/iconoWhatsApp.jpg";
import iconoMercadoShop from "/img/IconoMercadoShop.jpg"
import CardFortaleza from '../components/CardFortaleza';
import '../styles.css';
import '../styles/CardStyles.css';
import '../styles/HomeStyles.css'
import CardContacto from '../components/CardContacto';

const Contacto = () => {
  return (
    <>
    <section className="contacto__banner__containerGeneral">
        <div className="contacto__banner__container">
            <img className="contacto__banner__img" src={ imgPrincipal } alt="" />
            <div className="contacto__titulo__container">
                <h1>
                    Contáctanos
                </h1>
            </div>
        </div>
    </section>
    <section className="contacto__cards__sectionContainer">
        <div className="contacto__cards__container">
            <CardContacto img={ iconoMail } tituloDeCard="Correo" informacionDeCard="monarquia.perruna@gmail.com Déjanos un correo y te responderemos lo más pronto posible." />
            <CardContacto img={ iconoWhatsApp } tituloDeCard="Whatsapp" informacionDeCard="+54 911 2304-1275 Si tienes alguna consulta, escríbenos y te responderemos a la brevedad posible." />
            <CardContacto img={ iconoMercadoShop } tituloDeCard="Mercado Shop" informacionDeCard="Adquiere nuestros productos y dale a tu mascota la seguridad y comodidad que necesita."/>
        </div>
    </section>
    </>
)
}

export default Contacto