import React from 'react'
import logo from '/img/logo.png'
import '../styles.css'

export const Footer = () => {
  return (
    <div className='bg-redPrimary w-screen footerClass'>
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
        <div>
          <p>
          Contáctanos
          </p>
          <a>
          Correo: monarquiaperruna@gmail.com
          </a>
          <p>
          Teléfono: 9976557890 
          </p>
        </div>
        <div>
          <p>
          Síguenos en
          </p>
          <i>

          </i>
        </div>
    </div>
  )
}
