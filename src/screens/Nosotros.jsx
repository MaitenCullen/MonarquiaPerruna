import React from 'react';
import Lore from '/img/nosotros/Lore.png';
import perrito1 from '/img/nosotros/perro0.png';
import perrito2 from '/img/nosotros/perro1.png';
import '../styles/Nosotros.css'
export const Nosotros = () => {
  return (
    <div>
      <div>
        Banner1
      </div>
      <div className='flex justify-center'>
        <div  className='flex items-center w-10/12 justify-center'>
          <img src={Lore} alt='Imagen Lore y Simon'/>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat perspiciatis quis expedita repellendus sunt, nam dolor repellat laboriosam odit explicabo cupiditate voluptate eum delectus, a impedit voluptas rem veniam.
            </p>
          </div>
        </div>
      </div>
      <div>
        Banner2
      </div>
      <div className='flex justify-center flex-col' >
        <div className='text-center'>
          <h5>¿Quiénes somos? ¿Qué hacemos?</h5>
          <h4>Nuestra misión</h4>
        </div>
        <div className='divCardDogId'>
          <div className='divDogID'>
            <div className="divTextDogID">
              <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptatibus adipisci cupiditate totam nostrum quidem modi beatae porro impedit possimus quisquam, incidunt molestias culpa hic cumque! Atque at provident ab!</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-center'>
          <h5>¿Qué nos define?</h5>
          <h4>Nuestros valores</h4>
        </div>
        <div className='flex'>
          <img src={perrito1} alt='perrito1'/>
          <div className='divNosotros'>
          <div className='divAPP'>
            <div  className='APPdogID'>
              <div className='divAPPInfo '>
                <div className="divTextAPP">
                  <h4>COMPROMISO</h4>
                  <p>
                  Trabajamos para mejorar en lo que hacemos, cuando las cosas se ponen difíciles, perseveramos y encontramos soluciones en equipo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='divAPP'>
            <div  className='APPdogID'>
              <div className='divAPPInfo '>
                <div className="divTextAPP">
                  <h4>INNOVACIÓN</h4>
                  <p>
                  Creemos en ampliar nuestro límites, pensar en grande y en mejorar nuestras habilidades para hacer productos que sean más eficientes y funcionales. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='divAPP'>
            <div  className='APPdogID'>
              <div className='divAPPInfo '>
                <div className="divTextAPP">
                  <h4>ALEGRÍA</h4>
                  <p>
                  La alegría está en el corazón de todo lo que hacemos, creamos experiencias alegres para nuestras mascotas y nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='divAPP'>
            <div  className='APPdogID'>
              <div className='divAPPInfo '>
                <div className="divTextAPP">
                  <h4>CALIDEZ</h4>
                  <p>
                  Es el afecto, la cordialidad y la amabilidad en el trato con nuestros clientes. Es el sello de la atención que nos gusta recibir y brindar al otro. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <img src={perrito2} alt='perrito2'/>
        </div>
      </div>
    </div>
  )
}
