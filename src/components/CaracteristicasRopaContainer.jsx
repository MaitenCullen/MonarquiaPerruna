import React from 'react'
import CaracteristicaItem from './CaracteristicaItem'
import imgCaracteristica1 from "/img/imgCaracteristica1.png"
import imgCaracteristica2 from "/img/imgCaracteristica2.png"
import imgCaracteristica3 from "/img/imgCaracteristica3.png"
import imgCaracteristica4 from "/img/imgCaracteristica4.png"

const CaracteristicasRopaContainer = () => {
  return (
    <>
    <section>
        <div>
            <div>
                <div className="chalecos__caracteristicasTitulo__container">
                    <div>
                        <p className='text-black'>¿Qué más necesitamos saber sobre los chalecos?</p>
                        <p className='text-black'><strong>Características</strong></p>
                    </div>
                </div>
            </div>
            <div className="caracteristicasRopa__items__container">
                <CaracteristicaItem img={ imgCaracteristica1 } numeroDeCaracteristica="1" infoCaracteristica="Cinta reflectiva para visualización" />
                <CaracteristicaItem img={ imgCaracteristica2 } numeroDeCaracteristica="2" infoCaracteristica="Ojal para pasaje de correa o pretal"/>
                <CaracteristicaItem img={ imgCaracteristica3 } numeroDeCaracteristica="3" infoCaracteristica="Broches a presión"/>
                <CaracteristicaItem img={ imgCaracteristica4 } numeroDeCaracteristica="4" infoCaracteristica="Bolsillos laterales para portar bolsitas"/>
            </div>
        </div>
    </section>
    </>
  )
}

export default CaracteristicasRopaContainer