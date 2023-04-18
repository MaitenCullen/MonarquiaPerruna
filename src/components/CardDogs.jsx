import React from 'react';
import perritos from '/img/perritos.png';
import '../styles/CardStyles.css';

export const CardDogs = () => {
  return (
    <div>
           <div className='containerDOGID m-16 p-6'>
            <div className='divCardDogId'>
            <img src={perritos} className='imgDOGID'/>
              <div className='divDogID '>
                <div className="divTextDogID">
                    <p>
                    DOG ID es un identificador digital con tecnología NFC que permite mantener a tu mascota más segura en todo momento. Con DOG ID, tu mascota siempre llevará toda su información para identificarla, cuidarla y poder contactarte en caso que se necesite.
                    </p>
                </div>
            </div>
            </div>
          </div>
         
    </div>
  )
}
