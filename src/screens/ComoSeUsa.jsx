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
    <div className='flex justify-around w-9/12'>
      { appData.map( app => (
       <div index={app.id} className='w-2/12 items-center flex flex-col'>
        <div className='w-16 items-center flex justify-center p-2'>
            <img src={app.icon} />
        </div>
          <div className='flex flex-col items-center justify-center p-2'>
            <div className=' flex items-center justify-center'>
              <img src={app.img} className=''/>
            </div>
            <div className=' items-center flex'> 
              <p className=''>{app.descripcion}</p>
            </div>
          </div>
        </div>
      )) }
    </div>
  )
}
