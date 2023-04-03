import React from 'react';
import logo from '/img/logo2.png';
import shop from '/img/shopIcon.png';
import wApp from '/img/wIcon.png';
import mail from '/img/mailIcon.png';
import facebook from '/img/fIcon.png';
import instagram from '/img/iicon.png';

import '../styles.css'

export const Footer = () => {
  return (
    <div className='bg-darkPrimary w-screen footerClass'>
        <div>
        <img src={logo} alt="" />
        </div>
        <div> 
          <p>
          Atención al cliente
          </p>
            <a>
            Preguntas frecuentes
            </a>
        </div>
        <div className='flex flex-col'>
          <p>
          Contáctanos
          </p>
            <a href='mailto:monarquiaperruna@gmail.com'>
            <img  src={mail}/>Correo: monarquiaperruna@gmail.com
            </a>
            <a href='https://wa.me/5491123041275'>
            <img  src={wApp}/>Teléfono: 1123041275 
            </a>
            <a href='https://monarquiaperruna.mercadoshops.com.ar/' target='_blank'>
              <img  src={shop}/> Mercado Shop - Monarquía Perruna
            </a>
        </div>
        <div>
          <p>
          Síguenos en
          </p>
          <div className='flex'>
            <a><img  src={facebook}/></a>
            <a><img  src={instagram}/></a>
          </div>
        </div>
    </div>
  )
}
