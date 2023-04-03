import React from 'react'
import Carousel from './../components/Carousel';

export const Testimonios = () => {
  return (
    <div className='divTestimony'>
    <p className='text-redLetters font-normal text-base  not-italic leading-5'>
    ¡Gracias por confiar en Monarquía perruna!
    </p>
    <p className='font-semibold not-italic text-2xl leading-7  text-blackLetters'>
      Testimonios
    </p>
    <Carousel/>
  </div>
  )
}
