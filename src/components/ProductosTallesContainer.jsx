import React from 'react'
import modeloDeTalles from "/img/imagenTalles.png"
import tablaDeTallesChaleco from "/img/tablaDeTalles.png"
import tablaDeTallesPolar from "/img/tablaTallesPolar.png"
import tablaDeTallesPiloto from "/img/tablaTallesPilotos.png"

const ProductosTallesContainer = () => {
  return (
    <>
    <section className="talles__section__container">
        <div>
            <div>
                <div className="chalecos__tallesTitulo__container">
                    <div>
                        <p>¿Cómo medir a tu mascota?</p>
                        <p><strong>Nuestros talles</strong></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="talles__imagen__container">
            <img src={ modeloDeTalles } alt="Perro modelo de Monarquia Perruna desfilando un chaleco. En la imagen se muestran indicaciones sobre los talles." />
        </div>
        <div className="talles__tabla__generalContainer">
            <div className="talles__tabla__container">
                <div className="talles__tablaImg__container mt-10">
                    <h3>Chalecos</h3>
                    <img src={ tablaDeTallesChaleco } alt="Tabla de talles de Monarquia Perruna" />
                </div>
                <div className="talles__tablaImg__container mt-10">
                    <h3>Polar</h3>
                    <img src={ tablaDeTallesPolar } alt="Tabla de talles de Monarquia Perruna" />
                </div>
                <div className="talles__tablaImg__container mt-10">
                    <h3>Piloto</h3>
                    <img src={ tablaDeTallesPiloto } alt="Tabla de talles de Monarquia Perruna" />
                </div>
                <p className="talles__indicaciones__texto">** Estas medidas son aproximadas y puede haber un mínimo de variación.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductosTallesContainer