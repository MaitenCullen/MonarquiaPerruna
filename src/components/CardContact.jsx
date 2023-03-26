import React from 'react'
import img3 from '/img/img3.png'


export const CardContact = () => {
  return (
    <div>
      <div>
         <img src={img3}/>
      </div>
      <div>
        <p>
          Si tienes alguna duda o consulta, comunícate con nosotros. Estaremos gustosos de atenderte.
        </p>
        <button className="btn bg-redPrimary btn-xs sm:btn-sm md:btn-md lg:btn-lg buttonClass hover:bg-yellowPrimary border-current hover:border-current">
          Contáctanos
        </button>
      </div>
    </div>
  )
}
