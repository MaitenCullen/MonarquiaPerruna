import React from 'react'
import DogIdSelector from './DogIdSelector'

const DogIdFirstContainer = ({ bannerDogId }) => {
  return (
    <>
    <section>
        <div className="dogId__banner__container">
            <img src={ bannerDogId } alt="Imágen de introducción a la sección de productos Dog ID de la marca Monarquía Perruna " />
            <div className="dogId__bannerCaption__container">
                <h1>DOG ID</h1>
                <h2>SEGURIDAD para tu mascota, TRANQUILIDAD para vos</h2>
            </div>
        </div>
    </section>
    <section>
        <div>
            <div className="index__sobreNosotros__container">
                <div>
                    <p>Seguridad y protección para los reyes y reinas del hogar</p>
                    <p><strong>Elije tu DOG ID</strong></p>
                </div>
            </div>
        </div>
        <DogIdSelector/>
        <div className="width-full flex justify-center items-center mt-10 mb-10">
        <button className="btn bg-redPrimary w-1/5 hover:bg-yellowPrimary border-current hover:border-current">Comprar</button>
        </div>
    </section>

    </>
  )
}

export default DogIdFirstContainer