import React from 'react';
import salud from '/img/cruz.png';
import ok from '/img/ok.png';
import circulo from '/img/circulo.png'

export const AppDogID = () => {
  return (
    <div className='containerDOGID w-9/12'>
         <div className='divAPP'>
            <div className='APPdogID'>
            <img src={salud} className='imgAPP'/>
              <div className='divAPPInfo '>
                <div className="divTextAPP">
                    <h4 className='sm:text-base text-sm'>HISTORIA MÉDICA</h4>
                    <p >
                    Con solo acercar tu celular al DOG ID podrás ver la historia médica de tu mascota como enfermedades o cuidados especiales.
                    </p>
                </div>
            </div>
            </div>
          </div>
          <div className='divAPP'>
            <div className='APPdogID'>
            <img src={ok} className='imgAPP'/>
              <div className='divAPPInfo '>
                <div className="divTextAPP">
                    <h4 className='sm:text-base text-sm'>FÁCIL DE USAR</h4>
                    <p>
                    Registrar la información en la app Dog Id toma unos minutos. Luego con solo acercar el celular al Dog Id podrás ver toda la información registrada.                    </p>
                </div>
            </div>
            </div>
          </div>
          <div className='divAPP'>
            <div className='APPdogID'>
            <img src={salud} className='imgAPP'/>
              <div className='divAPPInfo '>
                <div className="divTextAPP">
                    <h4 className='sm:text-base text-sm'>FÁCIL ACCESO</h4>
                    <p>
                    Con un celular Android o iOS podrás acceder a toda la información de tu mascota y tus datos de contacto.                    </p>
                </div>
            </div>
            </div>
          </div>
          <div className='divAPP'>
            <div className='APPdogID'>
            <img src={circulo} className='imgAPP'/>
              <div className='divAPPInfo '>
                <div className="divTextAPP">
                    <h4 className='sm:text-base text-sm'>DATOS ACTUALIZABLES</h4>
                    <p>
                    Puedes actualizar o borrar los datos registrados en la app las veces que desees.                     </p>
                </div>
            </div>
            </div>
          </div>
    </div>
  )
}
