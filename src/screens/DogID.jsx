
import { useState } from 'react'
import { AppDogID } from '../components/AppDogID'
import '../styles/DogIdStyles.css'
import { CaracteriticasDogId } from './../components/CaracteriticasDogId';
import { ComoSeUsa } from './../components/ComoSeUsa';

export const DogID = () => {

const [opcion, setOpcion] = useState('queEs?');

  const renderComponents = () => {
    switch (opcion) {
        case "queEs?":
            return <CaracteriticasDogId/>;
        case "Usar":
            return  <ComoSeUsa/> ;
        case "App":
            return <AppDogID/> ;
    }
  }

const seleccionar = (nombre) => {
  setOpcion(nombre)
}
  return (
    <>
     <div className=' '>
      <ul className='navBarDogId'>
        <li onClick={()=> seleccionar("queEs?")}>que es?</li>
        <li onClick={()=>seleccionar('Usar')}>Como se usa?</li>
        <li onClick={()=> seleccionar('App')}>App Dog Id</li>
      </ul>
      </div>
          <div className='w-screen flex justify-center'>
             {renderComponents()}
          </div>
    </>
   )
}
