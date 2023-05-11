import React from 'react';
import DogIdImg from "/img/Home-ProductosDogId.png";
import RopaImg from "/img/Home-ProductosRopa.png";
import PerroIzquierdo from "/img/goldenRetrieverSinCorona.png";
import PerroDerecho from "/img/LabradorSinCorona.png";
import { Link } from 'react-router-dom';

const ProductosIndex = () => {
    return (
        <>
        <div className="index__productos__container">
            <div>
                <p>Cada mascota es única y especial</p>
                <p className='text-black'><strong>Nuestros Productos</strong></p>
            </div>
        </div>
        <div className='index__productosCards__container'>
            <div className="index__productosCards__DOGID-container">
                <div className="index__DOGID__container">
                    <div>
                        <img className="index__productosImagen__perroIzq" src={ PerroIzquierdo } alt="Perro Golden Retriever posado sobre la imágen" />
                        <img className="index__imagenProductos" src={ DogIdImg } alt="El mejor id para que tu perro pueda ser recononcido en cualquier lugar a traves de nuestra aplicación. Encontra nuestros modelos de Dog ID aa través de la imágen." />
                        <div className="index__DogIdCaption__container">
                            <h4>DOG ID</h4>
                            <Link to="/DogID">Ver más</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="index__productosCards__ROPA-container">
                <div className="index__Ropa__container">
                    <div>
                        <img className="index__productosImagen__perroDer" src={ PerroDerecho } alt="Perro labrador posado sobre la imagen" />
                        <img className="index__imagenProductos" src={ RopaImg } alt="La mejor vestimenta para tu perro, encontra nuestros productos de ropa a traves de esta imágen." />
                        <div className="index__RopaCaption__container">
                            <h4>ROPA</h4>
                            <Link to="/Productos">Ver más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductosIndex