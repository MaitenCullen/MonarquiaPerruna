import React from 'react'

const CaracteristicaItem = ({ img , numeroDeCaracteristica , infoCaracteristica }) => {
  return (
    <>
    <div className="caracteristica__card__container">
        <div>
            <img className="caracteristica__item__img" src={ img } alt="Imagen que muestra las excelentes cualidades de la ropa de Monarquia Perruna" />
        </div>
        <div className="caracteristica__cardCaption__container">
            <p><strong>{ numeroDeCaracteristica }</strong></p>
            <p>{ infoCaracteristica }</p>
        </div>
    </div>
    </>
  )
}

export default CaracteristicaItem