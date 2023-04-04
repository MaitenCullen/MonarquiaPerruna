import React from 'react';
import perrito from '/img/perroID.png';
import '../styles/DogIDStyles.css';


export const CaracteriticasDogId = () => {
  return (
    <div className='w-screen flex flex-col'>
        <div className='flex justify-center items-center flex-col'>
            <h5>¿Qué más necesitamos saber sobre Dog Id?</h5>
            <h4>Características</h4>
        </div>
        <div className='flex justify-around items-center'>
            <div className='caracteristicasIMG'>
                <img src={perrito}/>
            </div>
            <div className='textCaracteristicas'>
                <ol>
                    <li>Con solo acercar tu celular al DOG ID puedes acceder a la información de tu mascota.</li>
                    <li>No requiere Internet ni datos móviles.</li>
                    <li>Fácil de colocar y utilizar.</li>
                    <li>Resistente al agua y a la imtemperie.</li>
                    <li>Liviano y totalmente inofensivo para tu mascota</li>
                    <li>No tiene GPS.</li>
                </ol>
            </div>
        </div>
    
    </div>
  )
}
