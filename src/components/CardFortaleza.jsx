import React from 'react'

const CardFortaleza = ( { img , tituloDeCard , informacionDeCard } ) => {
  return (
    <>
      <div className="index__cardFortaleza__container">
        <div>
          <img className="icono__fortaleza" src={ img } alt="Fortaleza que destaca a la empresa Monarquia Perruna" />
        </div>
        <div>
            <h3 className="tituloCard__fortaleza">{ tituloDeCard }</h3>
        </div>
        <div className="textoCard__fortaleza__container">
            <p className="textoCard__fortaleza">{ informacionDeCard }</p>
        </div>
      </div>
    </>
    
  )
}

export default CardFortaleza