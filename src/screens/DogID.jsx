
import { useState } from 'react'
import { AppDogID } from '../components/AppDogID'
import '../styles/DogIDStyles.css'
import { CaracteriticasDogId } from './../components/CaracteriticasDogId';
import { ComoSeUsa } from './../components/ComoSeUsa';
import DogIdFirstContainer from '../components/DogIdFirstContainer';
import imgPrincipal from "/img/DogId-Banner.png"

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
 function activado(id) {
  Array.from(document.getElementsByClassName('link')).map(item => {
    if (item.id == id){
      item.classList.add("bordeRojo")
    } else {
      item.classList.remove("bordeRojo")
    }
  })
 }


const seleccionar = (nombre) => {
  setOpcion(nombre)
}
  return (
    <>
    <DogIdFirstContainer bannerDogId={ imgPrincipal }/>
     <div className='divNavBarID'>
      <div className='borderBottom'>
        <ul className='navBarDogId'>
          <li className='link' id='1' onClick={()=> {seleccionar("queEs?"), activado(1)}}>Qué es?</li>
          <li className='link' id='2' onClick={()=>{seleccionar('Usar'), activado(2)}}>Cómo se usa?</li>
          <li className='link' id='3' onClick={()=> {seleccionar('App'), activado(3)}}>App Dog Id</li>
        </ul>
      </div>
      </div>
          <div className=' flex justify-center items-center w-screen'>
             {renderComponents()}
          </div>
    </>
   )
}
