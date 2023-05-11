import React, { useState } from 'react';
import '../styles/CardStyles.css'
import banner from '/img/ropa/bannerRopa.png';
import img1 from '/img/ropa/cir01.png';
import img2 from '/img/ropa/cir02.png';
import img3 from '/img/ropa/cir03.png';
import { ChalecosImg } from '../components/ChalecosImg';
import { Polar } from '../components/Polar';
import { Pilotos } from '../components/Pilotos';
import CaracteristicasRopa from './CaracteristicasRopa';
import ProductosTallesContainer from '../components/ProductosTallesContainer';

export const Productos = () => {

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

  function action(id) {
    console.log('boton andando')
    Array.from(document.getElementsByClassName('navLink')).map(item => {
      if (item.id == id){
        item.classList.add('seleccionado')
      } else {
        item.classList.remove('seleccionado')
      }
    })
  }



  const seleccionar = (seleccionado) => {
    setSeleccion(seleccionado)
  }
  const activar = (button, e) => {
    console.log(button, e)
  }
  return (
    <>
    <div>
      <div >
        <img src={banner} alt='Banner principal' className='w-screen'/>
      </div>
      <div className='flex w-full justify-around  p-4 '>
        <div className='flex items-center flex-col cursor-pointer divCirculo  navLink' id='1' onClick={()=> {seleccionar('chalecos'), action(1)}}>
          <img src={img1}/>
          <h4 className='leading-6 text-xl font-normal not-italic p-2.5 font-Nunito text-black' >Chalecos</h4>
        </div>
        <div className='flex items-center flex-col cursor-pointer divCirculo  navLink ' id='2' onClick={()=> {seleccionar('polar'),  action(2)}}>
           <img src={img2}/>
           <h4 className='leading-6 text-xl font-normal not-italic font-Nunito text-black p-2.5'>Polar</h4>
        </div>
        <div className='flex items-center flex-col cursor-pointer divCirculo  navLink ' id='3' onClick={()=> {seleccionar('pilotos'),  action(3)}}>
          <img src={img3} />
          <h4 className='leading-6 text-xl font-normal not-italic font-Nunito p-2.5'>Piloto</h4>
        </div>
      </div>
      <div className='divProductos p-4'>
        <div className='text-center p-10'>
          <h4 className='text-redLetters leading-6 text-xl font-normal not-italic p-2.5 font-Lato'>
          Para que tu consentid@ se sienta abrigado, cómodo y con el mejor estilo
          </h4>
          <h3 className='not-italic font-semibold p-2.5 font-Nunito text-black'>
          Elije el modelo para tu mascota
          </h3>
        </div>
        <div className='w-screen flex justify-center'>
             {renderComponents()}
          </div>
        <div>
        <button className="btn bg-redPrimary hover:bg-yellowPrimary border-current hover:border-current"><a className="buttonClass" href="https://wa.me/5491123041275">Comprar</a> </button>
        </div>
      </div>
    
    </div>
    <CaracteristicasRopa/>
    <ProductosTallesContainer/>
    </>
    
  )
}
