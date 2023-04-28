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
                    DOG ID es una identificación digital con tecnología NFC que permite que los reyes y reinas del hogar estén seguros en todo momento ya que siempre llevarán toda su información para poder identificarlos, cuidarlos y poder contactarte en caso de que se necesite.                    
                    </p>
                </div>
            </div>
            </div>
          </div>
         
    </div>
  )
}
