import React from 'react'

const CardContacto = ({img , tituloDeCard , informacionDeCard }) => {
return (
    <>
        <div className="contacto__card__container">
            <div>
                <img className="contacto__icono__card" src={ img } alt="Icono de contacto" />
            </div>
            <div>
                <h3 className="tituloCard__contacto">{ tituloDeCard }</h3>
            </div>
            <div className="textoCard__contacto__container">
                <p className="textoCard__contacto">{ informacionDeCard }</p>
            </div>
        </div>
    </>
)
}

export default CardContacto