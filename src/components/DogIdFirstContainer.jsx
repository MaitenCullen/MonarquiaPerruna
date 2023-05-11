import React from 'react'
import DogIdSelector from './DogIdSelector'

const DogIdFirstContainer = ({ bannerDogId }) => {

    function redirectToWapp() {
        window.location = "https://wa.me/5491123041275"
    }

  return (
    <>
    <section>
        <div className="dogId__banner__container">
            <img src={ bannerDogId } alt="Imágen de introducción a la sección de productos Dog ID de la marca Monarquía Perruna " />
            <div className="dogId__bannerCaption__container">
                <div className="dogId__titleList__container">
                    <ul>
                        <li className='text-black'>
                            DOG ID
                        </li>
                        <li className='text-black'>
                            Identificación Digital
                        </li>
                        <li>
                            Tecnología NFC
                        </li>
                    </ul>
                </div>
                <h2 className='text-black'>SEGURIDAD para tu mascota, TRANQUILIDAD para vos</h2>
            </div>
        </div>
    </section>
    <section>
        <div>
            <div className="dogId__selectorTitulo__container">
                <div>
                    <p className='text-black'>Seguridad y protección para los reyes y reinas del hogar</p>
                    <p className='text-black'><strong>Elije tu DOG ID</strong></p>
                </div>
            </div>
        </div>
        <DogIdSelector/>
        <div className="width-full flex justify-center items-center mt-10 mb-10">
        <button onClick={ redirectToWapp } className="btn bg-redPrimary hover:bg-yellowPrimary border-current hover:border-current dogId__btn__comprar">Comprar</button>
        </div>
    </section>

    </>
  )
}

export default DogIdFirstContainer