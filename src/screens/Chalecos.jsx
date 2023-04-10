import React, { useState } from 'react';
import '../styles/CardStyles.css'
import banner from '/img/ropa/bannerRopa.png';
import img1 from '/img/ropa/cir01.png';
import img2 from '/img/ropa/cir02.png';
import img3 from '/img/ropa/cir03.png';
import { ChalecosImg } from '../components/ChalecosImg';
import { Polar } from '../components/Polar';
import { Pilotos } from '../components/Pilotos';

export const Chalecos = () => {

  const [seleccion, setSeleccion] = useState('chalecos');

  const renderComponents = () => {
    switch (seleccion) {
      case "chalecos":
          return <ChalecosImg/>;
      case "polar":
          return  <Polar/> ;
      case "pilotos":
          return <Pilotos/> ;
  }
  }

  const seleccionar = (seleccionado) => {
    setSeleccion(seleccionado)
  }
  return (
    <div>
      <div >
        <img src={banner} alt='Banner principal' className='w-screen'/>
      </div>
      <div className='flex w-full justify-around '>
        <div className='flex items-center flex-col cursor-pointer' onClick={()=> seleccionar('chalecos')}>
          <img src={img1}/>
          <h4>Chalecos</h4>
        </div>
        <div className='flex items-center flex-col cursor-pointer' onClick={()=> seleccionar('polar')}>
           <img src={img2}/>
           <h4>Polar</h4>
        </div>
        <div className='flex items-center flex-col cursor-pointer' onClick={()=> seleccionar('pilotos')}>
          <img src={img3} />
          <h4 >Piloto</h4>
        </div>
      </div>
      <div className='divProductos'>
        <div className='text-center'>
          <h4 className='text-redLetters '>
          Para que tu consentid@ se sienta abrigado, cómodo y con el mejor estilo
          </h4>
          <h3>
          Elije el modelo para tu mascota
          </h3>
        </div>
        <div className='w-screen flex justify-center'>
             {renderComponents()}
          </div>
        <div>
        <button className="btn bg-redPrimary buttonClass hover:bg-yellowPrimary border-current hover:border-current">Comprar</button>
        </div>
      </div>
    
    </div>
  )
}
