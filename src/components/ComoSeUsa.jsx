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
    <div className=' divUsar'>
      <div className='comoUsar sm:w-9/12 w-full my-5'>
        { appData.map( app => (
        <div index={app.id} className='sm:w-2/12 w-6/12 items-center flex flex-col p-2 '>
          <div className='sm:w-16 w-6/12 items-center flex justify-center p-2'>
              <img src={app.icon} />
          </div>
            <div className='flex flex-col items-center justify-evenly p-2 h-full'>
              <div className='m-1.5 flex items-center w-6/12'>
                <img src={app.img} className=''/>
              </div>
              <div className=' h-1/4 flex  sm:w-full w-10/12'> 
                <p className='sm:text-base text-sm font-Nunito text-center text-black'>{app.descripcion}</p>
              </div>
            </div>
          </div>
        )) }
      </div>
        <div className='flex flex-col items-center my-5'>
          <div className='flex items-center flex-col my-5'>
              <h5 className="leading-6 sm:text-2xl text-lg font-normal text-center not-italic font-Lato text-redLetters p-1">En caso de que tu consentid@ se pierda</h5>
             <h4 className="font-semibold font-Lato not-italic text-3xl  text-lg leading-9 text-blackLetters p-1">¿Cómo usar el DOG ID?</h4>
          </div>
        <div className='divPerdido sm:w-10/12  w-full'>
        { appData.map( dog => (
              dog.descripcion2 && dog.img2 && dog.num? (
                <div index={dog.id} className='p-2 flex flex-col items-center h-full justify-evenly perdido p-1'>
                  <div className='sm:w-3/4 w-4/12'>
                      <img src={dog.img2}/>
                  </div>
                  <div className=' flex p-1 m-1.5 h-1/3 sm:w-full w-10/12'>
                      <h4 className='m-1 sm:text-lg text-base text-center'>{dog.num}</h4>
                      <p className='flex sm:items-start items-center font-Nunito text-center sm:text-base text-sm text-black'>{dog.descripcion2}</p>
                  </div>
                </div>                
              ) : null
            ))  }
      </div>

      </div>

    </div>
  )
}
