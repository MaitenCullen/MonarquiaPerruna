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
    <div className='flex flex-col items-center'>
      <div className='flex justify-around sm:w-9/12 w-full'>
        { appData.map( app => (
        <div index={app.id} className='w-2/12 items-center flex flex-col p-2 m-2'>
          <div className='w-16 items-center flex justify-center p-2'>
              <img src={app.icon} />
          </div>
            <div className='flex flex-col items-center justify-evenly p-2 h-full'>
              <div className='m-1.5 h-1/2 flex items-center'>
                <img src={app.img} className=''/>
              </div>
              <div className=' h-1/4 flex'> 
                <p className='sm:text-base text-sm font-Nunito'>{app.descripcion}</p>
              </div>
            </div>
          </div>
        )) }
      </div>
      <div className='flex items-center w-full sm:w-10/12 h-screen'>
        { appData.map( dog => (
              dog.descripcion2 && dog.img2 && dog.num? (
                <div index={dog.id} className='p-2 m-2 flex flex-col items-center h-full justify-evenly perdido p-1'>
                  <div className='w-3/4'>
                      <img src={dog.img2}/>
                  </div>
                  <div className=' flex p-1 m-1.5 h-1/3'>
                      <h4 className='m-1'>{dog.num}</h4>
                      <p className='flex items-start sm:text-base text-sm font-Nunito'>{dog.descripcion2}</p>
                  </div>
                </div>                
              ) : null
            ))  }
      </div>

    </div>
  )
}
