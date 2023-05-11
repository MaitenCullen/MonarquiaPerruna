import React from 'react'
import { CardContact } from '../components/CardContact'
import img3 from '/img/img3.png'

export const Contact = () => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='divCardContacto'>
        <div className='imgDivContacto'>
           <img src={img3}/>
        </div>
        <div className='divPContacto'>
          <p className='font-Nunito text-black'>Si tienes alguna duda o consulta, comunícate con nosotros. Estaremos gustosos de atenderte.</p>
          <button className=" font-Lato btn bg-redPrimary buttonClass hover:bg-yellowPrimary border-current hover:border-current" ><a className='font-Lato sm:text-lg text-base' href='https://wa.me/5491123041275'>Contáctanos</a></button>
        </div>
      </div>
    </div>
  )
}
