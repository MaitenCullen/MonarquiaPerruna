import React, { useEffect, useState } from 'react'
import { getAppDOGID } from '../data/appDOGID';

export const ComoSeUsa = () => {

const [ appData, setAppData] = useState([])

  useEffect (() => {
      getAppDOGID()
      .then((resp) => {
          console.log(resp, "data")
          setAppData(resp);
       })
  },[]);

  return (
    <div>
      <h5 className="leading-6 sm:text-2xl text-lg font-normal text-center not-italic font-Lato text-redLetters p-1">En caso de que tu consentid@ se pierda</h5>
      <h4 className="font-semibold font-Lato not-italic text-3xl  text-lg leading-9 text-blackLetters p-1">¿Cómo usar el DOG ID?</h4>
      <div className='flex justify-around w-9/12'>
          { appData.map( app => (
          <div index={app.id} className='w-2/12 items-center flex flex-col'>
            <div className='w-16 items-center flex justify-center p-2'>
                <img src={app.icon} />
            </div>
              <div className='flex flex-col items-center justify-center p-2'>
                <div className=' flex items-center justify-center'>
                  <img src={app.img} className='laimagen'/>
                </div>
                <div className=' items-center flex'> 
                  <p className='text-black'>{app.descripcion}</p>
                </div>
              </div>
            </div>
          )) }
      </div>
    </div>
  
  )
}
