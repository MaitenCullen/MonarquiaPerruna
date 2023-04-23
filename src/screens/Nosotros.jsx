import React from 'react';
import Lore from '/img/nosotros/loreSimba.png';
import perrito1 from '/img/nosotros/perro0.png';
import perrito2 from '/img/nosotros/perro1.png';

import '../styles/Nosotros.css'; 
export const Nosotros = () => {
  return (
    <div className='sectionNosotros'> 
      <div className='divBanner1 w-full'>
        <h3>Nosotros</h3>
      </div>
        <div  className='flex items-center justify-center flex-col py-9'>
          <div className='text-center'>
            <h5 className='text-redLetters'>Las mascotas están en el corazón de cada producto que elaboramos</h5>
            <h4>Somos Monarquía Perruna</h4>
          </div>
          <div className='divLoreSimba'>
            <div className='divimgLore'>
              <img src={Lore} alt='Imagen Lore y Simon'/>
            </div>
          <div className='w-1/2'>
            <p>
            Somos una empresa fundada por por personas que aman a los animales y se preocupan por la salud, cuidado y bienestar de los amigos más fieles que existen, nuestras mascotas. Nuestro compromiso con la seguridad, comodidad y la moda para las mascotas comenzó durante la pandemia cuando llegó a nuestra casa Simba. Después de buscar por todas partes ropa adecuada para protegerlo del frío invierno, nos dimos cuenta de que no habían muchas opciones que combinaran funcionalidad y estilo. Así fue como nació la idea de crear nuestro propio modelo de chaleco para perros que sea cómodo, abrigador y con estilo. Desde entonces, hemos seguido diseñando productos con amor y pasión, y estamos comprometidos en ayudarte a encontrar el mejor producto para tu mascota. En Monarquía Perruna, amamos a las mascotas tanto como tú. ¡Únete a nuestra comunidad y haz que tu perro luzca más adorable y ase que nunca!
            </p>
          </div>
          </div>
        </div>
        <div className=' h-screen w-full'>
          <div className='divBanner2 h-full'>
            <div className='divTextBanner2'>
            <h5 className='text-redLetters'>Lo que aspiramos a ser</h5>
            <h4 >Nuestra visión</h4>
            <h3>
            Ser una marca confiable y respetada en el mercado de productos para perros, reconocida por ofrecer productos de alta calidad, comodidad y seguridad que mejoren la vida de las mascotas y sus dueños o dueñas.
            </h3>
          </div>
      </div>
        </div>
      
      <div className='flex justify-center flex-col py-9' >
        <div className='text-center'>
          <h5 className='text-redLetters'>¿Quiénes somos? ¿Qué hacemos?</h5>
          <h4>Nuestra misión</h4>
        </div>
        <div className='divCardDogId'>
          <div className='divDogID'>
            <div className="textNosotros">
              <p>Proporcionar productos para mascotas que sean funcionales, cómodos, seguros y con estilo, que mejoren su calidad de vida y la de sus dueños o dueñas.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-greyLight divNosotrosGris pt-14'>
        <div className='text-center'>
          <h5 className='p-2 text-redLetters'>¿Qué nos define?</h5>
          <h4 className='p-2'>Nuestros valores</h4>
        </div>
        <div className='flex items-end justify-center'>
          <img src={perrito1} alt='perrito1'/>
          <div className='divNosotros'>
          <div className='divAPPNos'>
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
          <div className='divAPPNos'>
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
          <div className='divAPPNos'>
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
          <div className='divAPPNos'>
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
