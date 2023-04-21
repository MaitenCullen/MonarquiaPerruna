import React, { useState } from 'react';
import perrito from '/img/perroID.png';
import perrito2 from '/img/dogIDPerro.png';
import '../styles/DogIDStyles.css';
import { getDogID } from '../data/dogIDcar';
import { useEffect } from 'react';
import { CardDogs } from './CardDogs';



export const CaracteriticasDogId = () => {
    
  const [ caracteristica, setCaracteristica] = useState([])

  useEffect (() => {
      getDogID()
      .then((resp) => {
          console.log(resp, "caracteristicas y NFC")
          setCaracteristica(resp);
       })
  },[]);


  return (
    <div className='w-screen flex flex-col'>
        <CardDogs/>
        <div className='flex justify-center items-center flex-col'>
            <h5  className="leading-6 sm:text-2xl text-lg font-normal text-center not-italic font-Lato text-redLetters p-1">¿Qué más necesitamos saber sobre Dog Id?</h5>
            <h4  className="font-semibold font-Lato not-italic text-3xl  text-lg leading-9 text-blackLetters p-1">Características</h4>
        </div>
        <div className=' m-1.5 divCaracteristicas01'>
            <div className='caracteristicasIMG'>
                <img src={perrito}/>
            </div>
            <div className='textCaracteristicas'>
                { caracteristica.map( caracteristica => (
                <div index={caracteristica.id} className='list-none flex items-center w-full p-1'>
                    <img src={caracteristica.icon} className='p-1.5'/><li className='p-1.5 liClass'>{caracteristica.descripcion}</li>
                </div> )) }
             </div>
        </div>
        <div className='flex justify-between flex-col '> 
            <div className='flex justify-around items-center flex-col m-1.5'>
                <h5 className="leading-6 text-xl font-normal not-italic font-Lato text-redLetters p-1">¿Qué usamos?</h5>
                <h4 className="font-semibold font-Lato not-italic sm:text-3xl text-lg leading-9 text-blackLetters p-1">Tecnología NFC</h4>
            </div>
            <div className='flex justify-evenly items-center'>
                <div className='textCaracteristicas'>
                { caracteristica.map( nfc => (
                    nfc.nfc && nfc.iconNFC? ( <div  index={nfc.id} className='list-none flex items-center w-full p-1'>
                    <img src={nfc.iconNFC} className='p-1.5'/><li className='p-1.5 liClass'>{nfc.nfc}</li>
                </div>) : null
                
                ))}
            
                </div>
                <div className='caracteristicasIMG'>
                    <img src={perrito2} />
                </div>
            </div>
        </div>

    </div>
  )
}
