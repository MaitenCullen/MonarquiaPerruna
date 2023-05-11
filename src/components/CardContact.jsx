import React from 'react'
import img3 from '/img/img3.png'


export const CardContact = () => {
  return (
    <div className='divCardContact'>
      <div className='divImgContact'>
         <img src={img3}/>
      </div>
      <div className='divTextCotact'>
        <p className='text-black'>
          Si tienes alguna duda o consulta, comunícate con nosotros. Estaremos gustosos de atenderte.
        </p>
        <button className="btn bg-redPrimary buttonClass hover:bg-yellowPrimary border-current hover:border-current">
          Contáctanos
        </button>

      </div>
    </div>
  )
}
