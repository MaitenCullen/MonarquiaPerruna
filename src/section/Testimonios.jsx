import React from 'react'
import Carousel from './../components/Carousel';

export const Testimonios = () => {
  return (
    <div className='divTestimony'>
    <p className='text-redLetters font-normal text-base font-Nunito text-xl not-italic leading-5 leading-6 text-center'>
    ¡Gracias por confiar en Monarquía perruna!
    </p>
    <p className='font-semibold not-italic text-2xl leading-7 font-Lato text-blackLetters text-center' id='testimonio'>
      Testimonios
    </p>
    <Carousel/>
  </div>
  )
}
